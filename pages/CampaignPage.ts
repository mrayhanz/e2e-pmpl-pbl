import { Page, expect } from "@playwright/test";

export class CampaignPage {
  constructor(private page: Page) {}

  async openMarketplace() {
    await this.page.goto("/kreator/campaigns");
    await expect(this.page).toHaveURL(/\/kreator\/campaigns/);
  }

  async openCampaignDetail(title: string) {
    await this.page.getByRole("link", { name: title }).first().click();
    await expect(
      this.page.getByRole("heading", { name: title }).first()
    ).toBeVisible();
  }

  async gabungCampaign() {
    await this.page.getByRole("button", { name: /Gabung Campaign/i }).click();
  }

  async expectBerhasilGabung() {
    await expect(this.page.getByText("Sudah Bergabung")).toBeVisible();
    await expect(this.page.getByText(/Berhasil bergabung!/i)).toBeVisible();
  }
}
