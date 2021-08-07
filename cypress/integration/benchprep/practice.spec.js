/// <reference types="cypress" />
import PracticeScreen from '../../components/Practice'
import LoginPage from '../../components/LoginPage'
import WebAppComponent from '../../components/WebAppComponent'
//import configFold from '../../config/staging.json'
const webAppComp = new WebAppComponent()
const practScreen = new PracticeScreen()
const login = new LoginPage()
const WebAppComp = new WebAppComponent()

describe('Practice Content Verifications', () => {
    beforeEach(() => {
        const bpAdmin = Cypress.env('ISACA').user1
        cy.log(bpAdmin.username)
        cy.login(bpAdmin.username, bpAdmin.password)
        webAppComp.ProgressModal() 
        practScreen.clearLocalStorage()
        practScreen.welcomeModalClick()
        
       // practScreen.welcomeModalContinueBtnClick()
    })

    /**
     * verify pratice is avaialbe in the course
     */
    it('verify practice is avilable in the course', () => {
        practScreen.practice().should('be.visible')
    })

    /**
     * Verify N/A appears when user navigates to Practice screen first time
     */
    it('Get N/A and verify', () => {
        practScreen.PracticeClick()

        if (practScreen.getFirstRowPercentage().contains('--')) {
            practScreen.getNA().should('contain.text', 'N/A')
        }


    })

    /**
     * Attempt practice question
     */

    it.only('When there is N/A in the dashboard, attempt 1st practice test which contains --', () => {
        practScreen.delayServeyModal()
        practScreen.PracticeClick()
        practScreen.clickOnResetPracticeLink()
        cy.wait(3000)
        practScreen.getFirstRowPercentage().contains('--').click()
        practScreen.clickOnPracticeCategoryBtn()       
        practScreen.clickOnReveiAnswerToggle()
        practScreen.loopPracticeQuestion()
        practScreen.getPerCorrectFromPractDash()
        //practScreen.practiceClick()


    })

    it('When there value other than N/A in the dashboard, attempt next practice test that contains --', ()=> {
        practScreen.PracticeClick() 
    })


    it('Verify when the selected practice has not attempted ever, then N/A is displayed', () => {
        practScreen.practiceClick()
        practScreen.clickOnFirstUnAttemptedPractice()
        practScreen.getReviewCategoryTxt().should('contain.text', 'You have not taken any practice questions yet.').and(practScreen.getNAFromPractDetailsPage().should('contain.text', 'N/A'))
    })

    /**
     * This TC is to complete a practice
     */
    /* it('Getting all practices from table and click on it if it has "--"', () => {
        
        practScreen.practiceClick()
       // practScreen.clickOnPracticeQusetion()
       // practScreen.practiceTableLength().should('have.length',3)
        /* cy.scrollTo('bottom')
        cy.wait(3000)
        practScreen.practicesText()
        practScreen.practiceButton()
        cy.wait(3000)
        cy.scrollTo('top')
        practScreen.selectOptionA()
        practScreen.confirmButton() 
    }) */

})