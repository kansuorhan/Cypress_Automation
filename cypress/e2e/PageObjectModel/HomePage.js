class HomePage {
  visitHomePage() {
    cy.visit("https://automationexercise.com/");
  }

  verifyHomePageLoaded() {
    cy.get(".features_items > .title").should("have.text", "Features Items");
  }

  verifySubscriptionVisible() {
    cy.get(".single-widget > h2")
      .scrollIntoView({ duration: 2000 })
      .should("have.text", "Subscription");
  }

  fillEmailForm(email) {
    cy.get("#susbscribe_email").type(email);
    cy.get("#subscribe").click();
  }

  verifySubcribedVisible() {
    cy.get(".alert-success").should(
      "have.text",
      "You have been successfully subscribed!"
    );
  }

  clickCartLink() {
    cy.get(".shop-menu > .nav > :nth-child(3) > a").click();
  }

  verifyCategoryProductsVisible() {
    cy.get(".left-sidebar")
      .should("be.visible")
      .and("contain.text", "Women")
      .and("contain.text", "Men");
  }

  clickCategoryPlus(number) {
    cy.get(`:nth-child(${number}) > .panel-heading > .panel-title > a`).click();
  }

  clickWomenCategoryProducts(number) {
    cy.get(`#Women > .panel-body > ul > :nth-child(${number}) > a`).click();
  }

  verifyTitles(title) {
    cy.get(".title").should("be.visible").and("contains.text", title);
  }

  verifyPanelBody(category, name1, name2) {
    cy.get(`#${category} > .panel-body`)
      .should("be.visible")
      .and("contain.text", name1)
      .and("contain.text", name2);
  }

  verifyBrandVisible(name1, name2) {
    cy.get(".brands_products > h2").should("be.visible");

    cy.get(".brands-name")
      .should("be.visible")
      .and("contain.text", name1)
      .and("contain.text", name2);
  }

  clickBrandNameProducts(number) {
    cy.get(`.brands-name > .nav > :nth-child(${number}) > a`).click();
  }

  verifyBrandPageName(number) {
    cy.get(`.brands-name > .nav > :nth-child(${number}) > a`).then(($brand) => {
      const fullText = $brand
        .text()
        .replace(/\u00a0/g, "")
        .trim();
      const brandName = fullText.replace(/^\(\d+\)/, "").trim();

      $brand.click();

      cy.get(".title")
        .invoke("text")
        .then((titleText) => {
          const cleanedTitle = titleText.replace(/\u00a0/g, "").trim();
          expect(cleanedTitle).to.eq(`Brand - ${brandName} Products`);
        });
    });
  }
}

export default HomePage;
