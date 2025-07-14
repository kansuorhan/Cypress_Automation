class Delete {
    baseUrl = "https://automationexercise.com/api";

    deleteVerifyLogin(email, password) {
        return cy.request({
            method: "DELETE",
            url: `${this.baseUrl}/verifyLogin`,
            form: true,
            body: {
                email: email,
                password: password,
            },
            failOnStatusCode: false,
        });
    }

    deleteUserAccount(user) {
        return cy.request({
            method: "DELETE",
            url: `${this.baseUrl}/deleteAccount`,
            form: true,
            body: {
                email: user.email,
                password: user.password,
            },
            failOnStatusCode: false,
        });
    }
}

export default Delete;
