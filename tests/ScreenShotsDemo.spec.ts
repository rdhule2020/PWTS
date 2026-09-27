import {test, expect} from '@playwright/test'

test('Screenhot Test', async({page})=>{
    await page.goto('https://www.testmuai.com/selenium-playground/');
    await page.waitForTimeout(3000);
    //View port screeenshot
    await page.screenshot({path:'ViewPort.png'});

    //full page
    await page.screenshot({path:'fullpage.png',fullPage:true});

    //element screenshot
    const ele1= page.getByText('Get Started Free');
    await ele1.screenshot({path:'ele1.png'});
})