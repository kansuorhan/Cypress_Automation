import HomePage from "../PageObjectModel/HomePage";
import LoginPage from "../PageObjectModel/LoginPage";

describe("Case - 4 Logout User", () => {
  beforeEach(() => {
    cy.fixture("user").as("userData");
  });
  it("Logout with username and password", function () {
    const homePage = new HomePage();
    const loginPage = new LoginPage();

    homePage.visitHomePage();
    homePage.verifyHomePageLoaded();

    const user = this.userData.users[1];

    loginPage.clickSignUpLoginLink();
    loginPage.fillLoginForm(user.email, user.password);
    loginPage.submitLoginForm();
    loginPage.verifyLoggedIn("Alex50");
    loginPage.submitLogedOut();
    loginPage.verifySignUpFormVisible();
  });
});
