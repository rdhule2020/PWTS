import {test as base, Page} from '@playwright/test'

type myfixture = 
{
    loggedinpage: Page;
}

export const test = base.extend<myfixture>({
    loggedinpage: async({page}, use)=>{

        await page.goto('https://www.saucedemo.com/');
        await page.getByPlaceholder('Username').fill('standard_user');
        await page.getByPlaceholder('Password').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
        await use(page);
    }

})