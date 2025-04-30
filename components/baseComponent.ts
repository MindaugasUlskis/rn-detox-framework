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

  async multitap(amount: number) {
    await this.element.multiTap(amount);
  }

  // should be in scrollview/flatlist components
  // async scrollToElement(element: Detox.Element){
  //   await waitFor(element).toBeVisible().whileElement(this.selector).scroll(100, 'down');
  // }
}
