import Get from "../../PageObjectApi/Get";

describe("01 - GET / Products List", () => {
    const getApi = new Get();

    it("Returns 200 and Includes Products List", () => {
        getApi.getAllProductsList().then((res) => {
            expect(res.status).eq(200);

            const body =
                typeof res.body === "string" ? JSON.parse(res.body) : res.body;

            expect(body.responseCode).eq(200);

            const firstProduct = body.products[0];
            expect(firstProduct).have.all.keys(
                "id",
                "name",
                "price",
                "brand",
                "category"
            );

            expect(firstProduct.id).be.a("number");
            expect(firstProduct.name).be.a("string");
            expect(firstProduct.brand).be.a("string");
        });
    });
});
