class Get {
    baseUrl = "https://automationexercise.com/api";

    getAllProductsList() {
        return cy.request("GET", `${this.baseUrl}/productsList`);
    }

    getAllBrandsList() {
        return cy.request("GET", `${this.baseUrl}/brandsList`);
    }

    getUserAccountDetailEmail(email) {
        return cy.request({
            method: "GET",
            url: `${this.baseUrl}/getUserDetailByEmail`,
            qs: {email},
        });
    }
}

export default Get;
