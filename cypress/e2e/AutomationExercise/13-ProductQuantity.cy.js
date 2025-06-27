import HomePage from "../PageObjectModel/HomePage";
import ProductPage from "../PageObjectModel/ProductPage";

describe("Case - 13 Product Quantity", () => {
  it("Verify Product Quantity in Cart", () => {
    const homePage = new HomePage();
    const productPage = new ProductPage();

    homePage.visitHomePage();
    homePage.verifyHomePageLoaded();

    productPage.clickViewProductLink(24);
    productPage.verifyProductCartItem("Premium Polo T-Shirts");

    const item = { number: 4 };

    productPage.submitQuantity(item);
    productPage.clickAddtoCartButton();
    productPage.clickViewCartButton();
    productPage.verifyProductQuantityBox(item);
  });
});
