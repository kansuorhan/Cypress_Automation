import CheckOutPage from "../../PageObjectModel/CheckOutPage";
import DeletePage from "../../PageObjectModel/DeletePage";
import HomePage from "../../PageObjectModel/HomePage";
import InformationPage from "../../PageObjectModel/InformationPage";
import LoginPage from "../../PageObjectModel/LoginPage";
import ProductPage from "../../PageObjectModel/ProductPage";
import SignUpPage from "../../PageObjectModel/SignUpPage";

import { faker } from "@faker-js/faker";

describe("Case - 15 Place Order Register", () => {
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

    const fake = {
      password: faker.internet.password(),
      day: "5",
      month: faker.date.month(),
      year: "1972",
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      company: faker.company.name(),
      address: faker.location.buildingNumber(),
      country: "United States",
      state: faker.location.state(),
      city: faker.location.city(),
      zipcode: faker.location.zipCode(),
      mobile: faker.phone.number(),
      description: faker.commerce.department,
      card: faker.finance.creditCardNumber(),
      cvc: faker.finance.creditCardCVV(),
    };

    signUpPage.fillSignUpForm(fake.firstName, fake.email);
    signUpPage.submitSignUpForm();
    signUpPage.verifyAccountInfoPageVisible();

    infoPage.verifyLoggedIn(fake.firstName);

    productPage.hoverAddProductLink(6);
    productPage.clickContinueButton();
    productPage.clickCartLink();
    productPage.verifyCheckOutVisible();
    productPage.clickProceedCheckOutButton();

    checkOutPage.verifyAddressDetails(
      fake.firstName,
      fake.company,
      fake.address,
      fake.city,
      fake.country,
      fake.mobile
    );
    checkOutPage.submitDescriptiionBox("faker harika");

    checkOutPage.submitDescriptiionBox("faker harika");
    checkOutPage.clickPlaceOrderButton();
    checkOutPage.submitPayment(
      fake.firstName,
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
