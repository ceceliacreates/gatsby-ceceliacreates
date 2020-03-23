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
        cy.url().should('eq', "http://localhost:8000/");
        cy.contains("FAQ").click();
        cy.url().should('eq', "http://localhost:8000/faq");
        cy.contains("Home").click();
        cy.url().should('eq', "http://localhost:8000/");
    })
})