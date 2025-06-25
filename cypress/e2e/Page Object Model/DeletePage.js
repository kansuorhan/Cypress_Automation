class DeletePage {
  getDeleteLink() {
    cy.get(".shop-menu > .nav > :nth-child(5) > a").click();
    cy.get("b").should("have.text", "Account Deleted!");
    cy.get('[data-qa="continue-button"]').click();
  }
}

export default DeletePage;
