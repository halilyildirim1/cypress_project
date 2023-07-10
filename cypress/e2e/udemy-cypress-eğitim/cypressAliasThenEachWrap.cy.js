describe('Alias, Then, Each, Wrap', () => {
    it('Kullanim Ornegi', () => {
        let itemlenght
        cy.visit('https://www.shopist.io/') //siteye gidiyor

        cy.get('.navbar-section a').as('NavbarMenus') //sitedeki css i seçerek ona takma isim veriyor
        cy.get('@NavbarMenus').then(($el)  =>{
             itemlenght = $el.lenght
            }).each(($el,index) =>{
                //cy.log($el.text())
                cy.get('@NavbarMenus').should('be.visible')
                cy.log('Navbar Menu' + index + ": " + $el.text())

                if ($el.text().includes('Bedding')){
                    cy.wrap($el).click()
                }
            
            })
        })
    });