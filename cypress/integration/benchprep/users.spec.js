/// <reference types="cypress" />
import NavigationDrawer from '../../components/NavigationDrawer'
import UserListingTable from '../../components/UserListingTable'
import UserDetailPage from '../../components/UserDetailPage'
const navDrawer = new NavigationDrawer()
const userListingTable = new UserListingTable()
const userDetailPage = new UserDetailPage()
const bpAdmin = Cypress.env('users').bpAdmin1
const testUser = Cypress.env('users').testUser
const manageUsersLabel = '\"Manage Users\"'
const usersSublink = 'Users'

context('Manage Users', () => {
  beforeEach(() => {
    cy.login(bpAdmin.username, bpAdmin.password)
    cy.visit('/console') // TODO: change to click on console button when implemented
    // navDrawer.clickNavItem(manageUsersLabel)
    // navDrawer.clickNavItem(usersSublink)
    // userListingTable.clickUser(testUser.name) TODO: Implement once filtering/search is functional
    cy.visit(`/console/users/${testUser.id}`)
  })

  // Test
  describe('Users page look and feel', () => {
    it('should have users name as a header', () => {
      userDetailPage.userHeader().contains(testUser.name)
    })

    it('should have user summary row present', () => {
      userDetailPage.userSummaryRow().should('be.visible')
    })

    it('should have user detail information', () => {
      userDetailPage.userDataPointSelector('ID').contains(testUser.id)
      userDetailPage.userDataPointSelector('Email').contains(testUser.email)
      userDetailPage.userDataPointSelector('State').contains(testUser.state)
      userDetailPage.userDataPointSelector('Date Added').contains(testUser.dateAdded)
    })

    it('overview tab is selected by default', () => {
      userDetailPage.userDataTabs().should('be.visible')
      userDetailPage.userDataTabHeaderSelector('Overview').invoke('attr', 'aria-selected').should('contain', 'true')
      userDetailPage.userDataTabHeaderSelector('Overview').invoke('attr', 'class').should('contain', 'active')
    })

    it('users role section is displayed', () => {
      userDetailPage.userRoleListings().should('be.visible')
      userDetailPage.userRoleCount().contains(testUser.roles.length)
      testUser.roles.forEach(role => userDetailPage.userRoleSelector(role).should('be.visible'))
    })
  })
})
