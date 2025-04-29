
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

  async input(text: string) {
    await this.element.replaceText(text);
  }

  async clearText() {
    await this.element.clearText();
  }

  async visible() {
    await expect(this.element).toBeVisible();
  }

  async notVisible() {
    await expect(this.element).not.toBeVisible()
  }

  async exists() {
    await expect(this.element).toExist();
  }

  async notExists() {
    await expect(this.element).not.toExist();
  }

  async setDate(date: Date | string, format: string = 'ISO8601') {
    const dateStr = typeof date === 'string' ? date : date.toISOString();
    await this.element.setDatePickerDate(dateStr, format);
  }
}
