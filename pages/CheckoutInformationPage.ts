import { Page, Locator } from '@playwright/test';

export class CheckoutInformationPage {
    readonly page: Page;
    readonly pageTitle: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly postalCodeInput: Locator;
    readonly continueButton: Locator;
    readonly cancelButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;

        this.pageTitle = page.locator('.title');
        this.firstNameInput = page.locator('[data-test="firstName"]');
        this.lastNameInput = page.locator('[data-test="lastName"]');
        this.postalCodeInput = page.locator('[data-test="postalCode"]');
        this.continueButton = page.locator('[data-test="continue"]');
        this.cancelButton = page.locator('[data-test="cancel"]');
        this.errorMessage = page.locator('[data-test="error"]');
    }

    async enterFirstName(firstName: string) {
        await this.firstNameInput.fill(firstName);
    }

    async enterLastName(lastName: string) {
        await this.lastNameInput.fill(lastName);
    }

    async enterPostalCode(postalCode: string) {
        await this.postalCodeInput.fill(postalCode);
    }

    async continueToOverview() {
        await this.continueButton.click();
    }

    async cancelCheckout() {
        await this.cancelButton.click();
    }

    async fillCustomerInformation(
        firstName: string,
        lastName: string,
        postalCode: string
    ) {
        await this.enterFirstName(firstName);
        await this.enterLastName(lastName);
        await this.enterPostalCode(postalCode);
    }
}