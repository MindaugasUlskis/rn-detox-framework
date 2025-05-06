import { BaseComponent } from "../components/BaseComponent";
import { expect } from "detox";
import { NavigationTabLabel } from "../types/appTypes";

export class BasePage {
  public popUpNotification: BaseComponent = new BaseComponent("loader-spinner");
  public loader: BaseComponent = new BaseComponent("pop-up-notification");
  public errorModal: BaseComponent = new BaseComponent("error-modal");

  // missing ButtonComponent -> should be implemented further task
  // public closeErrorModalButton: ButtonComponent = new ButtonComponent("close-modal")

  public async waitForLoaderToFinish(): Promise<void> {
    await expect(this.loader.getElement()).toBeVisible();
    await expect(this.loader.getElement()).not.toBeVisible();
  }

  public async closeErrorModal(): Promise<void> {
    await expect(this.errorModal.getElement()).toBeVisible();
    //await expect (this.closeErrorModalButton.getElement()).tap()
    await expect(this.errorModal.getElement()).not.toBeVisible();
  }

  public async navigateWithTabBar(screen: NavigationTabLabel): Promise<void> {
    const element: BaseComponent = new BaseComponent(screen);
    await element.tap("label");
  }
}
