import { test, expect, Page, Locator } from '@playwright/test'


export class Dashboard {
    readonly page:Page
    readonly dashLogo: Locator;
    readonly logoutButton: Locator;


    constructor(page:Page){
        this.page = page;
        this.dashLogo = page.getByRole('link', { name: 'Nutrafunnels', exact: true });
        this.logoutButton = page.getByRole('link', { name: 'Logout' })
    }
}
