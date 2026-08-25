import { Page, Locator } from '@playwright/test';

export class ProductsPage {
    readonly page: Page;
    readonly pageTitle: Locator;
    readonly productItems: Locator;
    readonly productNames: Locator;
    readonly productPrices: Locator;
    readonly sortDropdown: Locator;
    readonly cartButton: Locator;
    readonly menuButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.pageTitle = page.locator('.title');
        this.productItems = page.locator('.inventory_item');
        this.productNames = page.locator('.inventory_item_name');
        this.productPrices = page.locator('.inventory_item_price');
        this.sortDropdown = page.locator('[data-test="product-sort-container"]');
        this.cartButton = page.locator('.shopping_cart_link');
        this.menuButton = page.locator('#react-burger-menu-btn');
    }

    async getPageTitle() {
        return this.pageTitle.innerText();
    }

    async getProductCount() {
        return this.productItems.count();
    }

    async getProductNames() {
        return this.productNames.allInnerTexts();
    }

    async getProductPrices() {
        return this.productPrices.allInnerTexts();
    }

    async sortProducts(option: string) {
        await this.sortDropdown.selectOption(option);
    }

    async addProductToCart(productName: string) {
        const product = this.productItems.filter({
            hasText: productName
        });

        await product.locator('button').click();
    }

    async openCart() {
        await this.cartButton.click();
    }

    async openMenu() {
        await this.menuButton.click();
    }
}