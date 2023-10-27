import { test, expect} from '@playwright/test';
import { HomePage } from '../nutrafunnel/pages/HomePage';
import { LoginPage } from '../nutrafunnel/pages/LoginPage';
import { Dashboard } from '../nutrafunnel/pages/Dashboard';
import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

test('Home Page NutraFunnel to Login Page', async ({ page }) => {
  const homePage = new HomePage(page)
  await page.goto('');

  await expect(homePage.logo).toBeVisible();
  await expect(homePage.loginButton).toBeVisible();
  await homePage.loginButton.click();

});

test('Login Page Loaded and Signed-in Successfully ', async ({ page }) => {
  const loginPage = new LoginPage(page)
  const dashpase = new Dashboard(page)
  await page.goto('/login/');

  await expect(loginPage.welcome).toBeVisible();
  await expect(loginPage.emailLabel).toBeVisible();
  await expect(loginPage.passwordLabel).toBeVisible();

  await loginPage.setEmail(process.env.correctEmial!);
  await loginPage.setPassword(process.env.correctPass!);
  await loginPage.signin.click();
  await expect(dashpase.dashLogo).toBeVisible();
  await expect(dashpase.logoutButton).toBeVisible();
});

// test('Dashboard Page Loaded', async ({ page }) => {
//   const dashpase = new Dashboard(page)
  
// });
