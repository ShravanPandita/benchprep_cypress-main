import { readyException } from "cypress/types/jquery"

const examMenu = ':nth-child(7) > .nav-link'
const notice = '.notice-body > .close' 
const rateModal = '.notice-body > .close'


class ExamScreen {

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


    selectExamMenu() {
        return cy.get(examMenu).click().title()
    }
    noticeClose() {
        return cy.get(notice).click()
    }
    rateReviewModal() {
        cy.get(rateModal).click()
        cy.get()
    }
    
}
export default ExamScreen