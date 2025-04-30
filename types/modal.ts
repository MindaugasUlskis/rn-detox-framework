export type ModalAction = "accept" | "dismiss" | "isVisible";

export type ModalConfig = {
  id: string;
  acceptButtonId?: string;
  dismissButtonId?: string;
};
