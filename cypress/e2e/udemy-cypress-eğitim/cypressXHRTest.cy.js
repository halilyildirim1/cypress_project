describe('XHR Test', () => {
    it('cy.request Kullanimi', () => {
        cy.request('https://jsonplaceholder.cypress.io/comments').should((Response)=>{
            expect(Response.status).to.eq(200)
            expect(Response.body).to.have.length(500)
            expect(Response).to.have.property('headers')
        })
    }); 
    it('cy.request Kullanimi-2', () => {
        cy.request('https://jsonplaceholder.cypress.io/comments')
        .its('status').should('eq',200)

    });

    it('cy.intercept Kullanimi', () => {
        cy.intercept('GET','url girilecek').as('abc')
        cy.visit('url girip')
        cy.get('#loginbutton').click()
        cy.get('#usarname').type('deneme')
        cy.get('#password').type('test')
        cy.get('#btn').click()
        cy.wait('@abc')
    });
});