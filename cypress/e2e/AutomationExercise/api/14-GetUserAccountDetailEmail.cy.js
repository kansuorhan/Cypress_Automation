import Get from "../../PageObjectApi/Get";

describe("14 - GET / User Account Detail byb Email", () => {
    const getApi = new Get();

    let email = "alex20@gmail.com";

    it("Should Return 200 Email Parameter", () => {
        getApi.getUserAccountDetailEmail(email).then((res) => {
            expect(res.status).eq(200);

            console.log(res);
            const body =
                typeof res.body === "string" ? JSON.parse(res.body) : res.body;

            expect(body.responseCode).eq(200);
            expect(body.user.first_name).eq("Alex20");
        });
    });
});
