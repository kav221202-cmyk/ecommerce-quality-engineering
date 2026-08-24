import { Page, Locator } from '@playwright/test';

export class ProductsPage {
    readonly page: Page;
    readonly pageTitle: Locator;
    readonly productItems: Locator;
    readonly cartButton: Locator;
    readonly menuButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.pageTitle = page.locator('.title');
        this.productItems = page.locator('.inventory_item');
        this.cartButton = page.locator('.shopping_cart_link');
        this.menuButton = page.locator('#react-burger-menu-btn');
    }

    async getPageTitle() {
        return this.pageTitle.innerText();
    }

    async getProductCount() {
        return this.productItems.count();
    }

    async openCart() {
        await this.cartButton.click();
    }

    async openMenu() {
        await this.menuButton.click();
    }
}