import {test, expect} from '@playwright/test';

test('Learn Playwriht Locators & Navigation ', async({page})=>{
await page.goto('https://practicetestautomation.com/practice-test-login/');

await page.getByRole('textbox',{name:'Username'}).fill('incorrectUser');
await page.getByRole('textbox', {name:'Password'}).fill('Password123')

await page.getByRole('button',{name: 'Submit'}).click();

await page.getByRole('link',{name:'BLOG'}).click();

await page.goto('https://www.testmuai.com/selenium-playground/input-form-demo/');

await page.getByText('Get Started Free').click();
await page.waitForLoadState('domcontentloaded');
await page.goBack();
console.log(page.url());
await page.goForward();
console.log(await page.title());
await page.goBack();

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
await page.getByPlaceholder('Username').fill('Admin');
await page.getByPlaceholder('Password').fill('admin');
await page.locator(`[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]`).click()

console.log(page.url());
await page.waitForSelector('text=Invalid credentials', {
  timeout: 20000
});
await expect(page.getByText('Invalid credentials')).toBeVisible();    
await page.goBack();

await page.goto('https://www.testmuai.com/selenium-playground/input-form-demo/');
await page.getByTitle('Hello, have a question? Let’s chat.').click();


await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
page.getByAltText('logo image');


await page.goto('https://practicetestautomation.com/practice-test-login/');

await page.getByLabel('username').fill('incorrectUser');
await page.getByLabel('password').fill('Password123')
});