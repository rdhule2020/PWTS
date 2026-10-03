import {test, expect} from '@playwright/test'

test('Logintest' , async({page})=>{
    await page.goto('https://practicetestautomation.com/practice-test-login/');

    //validate by page title
    await expect(page).toHaveTitle('Test Login | Practice Test Automation');
    await page.getByLabel('username').fill('student');
    await page.getByRole('textbox',{name:'password'}).fill('Password123');
    await page.getByRole('button',{name:'Submit'}).click();
    
    //Validate succesfull login
    await expect(page).toHaveTitle('Logged In Successfully | Practice Test Automation1');
    await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');

    //Log out Step validation
    await page.getByRole('link', {name:'Log out'}).click();
    await expect(page).toHaveURL('https://practicetestautomation.com/practice-test-login/');
    
    await page.waitForTimeout(5000);
})