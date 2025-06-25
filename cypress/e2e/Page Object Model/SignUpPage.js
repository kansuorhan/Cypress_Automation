class SignUp {
  getSingUpLink() {
    cy.get('[data-qa="signup-name"]').type("Alex1");
    cy.get('[data-qa="signup-email"]').type("alexmerci1@gmail.com");
    cy.get('[data-qa="signup-button"]').click();
    cy.get(":nth-child(1) > b").should(
      "have.text",
      "Enter Account Information"
    );
  }
}

export default SignUp;
