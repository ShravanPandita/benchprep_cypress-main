/// <reference types="cypress" />
import NavigationDrawer from '../../components/NavigationDrawer'
import TopNavigationHeader from '../../components/TopNavigationHeader'
const navDrawer = new NavigationDrawer()
const topNav = new TopNavigationHeader()

context('Left Navigation', () => {
  beforeEach(() => {
    const bpAdmin = Cypress.env('users').bpAdmin1
    cy.log("------------")
    cy.log(bpAdmin.username)
    cy.login(bpAdmin.username, bpAdmin.password)
    cy.visit('/console') // TODO: change to click on console button when implemented
  })

  describe('display and appearance', () => {
    it('should have icons on the left side for nav items', () => {
      navDrawer.navItems().each((item) => {
        cy.wrap(item).within(() => {
          navDrawer.navIcon().should('be.visible')
        })
      })
    })

    it('should land on proper console landing page', () => {
      cy.location('pathname').should('eq', '/console/')
    })

    it('should have nav items which link to pages', () => {
      const navItems = ['Clients', 'Reports', 'Apps', 'Settings']
      navItems.forEach((item) => {
        navDrawer.clickNavItem(item)
        cy.location('pathname').should('include', item.toLowerCase())
      })
    })

    it('should display nav items in the proper order', () => {
      const expectedNavLabels = ['Dashboard', 'Students', 'Learning', 'eCommerce',
        'Clients', 'Reports', 'Apps', 'Settings']

      navDrawer.navItems().each((item, index) => {
        expect(item.text()).to.include(expectedNavLabels[index])
      })
    })
  })

  describe('open and close behavior', () => {
    it('should have an expand/collapse button', () => {
      topNav.expandNavDrawer().should('be.visible')
    })

    it('should expand/collapse on nav menu button click', () => {
      topNav.clickNavDrawerExpander()
      navDrawer.isExpanded().should('not.be.ok')
    })

    it('should be expanded by default on desktop', () => {
      navDrawer.isExpanded().should('equal', 'true')
    })

    it('should have a tenant logo at the top when expanded', () => {
      topNav.tenantLogo().should('be.visible')
    })

    it('should have a tenant logo at the top when contracted', () => {
      topNav.clickNavDrawerExpander()
      navDrawer._navDrawer().get('.aria-expanded').should('not.exist')
      topNav.tenantLogo().should('be.visible')
    })

    it('should only display icons for main navigation components when contracted', () => {
      topNav.clickNavDrawerExpander()
      navDrawer.navItems().each((item) => {
        cy.get(item.text()).should('not.be.visible')
      })
    })
  })
})
