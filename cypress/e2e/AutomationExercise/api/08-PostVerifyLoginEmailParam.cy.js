import Post from "../../PageObjectApi/Post";

describe("08 - POST /  Negative Test - Bad Request ", () => {
    const postApi = new Post();

    beforeEach(function () {
        cy.fixture("user").as("userData");
    });

    it("Should Return 400 without Email Parameter", function () {
        const user = this.userData.users[1];
        postApi.postVerifyLoginValidDetails(user.password).then((res) => {
            console.log(res.body);
            expect(res.status).eq(200);

            const body =
                typeof res.body === "string" ? JSON.parse(res.body) : res.body;

            expect(body.responseCode).eq(400);
            expect(body.message).to.eq(
                "Bad request, email or password parameter is missing in POST request."
            );
        });
    });
});
