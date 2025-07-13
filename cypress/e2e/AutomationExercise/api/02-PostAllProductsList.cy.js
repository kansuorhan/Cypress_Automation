import Post from "../../PageObjectApi/Post";

const post = new Post();

describe("Negative Test - Method Not Allowed", () => {
    it("should return 405 for POST request to productsList", () => {
        cy.request({
            method: "POST",
            url: "https://automationexercise.com/api/productsList",
            failOnStatusCode: false,
        }).then((res) => {
            expect(res.status).to.eq(200);

            const body = JSON.parse(res.body);
            expect(body.responseCode).eq(405);
            expect(body.message).contain(
                "This request method is not supported"
            );
        });
    });
});
