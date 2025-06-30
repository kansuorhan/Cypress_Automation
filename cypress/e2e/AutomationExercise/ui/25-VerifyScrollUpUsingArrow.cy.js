import HomePage from "../../PageObjectModel/HomePage";

describe("Case - 25 Verify Scroll Up using Arrow Button & Scroll Down Functionality", () => {
  it("Verify Scroll Up using Arrow Button", () => {
    const homePage = new HomePage();

    homePage.visitHomePage();
    homePage.verifyHomePageLoaded();
    homePage.clickScrollViewButtom();
    homePage.verifySubscriptionVisible();
    homePage.clickScrollBarUp();
    homePage.verifyFullFledgedPracticeVisible();
  });
});
