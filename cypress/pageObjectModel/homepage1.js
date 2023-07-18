export class Homepage1{
    navigate(){
        cy.visit('https://www.trendyol.com/giris')
        cy.get('#login-email').type('halil1yildirim11@gmail.com',)
        cy.get('#login-password-input').type('test12345')
        cy.get("button[type='submit'] span").click()
    }
    search(){
        cy.get('div#sfx-discovery-search-suggestions input').type('parfüm')
    }
}