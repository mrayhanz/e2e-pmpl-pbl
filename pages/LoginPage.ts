import { Page, expect } from "@playwright/test";

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto("/login");
  }

  async login(email: string, password: string) {
    await this.page.getByRole("textbox", { name: "Email" }).fill(email);
    await this.page.getByRole("textbox", { name: "Kata Sandi" }).fill(password);
    await this.page.getByRole("button", { name: "Masuk", exact: true }).click();
  }

  async expectLoggedIn() {
    await expect(this.page).toHaveURL(/\/kreator\/dashboard/);
  }
}
