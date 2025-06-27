import HomePage from "../PageObjectModel/HomePage";
import ProductPage from "../PageObjectModel/ProductPage";

describe("Case - 12 Add Product", () => {
  it("Add Product in Cart", () => {
    const homePage = new HomePage();
    const productPage = new ProductPage();

    homePage.visitHomePage();
    homePage.verifyHomePageLoaded();

    productPage.clickProductLink();
    productPage.hoverAddProductLink(1);
    productPage.clickContinueButton();
    productPage.hoverAddProductLink(2);
    productPage.clickViewCartButton();

    const items = [
      {
        number: 1,
        name: "Blue Top",
        category: "Women > Tops",
        quantity: 1,
        price: "Rs. 500",
      },
      {
        number: 2,
        name: "Men Tshirt",
        category: "Men > Tshirts",
        quantity: 1,
        price: "Rs. 400",
      },
    ];
    items.forEach((item) => {
      productPage.verifyMultipleCartAddedVisible(
        item.number,
        item.name,
        item.category,
        item.quantity,
        item.price
      );
    });
  });
});
