import { BaseComponent } from "../components/BaseComponent";
import { ButtonComponent } from "../components/ButtonComponent";
import { InputComponent } from "../components/InputComponent";
import { BasePage } from "./BasePage";
import { expect } from "detox";

export default new (class LoginPage extends BasePage {
  public loginScreenHeaderText: BaseComponent = new BaseComponent(
    "Login / Sign up Form"
  );
  public emailInputField: InputComponent = new InputComponent("input-email");
  public passwordInputField: InputComponent = new InputComponent(
    "input-password"
  );
  public loginButton: ButtonComponent = new ButtonComponent("button-LOGIN");

  public async goToLoginPage(): Promise<void> {
    await this.navigateWithTabBar("login");
    await expect(this.loginScreenHeaderText.getElement("text")).toBeVisible();
  }

  public async fillLoginForm(email: string, password: string): Promise<void> {
    await this.emailInputField.typeText(email);
    await this.passwordInputField.typeText(password);
  }

  public async tapLoginButton(): Promise<void> {
    await this.loginButton.tap();
  }

  public async expectSuccessModal(): Promise<void> {
    await expect(this.successModalTitle.getElement("text")).toBeVisible();
  }
})();
