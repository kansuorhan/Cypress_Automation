import Delete from "../../PageObjectApi/Delete";

describe("09 - DELETE / Negative Test Verify Lodin", function () {
    const deleteApi = new Delete();

    beforeEach(function () {
        cy.fixture("user").as("userData");
    });

    it("Should Return 405 not Supported", function () {
        const user = this.userData.users[2];

        deleteApi.deleteVerifyLogin(user.email, user.password).then((res) => {
            console.log(res.body);
            expect(res.status).eq(200);

            const body =
                typeof res.body === "string" ? JSON.parse(res.body) : res.body;

            expect(body.responseCode).eq(405);
            expect(body.message).contain(
                "This request method is not supported."
            );
        });
    });
});
