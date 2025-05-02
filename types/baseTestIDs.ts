import { ModalConfig } from "./modal";

export const BASE_MODAL_IDS: ModalConfig[] = [
  { id: "permission-modal", acceptButtonId: "allow", dismissButtonId: "deny" },
  { id: "error-modal", dismissButtonId: "close" },
  { id: "update-dialog", acceptButtonId: "update-now", dismissButtonId: "close" },
];
