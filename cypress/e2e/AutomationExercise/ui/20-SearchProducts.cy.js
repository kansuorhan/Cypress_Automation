import CheckOutPage from "../../PageObjectModel/CheckOutPage";
import HomePage from "../../PageObjectModel/HomePage";
import LoginPage from "../../PageObjectModel/LoginPage";
import ProductPage from "../../PageObjectModel/ProductPage";

describe("Case - 20 Search Products", () => {
  beforeEach(() => {
    cy.fixture("user").as("userData");
  });

  it("Search Products & Verify Cart After Login", function () {
    const homePage = new HomePage();
    const productPage = new ProductPage();
    const checkOutPage = new CheckOutPage();
    const loginPage = new LoginPage();

    homePage.visitHomePage();

    productPage.clickProductLink();
    productPage.verifyProductVisible();
    productPage.submitProductSearch("Soft Stretch Jeans");
    productPage.verifyProductSearchItem();
    productPage.hoverAddProductLink(1); // Add item on Cart
    productPage.clickViewCartButton();
    productPage.verifyCheckOutVisible();

    checkOutPage.verifyCheckOutItemVisible("Soft Stretch Jeans");

    const user = this.userData.users[1];

    loginPage.clickSignUpLoginLink();
    loginPage.fillLoginForm(user.email, user.password);
    loginPage.submitLoginForm();

    productPage.clickCartLink();

    checkOutPage.verifyCheckOutItemVisible("Soft Stretch Jeans");
  });
});
