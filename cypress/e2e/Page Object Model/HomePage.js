class HomePage {
  getHomePageLink() {
    cy.visit("https://automationexercise.com/");
    cy.get(".features_items > .title").should("have.text", "Features Items");
  }
}

export default HomePage;
