import Post from "../../PageObjectApi/Post";

describe("05 - POST / Search Products", () => {
    const postApi = new Post();

    it("Should Return 200 for POST Request to Products List", () => {
        postApi.postSearchProduct().then((res) => {
            expect(res.status).to.eq(200);

            const body =
                typeof res.body === "string" ? JSON.parse(res.body) : res.body;

            expect(body).to.have.property("responseCode", 200);
            expect(body).to.have.property("products").and.to.be.an("array");
            if (body.products.length > 0) {
                expect(body.products[0]).to.include.all.keys(
                    "id",
                    "name",
                    "price",
                    "brand",
                    "category"
                );
            }
        });
    });
});
