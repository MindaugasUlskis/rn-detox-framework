import { BaseComponent } from ".";
import { MatcherType } from "../types/detox";

export class InputComponent extends BaseComponent {
  public async typeText(text: string, matcher?: MatcherType): Promise<void> {
    await this.getElement(matcher).typeText(text);
  }
}
