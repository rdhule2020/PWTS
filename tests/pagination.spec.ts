import {test, expect} from '@playwright/test';

test('Pagination Demo', async ({page})=>{
    await page.goto('https://www.testmuai.com/selenium-playground/table-sort-search-demo/');
    await page.waitForLoadState('networkidle');

    while(true)
    {
        const next = page.getByText('Next', { exact: true });

        if(await next.isDisabled()){
            break;
        }
        else{
            await next.click();
        }
    }


})