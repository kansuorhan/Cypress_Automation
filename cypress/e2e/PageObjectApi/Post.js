class Post {
    baseUrl = "https://automationexercise.com/api";

    postAllProductsList() {
        return cy.request({
            method: "POST",
            url: `${this.baseUrl}/productsList`,
            failOnStatusCode: false,
        });
    }
}

export default Post;
