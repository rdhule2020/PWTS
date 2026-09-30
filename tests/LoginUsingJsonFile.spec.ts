import {test, expect} from '@playwright/test'
import loginData from '../testData/loginData.json';

test('Logintest' , async({page})=>{
    await page.goto('https://practicetestautomation.com/practice-test-login/');

    //validate by page title
    await expect(page).toHaveTitle('Test Login | Practice Test Automation');
    await page.getByLabel('username').fill(loginData.username);
    await page.getByRole('textbox',{name:'password'}).fill(loginData.password);
    await page.getByRole('button',{name:'Submit'}).click();
    await page.waitForLoadState('domcontentloaded');
    await page.getByRole('link', {name:'Log out'}).click();
    await page.waitForTimeout(5000);
    
});