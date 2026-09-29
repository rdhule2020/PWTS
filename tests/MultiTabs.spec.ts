import {test, expect} from '@playwright/test';

test('MultiTabs Handling Test', async({page, context})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    const pagepromise = context.waitForEvent('page'); 
   /*  It means script is expecting a new page being created
    If we clicked first and then started waiting, the tab might open so fast that playwright misses the event.
    By defining the promise first, we are ready to catch the event timely. */

    await page.getByRole('link',{name:'OrangeHRM, Inc'}).click();

    const newpage = await pagepromise;
    /*  Now we await that promise that we created
        Once the click finishes and the browser opens the tab, pagePromise resolves, and we assign 
        that new tab to the variable newpage
        You now have two distinct objects: page (old tab) and newpage (new tab) */

    console.log(await newpage.title());
    await newpage.bringToFront();
    await expect(newpage).toHaveURL('https://orangehrm.com/');
    await expect(newpage).toHaveTitle('OrangeHRM: All in One HR Software for Businesses | OrangeHRM');

    await page.waitForTimeout(3000);
    await page.bringToFront(); // move to the original old tab
    console.log(await page.title());
    await expect(page).toHaveTitle('OrangeHRM');
    await page.waitForTimeout(5000);
})