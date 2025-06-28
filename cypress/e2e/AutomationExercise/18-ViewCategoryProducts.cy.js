import HomePage from "../PageObjectModel/HomePage";

describe("Case - 18 View Category Products", () => {
  it("Category Products", () => {
    const homePage = new HomePage();

    homePage.visitHomePage();
    homePage.verifyCategoryProductsVisible();
    homePage.clickCategoryPlus(1);
    homePage.clickWomenCategoryProducts(2);
    homePage.verifyTitles("Women - Tops Products");
    homePage.clickCategoryPlus(2);
    homePage.verifyPanelBody("Men", "Tshirts", "Jeans");
  });
});
