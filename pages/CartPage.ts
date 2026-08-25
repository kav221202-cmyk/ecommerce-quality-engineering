import { Page, Locator } from '@playwright/test';

export class CartPage {
    readonly page: Page;
    readonly pageTitle: Locator;
    readonly cartItems: Locator;
    readonly cartItemNames: Locator;
    readonly cartItemPrices: Locator;
    readonly removeButtons: Locator;
    readonly checkoutButton: Locator;
    readonly continueShoppingButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.pageTitle = page.locator('.title');
        this.cartItems = page.locator('.cart_item');
        this.cartItemNames = page.locator('.inventory_item_name');
        this.cartItemPrices = page.locator('.inventory_item_price');
        this.removeButtons = page.locator('.cart_button');
        this.checkoutButton = page.locator('[data-test="checkout"]');
        this.continueShoppingButton = page.locator(
            '[data-test="continue-shopping"]'
        );
    }

    async getCartItemCount() {
        return this.cartItems.count();
    }

    async getCartItemNames() {
        return this.cartItemNames.allInnerTexts();
    }

    async getCartItemPrices() {
        return this.cartItemPrices.allInnerTexts();
    }

    async removeProduct(productName: string) {
        const product = this.cartItems.filter({
            hasText: productName
        });

        await product.locator('.cart_button').click();
    }

    async checkout() {
        await this.checkoutButton.click();
    }

    async continueShopping() {
        await this.continueShoppingButton.click();
    }
}