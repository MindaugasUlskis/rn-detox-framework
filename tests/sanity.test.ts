import { expect } from "detox";

describe("Sanity", () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it("should show the main screen", async () => {
    await expect(element(by.text("WEBDRIVER"))).toBeVisible();
  });
});
