/**
 * 1. This contains utility of the home screen like handling of modals to be appear and disappear
 * 2. Wait (implicit/explicit/fluent) for the home screen
 */

 function waitForProgressModal () {
    cy.log('enter waitForProgressModal')
    cy.waitFor(cy.get('div#progress-modal').should('not.be.visible'))
    cy.log('exit waitForProgressModal')
  }