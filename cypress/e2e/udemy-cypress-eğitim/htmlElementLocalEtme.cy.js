describe('Cypress Locater', () => {
    it('Html element local etme', () => {
        cy.get('#user-name')//id located etme
        cy.get('.login-box')//class locate etme
        cy.get('input')//tag Locate etme
        cy.get('input[name="user-name"]')//attribute Locate
        cy.get('a').contains("Login")
        cy.contains('Login')
    });
});