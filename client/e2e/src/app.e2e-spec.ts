import { browser, logging } from "protractor";
import { AppPage } from "./app.po";

describe("workspace-project App", () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it("should display welcome message", () => {
    page.navigateTo().catch();
    expect(page.getTitleText()).toEqual("Welcome to client!").catch();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs: logging.Entry[] = await browser.manage().logs().get(logging.Type.BROWSER).catch();
    // tslint:disable:no-floating-promises
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
