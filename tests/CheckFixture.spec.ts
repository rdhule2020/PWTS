import {test} from '../fixture/loginfixture';

test('Click Product', async({loggedinpage})=>{
    //loggedinpage
    await loggedinpage.getByText('Sauce Labs Backpack', { exact: true }).first().click();
    await loggedinpage.waitForTimeout(5000);
})

test('ClickAddToCart', async({loggedinpage})=>{
    await loggedinpage.getByRole('button',{name:'Add to cart'}).first().click();
    await loggedinpage.locator('[data-test="shopping-cart-link"]').click();
    await loggedinpage.waitForTimeout(5000);
})