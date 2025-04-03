// Imports //

import { Page, Locator, expect } from "@playwright/test";

/**
 * Page Object Model for the Login page.
 */
export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;
  readonly signInHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator('input[type="email"]');
    this.passwordInput = page.locator('input[type="password"]');
    this.submitButton = page.locator('button[type="submit"]');
    this.signInHeader = page.locator("h1.text-xs-center");
  }

  async navigate(): Promise<void> {
    await this.page.goto("/user/login");
  }

  async login(email: string, password: string): Promise<void> {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }

  async expectLoginRedirect(): Promise<void> {
    await expect(this.signInHeader).toBeHidden();
  }
}
