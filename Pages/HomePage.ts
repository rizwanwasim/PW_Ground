import { test, expect, Page, Locator } from '@playwright/test'


export class HomePage {
    readonly page:Page
    readonly logo: Locator;
    readonly loginButton: Locator;


    constructor(page:Page){
        this.page = page;
        this.logo = page.getByRole('link', { name: 'cropped-logo.png' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }
}
