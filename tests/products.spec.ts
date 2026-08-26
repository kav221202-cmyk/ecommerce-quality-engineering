import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { users } from '../test-data/users';

test.describe('Products Tests @regression', () => {

    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.goto();

        await loginPage.login(
            users.standard.username,
            users.standard.password
        );

        await expect(page).toHaveURL(/inventory/);
    });


    test('TC-PROD-001 - Verify Products Page Is Displayed', async ({ page }) => {

        const productsPage = new ProductsPage(page);

        await expect(productsPage.pageTitle).toHaveText('Products');

    });


    test('TC-PROD-002 - Verify Product Count', async ({ page }) => {

        const productsPage = new ProductsPage(page);

        const productCount = await productsPage.getProductCount();

        expect(productCount).toBe(6);

    });


    test('TC-PROD-003 - Verify Product Names Are Displayed', async ({ page }) => {

        const productsPage = new ProductsPage(page);

        const productNames = await productsPage.getProductNames();

        expect(productNames.length).toBe(6);

        expect(productNames).toContain('Sauce Labs Backpack');
        expect(productNames).toContain('Sauce Labs Bike Light');
        expect(productNames).toContain('Sauce Labs Bolt T-Shirt');
        expect(productNames).toContain('Sauce Labs Fleece Jacket');
        expect(productNames).toContain('Sauce Labs Onesie');
        expect(productNames).toContain(
            'Test.allTheThings() T-Shirt (Red)'
        );

    });


    test('TC-PROD-004 - Verify Product Prices Are Displayed', async ({ page }) => {

        const productsPage = new ProductsPage(page);

        const productPrices = await productsPage.getProductPrices();

        expect(productPrices.length).toBe(6);

        for (const price of productPrices) {
            expect(price).toMatch(/^\$\d+\.\d{2}$/);
        }

    });


    test('TC-PROD-005 - Sort Products By Price Low To High', async ({ page }) => {

        const productsPage = new ProductsPage(page);

        await productsPage.sortProducts('lohi');

        const prices = await productsPage.getProductPrices();

        const numericPrices = prices.map(price =>
            parseFloat(price.replace('$', ''))
        );

        const sortedPrices = [...numericPrices].sort(
            (a, b) => a - b
        );

        expect(numericPrices).toEqual(sortedPrices);

    });


    test('TC-PROD-006 - Sort Products By Price High To Low', async ({ page }) => {

        const productsPage = new ProductsPage(page);

        await productsPage.sortProducts('hilo');

        const prices = await productsPage.getProductPrices();

        const numericPrices = prices.map(price =>
            parseFloat(price.replace('$', ''))
        );

        const sortedPrices = [...numericPrices].sort(
            (a, b) => b - a
        );

        expect(numericPrices).toEqual(sortedPrices);

    });


    test('TC-PROD-007 - Sort Products By Name A To Z', async ({ page }) => {

        const productsPage = new ProductsPage(page);

        await productsPage.sortProducts('az');

        const productNames = await productsPage.getProductNames();

        const sortedNames = [...productNames].sort();

        expect(productNames).toEqual(sortedNames);

    });


    test('TC-PROD-008 - Sort Products By Name Z To A', async ({ page }) => {

        const productsPage = new ProductsPage(page);

        await productsPage.sortProducts('za');

        const productNames = await productsPage.getProductNames();

        const sortedNames = [...productNames].sort().reverse();

        expect(productNames).toEqual(sortedNames);

    });


    test('TC-PROD-009 - Add Product To Cart', async ({ page }) => {

        const productsPage = new ProductsPage(page);

        await productsPage.addProductToCart('Sauce Labs Backpack');

        await expect(
            page.locator('.shopping_cart_badge')
        ).toHaveText('1');

    });


    test('TC-PROD-010 - Add Multiple Products To Cart', async ({ page }) => {

        const productsPage = new ProductsPage(page);

        await productsPage.addProductToCart('Sauce Labs Backpack');

        await productsPage.addProductToCart('Sauce Labs Bike Light');

        await productsPage.addProductToCart('Sauce Labs Bolt T-Shirt');

        await expect(
            page.locator('.shopping_cart_badge')
        ).toHaveText('3');

    });

});