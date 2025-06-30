import CheckOutPage from "../../PageObjectModel/CheckOutPage";
import DeletePage from "../../PageObjectModel/DeletePage";
import HomePage from "../../PageObjectModel/HomePage";
import InformationPage from "../../PageObjectModel/InformationPage";
import ProductPage from "../../PageObjectModel/ProductPage";
import SignUpPage from "../../PageObjectModel/SignUpPage";

import { faker } from "@faker-js/faker";

describe("Case - 24 Download Invoice after Purchase Order", () => {
  it("Download Invoice Purchase Order", () => {
    const homePage = new HomePage();
    const productPage = new ProductPage();
    const signUpPage = new SignUpPage();
    const infoPage = new InformationPage();
    const checkOutPage = new CheckOutPage();
    const deletePage = new DeletePage();

    homePage.visitHomePage();
    homePage.verifyHomePageLoaded();

    productPage.hoverAddProductLink(4);
    productPage.clickViewCartButton();
    productPage.verifyCheckOutVisible();
    productPage.clickProceedCheckOutButton();
    productPage.clickRegisterLoginButton();

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

    infoPage.fillAccountInformation(fake);
    infoPage.submitAccount();
    infoPage.verifyAccountCreated();
    infoPage.clickContinueButton();
    infoPage.verifyLoggedIn(fake.firstName);

    homePage.clickCartLink();

    productPage.clickProceedCheckOutButton();

    checkOutPage.verifyAddressDetails(
      fake.firstName,
      fake.company,
      fake.address,
      fake.city,
      fake.country,
      fake.mobile
    );

    checkOutPage.clickPlaceOrderButton();

    checkOutPage.submitPayment(
      fake.firstName,
      fake.card,
      fake.cvc,
      fake.month,
      fake.year
    );

    checkOutPage.verifyPlacedMessage();
    checkOutPage.clickPayConfirmOrder();
    checkOutPage.clickOrderPlacedContinueButton();

    deletePage.clickDeleteAccountLink();
    deletePage.verifyAccountDeleted();
  });
});
