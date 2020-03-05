/// <reference types="Cypress" />

context('Hello', () => {
  it('world', () => {
//    cy.visit('http://google.com')
    cy.exec('echo gg');
  })
})
