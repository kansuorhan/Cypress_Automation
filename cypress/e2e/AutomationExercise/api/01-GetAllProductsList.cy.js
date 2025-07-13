import Get from "../../PageObjectApi/Get";

describe("01 - Get Products", () => {
    const getApi = new Get();

    it("Get All Products List", () => {
        getApi.getAllProductsList().then((res) => {
            expect(res.status).eq(200);
        });
    });
});
