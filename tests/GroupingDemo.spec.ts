import {test} from '@playwright/test'

test.describe.skip('HomePageTests', ()=>{
test('homePageTitle Test', async({page})=>{
    console.log("this is Home Page title Test")
})

test('homePageheading Test', async({page})=>{
    console.log("this is Home Page Heading Test")
})
});


test.describe('LoginTest',()=>{
test('valid Login Test', async({page})=>{
    console.log("this is Valid Login Test")
})

test('Invalid Login Test', async({page})=>{
    console.log("this is Invalid Login Test")
})
})
