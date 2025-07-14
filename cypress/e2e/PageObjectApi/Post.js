class Post {
    baseUrl = "https://automationexercise.com/api";

    postAllProductsList() {
        return cy.request({
            method: "POST",
            url: `${this.baseUrl}/productsList`,
            failOnStatusCode: false,
        });
    }

    postSearchProduct() {
        return cy.request({
            method: "POST",
            url: `${this.baseUrl}/searchProduct`,
            form: true,
            body: {
                search_product: "top",
            },
        });
    }

    postSearchProductWithoutParam() {
        return cy.request({
            method: "POST",
            url: `${this.baseUrl}/searchProduct`,
            form: true,
        });
    }

    postVerifyLoginValidDetails(email, password) {
        return cy.request({
            method: "POST",
            url: `${this.baseUrl}/verifyLogin`,
            form: true,
            body: {
                email: email,
                password: password,
            },
            failOnStatusCode: false,
        });
    }

    postCreateUserAccount(user) {
        return cy.request({
            method: "POST",
            url: `${this.baseUrl}/createAccount`,
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

export default Post;
