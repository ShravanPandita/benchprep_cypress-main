/// <reference types="cypress" />
import LoginPage from '../../components/LoginPage'
import ToolBarItems from '../../components/ToolBarItems'
import homeScreen.utility from '../../supports'
const toolBarVar = new ToolBarItems()
const login = new LoginPage()


/**
 * Login to WebApp
 */

describe('Tool Bar icons display and appearance', () => {
  beforeEach(() => {
    cy.visit("https://wmx.staging.benchprep.com")
    cy.get('a[href="/login"].btn.btn-primary').click()
    const bpAdmin = Cypress.env('users').bpAdmin1
    login.usernameType(bpAdmin.username)
    login.passwordType(bpAdmin.password)
    login.loginBtn()
    cy.visit('https://wmx.staging.benchprep.com/app/sample-course-a')
})

  it('should have icons on the tool bar of the WebApp', () => {       
    cy.url().should('eq', 'https://wmx.staging.benchprep.com/app/sample-course-a')
    cy.wait(10000)
    cy.get(toolBarVar.iconCertificate).should('be.visible') 
    cy.get(toolBarVar.iconMilestone).should('be.visible')
    cy.get(toolBarVar.iconNotificaitonWithUnread).should('be.visible')
    cy.get(toolBarVar.iconSyncStatus).should('be.visible')
  })

  /**
   * Utility Functions to be wait until modal disappears
   */
  function waitForProgressModal () {
    cy.log('enter waitForProgressModal')
    cy.waitFor(cy.get('div#progress-modal').should('not.be.visible'))
    cy.log('exit waitForProgressModal')
  }

  function waitForSurveyModal (){
    cy.waitFor(cy.get('div#nps-survey')).should('not.be.visible')
  }

  /**
   * TC to verify certificate icon is present
   */
  it('Widget should get opened when clicking on certificate icons',()=> {
    waitForProgressModal()
    waitForSurveyModal
    cy.wait(20000)
    cy.get(toolBarVar.iconCertificate).click()
    cy.wait(10000)
    cy.get(toolBarVar.certificateWidget).should('be.visible')
  })

/* 
  it('Widget should get opened when clicking on milestone icons',()=> {
    cy.get(toolBarVar.iconMilestone).click()
    cy.get(toolBarVar.milestoneWidget).should('be.visible')
  })

  it('Widget should get opened when clicking on message icons',()=> {
    cy.get(toolBarVar.iconNotificaiton).click()
    cy.get(toolBarVar.messageWidget).should('be.visible')
  })

  it('Widget should get opened when clicking on syncStatus icons',()=> {
    cy.get(toolBarVar.iconSyncStatus).click()
    cy.get(toolBarVar.syncStatusWidget).should('be.visible')
  }) */

})

