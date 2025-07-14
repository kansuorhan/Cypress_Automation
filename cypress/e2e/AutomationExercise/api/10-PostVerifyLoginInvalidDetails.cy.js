import Post from "../../PageObjectApi/Post";

describe("10 - POST / Negative Test Verify Lodin", function () {
    const postApi = new Post();

    beforeEach(function () {
        cy.fixture("user").as("userData");
    });

    it("Should Return 405 not Supported", function () {
        const user = this.userData.users[2];

        postApi
            .postVerifyLoginValidDetails(user.email, user.password)
            .then((res) => {
                console.log(res.body);
                expect(res.status).eq(200);

                const body =
                    typeof res.body === "string"
                        ? JSON.parse(res.body)
                        : res.body;

                expect(body.responseCode).eq(404);
                expect(body.message).contain("User not found!");
            });
    });
});
