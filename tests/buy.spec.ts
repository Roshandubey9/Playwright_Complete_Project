import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { BuyPage } from '../pages/BuyPage';
import { Base_URL, USERNAME, PASSWORD } from '../utils/envConfig';


test.describe('Buy Module', () => {

    test('Buy single product',async({page})=>{
        const loginPage = new LoginPage(page);
        const buyPage=new BuyPage(page);
        await page.goto(Base_URL);
        await loginPage.login(USERNAME,PASSWORD);
        await buyPage.orderConfirmation();
    
     });

});