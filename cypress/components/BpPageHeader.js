const pageHeaderSelector = '[data-test-page-header]'

class BpPageHeader {
  pageHeader () {
    return cy.get(pageHeaderSelector)
  }

  pageHeaderByText (text) {
    return cy.contains(pageHeaderSelector, text)
  }

  pageHeaderVisible (item) {
    return this.pageHeaderByText(item).should('be.visible')
  }
}

export default BpPageHeader
