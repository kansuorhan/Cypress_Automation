import Post from "../../PageObjectApi/Post";

const postApi = new Post();

describe("02 - POST / Negative Test - Method Not Allowed", () => {
    it("Should Return 405 for POST Request to Products List", () => {
        postApi.postAllProductsList().then((res) => {
            expect(res.status).to.eq(200);

            const body = JSON.parse(res.body);
            expect(body.responseCode).eq(405);
            expect(body.message).contain(
                "This request method is not supported"
            );
        });
    });
});
