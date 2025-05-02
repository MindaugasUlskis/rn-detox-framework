import { element } from "detox";
import { logger } from "../utils/logger";
import { MatcherType } from "../types/detox";

export class BaseComponent {
  private value: string;

  constructor(value: string) {
    this.value = value;
  }

  public getElement(matcher: MatcherType = 'id'): Detox.IndexableNativeElement {
    switch (matcher) {
      case "id":
        return element(by.id(this.value));
      case "text":
        return element(by.text(this.value));
      case "label":
        return element(by.label(this.value));
      case "type":
        return element(by.type(this.value));
      default: {
        const msg = `Unsupported matcher type: ${matcher} for element: ${this.value}`;
        logger.error(msg);
        throw new Error(msg);
      }
    }
  }

  public async tap(matcher: MatcherType) {
    await this.getElement(matcher).tap();
  }

  public async multiTap(matcher: MatcherType, amount: number) {
    await this.getElement(matcher).multiTap(amount);
  }
}
