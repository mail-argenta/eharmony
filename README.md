# eHarmony Login Automation

A minimal Node.js application that automates eHarmony login using Puppeteer.

## Features

- Serves the original eHarmony login page
- Captures email and password from the form
- Uses Puppeteer to automate login on the real eHarmony website
- Provides feedback on login success/failure

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

3. Open your browser and go to:
```
http://localhost:3000
```

## How it works

1. The HTML form is served from the Node.js server
2. When you enter email/password and click "Log in with email":
   - The form data is sent to `/api/login` endpoint
   - The server launches Puppeteer
   - Puppeteer navigates to the real eHarmony login page
   - It fills in the email and password you provided
   - It clicks the login button
   - The server reports back whether login was successful

## API Endpoints

- `GET /` - Serves the login page
- `POST /api/login` - Handles login automation
- `GET /api/health` - Health check

## Configuration

- The server runs on port 3000 by default
- Puppeteer runs in non-headless mode (you can see the browser)
- Browser stays open for 5 seconds after login attempt

## Notes

- Make sure you have valid eHarmony credentials for testing
- The application respects eHarmony's terms of service
- Use responsibly and only for legitimate purposes
