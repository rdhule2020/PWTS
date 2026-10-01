/* import { test as setup, expect } from '@playwright/test'

setup('Authenticate', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await page.waitForTimeout(2000);
    await expect(page).toHaveURL(/inventory/);

    await page.context().storageState({ path: 'auth/user.json' });

}) */