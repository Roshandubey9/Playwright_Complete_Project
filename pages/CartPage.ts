import { expect,Page } from '@playwright/test';
import { cartLocators } from '../locators/cartLocators';

export class CartPage {
    constructor(private page: Page) {}

    async addSingleProductToCart(){
        await this.page.locator(cartLocators.singleProduct).nth(0).click();
        await expect(this.page.locator(cartLocators.removeText)).toHaveText('Remove');
    }

    async addMultipleProductsToCart(){
            const productCount = await this.page.locator(cartLocators.singleProduct).count();
            for(let i=0;i<productCount;i++){
                await this.page.locator(cartLocators.singleProduct).nth(i).click();
                
            }
        }
}