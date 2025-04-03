// Imports //

import { Page, Locator, expect } from "@playwright/test";

// Exports //

/**
 * Page Object Model for the Article Editor page.
 */
export class EditorPage {
  readonly page: Page;
  readonly titleInput: Locator;
  readonly aboutInput: Locator;
  readonly tldrInput: Locator;
  readonly tagsInput: Locator;
  readonly publishButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.titleInput = page.locator('input[placeholder="Article Title"]');
    this.aboutInput = page.locator(
      'input[placeholder="What\'s this article about?"]',
    );
    this.tldrInput = page.locator(
      'textarea[placeholder="Write your article (in markdown)"]',
    );
    this.tagsInput = page.locator('input[placeholder="Enter tags"]');
    this.publishButton = page.locator('button:has-text("Publish")');
  }

  async navigate(): Promise<void> {
    await this.page.goto("/editor");
  }

  async fillForm(
    title: string,
    about: string,
    tldr: string,
    tags: string[],
  ): Promise<void> {
    await this.titleInput.fill(title);
    await this.aboutInput.fill(about);
    await this.tldrInput.fill(tldr);

    for (const tag of tags) {
      await this.tagsInput.fill(tag);
      await this.tagsInput.press("Enter", {
        delay: 500,
      });
    }
  }

  async submit(): Promise<void> {
    await this.publishButton.click();
  }

  async expectPublishSuccess(): Promise<void> {
    await expect(this.page).not.toHaveURL(/\/editor$/, { timeout: 10000 });
  }

  async expectFormStillVisible(): Promise<void> {
    await expect(this.titleInput).toBeVisible();
  }
}
