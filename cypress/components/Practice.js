const pract = 'a[data-state="practice"]'
const naTxt = 'div.progress-group div div.not-started'
const practTable = 'div.subview-container div ul'
const allPractice = 'div.subview-container  div  ul  li'
const optionA = 'div.choice-link-container a.btn'
const continueButton = 'a#confirm-choice'
const practices = 'div.subview-container  div  ul  li div div'
const progressmodal = 'div#progress-modal-inner'
const na = 'div.not-started'
const firstPractice = '#subview-wrapper li:nth-child(2) div.li-cell.flex-1.correctness'
const practiceList = 'div.subview-container div li'
const practiceCategoryBtn = '.recommended-action > .btn'
const selectA = '.btn-group > :nth-child(1) > .btn'
const practiceQuesCount = '#quiz  .toolbar-title'
const confirmBtn = '#confirm-choice'
const welcomeModal = '#welcome-sections'
const welcomeModalcontinue = '#study-plan-continue'
const reviewAnswerToggle = '#quiz > .question-content-container > .question-set-content > .toolbar > .pull-right > .actions > .filter > .bootstrap-switch > .bootstrap-switch-container > .bootstrap-switch-handle-on'
const resetLink = '.reset-link'
const confirmResetBtn = '.confirm-reset-btn'
const delayServey = '#delay-survey'
const practDash_perCorrect = '.percent'


class PracticeScreen {

    delayServeyModal(){
        cy.get('body').then((body) => {
            if (body.find(delayServey).length > 0) {
                //element exists do something
                //cy.get(delayServey).click()
                return cy.get(delayServey).click()

            } else {
                return false
            }
        })
    }
    
    getPerCorrectFromPractDash(){
        return cy.get(practDash_perCorrect).click()
    }
    /**
     * Reset the Practice Test if any is attempted already
     */

    clickOnResetPracticeLink() {
        cy.get('body').then(body => {
            if (body.find(resetLink).length > 0) {
                cy.wait(3000)
                cy.get(resetLink).click()
                cy.get(confirmResetBtn).click()
            } else {
                return false
            }
        })

    }

    /**
     * Turning off the review answer toggle, so that without review all question can be attempted
     */

    clickOnReveiAnswerToggle() {
        return cy.get(reviewAnswerToggle).click()
    }

    /**
     * Attempting all questions available in a Practice Test
     */
    loopPracticeQuestion(body) {
        cy.get('body').then(body => {
            this._fun(body)
        })

    }

    _fun(body){
        if (body.find(confirmBtn).length > 0) {
            cy.get(selectA).then(chooseA => {
                if (Cypress.dom.isVisible(chooseA)) {
                    cy.get(selectA).click()
                    cy.get(confirmBtn).then(confirm => {
                        if (!confirm.hasClass('is-disabled')) {
                            cy.get(confirmBtn).click()
                            cy.log('clicked on confirm')
                            this.loopPracticeQuestion(body)
                        }
                    })
                }
            })
        }
    }

    clearLocalStorage() {
        cy.clearLocalStorage()
    }

    clearCookies() {
        cy.clearCookies()
    }

    welcomeModalContinueBtnClick() {
        return cy.get(welcomeModalcontinue).click()
    }

    welcomeModalClick() {

        cy.get('body').then((body) => {
            if (body.find(welcomeModal).length > 0) {
                //element exists do something
                cy.get(welcomeModal).click()
                return cy.get(welcomeModalcontinue).click()

            } else {
                return false
            }
        })
    }

    questionCount() {
        return cy.get(practiceQuesCount)
    }

    /**
     * fetch number of questions in a practice
     */

    getQuestioncount() {
        const count = this.questionCount()
        count.then(($lastString) => {
            const text = $lastString.text()
            const questionCount = text.substring(text.length - 1, text.length)
            cy.log(questionCount)
        })
    }

    selectA() {
        return cy.get(selectA).click()
    }

    clickOnPracticeCategoryBtn() {
        return cy.get(practiceCategoryBtn).click()
    }

    practiceList() {
        return cy.get(practiceList).contains('--').first().click()
    }

    getFirstRowPercentage() {
        return cy.get(firstPractice)
    }

    getNA() {
        return cy.get(na)
    }

    progressLoader() {
        return cy.get(progressmodal, { timeout: 10000 }).should('not.be.visible')
    }

    practice() {
        return cy.get(pract, { timeout: 10000 })
    }

    PracticeClick() {

        return cy.get(pract, { timeout: 10000 }).should('be.visible').click()
    }

    naGetText() {
        return cy.get(naTxt).contains('N/A')
    }

    getAllPractices() {
        return cy.get(allPractice).children()
    }

    surveyModalClose() {
        return cy.get('div#nps-survey a.link').click()
    }

    selectOptionA() {
        return cy.get(optionA)
    }

    clickOnContinueBtn() {
        return cy.get(continueButton)
    }

    practicesText() {
        return cy.get(this.practicesText)
    }

}
export default PracticeScreen