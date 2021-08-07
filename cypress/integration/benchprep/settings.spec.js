/// <reference types="cypress" />
import NavigationDrawer from '../../components/NavigationDrawer'
import BpPageHeader from '../../components/BpPageHeader'
import SettingsPage from '../../components/SettingsPage'
const navDrawer = new NavigationDrawer()
const bpPageHeader = new BpPageHeader()
const settingsPage = new SettingsPage()
const bpAdmin = Cypress.env('users').bpAdmin1

context('Left Navigation', () => {
  beforeEach(() => {
    cy.login(bpAdmin.username, bpAdmin.password)
    cy.visit('/console') // TODO: change to click on console button when implemented
    navDrawer.clickNavItem('Settings')
    bpPageHeader.pageHeaderVisible('Settings')
    cy.location('pathname').should('eq', '/console/settings')
  })

  describe('display and appearance', () => {
    it('should have tiles on page', () => {
      settingsPage.settingsTileVisible()
    })

    it('should have specific tiles', () => {
      const tiles = ['Look and Feel']
      tiles.forEach(tile => settingsPage.settingsTileItem(tile))
    })

    it('should have Look and Feel page', () => {
      const lookAndFeel = 'Look and Feel'
      settingsPage.clickSettingsTile(lookAndFeel)
      bpPageHeader.pageHeaderVisible(lookAndFeel)
    })
  })
})
