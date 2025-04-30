import { DetoxMatcher } from "../types/detox";

export class BaseComponent {
  private matcher: DetoxMatcher;

  constructor(matcher: DetoxMatcher) {
    this.matcher = matcher;
  }

  public getElement() {
    return element(this.matcher);
  }

  public async tap() {
    await this.getElement().tap();
  }

  public async multitap(amount: number) {
    await this.getElement().multiTap(amount);
  }
}
