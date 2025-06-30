import DeletePage from "../../PageObjectModel/DeletePage";
import HomePage from "../../PageObjectModel/HomePage";
import InformationPage from "../../PageObjectModel/InformationPage";
import LoginPage from "../../PageObjectModel/LoginPage";

describe("Case 2 - Login User", () => {
  beforeEach(() => {
    cy.fixture("user").as("userData");
  });

  it("Login User with correct email and password", function () {
    // Not arrow function !!!
    const homePage = new HomePage();
    const loginPage = new LoginPage();
    const infoPage = new InformationPage();
    const deletePage = new DeletePage();

    homePage.visitHomePage();
    homePage.verifyHomePageLoaded();

    const user = this.userData.users[0];

    loginPage.clickSignUpLoginLink();
    loginPage.verifySignUpFormVisible();
    loginPage.fillLoginForm(user.email, user.password);
    loginPage.submitLoginForm();

    infoPage.verifyLoggedIn(this.userData.name);

    deletePage.clickDeleteAccountLink();
    deletePage.verifyAccountDeleted();
    deletePage.clickContinueButton();
  });
});
