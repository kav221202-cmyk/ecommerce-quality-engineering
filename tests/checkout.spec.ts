import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutInformationPage } from '../pages/CheckoutInformationPage';
import { CheckoutOverviewPage } from '../pages/CheckoutOverviewPage';
import { users } from '../test-data/users';

test.describe('Checkout Tests', () => {

    async function navigateToCheckout(page: any) {
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
    }


    test('TC-CHECKOUT-001 - Verify Checkout Information Page', async ({ page }) => {

        await navigateToCheckout(page);

        const checkoutPage = new CheckoutInformationPage(page);

        await expect(checkoutPage.pageTitle).toHaveText(
            'Checkout: Your Information'
        );
    });


    test('TC-CHECKOUT-002 - Enter Valid Customer Information', async ({ page }) => {

        await navigateToCheckout(page);

        const checkoutPage = new CheckoutInformationPage(page);

        await checkoutPage.fillCustomerInformation(
            'Kavindya',
            'Test',
            '20000'
        );

        await checkoutPage.continueToOverview();

        await expect(page).toHaveURL(/checkout-step-two/);
    });


    test('TC-CHECKOUT-003 - First Name Is Required', async ({ page }) => {

        await navigateToCheckout(page);

        const checkoutPage = new CheckoutInformationPage(page);

        await checkoutPage.enterLastName('Test');
        await checkoutPage.enterPostalCode('20000');

        await checkoutPage.continueToOverview();

        await expect(checkoutPage.errorMessage).toBeVisible();

        await expect(checkoutPage.errorMessage).toContainText(
            'First Name is required'
        );
    });


    test('TC-CHECKOUT-004 - Last Name Is Required', async ({ page }) => {

        await navigateToCheckout(page);

        const checkoutPage = new CheckoutInformationPage(page);

        await checkoutPage.enterFirstName('Kavindya');
        await checkoutPage.enterPostalCode('20000');

        await checkoutPage.continueToOverview();

        await expect(checkoutPage.errorMessage).toBeVisible();

        await expect(checkoutPage.errorMessage).toContainText(
            'Last Name is required'
        );
    });


    test('TC-CHECKOUT-005 - Postal Code Is Required', async ({ page }) => {

        await navigateToCheckout(page);

        const checkoutPage = new CheckoutInformationPage(page);

        await checkoutPage.enterFirstName('Kavindya');
        await checkoutPage.enterLastName('Test');

        await checkoutPage.continueToOverview();

        await expect(checkoutPage.errorMessage).toBeVisible();

        await expect(checkoutPage.errorMessage).toContainText(
            'Postal Code is required'
        );
    });


    test('TC-CHECKOUT-006 - Verify Product On Overview Page', async ({ page }) => {

        await navigateToCheckout(page);

        const checkoutPage = new CheckoutInformationPage(page);

        await checkoutPage.fillCustomerInformation(
            'Kavindya',
            'Test',
            '20000'
        );

        await checkoutPage.continueToOverview();

        const overviewPage = new CheckoutOverviewPage(page);

        const itemNames = await overviewPage.getItemNames();

        expect(itemNames).toContain('Sauce Labs Backpack');
    });


    test('TC-CHECKOUT-007 - Verify Order Summary', async ({ page }) => {

        await navigateToCheckout(page);

        const checkoutPage = new CheckoutInformationPage(page);

        await checkoutPage.fillCustomerInformation(
            'Kavindya',
            'Test',
            '20000'
        );

        await checkoutPage.continueToOverview();

        const overviewPage = new CheckoutOverviewPage(page);

        await expect(overviewPage.subtotal).toContainText('$29.99');
        await expect(overviewPage.tax).toBeVisible();
        await expect(overviewPage.total).toBeVisible();
    });


    test('TC-CHECKOUT-008 - Cancel Checkout From Information Page', async ({ page }) => {

        await navigateToCheckout(page);

        const checkoutPage = new CheckoutInformationPage(page);

        await checkoutPage.cancelCheckout();

        await expect(page).toHaveURL(/cart/);
    });


    test('TC-CHECKOUT-009 - Complete Purchase Successfully', async ({ page }) => {

        await navigateToCheckout(page);

        const checkoutPage = new CheckoutInformationPage(page);

        await checkoutPage.fillCustomerInformation(
            'Kavindya',
            'Test',
            '20000'
        );

        await checkoutPage.continueToOverview();

        const overviewPage = new CheckoutOverviewPage(page);

        await overviewPage.finishOrder();

        await expect(page).toHaveURL(/checkout-complete/);

        await expect(
            page.locator('.complete-header')
        ).toHaveText('Thank you for your order!');
    });


    test('TC-CHECKOUT-010 - Verify Order Confirmation Message', async ({ page }) => {

        await navigateToCheckout(page);

        const checkoutPage = new CheckoutInformationPage(page);

        await checkoutPage.fillCustomerInformation(
            'Kavindya',
            'Test',
            '20000'
        );

        await checkoutPage.continueToOverview();

        const overviewPage = new CheckoutOverviewPage(page);

        await overviewPage.finishOrder();

        await expect(
            page.locator('.complete-header')
        ).toHaveText('Thank you for your order!');

        await expect(
            page.locator('.complete-text')
        ).toBeVisible();
    });

});