import DeletePage from "../Page Object Model/DeletePage";
import HomePage from "../Page Object Model/HomePage"; //www.automationexercise.com/test_cases
import InformationPage from "../Page Object Model/InformationPage";
import LoginPage from "../Page Object Model/LoginPage";
import SignUp from "../Page Object Model/SignUpPage";

https: describe("Case 1", () => {
  it("Register User", () => {
    const homePage = new HomePage();
    const loginPage = new LoginPage();
    const signUpBox = new SignUp();
    const infoBox = new InformationPage();
    const deletePage = new DeletePage();

    homePage.getHomePageLink();
    loginPage.getSignUpLoginLink();
    signUpBox.getSingUpLink();
    infoBox.getInformationLink();
    deletePage.getDeleteLink();
  });
});
