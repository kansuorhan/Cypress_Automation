import Post from "../../PageObjectApi/Post";
import Put from "../../PageObjectApi/Put";

import {faker} from "@faker-js/faker";

describe("13 - PUT / Update User Account", () => {
    const postApi = new Post();
    const putApi = new Put();

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

    it("Should Create a User and Then Update the Same User", () => {
        postApi.postCreateUserAccount(fake).then((res) => {
            expect(res.status).to.eq(200);

            console.log(res);

            const body =
                typeof res.body === "string" ? JSON.parse(res.body) : res.body;
            expect(body.responseCode).to.eq(201);
            expect(body.message).to.contain("User created!");

            const updatedUser = {
                ...fake,
                firstName: "Ahmet",
            };

            putApi.putUpdateUserAccount(updatedUser).then((res) => {
                expect(res.status).to.eq(200);

                console.log(res);

                const updateBody =
                    typeof res.body === "string"
                        ? JSON.parse(res.body)
                        : res.body;
                expect(updateBody.responseCode).to.eq(200);
                expect(updateBody.message).to.contain("User updated!");
            });
        });
    });
});
