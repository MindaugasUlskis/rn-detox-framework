import { LoginPage } from "../../pages";
  
const defaultCredentials = {
  email: "test@test.com",
  password: "test1234",
};

describe("Authorization logic", () => {
  beforeAll(async() => {
    await device.launchApp();
  });

  it("Should successfully login", async() => {
    await LoginPage.goToLoginPage();
    await LoginPage.fillLoginForm(
      defaultCredentials.email,
      defaultCredentials.password,
    );
    await LoginPage.tapLoginButton();
    await LoginPage.expectSuccessModal();
  });
});
