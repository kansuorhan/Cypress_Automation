import HomePage from "../../PageObjectModel/HomePage";
import ProductPage from "../../PageObjectModel/ProductPage";

describe("Case - 17 Remove Products from Cart", () => {
  it("Remove Products from Cart", () => {
    const homePage = new HomePage();
    const productPage = new ProductPage();

    homePage.visitHomePage();
    homePage.verifyHomePageLoaded();

    productPage.hoverAddProductLink(1); // Product Number
    productPage.clickViewCartButton();
    productPage.verifyCheckOutVisible();
    productPage.clickXButton();
    productPage.verifyProductRemovedVisible();
  });
});
