import { DetoxSelector } from "../types/detox";
import { element } from "detox";

export class BaseComponent {
  private selector: DetoxSelector;

  constructor(selector: DetoxSelector) {
    this.selector = selector;
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
      default:
        throw new Error(`Unsupported selector type: ${this.selector.type}`);
    }
  }

  public async tap() {
    await this.getElement().tap();
  }

  public async multiTap(amount: number) {
    await this.getElement().multiTap(amount);
  }
}
