class LoginPage {
  clickSignUpLoginLink() {
    cy.get(".shop-menu a[href='/login']").click();
  }

  verifySignUpFormVisible() {
    cy.get(".signup-form > h2").should("have.text", "New User Signup!");
  }
}

export default LoginPage;
