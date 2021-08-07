/// <reference types="cypress" />
import WebAppComponent from '../../components/WebAppComponent'
import HomePageComponents from '../../components/HomePage'
import LoginPage from '../../components/LoginPage'
const WebAppComp = new WebAppComponent()
const loginVar = new LoginPage()
const homeVar = new HomePageComponents()

context('Left Navigation', () => {
    beforeEach(() => {
        const bpAdmin = Cypress.env('users').bpAdmin1
        cy.log(bpAdmin.username)
        cy.login(bpAdmin.username, bpAdmin.password)
        WebAppComp.GetCourseA()
    })

    describe('Login and Menu Items', () => {
        it.skip('Verify the Home is active', () => {
            WebAppComp.navActiveItem().contains('Home')
        })

        it.skip('Verify Nav Item present in the WebApp', () => {
            const MenuItems = ["Study Plan", "Game Center", "Discussions",
                "Lessons", "Flashcards", "Practice", "Tests", "Search"]

            WebAppComp.navItems().each((item, index) => {
                expect(item.text()).to.include(StudyplanHorizontalMenu[index])
              })
        })

        it.skip("Study Plann: Text Verification / URL Verification", () => {
            WebAppComp.getStudyPlan()
            cy.url().should('contain', '/structured')
        })

        it.skip("Study Plann: Verify Top nav Items", () => {
            WebAppComp.getStudyPlan()
            const StudyplanHorizontalMenu = ["Structured Plan", "Adaptive Plan" ]
            WebAppComp.getStudyPlanHorMenus().each((item, index) => {
                expect(item.text()).to.include(StudyplanHorizontalMenu[index])
            })
        })
    }) 
})