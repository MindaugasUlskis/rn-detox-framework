import { BaseComponent } from "../components/BaseComponent";
import { expect } from "detox";

export class BasePage {
  public popUpNotification: BaseComponent = new BaseComponent("loader-spinner");
  public loader: BaseComponent = new BaseComponent("pop-up-notification");
  public errorModal: BaseComponent = new BaseComponent("error-modal");

  // missing ButtonComponent -> should be implemented further task
  // public closeErrorModalButton: ButtonComponent = new ButtonComponent("close")

  public async waitForLoaderToFinish(): Promise<void> {
    await expect(this.loader.getElement("id")).toBeVisible();
    await expect(this.loader.getElement("id")).not.toBeVisible();
  }

  public async closeErrorModal(): Promise<void> {
    await expect(this.errorModal.getElement("id")).toBeVisible();
    //await expect (this.closeErrorModalButton.getElement('id')).tap()
    await expect(this.errorModal.getElement("id")).not.toBeVisible();
  }
}
