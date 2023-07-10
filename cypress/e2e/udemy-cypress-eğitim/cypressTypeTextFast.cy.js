describe('Hizli text yazimi', () => {
    it('Hizli text yazimi testi', () => {
        cy.visit('https://www.automationexercise.com/contact_us')
        cy.get('#message').type("If you  do let us now. We will definements, do let us know. We will definitely work on it.")
    });
    it('Hizli text yazimi testi-2', () => {
        cy.visit('https://www.automationexercise.com/contact_us')
        cy.get('#message').type("If you haugstionr improveas orsmprovements, do let us know. We will definitely work on it.",{delay:0})
    });
});