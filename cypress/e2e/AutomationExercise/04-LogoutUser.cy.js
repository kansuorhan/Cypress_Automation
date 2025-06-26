import HomePage from "../PageObjectModel/HomePage";
import LoginPage from "../PageObjectModel/LoginPage";

describe("Case - 4 Logout User", () => {
  it("Logout with username and password", () => {
    const homePage = new HomePage();
    const loginPage = new LoginPage();

    homePage.visitHomePage();
    homePage.verifyHomePageLoaded();

    loginPage.clickSignUpLoginLink();
    loginPage.fillkLoginForm("alex20@gmail.com", "Alex20");
    loginPage.submitLoginForm();
    loginPage.verifyLoggedIn("Alex20");
    loginPage.submitLogedOut();
    loginPage.verifySignUpFormVisible();
  });
});
