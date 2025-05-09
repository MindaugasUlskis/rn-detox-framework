import { expect } from "detox";
import type { NavigationTabLabel } from "../types/appTypes";
import { BaseComponent, ButtonComponent } from "../components";

export class BasePage {
  public popUpNotification: BaseComponent = new BaseComponent("loader-spinner");
  public loader: BaseComponent = new BaseComponent("pop-up-notification");
  public errorModal: BaseComponent = new BaseComponent("error-modal");

  //navigation Tab buttons
  public homeNavBtn: ButtonComponent = new ButtonComponent("Home");
  public webViewNavBtn: ButtonComponent = new ButtonComponent("WebView");
  public loginNavBtn: ButtonComponent = new ButtonComponent("Login");
  public FormsNavBtn: ButtonComponent = new ButtonComponent("Forms");
  public swipeNavBtn: ButtonComponent = new ButtonComponent("Swipe");
  public dragNavBtn: ButtonComponent = new ButtonComponent("Drag");

  //Modals
  public successModalTitle: BaseComponent = new BaseComponent("Success");
  public closeErrorModalButton: ButtonComponent = new ButtonComponent(
    "close-modal",
  );

  public async waitForLoaderToFinish(): Promise<void> {
    await expect(this.loader.getElement()).toBeVisible();
    await expect(this.loader.getElement()).not.toBeVisible();
  }

  public async closeErrorModal(): Promise<void> {
    await expect(this.errorModal.getElement()).toBeVisible();
    await this.closeErrorModalButton.getElement().tap();
    await expect(this.errorModal.getElement()).not.toBeVisible();
  }

  public async navigateWithTabBar(screen: NavigationTabLabel): Promise<void> {
    const tabMap: Record<NavigationTabLabel, ButtonComponent> = {
      home: this.homeNavBtn,
      webview: this.webViewNavBtn,
      login: this.loginNavBtn,
      forms: this.FormsNavBtn,
      swipe: this.swipeNavBtn,
      drag: this.dragNavBtn,
    };
    const tabButton = tabMap[screen];

    if (device.getPlatform() === "ios") {
      await tabButton.getElement("label").tap();
    } else {
      await tabButton.getElement("label").atIndex(1).tap();
    }
  }
}
