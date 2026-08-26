import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { users } from '../test-data/users';

test.describe('Cart Tests @regression @smoke', () => {

    test('TC-CART-001 - Verify Shopping Cart Page Is Displayed', async ({ page }) => {

        const loginPage = new LoginPage(page);
        const productsPage = new ProductsPage(page);
        const cartPage = new CartPage(page);

        await loginPage.goto();

        await loginPage.login(
            users.standard.username,
            users.standard.password
        );

        await productsPage.addProductToCart('Sauce Labs Backpack');
        await productsPage.openCart();

        await expect(cartPage.pageTitle).toHaveText('Your Cart');
    });


    test('TC-CART-002 - Verify Added Product Is Displayed', async ({ page }) => {

        const loginPage = new LoginPage(page);
        const productsPage = new ProductsPage(page);
        const cartPage = new CartPage(page);

        await loginPage.goto();

        await loginPage.login(
            users.standard.username,
            users.standard.password
        );

        await productsPage.addProductToCart('Sauce Labs Backpack');
        await productsPage.openCart();

        const productNames = await cartPage.getCartItemNames();

        expect(productNames).toContain('Sauce Labs Backpack');
    });


    test('TC-CART-003 - Verify Cart Contains One Product', async ({ page }) => {

        const loginPage = new LoginPage(page);
        const productsPage = new ProductsPage(page);
        const cartPage = new CartPage(page);

        await loginPage.goto();

        await loginPage.login(
            users.standard.username,
            users.standard.password
        );

        await productsPage.addProductToCart('Sauce Labs Backpack');
        await productsPage.openCart();

        const itemCount = await cartPage.getCartItemCount();

        expect(itemCount).toBe(1);
    });


    test('TC-CART-004 - Verify Product Price In Cart', async ({ page }) => {

        const loginPage = new LoginPage(page);
        const productsPage = new ProductsPage(page);
        const cartPage = new CartPage(page);

        await loginPage.goto();

        await loginPage.login(
            users.standard.username,
            users.standard.password
        );

        await productsPage.addProductToCart('Sauce Labs Backpack');
        await productsPage.openCart();

        const prices = await cartPage.getCartItemPrices();

        expect(prices).toContain('$29.99');
    });


    test('TC-CART-005 - Remove Product From Cart', async ({ page }) => {

        const loginPage = new LoginPage(page);
        const productsPage = new ProductsPage(page);
        const cartPage = new CartPage(page);

        await loginPage.goto();

        await loginPage.login(
            users.standard.username,
            users.standard.password
        );

        await productsPage.addProductToCart('Sauce Labs Backpack');
        await productsPage.openCart();

        await cartPage.removeProduct('Sauce Labs Backpack');

        const itemCount = await cartPage.getCartItemCount();

        expect(itemCount).toBe(0);
    });


    test('TC-CART-006 - Continue Shopping From Cart', async ({ page }) => {

        const loginPage = new LoginPage(page);
        const productsPage = new ProductsPage(page);
        const cartPage = new CartPage(page);

        await loginPage.goto();

        await loginPage.login(
            users.standard.username,
            users.standard.password
        );

        await productsPage.addProductToCart('Sauce Labs Backpack');
        await productsPage.openCart();

        await cartPage.continueShopping();

        await expect(page).toHaveURL(/inventory/);
        await expect(page.locator('.title')).toHaveText('Products');
    });


    test('TC-CART-007 - Cart Product Persists After Navigation', async ({ page }) => {

        const loginPage = new LoginPage(page);
        const productsPage = new ProductsPage(page);
        const cartPage = new CartPage(page);

        await loginPage.goto();

        await loginPage.login(
            users.standard.username,
            users.standard.password
        );

        await productsPage.addProductToCart('Sauce Labs Backpack');
        await productsPage.openCart();

        await cartPage.continueShopping();

        await expect(page).toHaveURL(/inventory/);

        await productsPage.openCart();

        const productNames = await cartPage.getCartItemNames();

        expect(productNames).toContain('Sauce Labs Backpack');
    });


    test('TC-CART-008 - Add Multiple Products And Verify Cart', async ({ page }) => {

        const loginPage = new LoginPage(page);
        const productsPage = new ProductsPage(page);
        const cartPage = new CartPage(page);

        await loginPage.goto();

        await loginPage.login(
            users.standard.username,
            users.standard.password
        );

        // Add all products from the Products page
        await productsPage.addProductToCart('Sauce Labs Backpack');
        await productsPage.addProductToCart('Sauce Labs Bike Light');
        await productsPage.addProductToCart('Sauce Labs Bolt T-Shirt');

        // Open the cart after adding products
        await productsPage.openCart();

        const itemCount = await cartPage.getCartItemCount();

        expect(itemCount).toBe(3);

        const productNames = await cartPage.getCartItemNames();

        expect(productNames).toContain('Sauce Labs Backpack');
        expect(productNames).toContain('Sauce Labs Bike Light');
        expect(productNames).toContain('Sauce Labs Bolt T-Shirt');
    });


    test('TC-CART-009 - Remove One Product From Multiple Products', async ({ page }) => {

        const loginPage = new LoginPage(page);
        const productsPage = new ProductsPage(page);
        const cartPage = new CartPage(page);

        await loginPage.goto();

        await loginPage.login(
            users.standard.username,
            users.standard.password
        );

        // Add two products from the Products page
        await productsPage.addProductToCart('Sauce Labs Backpack');
        await productsPage.addProductToCart('Sauce Labs Bike Light');

        // Open the cart
        await productsPage.openCart();

        // Remove the Backpack
        await cartPage.removeProduct('Sauce Labs Backpack');

        const itemCount = await cartPage.getCartItemCount();

        expect(itemCount).toBe(1);

        const productNames = await cartPage.getCartItemNames();

        expect(productNames).toContain('Sauce Labs Bike Light');
        expect(productNames).not.toContain('Sauce Labs Backpack');
    });


    test('TC-CART-010 - Proceed To Checkout', async ({ page }) => {

        const loginPage = new LoginPage(page);
        const productsPage = new ProductsPage(page);
        const cartPage = new CartPage(page);

        await loginPage.goto();

        await loginPage.login(
            users.standard.username,
            users.standard.password
        );

        await productsPage.addProductToCart('Sauce Labs Backpack');
        await productsPage.openCart();

        await cartPage.checkout();

        await expect(page).toHaveURL(/checkout-step-one/);

        await expect(page.locator('.title')).toHaveText(
            'Checkout: Your Information'
        );
    });

});