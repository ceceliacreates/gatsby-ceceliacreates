/// <reference types="Cypress" />
describe("confirms all speaking events from json render", () => {
  // Pulling in our *actual* data file
  const speaking = require("../../src/data/speaking")

  // Dynamically generated tests, cool!
  speaking.forEach(event => {
    it("checks for each event title and description", () => {
      cy.visit("/speaking")
      cy.contains(event.title)
      cy.contains(event.description)
    })
  })
})
