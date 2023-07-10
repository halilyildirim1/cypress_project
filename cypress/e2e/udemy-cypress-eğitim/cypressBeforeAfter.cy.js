describe('Before After Kullanimi', () => {
    before(() => { //yapılan testte ilk önce yapmasını istediklerimizi yapıyor işlem önceliği
        cy.log('Before Klullanimi - Cypress Test')
        cy.visit('https://automationexercise.com/')
    });


    after(() => {  //yapılan testte en son  yapmasını istediklerimizi yapıyor işlem sonu
        cy.log('After Kullanimi örnek')
    });


    it('Başliği Doğrula', () => {
        cy.title().should('include',"Automation")
    });
});