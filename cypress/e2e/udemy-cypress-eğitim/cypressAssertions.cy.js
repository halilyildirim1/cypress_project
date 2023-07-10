describe('Cypress Assertion Kullanimi', () => {
    it('Assertion kullanim Orenekleri', () => {
        cy.visit('https://www.shopist.io/') //siteye gidiyor
        cy.title().should('eq','Shop.ist')//gidilen sitenin adını doğrulatıyo  'eq' net isim olması lazım
        cy.url().should('contain','shop') //'contain = net isim olmasada olur



    cy.get('#main section > a > div > div:nth-child(1)').should('be.visible') // sitede seçilen css i doğrulama
    cy.get('#main section > a > div > div:nth-child(1)').should('be.visible').and('contain','Shop')
    cy.get('#main section > a > div > div:nth-child(1)').should('contain','Shop')

    cy.get('#main section > a > div > div:nth-child(1)').should('have.text','Shop the look')

    cy.get('#main section > a > div > div:nth-child(1)').should('have.length',1)
    cy.get('#main section > a > div > div:nth-child(1)').its('length').and('eq',1)

    cy.get('#main section > a').should('have.attr','href','/department/chairs') 
    });
});