import {test} from '@playwright/test';
import { ConfigReader } from '../utils/ReadConfigUtil';
import { Logger } from '../utils/Logger';

test('EnvTest', async({page})=>{
    // console.log(process.env.URL);
    // console.log(process.env.USER);
    // console.log(process.env.PASSWORD);

    
    Logger.info('Calling config Data : baseUrl');
    console.log(ConfigReader.baseurl);
    Logger.info('Calling config Data : user');
    console.log(ConfigReader.user);
    Logger.info('Calling config Data : password');
    console.log(ConfigReader.password);

})