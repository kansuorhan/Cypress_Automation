import ContactUs from "../PageObjectModel/ContactUsPage";
import HomePage from "../PageObjectModel/HomePage";

describe("Case - 6 Contact", () => {
  it("Contact Us Form", () => {
    const homePage = new HomePage();
    const contactPage = new ContactUs();

    homePage.visitHomePage();
    homePage.verifyHomePageLoaded();

    contactPage.clickContactUsLink();
    contactPage.verifyContactFormVisible();

    const user = {
      name: "Alex",
      email: "alex10@gmail.com",
      subject: "Hello",
      message: "Ich mag neue Job",
    };

    contactPage.fillContactForm(user);
    contactPage.uploadFileButton();
    contactPage.clickSubmitForm();
    contactPage.verifyContactSubmitVisible();
    contactPage.clickHomeButton();

    homePage.verifyHomePageLoaded();
  });
});
