const puppeteer = require('puppeteer');

async function loginToEharmony() {
    const browser = await puppeteer.launch({ 
        headless: false, // Set to true if you want to run in background
        defaultViewport: null,
        args: ['--start-maximized']
    });
    
    try {
        const page = await browser.newPage();
        
        // Navigate to eharmony login page
        console.log('Navigating to eharmony login page...');
        await page.goto('https://www.eharmony.com/login/', { 
            waitUntil: 'networkidle2',
            timeout: 30000 
        });
        
        // Wait for the login form to load
        await page.waitForSelector('input[type="email"], input[name="email"], #email', { timeout: 10000 });
        
        // Fill in email
        console.log('Filling in email...');
        await page.type('input[type="email"], input[name="email"], #email', 'twoeyesee09@hotmail.com');
        
        // Fill in password
        console.log('Filling in password...');
        await page.type('input[type="password"], input[name="password"], #password', '@America123');
        
        // Click login button
        console.log('Clicking login button...');
        await page.click('button[type="submit"], input[type="submit"], .login-button, #login-button');
        
        // Wait for navigation after login
        console.log('Waiting for login to complete...');
        await page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 30000 });
        
        console.log('Login successful! You should now be logged into eharmony.');
        
        // Keep the browser open for a few seconds to see the result
        await page.waitForTimeout(5000);
        
    } catch (error) {
        console.error('Error during login process:', error);
    } finally {
        // Uncomment the line below if you want to close the browser automatically
        // await browser.close();
    }
}

// Run the function
loginToEharmony().catch(console.error);
