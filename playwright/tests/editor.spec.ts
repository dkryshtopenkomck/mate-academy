import { test, expect } from "@playwright/test";
import { EditorPage } from "../page-objects/editor-page";
import { LoginPage } from "../page-objects/login-page";

const testCases = [
  {
    title: "Playwright Guide",
    about: "An article about using Playwright",
    tldr: "How to test with Playwright",
    tags: ["testing", "e2e"],
    valid: true,
  },
  {
    title: "",
    about: "",
    tldr: "",
    tags: [],
    valid: false,
  },
  {
    title: "Missing TLDR",
    about: "Only title and about filled",
    tldr: "",
    tags: ["partial"],
    valid: false,
  },
];

test.describe("Editor Page - Article Publishing", () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login("kryshtopenko.dmytro@gmail.com", "@Q1w2e3r4t5");
    await loginPage.expectLoginRedirect();
  });

  for (const { title, about, tldr, tags, valid } of testCases) {
    const testName = `${valid ? "valid" : "invalid"}: title="${title}" | about="${about}" | tldr="${tldr}" | tags="${tags.join(",")}"`;

    test(testName, async ({ page }) => {
      const editorPage = new EditorPage(page);
      await editorPage.navigate();
      await editorPage.fillForm(title, about, tldr, tags);
      await editorPage.submit();

      if (valid) {
        await editorPage.expectPublishSuccess();
      } else {
        await editorPage.expectFormStillVisible();
      }
    });
  }
});
