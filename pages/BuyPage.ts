import { Page } from '@playwright/test';
import { cartLocators } from '../locators/cartLocators';


export class BuyPage {
    constructor(private page: Page) {}

    async orderConfirmation() {
        await this.page.locator(cartLocators.singleProduct).nth(0).click();
        await this.page.locator(cartLocators.cartIcon).click();
        await this.page.locator(cartLocators.checkOutButton).click();
        await this.page.locator(cartLocators.firstName).fill('Roshan');
        await this.page.locator(cartLocators.lastName).fill('Kumar');
        await this.page.locator(cartLocators.postalCode).fill('12345');
        await this.page.locator(cartLocators.continueButton).click();
        await this.page.locator(cartLocators.finishButton).click();
        await this.page.locator(cartLocators.orderConfirmationText).isVisible();
    }
}