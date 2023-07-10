describe('Loaidng Bar', () => {
    it('Loading Bar testing', () => {
        cy.visit('https://the-internet.herokuapp.com/dynamic_loading/1')

        cy.get('button').click()
        cy.get('#loading', {timeout: 5000}).should('have.attr','style','display: none;')
        cy.get('#finish > h4').should('be.visible').and('contain','Hello World')
    });
});