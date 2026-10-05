import { test, expect} from '@playwright/test';
import fs from 'fs';

test('Download File Test ', async({page})=>{

    await page.goto('https://www.testmuai.com/selenium-playground/generate-file-to-download-demo/');
    await page.waitForLoadState('networkidle');
    await page.locator('[id="textbox"]').pressSequentially('Download File Test');
    await page.getByRole('button', {name:"Generate File"}).click();
    await expect(page.getByRole('link',{name:'Download'})).toBeEnabled();
    //way1
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link',{name:'Download'}).click();
    const dwd = await downloadPromise;

    //Print downloaded filename
    const filename = dwd.suggestedFilename();
    console.log('Downloaded file',filename);

    //Save the downloaded file
    const filepath = `downloads/${filename}`;
    await dwd.saveAs(filepath); 

     
    /* //Way 2
        const [downloadPromise] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('link',{name:'Download'}).click()
     ]);
    //save the file to custom path
        const downloadPath = "downloads/testfile.txt";
        await downloadPromise.saveAs(downloadPath);

    //check if file exist in the path
    const fileExists = fs.existsSync(downloadPath);
    expect(fileExists).toBeTruthy();

    //cleanup the downloaded files
    if(fileExists)
    {
        fs.unlinkSync(downloadPath);
    }
    */

})