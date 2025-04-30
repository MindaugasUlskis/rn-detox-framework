import { ModalConfig } from "./modal";

export const BASE_TEST_IDS = {
  loader: "loader-spinner",
  popUpNotification: "pop-up-notification",
};

export const BASE_MODAL_IDS: ModalConfig[] = [
  { id: "permission-popup", acceptButtonId: "allow", dismissButtonId: "deny" },
  { id: "error-modal", dismissButtonId: "close" },
  { id: "update-dialog", acceptButtonId: "update-now", dismissButtonId: "close" },
];
