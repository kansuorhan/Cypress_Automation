import CheckOutPage from "../../PageObjectModel/CheckOutPage";
import DeletePage from "../../PageObjectModel/DeletePage";
import HomePage from "../../PageObjectModel/HomePage";
import InformationPage from "../../PageObjectModel/InformationPage";
import LoginPage from "../../PageObjectModel/LoginPage";
import ProductPage from "../../PageObjectModel/ProductPage";
import SignUpPage from "../../PageObjectModel/SignUpPage";

import { faker } from "@faker-js/faker";

describe("Case - 16 Place Order Login", () => {
  it("Place Order : Register before Checkout", () => {
    const homePage = new HomePage();
    const loginPage = new LoginPage();
    const signUpPage = new SignUpPage();
    const infoPage = new InformationPage();
    const productPage = new ProductPage();
    const checkOutPage = new CheckOutPage();
    const deletePage = new DeletePage();

    homePage.visitHomePage();
    homePage.verifyHomePageLoaded();

    loginPage.clickSignUpLoginLink();

    const user = {
      email: "alex50@gmail.com",
      password: "Alex50",
      name: "Alex50",
      company: "Adidas",
      address: "Strasse",
      city: "Koln",
      country: "United States",
      mobile: "1111111111",
    };

    const fake = {
      month: faker.date.month(),
      year: "1972",
      card: faker.finance.creditCardNumber(),
      cvc: faker.finance.creditCardCVV(),
    };

    loginPage.fillkLoginForm(user.email, user.password);
    loginPage.submitLoginForm();
    loginPage.verifyLoggedIn(user.name);

    productPage.hoverAddProductLink(6);
    productPage.clickContinueButton();
    productPage.clickCartLink();
    productPage.verifyCheckOutVisible();
    productPage.clickProceedCheckOutButton();

    checkOutPage.verifyAddressDetails(
      user.name,
      user.company,
      user.address,
      user.city,
      user.country,
      user.mobile
    );
    checkOutPage.submitDescriptiionBox("faker harika");

    checkOutPage.submitDescriptiionBox("faker harika");
    checkOutPage.clickPlaceOrderButton();
    checkOutPage.submitPayment(
      user.name,
      fake.card,
      fake.cvc,
      fake.month,
      fake.year
    );
    checkOutPage.clickPayConfirmOrder();
    // checkOutPage.verifyPlacedMessage();

    deletePage.clickDeleteAccountLink();
    deletePage.verifyAccountDeleted();
  });
});
