describe('Cypress Web Scrapping', () => {
    it('write file to txt for products', () => {
        cy.step('shopist sitesine gidiyor')
        cy.visit('https://www.shopist.io/department/chairs')//siteye gidiyor
        cy.get('.description').as('chairsPrice').its('length').should('eq', 9 )//gidilen sitede .description sınıfını buluyo
          //.as sınıfa takma isim veriyor 

        cy.step('Değişken tanımlıyor')
        const results =[]; //results adında değişken tanımlıyo []=>boş olarak başlatıyor
        cy.step('loglama işlemi gerçekleşiyor')
        cy.get('@chairsPrice').each(($el, index) => { //takma isim verilen sınıfın .each kullanarak her birini yazdırıyor
            
            cy.log("Results: " + index + "-" + $el.text()) //değişkeni cypressde yazı olarak yazdırıyor
            results.push($el.text())//isimi verilen değişkene .push yapılarak veriyi alıyor
        }).then( () => { 
            cy.writeFile('CypressWriteFileDoc/chairsPrice.txt', results) //bir dosya oluşturup içine results u yazdırıyor
        })
    });
});