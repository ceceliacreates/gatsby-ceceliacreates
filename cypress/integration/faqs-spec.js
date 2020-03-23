/// <reference types="Cypress" />
describe('confirms all faqs from json render', () => {

    // Pulling in our *actual* data file
    const faqs = require('../../src/data/faqs')

    // Dynamically generated tests, cool!
    faqs.forEach((faq) => {
        it('checks for each faq', () => {
            cy.visit("/faq");
            cy.contains(faq.question);
            cy.contains(faq.answer);
        })
    })
  })
