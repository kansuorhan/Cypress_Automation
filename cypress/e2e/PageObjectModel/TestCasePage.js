class TestCasePage {
  clickTestLink() {
    cy.get(".shop-menu > .nav > :nth-child(5) > a").click();
  }

  verifyTestCaseVisible() {
    cy.get("span")
      .contains(
        "Below is the list of test Cases for you to practice the Automation"
      )
      .should("be.visible");
  }
}

export default TestCasePage;
