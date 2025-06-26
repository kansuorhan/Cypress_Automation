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

  clickProductDetailLink() {
    cy.get(
      ":nth-child(3) > .product-image-wrapper > .choose > .nav > li > a"
    ).click();
  }

  verifyProductDetailVisible() {
    cy.get(".product-information").should("be.visible");
    cy.get(".product-information > h2").should("have.text", "Blue Top");
    cy.get(".product-information > :nth-child(3)").should(
      "have.text",
      "Category: Women > Tops"
    );
    cy.get(":nth-child(5) > span").should("include.text", "Rs.");
    cy.get(".product-information > :nth-child(6)").should(
      "have.text",
      "Availability: In Stock"
    );
    cy.get(".product-information > :nth-child(7)").should(
      "have.text",
      "Condition: New"
    );
    cy.get(".product-information > :nth-child(8)").should(
      "include.text",
      "Brand"
    );
  }

  submitProductSeaarch(product) {
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
