describe('Cypress Write File', () => {
    it('Write File', () => {
        cy.writeFile('CypressWriteFileDoc/exampleFile.txt','Sifirdan Cypress Derslerine Hoşgeldiniz..\n')
        cy.writeFile('CypressWriteFileDoc/exampleFile.txt','Bu kursta ileri seviye cypress öğrenecksiniz',{flag:'a+'})
    });
});
describe('Cypress Read File', () => {
    it('Read File', () => {
        cy.readFile('CypressWriteFileDoc/exampleFile.txt').should('contain','cypress')
        
    });
    it('Read File -2', () => {
        cy.readFile('CypressWriteFileDoc/exampleFile.txt').then((text) =>{
            expect(text).to.contain('ileri')
        })
    });
});