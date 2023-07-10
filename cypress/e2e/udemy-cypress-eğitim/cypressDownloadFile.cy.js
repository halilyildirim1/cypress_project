describe('Cypress Download File ', () => {
    after(() => {
        cy.deleteDownloadsFolder()
    });
    it('Download File', () => {
        cy.on('uncaught:exception ',(err,runnable) => {return false})
        cy.visit('https://demoqa.com/upload-download')  //siteye gidiyor
        cy.get('#downloadButton').click() //css  seçiyor  'click' tıklıyor
        cy.get('a.btn-primary').click() 
    });
});