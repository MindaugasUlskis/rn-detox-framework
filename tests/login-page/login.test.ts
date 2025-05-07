import { LoginPage } from "../../pages/LoginPage";
import { expect } from "detox";

const defaultCredentials = {
  email: "test@test.com",
  password: "test1234",
};

describe("Authorization logic", () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it("Should successfully login", async () => {
    const page: LoginPage = new LoginPage();

    await page.goToLoginPage();
    await page.fillLoginForm(
      defaultCredentials.email,
      defaultCredentials.password
    );
    await page.tapLoginButton();
    await page.expectSuccessModal()
  });
});
