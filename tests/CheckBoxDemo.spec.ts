import {test, expect} from '@playwright/test'

test('SingleCheckBoxTest', async({page})=>{
    await page.goto('https://www.testmuai.com/selenium-playground/checkbox-demo');
    await page.waitForTimeout(2000);

    //By using playwright Locators
    //Check single checkbox
    await page.getByLabel('Click on check box').check();
    await page.waitForTimeout(2000);
    await expect(page.getByText('Checked!')).toBeVisible();
    //Uncheck single checkbox
    await page.getByLabel('Click on check box').uncheck();
    await expect(page.getByText('Checked!')).toBeHidden();
    
    
    //Using locator (CSS/xpath)
    const allCheckboxes = page.locator('[type="checkbox"]');
    await allCheckboxes.first().check();
    await expect(page.getByText('Checked!')).toBeVisible();
    console.log(await allCheckboxes.first().isChecked());
    await page.waitForTimeout(2000);
    await allCheckboxes.first().uncheck();
    console.log(await allCheckboxes.first().isChecked());
});

test.only('Disabled Checkbox Demo',async({page})=>{
    await page.goto('https://www.testmuai.com/selenium-playground/checkbox-demo');
    await page.waitForTimeout(2000);
    console.log(await page.getByRole('checkbox',{name:' Option 1'}).first().isEnabled());
    await page.getByRole('checkbox',{name:' Option 1'}).first().check();
    await expect(page.getByRole('checkbox',{name:' Option 1'}).first()).toBeChecked();
    console.log(await page.getByRole('checkbox',{name:' Option 2'}).first().isDisabled());
    await expect(page.getByRole('checkbox',{name:' Option 2'}).first()).not.toBeChecked();
    console.log(await page.getByRole('checkbox',{name:' Option 3'}).first().isEnabled());
    console.log(await page.getByRole('checkbox',{name:' Option 4'}).first().isDisabled());
});

 