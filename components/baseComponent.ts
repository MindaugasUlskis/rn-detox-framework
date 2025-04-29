import { DetoxSelector } from "../types/detox";

export class BaseComponent {
  private selector: DetoxSelector;

  constructor(selector: DetoxSelector) {
    this.selector = selector;
  }

  public get element() {
    return element(this.selector);
  }

  async tap() {
    await this.element.tap();
  }
}
