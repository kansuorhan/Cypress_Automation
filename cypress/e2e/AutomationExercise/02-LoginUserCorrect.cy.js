import DeletePage from "../PageObjectModel/DeletePage";
import HomePage from "../PageObjectModel/HomePage";
import InformationPage from "../PageObjectModel/InformationPage";
import LoginPage from "../PageObjectModel/LoginPage";

describe("Case 2 - Login User", () => {
  it("Login User with correct email and password", () => {
    const homePage = new HomePage();
    const loginPage = new LoginPage();
    const infoPage = new InformationPage();
    const deletePage = new DeletePage();

    homePage.visitHomePage();
    homePage.verifyHomePageLoaded();

    loginPage.clickSignUpLoginLink();
    loginPage.verifySignUpFormVisible();
    loginPage.fillkLoginForm("alex10@gmail.com", "Alex10");
    loginPage.submitLoginForm();

    infoPage.verifyLoggedIn("Alex10");

    deletePage.clickDeleteAccountLink();
    deletePage.verifyAccountDeleted();
    deletePage.clickContinueButton();
  });
});
