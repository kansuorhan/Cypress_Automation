import HomePage from "../PageObjectModel/HomePage";

describe("11 - Subcription Cart", () => {
  it("Verify Subcription Cart Page", () => {
    const homePage = new HomePage();

    homePage.visitHomePage();
    homePage.verifyHomePageLoaded();
    homePage.clickCartLink();
    homePage.verifySubscriptionVisible();
    homePage.fillEmailForm();
    homePage.verifySubcribedVisible();
  });
});
