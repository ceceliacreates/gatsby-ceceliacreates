 
/// <reference types="Cypress" />

describe('validates ui', function () {
    this.beforeEach(function() {
        cy.visit("/");
    })
    it('asserts that page elements have rendered', function () {
        cy.contains("Cecelia Martinez");
        cy.contains("Code + Content");
        cy.contains("Hey there!");
        cy.contains("👋");
        cy.get('ul li').should("have.length", 6)
        cy.get('picture > img').should("be.visible");
        cy.contains("☝️");
        cy.contains("©");
    })

    it('clicks navigation links within site', function () {
        cy.url().should('eq', `${Cypress.config('baseUrl')}/`)
        cy.contains("FAQ").click();
        cy.url().should('contain', "faq");
        cy.contains("Speaking").click();
        cy.url().should("contain", "speaking");
        cy.contains("Home").click();
        cy.url().should("eq", `${Cypress.config('baseUrl')}/`);
    })
})