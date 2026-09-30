import {test, expect, Page} from '@playwright/test'

let page:Page;
test.beforeAll(async({browser})=>{
    page = await browser.newPage();
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
})

test.afterAll(async()=>{
    await page.getByRole('button',{name:'Open Menu'}).click();
    await page.getByRole('button',{name:'Logout'}).click();
})

test('ValidateInventary', async()=>{
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
})

test('AddToCart', async()=>{
    await page.getByRole('button',{name:'Add to cart'}).first().click();
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toBeVisible();
})

