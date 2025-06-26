class ContactUs {
  clickContactUsLink() {
    cy.get(".shop-menu > .nav > :nth-child(8) > a").click();
  }

  verifyContactFormVisible() {
    cy.get("div.contact-form > .title").should("have.text", "Get In Touch");
  }

  fillContactForm(user) {
    cy.get('[data-qa="name"]').type(user.name);
    cy.get('[data-qa="email"]').type(user.email);
    cy.get('[data-qa="subject"]').type(user.subject);
    cy.get('[data-qa="message"]').type(user.message);
  }

  uploadFileButton() {
    const path = "indir 2.jpeg";
    cy.get(":nth-child(6) > .form-control").attachFile(path);
  }

  clickSubmitForm() {
    cy.get('[data-qa="submit-button"]').click();
  }

  verifyContactSubmitVisible() {
    cy.get(".status").should(
      "have.text",
      "Success! Your details have been submitted successfully."
    );
  }

  clickHomeButton() {
    cy.get("#form-section > .btn").click();
  }
}

export default ContactUs;
