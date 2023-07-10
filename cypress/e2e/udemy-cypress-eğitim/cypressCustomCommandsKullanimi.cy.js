describe('Custom Commands', () => {
    beforeEach(() => {
        cy.visit('https://www.automationexercise.com/login')
    });
    it('Custom Commands Kullanim Ornek Invalid Username Valid Password', () => {
        cy.login('deneme@abc.com' , 'denemeParola') //gidilen sitede giriş yapılan yere bu e posta ve şifreyi yazıyor
    
    });
    it('Custom Commands Kullanim Ornek Valid Username Invalid Password', () => {
        cy.login('deneme@gmail.com' , 'denemeParolaaa')
    
    });
});