import HomePage from "../../PageObjectModel/HomePage";

describe("Case - 18 View Category Products", () => {
  it("Category Products", () => {
    const homePage = new HomePage();

    homePage.visitHomePage();
    homePage.verifyCategoryProductsVisible();
    homePage.clickCategoryPlus(1); // Category Panel Selection
    homePage.clickWomenCategoryProducts(2); // Women Category Dress - Tops - Saree Selection
    homePage.verifyTitles("Women - Tops Products");
    homePage.clickCategoryPlus(2); // Category Panel Selection
    homePage.verifyPanelBody("Men", "Tshirts", "Jeans");
  });
});
