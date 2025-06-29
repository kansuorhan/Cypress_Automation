class LoginPage {
  clickSignUpLoginLink() {
    cy.get(".shop-menu a[href='/login']").click();
  }

  verifySignUpFormVisible() {
    cy.get(".signup-form > h2").should("have.text", "New User Signup!");
  }

  fillLoginForm(name, password) {
    cy.get('[data-qa="login-email"]').type(name);
    cy.get('[data-qa="login-password"]').type(password);
  }

  submitLoginForm() {
    cy.get('[data-qa="login-button"]').click();
  }

  verifyLoginInvalidVisible() {
    cy.get(".login-form > form > p").should(
      "have.text",
      "Your email or password is incorrect!"
    );
  }

  verifyLoggedIn(username) {
    cy.contains(`Logged in as ${username}`).should("be.visible");
  }

  submitLogedOut() {
    cy.get(".shop-menu > .nav > :nth-child(4) > a").click();
  }
}

export default LoginPage;
