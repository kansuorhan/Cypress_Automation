class CheckOutPage {
  verifyAddressDetails(firstName, company, address, city, country, mobile) {
    cy.get("#address_delivery").within(() => {
      cy.get(".address_firstname")
        .should("be.visible")
        .and("contain.text", firstName);
      cy.get(":nth-child(3)").should("be.visible").and("contain.text", company);
      cy.get(":nth-child(4)").should("be.visible").and("contain.text", address);
      cy.get(".address_city").should("be.visible").and("contain.text", city);
      cy.get(".address_country_name")
        .should("be.visible")
        .and("contain.text", country);
      cy.get(".address_phone").should("be.visible").and("contain.text", mobile);
    });
  }

  submitDescriptiionBox(description) {
    cy.get(".form-control").type(description);
  }

  clickPlaceOrderButton() {
    cy.get(":nth-child(7) > .btn").click();
  }

  submitPayment(name, card, cvc, month, year) {
    cy.get('[data-qa="name-on-card"]').type(name);
    cy.get('[data-qa="card-number"]').type(card);
    cy.get('[data-qa="cvc"]').type(cvc);
    cy.get('[data-qa="expiry-month"]').type(month);
    cy.get('[data-qa="expiry-year"]').type(year);
  }

  clickPayConfirmOrder() {
    cy.get('[data-qa="pay-button"]').click();
  }

  verifyPlacedMessage() {
    cy.get("#success_message > .alert-success").should(
      "include.text",
      "Your order has been placed successfully!"
    );
  }

  verifyCheckOutItemVisible(name) {
    cy.get("h4 > a").should("be.visible").and("contain.text", name);
  }
}

export default CheckOutPage;
