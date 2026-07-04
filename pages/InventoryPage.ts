import { LoginLocators } from "../locators/Loginlocators";
import { expect, Page } from "@playwright/test";
import { inventoryLocators } from "../locators/InventoryLocators";

export class InventoryPage {

    constructor(private page: Page) {}

    async login(username: string, password: string) {
        await this.page.fill(LoginLocators.usernameInput, username);
        await this.page.fill(LoginLocators.passwordInput, password);
        await this.page.click(LoginLocators.loginbutton);
    }


    async verifyInventoryPageTitle() {
        await expect(this.page.locator(inventoryLocators.pageTitle)).toBeVisible();
        const title = await this.page.locator(inventoryLocators.pageTitle).textContent();
        console.log("Inventory Page Title:", title);
    }

     async VerifyProductsCount() {
        const productCount = await this.page.locator(inventoryLocators.productItems).count();
        console.log("Number of Products:", productCount);
       expect(productCount).toBe(6);
    }

    async verifyProductNames() {

    const expectedProducts = [
        "Sauce Labs Backpack",
        "Sauce Labs Bike Light",
        "Sauce Labs Bolt T-Shirt",
        "Sauce Labs Fleece Jacket",
        "Sauce Labs Onesie",
        "Test.allTheThings() T-Shirt (Red)"
    ];

    const actualProducts = await this.page.locator(inventoryLocators.productName).allTextContents();

    console.log(actualProducts);

    expect(actualProducts).toEqual(expectedProducts);
}

async verifyProductPrice(){
    const expectedPrices=['$29.99','$9.99','$15.99','$49.99','$7.99','$15.99'];
    const actualPrices = await this.page.locator(inventoryLocators.productPrice).allTextContents();
    console.log(actualPrices);
    expect(actualPrices).toEqual(expectedPrices);
}


}