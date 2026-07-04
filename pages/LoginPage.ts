import { LoginLocators } from "../locators/Loginlocators";
import { expect, Page } from "@playwright/test";

export class LoginPage {

    constructor(private page: Page) {}

    async login(username: string, password: string) {
        await this.page.fill(LoginLocators.usernameInput, username);
        await this.page.fill(LoginLocators.passwordInput, password);
        await this.page.click(LoginLocators.loginbutton);
    }

    async login_Invalid_Username(username: string, password: string) {
        await this.page.fill(LoginLocators.usernameInput, username);
        await this.page.fill(LoginLocators.passwordInput, password);
        await this.page.click(LoginLocators.loginbutton);

        await expect(this.page.locator(LoginLocators.errorMessage)).toBeVisible();
       const error = await this.page.locator(LoginLocators.errorMessage).textContent();
        console.log("Error Message:", error);
    }

    async login_Invalid_Password(username: string, password: string) {
        await this.page.fill(LoginLocators.usernameInput, username);
        await this.page.fill(LoginLocators.passwordInput, password);
        await this.page.click(LoginLocators.loginbutton);

        await expect(this.page.locator(LoginLocators.errorMessage)).toBeVisible();
       const error = await this.page.locator(LoginLocators.errorMessage).textContent();
        console.log("Error Message:", error);
    }
}