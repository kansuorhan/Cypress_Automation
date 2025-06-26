class ProductPage {
  clickProductLink() {
    cy.get(".shop-menu > .nav > :nth-child(2) > a").click();
  }

  verifyProductVisible() {
    cy.get(".title").should("have.text", "All Products");
  }

  verifyProductListVisible() {
    cy.get(
      ":nth-child(3) > .product-image-wrapper > .single-products > .productinfo > p"
    )
      .should("be.visible")
      .and("have.text", "Blue Top");
  }

  hoverAddProductLink(productNumber) {
    cy.get(".product-image-wrapper")
      .eq(productNumber - 1)
      .trigger("mouseover")
      .within(() => {
        cy.get(".add-to-cart").first().click();
      });
  }

  clickContinueButton() {
    cy.get(".modal-footer > .btn").click();
  }

  clickFirstProductLink() {
    cy.get(
      ":nth-child(3) > .product-image-wrapper > .single-products > .productinfo > img"
    ).click();
  }

  clickProductDetailLink() {
    cy.get(
      ":nth-child(3) > .product-image-wrapper > .choose > .nav > li > a"
    ).click();
  }

  clickViewCartButton() {
    cy.get("u").click();
  }

  verifyCartAddedVisible(number, name, category) {
    cy.get(`#product-${number} > .cart_description > h4 > a`)
      .should("be.visible")
      .and("contain.text", name);
    cy.get(`#product-${number} > .cart_description > p`)
      .should("be.visible")
      .and("contain.text", category);
  }

  verifyProductDetailVisible() {
    const productInfo = cy.get(".product-information");
    productInfo.should("be.visible");
    productInfo.find("h2").should("contain", "Blue Top");
    productInfo.find(":nth-child(3)").should("contain", "Category");
    productInfo.find(":nth-child(5) > span").should("include.text", "Rs.");
    productInfo.find(":nth-child(6)").should("contain", "Availability");
    productInfo.find(":nth-child(7)").should("contain", "Condition: New");
    productInfo.find(":nth-child(8)").should("contain", "Brand");
  }

  submitProductSearch(product) {
    cy.get("#search_product").type(product);
    cy.get("#submit_search").click();
  }

  verifySearchListVisible() {
    cy.get(".title").should("have.text", "Searched Products");
  }

  verifyProductSearchItem(product) {
    cy.get(".productinfo > p").should("include.text", product);
  }
}

export default ProductPage;
