import { loginPage } from "../../pages";

const defaultCredentials = {
  email: "test@test.com",
  password: "test1234",
};

describe("Authorization logic", () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it("Should successfully login", async () => {
    await loginPage.goToLoginPage();
    await loginPage.fillLoginForm(
      defaultCredentials.email,
      defaultCredentials.password
    );
    await loginPage.tapLoginButton();
    await loginPage.expectSuccessModal();
  });
});
