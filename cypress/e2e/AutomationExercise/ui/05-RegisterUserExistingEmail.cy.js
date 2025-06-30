import HomePage from "../../PageObjectModel/HomePage";
import LoginPage from "../../PageObjectModel/LoginPage";
import SignUpPage from "../../PageObjectModel/SignUpPage";

describe("Case - 5 Existing Email", () => {
  it("Register User with existing email", () => {
    const homePage = new HomePage();
    const loginPage = new LoginPage();
    const signUpPage = new SignUpPage();

    homePage.visitHomePage();
    homePage.verifyHomePageLoaded();

    loginPage.clickSignUpLoginLink();

    signUpPage.fillSignUpForm("Alex20", "alex20@gmail.com");
    signUpPage.submitSignUpForm();
    signUpPage.verifyExistEmailAddressVisible();
  });
});
