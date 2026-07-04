import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { CartPage } from '../pages/CartPage';
import { Base_URL, USERNAME, PASSWORD } from '../utils/envConfig';

test.describe('Cart Module', () => {

    test('Add single product to cart',async({page})=>{

        const loginPage = new LoginPage(page);
        const cartPage=new CartPage(page);
        await page.goto(Base_URL);
        await loginPage.login(USERNAME,PASSWORD);
        await cartPage.addSingleProductToCart();  
          
    });

      test('Add Multiple products to cart',async({page})=>{

        const loginPage = new LoginPage(page);
        const cartPage=new CartPage(page);
        await page.goto(Base_URL);
        await loginPage.login(USERNAME,PASSWORD);
        await cartPage.addMultipleProductsToCart(); 
    });



});