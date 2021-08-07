const userMenuButton = '[data-test-user-menu-button]'
const userMenuContent = '[data-test-user-menu-content]'
const userMenuFullname = '[data-test-user-menu-fullname]'

class TopNavUserMenu {
  topNavUserButton () {
    return cy.get(userMenuButton)
  }

  userButtonContent () {
    return cy.get(userMenuContent)
  }

  userButtonFullname () {
    return cy.get(userMenuFullname)
  }

  clickUserButton () {
    this.topNavUserButton().click()
  }
}

export default TopNavUserMenu
