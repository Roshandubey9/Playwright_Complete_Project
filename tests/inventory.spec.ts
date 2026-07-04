import {LoginLocators} from "../locators/Loginlocators";
import { test,expect, Page } from "@playwright/test";
import { Base_URL, USERNAME, PASSWORD, INVALID_PASSWORD, INVALID_USERNAME } from '../utils/envConfig';
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";

test.describe('Inventory Module', () => {

    test('Verify Product Page Title', async({ page }) => {

        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);
        await page.goto(Base_URL);
        await loginPage.login(USERNAME, PASSWORD);
        await inventoryPage.verifyInventoryPageTitle();

    });

    test('Verify Product Count', async({ page }) => {

        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);
        await page.goto(Base_URL);
        await loginPage.login(USERNAME, PASSWORD);
        await inventoryPage.VerifyProductsCount(); 
    });

     test('Verify Product Names', async({ page }) => {

        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);
        await page.goto(Base_URL);
        await loginPage.login(USERNAME, PASSWORD);
        await inventoryPage.verifyProductNames(); 
    });

    test('Verify Product Prices', async({ page }) => {

        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);
        await page.goto(Base_URL);
        await loginPage.login(USERNAME, PASSWORD);
        await inventoryPage.verifyProductPrice(); 
    });










});