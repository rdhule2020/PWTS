import {test, expect} from '@playwright/test'

test('DropdownTest', async({page})=>{
await page.goto('https://www.testmuai.com/selenium-playground/input-form-demo/');
await page.waitForTimeout(3000);
//Select By Label
await page.locator('[name=country]').selectOption({label:'India'});

//Select By index
await page.locator('[name=country]').selectOption({index:10});

//Select By value
await page.locator('[name=country]').selectOption("BE");
// await page.waitForTimeout(5000);

})