import {test, expect} from '@playwright/test'

test('Test Assertion', async({page})=>{

    await page.goto('https://practicetestautomation.com/practice-test-login/');
    const usernamefield = page.getByLabel('username');
    await expect(usernamefield).toBeVisible();
    await expect(usernamefield).toBeEnabled();
    const passwordfield = page.getByLabel('password');
    await expect(passwordfield).toBeVisible();
    await expect(passwordfield).toBeEnabled();

    const heading =  page.locator('h2');
    await expect(heading).toHaveText('Test login');
   
    await expect.soft(heading).toContainText('Login'); //soft Assertion

    await usernamefield.fill('student');
    await passwordfield.fill('Password123');
    await page.getByRole('button', { name: 'Submit' }).click();

    await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');
    await expect(page).toHaveTitle('Logged In Successfully | Practice Test Automation');

    await page.waitForTimeout(5000);
})