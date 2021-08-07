import ExamScreen from '../../components/Exam'
import LoginPage from '../../components/LoginPage'
import WebAppComponent from '../../components/WebAppComponent'
const webAppComp = new WebAppComponent()
const exmScreen = new ExamScreen()
const login = new LoginPage()
const WebAppComp = new WebAppComponent()

describe('Exam Content Verifications', () => {
    beforeEach(() => {
        const bpAdmin = Cypress.env('ISACA').user1
        cy.log(bpAdmin.username)
        cy.login(bpAdmin.username, bpAdmin.password)
        webAppComp.ProgressModal()
    })

    /**
     * To navigate to exam page
     */

    it('To Navigate to Exam page', () => {
        exmScreen.selectExamMenu()
                
         
    })
    /**
     * To validate all Labels
     */
    it('To close the notice on exam page', () => {
        exmScreen.noticeClose()
                
         
    })
})