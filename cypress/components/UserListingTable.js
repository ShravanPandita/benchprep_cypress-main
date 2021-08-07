const userTableContainer = '[data-test-user-listing-data-table]'
const userLink = 'data-test-user-name'

class UserListingTable {
  _userListingTable () {
    return cy.get(userTableContainer)
  }

  clickUser (item) {
    cy.get(this.userSelector(item)).click()
  }

  userSelector (item) {
    return `[${userLink}="${item}"]`
  }
}

export default UserListingTable
