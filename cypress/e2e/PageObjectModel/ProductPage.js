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

  clickViewProductLink(productNumber) {
    cy.get(".product-image-wrapper")
      .eq(productNumber - 1)
      .trigger("mouseover");

    cy.get(
      ":nth-child(26) > .product-image-wrapper > .choose > .nav > li > a"
    ).click();
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

  submitQuantity(quantity) {
    cy.get("#quantity").clear().type(quantity.number);
  }

  clickAddtoCartButton() {
    cy.get(":nth-child(5) > .btn").click();
  }

  verifyMultipleCartAddedVisible(number, name, category, quantity, price) {
    cy.get(`#product-${number}`).within(() => {
      cy.get(".cart_description h4 a")
        .should("be.visible")
        .and("contain.text", name);

      cy.get(".cart_description p")
        .should("be.visible")
        .and("contain.text", category);

      cy.get(".cart_quantity .disabled")
        .should("be.visible")
        .and("contain.text", quantity);

      cy.get(".cart_total .cart_total_price")
        .should("be.visible")
        .and("contain.text", price);
    });
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

  verifyProductCartItem(product) {
    cy.get(".product-information > h2").should("include.text", product);
  }

  verifyProductQuantityBox(item) {
    cy.get(".disabled").should("include.text", item.number);
  }

  clickCartLink() {
    cy.get(".shop-menu > .nav > :nth-child(3)").click();
  }

  verifyCheckOutVisible() {
    cy.get(".breadcrumb").should("include.text", "Shopping Cart");
  }

  clickProceedCheckOutButton() {
    cy.get(".col-sm-6 > .btn").click();
  }

  clickRegisterLoginButton() {
    cy.get(".modal-body > :nth-child(2) > a > u").click();
  }
}

export default ProductPage;
