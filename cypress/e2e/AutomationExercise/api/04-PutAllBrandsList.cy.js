import Put from "../../PageObjectApi/Put";

describe("04 - PUT / Negative Test - Method Not Allowed", () => {
    const putApi = new Put();

    it("Should Return 405 for PUT Request to Brands List", () => {
        putApi.putAllBrandsList().then((res) => {
            expect(res.status).eq(200);

            const body = JSON.parse(res.body);
            expect(body.responseCode).eq(405);
            expect(body.message).contain(
                "This request method is not supported."
            );
        });
    });
});
