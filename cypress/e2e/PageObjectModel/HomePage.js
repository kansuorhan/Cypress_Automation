class HomePage {
  visitHomePage() {
    cy.visit("https://automationexercise.com/");
  }

  verifyHomePageLoaded() {
    cy.get(".features_items > .title").should("have.text", "Features Items");
  }
}

export default HomePage;
