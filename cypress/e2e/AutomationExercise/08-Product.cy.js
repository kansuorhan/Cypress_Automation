import HomePage from "../PageObjectModel/HomePage";
import ProductPage from "../PageObjectModel/ProductPage";

describe("Product Verify", () => {
  it("Verify All Products - Product Detail Page", () => {
    const homePage = new HomePage();
    const productPage = new ProductPage();

    homePage.visitHomePage();
    homePage.verifyHomePageLoaded();

    productPage.clickProductLink();
    productPage.verifyProductVisible();
    productPage.verifyProductListVisible();
    productPage.clickProductDetailLink();
    productPage.verifyProductDetailVisible();
  });
});
