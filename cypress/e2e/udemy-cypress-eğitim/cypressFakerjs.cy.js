const{ faker} = require('@faker-js/faker')

let fakeEmail = faker.internet.email()
let fakePassword = faker.internet.password()
let fakeName = faker.name.firstName()

describe('FakerJS Kullanimi', () => {
    it('fakerjs ile ornek test', () => {
        cy.visit('https://automationexercise.com/login')

        cy.get("input[data-qa='login-email']").type(fakeEmail)
        cy.get("input[data-qa='login-password']").type(fakePassword)
        cy.get("[data-qa='login-button']").click()
    });
});// rastgele email ve şifre alıyo