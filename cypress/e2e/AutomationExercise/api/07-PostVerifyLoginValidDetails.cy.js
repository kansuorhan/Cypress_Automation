import Post from "../../PageObjectApi/Post";

describe("07 - POST / Verify Login with Valid Details", () => {
    const postApi = new Post();

    beforeEach(function () {
        cy.fixture("user").as("userData");
    });

    it("Should Return 200 with Verify Login Valid Details", function () {
        const user = this.userData.users[1];
        postApi
            .postVerifyLoginValidDetails(user.email, user.password)
            .then((res) => {
                console.log(res.body);
                expect(res.status).eq(200);

                const body =
                    typeof res.body === "string"
                        ? JSON.parse(res.body)
                        : res.body;

                expect(body.responseCode).eq(200);
                expect(body.message).to.eq("User exists!");
            });
    });
});
