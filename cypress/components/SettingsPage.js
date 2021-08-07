const settingsTiles = '[data-test-settings-tile]'
const settingsTileName = 'data-test-settings-tile-item'

class SettingsPage {
  settingsTileVisible () {
    cy.get(settingsTiles).should('be.visible')
  }

  settingsTileItem (item) {
    cy.get(this.settingsTileSelector(item)).should('be.visible')
  }

  clickSettingsTile (item) {
    cy.get(this.settingsTileSelector(item)).click()
  }

  settingsTileSelector (item) {
    return `[${settingsTileName}="${item}"]`
  }
}

export default SettingsPage
