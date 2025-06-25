class LoginPage {
  getSignUpLoginLink() {
    cy.get(".shop-menu > .nav > :nth-child(4) > a").click();
    cy.get(".signup-form > h2").should("have.text", "New User Signup!");
  }
}

export default LoginPage;
