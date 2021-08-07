const topNavSelector = '[data-test-top-nav-header]'
const navDrawerExpander = '[data-test-nav-expander]'
const topNavTenantLogo = '[data-test-tenant-logo]'

class TopNavigationHeader {
  topNavHeader () {
    return cy.get(topNavSelector)
  }

  tenantLogo () {
    return cy.get(topNavTenantLogo)
  }

  expandNavDrawer () {
    return cy.get(navDrawerExpander)
  }

  clickNavDrawerExpander () {
    this.expandNavDrawer().click()
  }
}

export default TopNavigationHeader
