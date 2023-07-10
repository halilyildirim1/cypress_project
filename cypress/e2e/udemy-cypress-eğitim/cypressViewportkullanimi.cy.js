describe('Viewport Kullanimi', () => {
    it('Viewport with number', () => {
        //cy.viewport(1200,1000)
        cy.visit('https://www.shopist.io/')
    });
    it.only('Viewport with string', () => {
        //cy.viewport('macbook-16')
        cy.visit('https://www.shopist.io/')
    });
    
});