import HomePage from "../PageObjectModel/HomePage";

describe("Case - 10 Verify Subscription", () => {
  it("Verify Subscription Home Page", () => {
    const homePage = new HomePage();

    homePage.visitHomePage();
    homePage.verifyHomePageLoaded();
    homePage.verifySubscriptionVisible();
    homePage.fillEmailForm();
    homePage.verifySubcribedVisible();
  });
});
