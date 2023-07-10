describe('Back Forward Kullanimi', () => {
    it('cypress.io sayfasina gidip ileri geri komutlarini öğreneceğiz', () => {
        cy.visit('https://www.cypress.io/')
        cy.get('nav > div > ul > li:nth-child(5) > a').click()
        cy.title().should('eq','Scale Open-Source Testing with Cypress Cloud | Cypress Cloud Pricing')

        cy.go('back')
        cy.title().should('eq','JavaScript Component Testing and E2E Testing Framework | Cypress')

        cy.go('forward')
        cy.title().should('eq','Scale Open-Source Testing with Cypress Cloud | Cypress Cloud Pricing')
    });
});