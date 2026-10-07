import {test, expect} from '@playwright/test';

test('Maximize browser',async({page})=>{
    await page.goto('https://playwright.dev');
    const pagewidth =  page.viewportSize()?.width;
    const pageheight = page.viewportSize()?.height;
    console.log(pagewidth,pageheight);
    await page.waitForTimeout(3000);

    await page.setViewportSize({width : 1536, height:824});
     await page.waitForTimeout(3000);


    
})