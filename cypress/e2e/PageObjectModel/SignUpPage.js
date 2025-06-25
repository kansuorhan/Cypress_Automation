class SignUpPage {
  fillSignUpForm(name, email) {
    cy.get('[data-qa="signup-name"]').type(name);
    cy.get('[data-qa="signup-email"]').type(email);
  }

  submitSignUpForm() {
    cy.get('[data-qa="signup-button"]').click();
  }

  verifyAccountInfoPageVisible() {
    cy.get(":nth-child(1) > b").should(
      "have.text",
      "Enter Account Information"
    );
  }
}

export default SignUpPage;
