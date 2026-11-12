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

  // Idempoten: kalau kreator sudah pernah bergabung (state DB persist), tidak perlu klik.
  async gabungCampaign() {
    const tombol = this.page.getByRole("button", { name: /Gabung Campaign/i });
    if (await tombol.isVisible().catch(() => false)) {
      await tombol.click();
    }
  }

  async expectBerhasilGabung() {
    await expect(this.page.getByText("Sudah Bergabung")).toBeVisible();
  }
}
