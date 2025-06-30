import HomePage from "../../PageObjectModel/HomePage";
import ProductPage from "../../PageObjectModel/ProductPage";

describe("Case - 21 Add Review on Product", () => {
  beforeEach(() => {
    cy.fixture("user").as("userData");
  });
  it("Add Review on Product", function () {
    const homePage = new HomePage();
    const productPage = new ProductPage();

    homePage.visitHomePage();

    productPage.clickProductLink();
    productPage.verifyProductListVisible();
    productPage.clickProductDetailLink();
    productPage.verifyWriteReviewVisible();

    const user = this.userData.users[1];

    productPage.submitReviewForm(user.name, user.email, user.message);
    productPage.clickSbumitReviewButton();
    productPage.verifySuccessMessage();
  });
});
