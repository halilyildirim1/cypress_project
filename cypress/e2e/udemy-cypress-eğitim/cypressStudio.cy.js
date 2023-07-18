const { it } = require("mocha");

describe('Cypress Studio Kullanimi', () => {
    it('Studio kullanimi', () => {
        cy.visit('https://www.shopist.io/')
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.chairs > .menu-item-large-container > .menu-item-large').click();
        cy.get(':nth-child(2) > :nth-child(1) > a > .product-card > img').click();
        cy.get('.purchase-button').click();
        cy.get('.cart > .menu-item-large-container > .menu-item-large').click();
        cy.get('.checkout').click();
        cy.get('.continue-shopping').click();
        /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('Google Ziyaret', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://www.google.com');
        cy.get('.gb_h').click();
        cy.get('.LLD4me').click();
        cy.get('.FPdoLc > center > .RNmpXc').click();
        cy.get('#about-link').click();
        /* ==== End Cypress Studio ==== */
    });
});