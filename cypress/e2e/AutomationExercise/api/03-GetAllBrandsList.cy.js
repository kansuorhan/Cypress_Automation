import Get from "../../PageObjectApi/Get";

describe("03 - GET / Brand List", () => {
    const getApi = new Get();

    it("Returns 200 and Includes Brand Data", () => {
        getApi.getAllBrandsList().then((res) => {
            const body =
                typeof res.body === "string" ? JSON.parse(res.body) : res.body;

            expect(res.status).eq(200);
            expect(body.responseCode).eq(200);
            expect(body).have.property("brands");
            expect(body.brands)
                .to.be.an("array")
                .and.to.have.length.greaterThan(0);

            const first = body.brands[0];

            expect(first).have.all.keys("id", "brand");
            expect(first.id).be.a("number");
            expect(first.brand).be.a("string");
        });
    });
});
