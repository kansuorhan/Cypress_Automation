import HomePage from "../PageObjectModel/HomePage";
import ProductPage from "../PageObjectModel/ProductPage";

describe("Case - 9 Search Product", () => {
  it("Verify Search Product Visible", () => {
    const homePage = new HomePage();
    const productPage = new ProductPage();

    homePage.visitHomePage();
    homePage.verifyHomePageLoaded();

    productPage.clickProductLink();
    productPage.verifyProductVisible();

    const product = "Green Side Placket";

    productPage.submitProductSearch(product);
    productPage.verifySearchListVisible();
    productPage.verifyProductSearchItem(product);
  });
});
