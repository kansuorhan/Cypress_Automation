class DeletePage {
  clickDeleteAccountLink() {
    cy.get(".shop-menu > .nav > :nth-child(5) > a").click();
  }

  verifyAccountDeleted() {
    cy.get("b").should("have.text", "Account Deleted!");
  }

  clickContinueButton() {
    cy.get('[data-qa="continue-button"]').click();
  }
}

export default DeletePage;
