import {test, expect} from '@playwright/test';

test('Pagination Demo 2', async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
    await page.waitForLoadState('networkidle');

    const pages = page.locator("ul[class='pagination'] li a");
    const pagecount = await pages.count();

    for(let i=1; i<pagecount; i++){
        await pages.nth(i).click();
    }
})