describe('Screenshot Kullanimi', () => {
    it('Ekran görüntüsü alma', () => {
        cy.visit('www.google.com')
        cy.screenshot()
    });
});