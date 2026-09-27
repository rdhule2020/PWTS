import {test, expect} from '@playwright/test'


test('AlertsDemo', async ({page})=>{

    await page.goto('https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/');

    page.on('dialog',async dialog =>{
        console.log( dialog.message());
        //await dialog.accept();
        //await dialog.dismiss();
        await dialog.accept('PlaywrightTS');

    })

    //await page.getByRole('button', { name: 'Click Me' }).first().click();

   //await page.getByRole('button', { name: 'Click Me' }).nth(1).click();

   await page.getByRole('button', { name: 'Click Me' }).last().click();

    await page.waitForTimeout(10000);
});