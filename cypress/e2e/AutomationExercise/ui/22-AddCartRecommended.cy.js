import HomePage from "../../PageObjectModel/HomePage";
import ProductPage from "../../PageObjectModel/ProductPage";

describe("Case - 22 Add to Cart from Recommended Items", () => {
  it("Add Cart Recommended Items", () => {
    const homePage = new HomePage();
    const productPage = new ProductPage();

    homePage.visitHomePage();
    homePage.clickScrollViewButtom();
    homePage.verifyRecommendedItemsVisible();

    productPage.hoverAddProductLink(39);
    productPage.clickViewCartButton();
    productPage.verifyCheckOutVisible();
  });
});
