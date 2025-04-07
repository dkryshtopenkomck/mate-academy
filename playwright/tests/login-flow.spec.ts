import { expect, test } from "@playwright/test";
import { LoginPage } from "../page-objects/login-page";

const credentials = [
  { email: "", password: "", valid: false },
  { email: "invalid@example.com", password: "wrongpass", valid: false },
  {
    email: "kryshtopenko.dmytro@gmail.com",
    password: "@Q1w2e3r4t5",
    valid: true,
  },
];

for (const creds of credentials) {
  test(`${creds.valid ? "valid" : "invalid"}: ${creds.email}:${creds.password}`, async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login(creds.email, creds.password);

    if (creds.valid) {
      await loginPage.expectLoginRedirect();
    } else {
      await expect(loginPage.signInHeader).toBeVisible();
    }
  });
}
