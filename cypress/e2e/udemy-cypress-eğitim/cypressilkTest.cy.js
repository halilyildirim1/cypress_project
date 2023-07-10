describe('Cypress ile İlk Test', () => {
    it('ilk test', () => {
        cy.visit('https://automationexercise.com/')
        cy.title().should('eq',"Automation Exercise")
        cy.url().should('eq','https://automationexercise.com/')
    });
        it('ikinci test', () => {
            cy.visit('https://automationexercise.com/')
            cy.title().should('include',"Automation")
            cy.url().should('include','automationexercise.com')
    });
    
});