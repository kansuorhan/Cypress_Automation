import HomePage from "../PageObjectModel/HomePage";
import TestCasePage from "../PageObjectModel/TestCasePage";

describe("Case - 7 Test Case", () => {
  it("Verify Test Case Page", () => {
    const homePage = new HomePage();
    const testPage = new TestCasePage();

    homePage.visitHomePage();
    homePage.verifyHomePageLoaded();

    testPage.clickTestLink();
    testPage.verifyTestCaseVisible();
  });
});
