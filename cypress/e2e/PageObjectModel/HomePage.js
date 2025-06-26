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

  fillEmailForm() {
    cy.get("#susbscribe_email").type("Alex10@gmail.com");
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
}

export default HomePage;
