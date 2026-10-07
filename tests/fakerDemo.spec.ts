import {test, expect} from '@playwright/test';
import {faker} from '@faker-js/faker';

test('Verify Form filling using faker data', async({page})=>{
    await page.goto('https://www.testmuai.com/selenium-playground/input-form-demo/');
    await page.waitForLoadState('domcontentloaded');
    await page.getByPlaceholder('Name', { exact: true }).fill(faker.person.fullName());
    await page.getByPlaceholder('Email', { exact: true }).fill(faker.internet.email());
    await page.getByPlaceholder('Password', { exact: true }).fill(faker.internet.password());
    await page.getByPlaceholder('Company', { exact: true }).fill(faker.company.name());
    await page.getByPlaceholder('Website', { exact: true }).fill(faker.internet.url());
    const countryElement = page.locator(`//select[@name='country']`);
    await countryElement.selectOption('India');
    await page.getByPlaceholder('City', { exact: true }).fill(faker.location.city());
    await page.getByPlaceholder('Address 1', { exact: true }).fill(faker.location.streetAddress());
    await page.getByPlaceholder('Address 2', { exact: true }).fill(faker.location.postalAddress());
    await page.getByPlaceholder('State', { exact: true }).fill(faker.location.state());
    await page.getByPlaceholder('Zip code', { exact: true }).fill(faker.location.zipCode());
    await page.getByRole('button',{name:'Submit'}).click();
    await page.waitForTimeout(5000);
})