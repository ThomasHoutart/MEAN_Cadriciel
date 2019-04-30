import { browser, by, element } from "protractor";

export class AppPage {
  // tslint:disable:no-any
  public async navigateTo(): Promise<any> {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  public async getTitleText(): Promise<string> {
    return element(by.css("app-root h1")).getText() as Promise<string>;
  }
}
