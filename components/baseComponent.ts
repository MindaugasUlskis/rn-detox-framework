import { DetoxSelector } from "../types/detox";
import { element } from "detox";
import { logger } from "../utils/logger";

export class BaseComponent {
  private selector: DetoxSelector;

  constructor(selector: string | Partial<DetoxSelector>) {
    if (typeof selector === "string") {
      this.selector = { type: "id", value: selector };
    } else {
      this.selector = {
        type: selector.type ?? "id",
        value: selector.value!,
      };
    }
  }

  public getElement(): Detox.IndexableNativeElement {
    switch (this.selector.type) {
      case "id":
        return element(by.id(this.selector.value));
      case "text":
        return element(by.text(this.selector.value));
      case "label":
        return element(by.label(this.selector.value));
      case "type":
        return element(by.type(this.selector.value));
      default: {
        const msg = `Unsupported selector type: ${this.selector.type}`;
        logger.error(msg);
        throw new Error(msg);
      }
    }
  }

  public async tap() {
    await this.getElement().tap();
  }

  public async multiTap(amount: number) {
    await this.getElement().multiTap(amount);
  }
}
