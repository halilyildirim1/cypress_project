describe('Cypress Local Storage', () => {
    it('Dosya yukleme -1', () => {
        cy.visit('https://www.qrcode-monkey.com/').then(() => {

        cy.log(localStorage.length)

        localStorage.setItem('Cypress dersleri icin ','deneme test')
        cy.wait(2000).then(() => {
            localStorage.removeItem('Cypress dersleri icin ','deneme test')
        })
        cy.wait(1500).then(()=>{
            localStorage.clear()
        })
        })
    });
});