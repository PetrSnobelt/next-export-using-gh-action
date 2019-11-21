/// <reference types="Cypress" />

context('Window', () => {
  beforeEach(() => {
    cy.visit('https://petrsnobelt.github.io/next-export-using-gh-action/')
  })

  it('basic elements on first page', () => {
    cy.get('#__next')
      .contains('It Works!')

    cy.get("a").contains('Dynamic-import sample').and("have.attr", "href")

    cy.get("img").first().should("have.attr", "alt").and("eq", "Success")
  })

  it('cy.document() - get the document object', () => {
    // https://on.cypress.io/document
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
  })

  it('cy.title() - get the title', () => {
    // https://on.cypress.io/title
    cy.get("body").should('include.text', 'Works')
  })
})
