describe('Cypress Env Variables', () => {
    it('Ortam degişkenlerine kullanim örnegi ', () => {
        cy.visit(Cypress.env('saucedemo'))
    });
});