    import { Homepage1 } from "../../pageObjectModel/homepage1";
    const homepageEvkur = new Homepage1()
describe('Trendyol Test', () => {
    beforeEach(() => {
        cy.on('uncaught:exception',(err, runnable) => {return false})
    });
    it.only('Trendyol sitesinde test', () => {
        cy.step('Trendyol.com sitesine gidip üye girişi yapılıyor')
        homepageEvkur.navigate()
        cy.wait(3000)
        cy.step('Arama kısmına parfüm aratması yapılıyor')
        homepageEvkur.search()
        cy.wait(3000)
        cy.step('Parfüm aranmasını yazdıktan sonra ara butonuna tıklanıyor')
        cy.get('.cyrzo7gC').click()
        cy.step('Ürün sepete ekleniyor')
        cy.wait(3000)
        cy.get('div#search-app div:nth-child(5) > div.p-card-chldrn-cntnr.card-border > div.btn-basket > button > div.add-to-bs-tx').click()
        cy.step('Sepetim bölümüne tıklanarak ürüne gidiliyor')
        cy.get("a[class='link account-basket'] p[class='link-text']").click({force: true})
        cy.step('ürün sepetten siliniyor')
        cy.wait(3000)
        cy.get('div#pb-container button > i',{timeout:3000}).click()
        cy.step('Anasayfaya dönüyor')
        cy.wait(3000)
        cy.get('a#logo > img').click()
    });

});