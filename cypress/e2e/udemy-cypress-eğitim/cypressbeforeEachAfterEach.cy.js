describe('BeforeEach AfterEach Kullanimi', () => {
    beforeEach(() => {
        cy.log('BeforeEach Klullanimi - Cypress Test')
        cy.visit('https://automationexercise.com/')
    });


    afterEach(() => {
        cy.log('AfterEach Kullanimi örnek')
    });


    it('Başliği Doğrula', () => {
        cy.title().should('include',"Automation")
    });

    it('Url Doğrula', () => {
        cy.url().should('include','automationexercise.com')
    });

    it('Hostname Doğrula', () => {
        cy.location('hostname').should('include','automationexercise.com')
    });
});