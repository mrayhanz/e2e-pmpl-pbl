import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test.describe("Autentikasi TesYuk!", () => {
  test("tester berhasil login", async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login(
      process.env.E2E_EMAIL || "tester1@gmail.com",
      process.env.E2E_PASSWORD || "password123"
    );
    await login.expectLoggedIn();
  });

  test("login gagal dengan password salah", async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login(
      process.env.E2E_EMAIL || "tester1@gmail.com",
      "passwordsalah"
    );
    await expect(page).toHaveURL(/login/);
  });
});
