import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { users } from '../test-data/users';

test.describe('Authentication Tests @regression @smoke', () => {

    test('TC-AUTH-001 - Successful Login', async ({ page }) => {

        const loginPage = new LoginPage(page);
        const productsPage = new ProductsPage(page);

        await loginPage.goto();

        await loginPage.login(
            users.standard.username,
            users.standard.password
        );

        await expect(page).toHaveURL(/inventory/);
        await expect(productsPage.pageTitle).toHaveText('Products');
    });


    test('TC-AUTH-002 - Login With Invalid Credentials', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.goto();

        await loginPage.login(
            users.invalid.username,
            users.invalid.password
        );

        await expect(loginPage.errorMessage).toBeVisible();
        await expect(loginPage.errorMessage).toContainText(
            'Username and password do not match'
        );
    });


    test('TC-AUTH-003 - Login With Empty Username', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.goto();

        await loginPage.enterPassword(users.standard.password);
        await loginPage.clickLogin();

        await expect(loginPage.errorMessage).toBeVisible();
        await expect(loginPage.errorMessage).toContainText(
            'Username is required'
        );
    });


    test('TC-AUTH-004 - Login With Empty Password', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.goto();

        await loginPage.enterUsername(users.standard.username);
        await loginPage.clickLogin();

        await expect(loginPage.errorMessage).toBeVisible();
        await expect(loginPage.errorMessage).toContainText(
            'Password is required'
        );
    });


    test('TC-AUTH-005 - Login With Both Fields Empty', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.goto();

        await loginPage.clickLogin();

        await expect(loginPage.errorMessage).toBeVisible();
        await expect(loginPage.errorMessage).toContainText(
            'Username is required'
        );
    });


    test('TC-AUTH-006 - Login With Locked Out User', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.goto();

        await loginPage.login(
            users.lockedOut.username,
            users.lockedOut.password
        );

        await expect(loginPage.errorMessage).toBeVisible();
        await expect(loginPage.errorMessage).toContainText(
            'locked out'
        );
    });


    test('TC-AUTH-007 - Valid Username With Invalid Password', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.goto();

        await loginPage.login(
            users.standard.username,
            'wrong_password'
        );

        await expect(loginPage.errorMessage).toBeVisible();
        await expect(loginPage.errorMessage).toContainText(
            'Username and password do not match'
        );
    });


    test('TC-AUTH-008 - Invalid Username With Valid Password', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.goto();

        await loginPage.login(
            'invalid_user',
            users.standard.password
        );

        await expect(loginPage.errorMessage).toBeVisible();
        await expect(loginPage.errorMessage).toContainText(
            'Username and password do not match'
        );
    });

});