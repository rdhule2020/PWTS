import {test, expect} from '@playwright/test';

test('ValidateInventary', async({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    
    await page.getByRole('button',{name:'Open Menu'}).click();

    await page.getByRole('button',{name:'Logout'}).click();

    await page.waitForTimeout(5000);
})

test('AddToCart', async({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await page.getByRole('button',{name:'Add to cart'}).first().click();
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toBeVisible();
    
    
    await page.getByRole('button',{name:'Open Menu'}).click();

    await page.getByRole('button',{name:'Logout'}).click();

    await page.waitForTimeout(5000);
})

