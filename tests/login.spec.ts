import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { Base_URL, USERNAME, PASSWORD, INVALID_PASSWORD, INVALID_USERNAME } from '../utils/envConfig';

test.describe('Login Module', () => {

  test('Login with valid credentials', async ({ page }) => {

    const loginPage = new LoginPage(page);
    await page.goto(Base_URL);
    await loginPage.login(USERNAME, PASSWORD);

  });

  test('Login with Invalid Username', async ({ page }) => {

    const loginPage = new LoginPage(page);
    await page.goto(Base_URL);
    await loginPage.login_Invalid_Username(INVALID_USERNAME, PASSWORD);

  });

  test('Login with Invalid Password', async ({ page }) => {

    const loginPage = new LoginPage(page);
    await page.goto(Base_URL);
    await loginPage.login_Invalid_Username(USERNAME, INVALID_PASSWORD);

  });



});