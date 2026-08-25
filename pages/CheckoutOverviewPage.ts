import { Page, Locator } from '@playwright/test';

export class CheckoutOverviewPage {
    readonly page: Page;
    readonly pageTitle: Locator;
    readonly cartItems: Locator;
    readonly itemNames: Locator;
    readonly itemPrices: Locator;
    readonly subtotal: Locator;
    readonly tax: Locator;
    readonly total: Locator;
    readonly finishButton: Locator;
    readonly cancelButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.pageTitle = page.locator('.title');
        this.cartItems = page.locator('.cart_item');
        this.itemNames = page.locator('.inventory_item_name');
        this.itemPrices = page.locator('.inventory_item_price');
        this.subtotal = page.locator('.summary_subtotal');
        this.tax = page.locator('.summary_tax');
        this.total = page.locator('.summary_total');
        this.finishButton = page.locator('[data-test="finish"]');
        this.cancelButton = page.locator('[data-test="cancel"]');
    }

    async getItemNames() {
        return this.itemNames.allInnerTexts();
    }

    async getItemPrices() {
        return this.itemPrices.allInnerTexts();
    }

    async getSubtotal() {
        return this.subtotal.innerText();
    }

    async getTax() {
        return this.tax.innerText();
    }

    async getTotal() {
        return this.total.innerText();
    }

    async finishOrder() {
        await this.finishButton.click();
    }

    async cancelCheckout() {
        await this.cancelButton.click();
    }
}