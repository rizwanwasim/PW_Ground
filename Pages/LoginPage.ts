import { test, expect, Page, Locator } from '@playwright/test'


export class LoginPage {
    readonly page: Page
    readonly welcome: Locator;
    readonly emailLabel: Locator;
    readonly passwordLabel: Locator;
    readonly email: Locator;
    readonly password: Locator;
    readonly signin : Locator;

    // const emailis = "riz@getMaxListeners.xom";
    constructor(page: Page) {
        this.page = page;
        this.welcome = page.getByRole('heading', { name: 'Welcome Back' });
        this.emailLabel = page.getByText('Email Address or Username');
        this.passwordLabel = page.getByText('Password', { exact: true });

        this.email = page.getByLabel('Email Address or Username');
        this.password = page.getByLabel('Password');
        this.signin = page.getByRole('button', { name: 'Sign in' })
    }
    // Method to set the email input field
    // Method to set the email input field
    async setEmail(emailValue: string) {
        if (emailValue) {
            await this.email.fill(emailValue);
        }
    }

    // Method to set the password input field
    async setPassword(passwordValue: string) {
        if (passwordValue) {
            await this.password.fill(passwordValue);
        }
    }
}
