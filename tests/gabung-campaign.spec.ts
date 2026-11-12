import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { CampaignPage } from "../pages/CampaignPage";

test("kreator login lalu bergabung ke campaign", async ({ page }) => {
  const login = new LoginPage(page);
  const campaign = new CampaignPage(page);

  await login.goto();
  await login.login(
    process.env.E2E_EMAIL || "kreator@cliphub.com",
    process.env.E2E_PASSWORD || "password"
  );
  await login.expectLoggedIn();

  await campaign.openMarketplace();
  await campaign.openCampaignDetail("Promo Waktu Indonesia Belanja (WIB)");
  await campaign.gabungCampaign();

  await campaign.expectBerhasilGabung();
});
