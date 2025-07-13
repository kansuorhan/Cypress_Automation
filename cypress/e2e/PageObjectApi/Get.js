class Get {
    baseUrl = "https://automationexercise.com/api";

    getAllProductsList() {
        return cy.request("GET", `${this.baseUrl}/productsList`);
    }
}

export default Get;
