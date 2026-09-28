import {test, expect} from '@playwright/test';

test('AutoSuggestion Dropdown Test', async({page})=>{
await page.goto('https://www.youtube.com/@LetsLearnQA');
await page.getByPlaceholder('Search').fill('playwright');
await page.waitForSelector('.ytSuggestionComponentLeftContainer');
const allSuggestions = page.locator('.ytSuggestionComponentLeftContainer');
const count = await allSuggestions.count();
for(let i=0; i<count; i++){
    const text = await allSuggestions.nth(i).textContent();
    console.log(text);
    expect(text).toContain('playwright');
}

//await page.waitForTimeout(5000);

})