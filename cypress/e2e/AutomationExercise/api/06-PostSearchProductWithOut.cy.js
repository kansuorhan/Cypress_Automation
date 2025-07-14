import Post from "../../PageObjectApi/Post";

describe("06 - POST / Negative Test - Method Not Allowed", () => {
    const postApi = new Post();

    it("Should Return 400 for POST Request to Search Product without Product Parameter", () => {
        postApi.postSearchProductWithoutParam().then((res) => {
            expect(res.status).eq(200);

            const body =
                typeof res.body === "string" ? JSON.parse(res.body) : res.body;

            expect(body.responseCode).eq(400);
            expect(body.message).contain(
                "Bad request, search_product parameter is missing in POST request."
            );
        });
    });
});
