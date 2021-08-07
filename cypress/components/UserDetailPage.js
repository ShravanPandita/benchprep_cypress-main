const userDetailHeader = '[data-test-page-header]'
const userSummaryRow = '[data-test-user-summary-row]'
const userDataPoint = 'data-test-user-data-point'
const userDataTabs = '[data-test-user-data-tabs]'
const userDataTabHeader = 'data-test-user-data-tab-header'
const userOverviewDetails = '[data-test-user-overview-details]'
const userRoleListings = '[data-test-user-overview-role-listing]'
const userRoleCount = '[data-test-user-role-count]'
const userRole = 'data-test-user-role'

class UserDetailPage {
  userHeader () {
    return cy.get(userDetailHeader)
  }

  userSummaryRow () {
    return cy.get(userSummaryRow)
  }

  userOverviewDetails () {
    return cy.get(userOverviewDetails)
  }

  userRoleListings () {
    return cy.get(userRoleListings)
  }

  userRoleCount () {
    return cy.get(userRoleCount)
  }

  userDataTabs () {
    return cy.get(userDataTabs)
  }

  userDataPointSelector (item) {
    return cy.get(this.userDataPoint(item))
  }

  userDataPoint (item) {
    return `[${userDataPoint}="${item}"]`
  }

  userDataTabHeaderSelector (item) {
    return cy.get(this.userDataTabHeader(item))
  }

  userDataTabHeader (item) {
    return `[${userDataTabHeader}="${item}"]`
  }

  userRoleSelector (item) {
    return cy.get(this.userRoleElement(item))
  }

  userRoleElement (item) {
    return `[${userRole}="${item}"]`
  }
}

export default UserDetailPage
