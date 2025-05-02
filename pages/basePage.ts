import { BaseComponent } from "../components/BaseComponent";
import { BASE_MODAL_IDS } from "../types/baseTestIDs";
import { expect } from "detox";
import { ModalAction } from "../types/modal";
import { logger } from "../utils/logger";

export class BasePage {
  public popUpNotification: BaseComponent = new BaseComponent("loader-spinner");
  public loader: BaseComponent = new BaseComponent("pop-up-notification");

  public async waitForLoaderToFinish(): Promise<void> {
    await expect(this.loader.getElement("id")).toBeVisible();
    await expect(this.loader.getElement("id")).not.toBeVisible();
  }

  public async handleCommonModal(
    action: ModalAction,
    testId: string
  ): Promise<void> {
    const modalObject = Object.values(BASE_MODAL_IDS).find(
      (mod) => mod.id === testId
    );
    if (!modalObject) {
      const msg = `${testId} is not in the BASE_MODAL_IDS`;
      logger.error(msg);
      throw new Error();
    }

    const modal = new BaseComponent(testId);
    await expect(modal.getElement("id")).toBeVisible();

    if (action === "isVisible") return;

    const modalButtonId =
      action === "accept"
        ? modalObject?.acceptButtonId
        : modalObject?.dismissButtonId;

    if (!modalButtonId) {
      const msg = `${testId} modal does not support this action: ${action}`;
      logger.error(msg);
      throw new Error();
    }

    await new BaseComponent(modalButtonId).tap("id");
    await expect(modal.getElement("id")).not.toBeVisible();
  }
}
