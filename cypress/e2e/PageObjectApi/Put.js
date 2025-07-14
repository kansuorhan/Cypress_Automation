class Put {
    baseUrl = "https://automationexercise.com/api";

    putAllBrandsList() {
        return cy.request({
            method: "PUT",
            url: `${this.baseUrl}/brandsList`,
        });
    }

    putUpdateUserAccount(user) {
        return cy.request({
            method: "PUT",
            url: `${this.baseUrl}/updateAccount`,
            form: true,
            body: {
                name: user.firstName,
                email: user.email,
                password: user.password,
                title: user.title,
                birth_date: user.day,
                birth_month: user.month,
                birth_year: user.year,
                firstname: user.firstName,
                lastname: user.lastName,
                company: user.company,
                address1: user.address,
                address2: user.address,
                country: user.country,
                zipcode: user.zipcode,
                state: user.state,
                city: user.city,
                mobile_number: user.mobile,
            },
            failOnStatusCode: false,
        });
    }
}

export default Put;
