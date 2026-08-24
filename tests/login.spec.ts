import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';

test('TC-AUTH-001 - Successful Login', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);

    // Open login page
    await loginPage.goto();

    // Login with valid credentials
    await loginPage.login('standard_user', 'secret_sauce');

    // Verify successful login
    await expect(page).toHaveURL(/inventory/);

    // Verify Products page
    await expect(productsPage.pageTitle).toHaveText('Products');
});