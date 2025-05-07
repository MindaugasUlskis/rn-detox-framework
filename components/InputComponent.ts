import { MatcherType } from "../types/detox";
import { BaseComponent } from "./BaseComponent";

export class InputComponent extends BaseComponent {
  constructor(value: string) {
    super(value);
  }

  public async typeText(text: string, matcher?: MatcherType): Promise<void> {
    await this.getElement(matcher).typeText(text);
  }
}
