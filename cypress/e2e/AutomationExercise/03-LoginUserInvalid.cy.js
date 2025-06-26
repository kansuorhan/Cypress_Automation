import HomePage from "../PageObjectModel/HomePage";
import LoginPage from "../PageObjectModel/LoginPage";

describe("Case 3 - Login User Invalid", () => {
  it("Login User with incorrect email and password", () => {
    const homePage = new HomePage();
    const loginPage = new LoginPage();

    homePage.visitHomePage();
    homePage.verifyHomePageLoaded();

    loginPage.clickSignUpLoginLink();
    loginPage.verifySignUpFormVisible();
    loginPage.fillkLoginForm("alex10@gmail.com", "Alex100");
    loginPage.submitLoginForm();
    loginPage.verifyLoginInvalidVisible();
  });
});
