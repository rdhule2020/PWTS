import { test, expect } from '@playwright/test'

test('IFrameTest', async ({ page }) => {

    await page.goto('https://jqueryui.com/autocomplete/');
    //Using Frame Locator
    const myFrame = page.frameLocator('.demo-frame');
    await myFrame.locator('id=tags').fill('java');

    //Handling nested Iframes
  /*   const parentFrame = page.frameLocator('.demo-frame');
    const childFrame = parentFrame.frameLocator('#child-frame');
    await childFrame.locator('button').click(); */

    await page.waitForTimeout(5000);
})