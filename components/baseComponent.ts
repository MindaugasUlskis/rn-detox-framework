import { DetoxSelector } from "../types/detox";

export class BaseComponent {
  private selector: DetoxSelector;

  constructor(selector: DetoxSelector) {
    this.selector = selector;
  }

  public getElement() {
    return element(this.selector);
  }

  public async tap() {
    await this.getElement().tap();
  }

  public async multitap(amount: number) {
    await this.getElement().multiTap(amount);
  }
}
