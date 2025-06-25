class InformationPage {
  getInformationLink() {
    cy.get("#id_gender1").check();
    cy.get('[data-qa="password"]').type("Alex1");
    cy.get('[data-qa="days"]').select("5");
    cy.get('[data-qa="months"]').select("August");
    cy.get('[data-qa="years"]').select("1985");
    cy.get("#newsletter").check();
    cy.get('[data-qa="first_name"]').type("Alex");
    cy.get('[data-qa="last_name"]').type("Merci");
    cy.get('[data-qa="company"]').type("Deutsch");
    cy.get('[data-qa="address"]').type("Ankara Strasse");
    cy.get('[data-qa="country"]').select("United States");
    cy.get('[data-qa="state"]').type("NRW");
    cy.get('[data-qa="city"]').type("Koln");
    cy.get('[data-qa="zipcode"]').type("50672");
    cy.get('[data-qa="mobile_number"]').type("111111111111");
    cy.get('[data-qa="create-account"]').click();
    cy.get("b").should("have.text", "Account Created!");
    cy.get('[data-qa="continue-button"]').click();
    cy.get(":nth-child(10) > a").should("be.visible", "Logged in as Alex1");
  }
}

export default InformationPage;
