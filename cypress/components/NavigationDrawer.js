const navDrawerSelector = '[data-test-nav-drawer]'
const navItemString = 'data-test-nav-item'
const expandedAttr = 'aria-expanded'
const navItemIcon = '[data-test-nav-icon]'

class NavigationDrawer {
  _navDrawer () {
    return cy.get(navDrawerSelector)
  }

  isExpanded () {
    return this._navDrawer()
      .invoke('attr', expandedAttr)
  }

  navItems () {
    return cy.get(`[${navItemString}]`)
  }

  navIcon () {
    return cy.get(navItemIcon)
  }

  clickNavItem (item) {
    cy.get(this.navItemSelector(item)).click()
  }

  navItemSelector (item) {
    return `[${navItemString}=${item}]`
  }
}

export default NavigationDrawer
