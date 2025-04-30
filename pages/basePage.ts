import { BaseComponent } from "../components/baseComponent";
import { BASE_MODAL_IDS, BASE_TEST_IDS } from "../types/baseTestIDs";
import { ModalAction } from "../types/modal";
import { logger } from "../utils/logger";

export class basePage {
  get popUpNotification() {
    return new BaseComponent(by.id(BASE_TEST_IDS.popUpNotification));
  }

  async waitForLoaderToFinish() {
    const loader = new BaseComponent(by.id(BASE_TEST_IDS.loader));

    await expect(loader.element).toBeVisible();
    await expect(loader.element).not.toBeVisible();
  }

  async handleCommonModal(action: ModalAction, testId: string) {
    const modalObject = Object.values(BASE_MODAL_IDS).find(
      (mod) => mod.id === testId
    );
    if (!modalObject) {
      const msg = `${testId} is not in the BASE_MODAL_IDS`;
      logger.error(msg);
      throw new Error();
    }

    const modal = new BaseComponent(by.id(testId));
    await expect(modal.element).toBeVisible();

    if (action === "isVisible") return;

    const modalButtonId =
      action === "accept"
        ? modalObject?.acceptButtonId
        : modalObject?.dismissButtonId;

    if (!modalButtonId) {
      const msg = `${testId} modal does not supper this action: ${action}`;
      logger.error(msg);
      throw new Error();
    }

    await new BaseComponent(by.id(modalButtonId)).tap();
    await expect(modal.element).not.toBeVisible();
  }
}
