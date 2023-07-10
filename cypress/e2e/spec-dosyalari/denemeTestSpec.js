const { it } = require("mocha");

describe(' Spec Files', () => {
    it('spec file test', () => {
        cy.visit('www.google.com')
    });
});