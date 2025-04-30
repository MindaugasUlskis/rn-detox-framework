export type SelectorType = "id" | "text" | "label" | "type";

export interface DetoxSelector {
  type: SelectorType;
  value: string;
}
