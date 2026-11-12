import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test.describe("Autentikasi ClipHub", () => {
  test("kreator berhasil login", async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login(
      process.env.E2E_EMAIL || "kreator@cliphub.com",
      process.env.E2E_PASSWORD || "password"
    );
    await login.expectLoggedIn();
  });

  test("login gagal dengan password salah", async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login(
      process.env.E2E_EMAIL || "kreator@cliphub.com",
      "passwordsalah"
    );
    await expect(page).toHaveURL(/\/login/);
    await expect(
      page.getByText(/Email atau kata sandi yang Anda masukkan tidak cocok/i)
    ).toBeVisible();
  });
});
