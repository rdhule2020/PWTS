import {test, expect} from '@playwright/test'

test('AsyncAwaitDemo Test',({page}) =>{
 page.goto('https://bstackdemo.com/');

 expect(page).toHaveTitle('StackDemo');

 page.locator('#signin').click();

 page.waitForTimeout(3000);

} )

test.only('Async Await Demo Test',async({page}) =>{
 await page.goto('https://bstackdemo.com/');

 await expect(page).toHaveTitle('StackDemo');

 await page.locator('#signin').click();

 await page.waitForTimeout(3000);
 
} )