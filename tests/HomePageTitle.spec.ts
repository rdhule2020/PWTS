import {test, expect} from "@playwright/test";

test('Validate page title', async({page})=>{
await page.goto('https://www.demoblaze.com/index.html');
await expect (page).toHaveTitle('STORE');
})