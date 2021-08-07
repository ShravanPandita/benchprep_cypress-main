/// <reference types="cypress" />
import PracticeAttempt from '../../components/PracticeAttempt'

describe('Practice Content Verifications', () => {
    beforeEach(() => {
        const bpAdmin = Cypress.env('ISACA').user1
        cy.log(bpAdmin.username)
        cy.login(bpAdmin.username, bpAdmin.password)
       // webAppComp.GetCourseA()
    })
})