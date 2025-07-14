import {faker} from "@faker-js/faker";
import Post from "../../PageObjectApi/Post";

describe("11 - POST / Create Account", () => {
    const postApi = new Post();

    const titles = ["Mr", "Mrs"];
    const fake = {
        title: titles[Math.floor(Math.random() * titles.length)],
        password: faker.internet.password(),
        day: "5",
        month: faker.date.month(),
        year: "1972",
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        company: faker.company.name(),
        address: faker.location.buildingNumber(),
        country: "United States",
        state: faker.location.state(),
        city: faker.location.city(),
        zipcode: faker.location.zipCode(),
        mobile: faker.phone.number(),
        description: faker.commerce.department,
        card: faker.finance.creditCardNumber(),
        cvc: faker.finance.creditCardCVV(),
    };

    it("Should Return 201 User Created", () => {
        postApi.postCreateUserAccount(fake).then((res) => {
            expect(res.status).eq(200);

            console.log(res);
            const body =
                typeof res.body === "string" ? JSON.parse(res.body) : res.body;

            expect(body.responseCode).eq(201);
            expect(body.message).contain("User created!");
        });
    });
});
