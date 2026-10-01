/* import {test, expect} from '@playwright/test';

test('Validate Product Detail Page', async({page})=>{
    await page.goto('https://www.saucedemo.com/inventory.html');
    await expect(page.locator('.title')).toHaveText('Products');
    await page.locator('#item_4_title_link').click();
    await page.waitForTimeout(5000);

})

test('Validate Cart Page', async({page})=>{
    
    await page.goto('https://www.saucedemo.com/inventory.html');
    await page.locator('#add-to-cart-sauce-labs-backpack').click();
    await page.locator('.shopping_cart_link').click();

    await expect(page.locator('.title')).toHaveText('Your Cart');
     await page.waitForTimeout(5000);
}) */