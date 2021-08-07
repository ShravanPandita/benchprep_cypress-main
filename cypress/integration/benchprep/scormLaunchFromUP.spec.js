import HomePageComponents from '../../components/HomePage'
import LoginPage from '../../components/LoginPage'
import UserPortal from '../../components/UserPortal'
const up = new UserPortal()
const loginVar = new LoginPage()
const homeVar = new HomePageComponents()


describe('SCORM Launch from User Portal', () => {
    
    beforeEach(() => {
        const bpAdmin = Cypress.env('users').bpAdmin1
        cy.log(bpAdmin.username)
        cy.login(bpAdmin.username, bpAdmin.password)
        webAppComp.GetCourseA()
    })

    it('Check whether is in the User Portal screen', () => {

        up._header.should('have.value', 'My Portal')
    })

    it('', () => {

    })
})