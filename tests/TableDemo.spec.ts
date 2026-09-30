import {test,expect} from '@playwright/test'

test('WebTable Test', async ({page})=>{
    await page.goto('https://www.testmuai.com/selenium-playground/table-sort-search-demo/');
    await page.waitForLoadState('domcontentloaded');
    
    const allColumns = page.locator('thead tr th')
    const colCount = await allColumns.count();
    console.log("Total columns : ", colCount);
    expect(colCount).toBe(4);

    const allRows = page.locator('table tbody trll');
    const rowCount = await allRows.count();
    console.log("Total rows : ", rowCount);
    expect(rowCount).toBe(24);

    await page.waitForTimeout(5000);
});