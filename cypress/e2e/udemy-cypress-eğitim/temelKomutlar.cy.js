const cypress = require("cypress");
const { eq } = require("cypress/types/lodash");
const { it } = require("mocha");

describe('Temel Komutlar', () => {
    it('Temel Komutlar cy.visit kullanimi', () => {
        cy.visit('/') //baseUrl tanimliysa (/) yeterli
        cy.visit('/commands')
        cy.visit('https://example.cypress.io/commands') //baseUrl tanımlandıysa
        cy.visit({
            url:"https://example.cypress.io/",
            method: 'GET'

        })
    });
    it('Temel Komutlar cy.title Kullanimi', () => {
        cy.title().should('eq',"cypress.io")//title tam eşitlik olursa doğrular
        cy.title().sgould('include','cypress')//title içerisnde cypress geçiyorsa doğrular
        cy.title().should('contain','cypress')//title içerisnde cypress geçiyorsa doğrular
    });
    it('Temel Komutlar cy.url ve cy.location kullanimi', () => {
        cy.url().should('eq','https://example.cypress.io/commands')//url tam eşitlik sağlarsa doğrular
        cy.url().should('include','/commands')//url çerisnde commands geçiyorsa doğrular

        cy.location('pathname').should('eq','/commands')//gidilen path i doğrulamış oluruz
        cy.location('protocol').should('eq',"https")//gidilen protokolu doğrular
        cy.location('hostname').should('eq',"https://example.cypress.io/")//tam eşitlikte doğrular
        cy.location('hostname').should('include',"cypress.io")//cypress.io içerirse hostname doğrular
    });
    it('Temel Komutlar cy.get Kullanimi', () => {
        cy.get("#button")//Doğru kullanım
        cy.get('#button').as('debene')//cy.get('@deneme')
        cy.get('a[href="example.cypress.io"]')
        cy.get('div.button')
        cy.get('ul li:first')
    });
    it('Temel Komutlar cy.log kullanimi', () => {
        
    });
});