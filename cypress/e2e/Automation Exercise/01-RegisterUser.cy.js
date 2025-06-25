import DeletePage from "../PageObjectModel/DeletePage";
import HomePage from "../PageObjectModel/HomePage";
import InformationPage from "../PageObjectModel/InformationPage";
import LoginPage from "../PageObjectModel/LoginPage";
import SignUpPage from "../PageObjectModel/SignUpPage";

describe("Case 1 - Register User", () => {
  it("Register and delete user successfully", () => {
    const homePage = new HomePage();
    const loginPage = new LoginPage();
    const signUpPage = new SignUpPage();
    const infoPage = new InformationPage();
    const deletePage = new DeletePage();

    homePage.visitHomePage();
    homePage.verifyHomePageLoaded();

    loginPage.clickSignUpLoginLink();
    loginPage.verifySignUpFormVisible();

    signUpPage.fillSignUpForm("Alex1", "alexmerci1@gmail.com");
    signUpPage.submitSignUpForm();
    signUpPage.verifyAccountInfoPageVisible();

    const user = {
      password: "Alex1",
      day: "5",
      month: "August",
      year: "1985",
      firstName: "Alex",
      lastName: "Merci",
      company: "Deutsch",
      address: "Ankara Strasse",
      country: "United States",
      state: "NRW",
      city: "Koln",
      zipcode: "50672",
      mobile: "111111111111",
    };

    infoPage.fillAccountInformation(user);
    infoPage.submitAccount();
    infoPage.verifyAccountCreated();
    infoPage.clickContinueButton();
    infoPage.verifyLoggedIn("Alex1");

    deletePage.clickDeleteAccountLink();
    deletePage.verifyAccountDeleted();
    deletePage.clickContinueButton();
  });
});
