import HomePage from "../../PageObjectModel/HomePage";

describe("Casae - 19 View & Cart Brand Products", () => {
  it("View & Cart Brand Products", () => {
    const homePage = new HomePage();

    homePage.visitHomePage();
    homePage.verifyBrandVisible("Polo", "Babyhug");
    homePage.clickBrandNameProducts(1); // Brands Name Polo - H&M - Madame etc Selection
    homePage.verifyBrandPageName(1); // Brands Name Verify Polo
    homePage.clickBrandNameProducts(3); // Brands Name Select Madame
    homePage.verifyBrandPageName(3); // Brands Name Verify Madame
  });
});
