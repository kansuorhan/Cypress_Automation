class InformationPage {
  fillAccountInformation(user) {
    cy.get("#id_gender1").check();
    cy.get('[data-qa="password"]').type(user.password);
    cy.get('[data-qa="days"]').select(user.day);
    cy.get('[data-qa="months"]').select(user.month);
    cy.get('[data-qa="years"]').select(user.year);
    cy.get("#newsletter").check();
    cy.get('[data-qa="first_name"]').type(user.firstName);
    cy.get('[data-qa="last_name"]').type(user.lastName);
    cy.get('[data-qa="company"]').type(user.company);
    cy.get('[data-qa="address"]').type(user.address);
    cy.get('[data-qa="country"]').select(user.country);
    cy.get('[data-qa="state"]').type(user.state);
    cy.get('[data-qa="city"]').type(user.city);
    cy.get('[data-qa="zipcode"]').type(user.zipcode);
    cy.get('[data-qa="mobile_number"]').type(user.mobile);
  }

  submitAccount() {
    cy.get('[data-qa="create-account"]').click();
  }

  verifyAccountCreated() {
    cy.get("b").should("have.text", "Account Created!");
  }

  clickContinueButton() {
    cy.get('[data-qa="continue-button"]').click();
  }

  verifyLoggedIn(username) {
    cy.contains(`Logged in as ${username}`).should("be.visible");
  }
}

export default InformationPage;
