/// <reference types="cypress" />
import WebAppComponent from '../../components/WebAppComponent'
const webAppComp = new WebAppComponent()

context('Left Navigation', () => {
    beforeEach(() => {
        const bpAdmin = Cypress.env('users').bpAdmin1
        cy.log(bpAdmin.username)
        cy.login(bpAdmin.username, bpAdmin.password)
        webAppComp.GetCourseA()
    })

    describe('Login and Menu Items', () => {
        it("Verify the Reset Test button after taking Test", () => {
            cy.wait(5000)
            webAppComp.getTests()
            webAppComp.clickFirstTest()
            cy.wait(5000)
            webAppComp.clickStartTest()
            cy.wait(5000)
            // Take the test
            cy.get('body').then((body) => {
                cy.log('Inside then')
                console.log(body.find('#confirm-choice').length)
                webAppComp.loopTest(body)

            })

            // Save the Test Percent in variable
            let percentTestDetails
            webAppComp.getCurrentPercentage().then(percent => {
                percentTestDetails = percent.text()
                cy.log("Details" + percentTestDetails)
            })

            // Nagivate to Test Page and confirm result is equal to saved percentage
            webAppComp.getTests()
            webAppComp.getCurrentPercentage().then(percent => {
                const percentDasboard = percent.text()
                cy.log("Dashboard" + percentDasboard)
                expect(percentTestDetails.trim()).to.equal(percentDasboard.trim())

            })

            // Confirm table's result percent is equal to saved percentage
            webAppComp.getTablePercentCorrect().then(percent => {
                const percentDasboardTable = percent.text()
                cy.log("Dashboard Table" + percentDasboardTable)
                expect(percentDasboardTable.trim()).to.have.string(percentTestDetails.trim())
            })

            // Verify the status in Table is "Complete"
            webAppComp.getTestCompleteStatus().then(status => {
                const statusDasboardTable = status.text()
                cy.log("Dashboard Table Status=" + statusDasboardTable)
                expect(statusDasboardTable.trim()).to.have.string("Complete")
            })

            //Nagivate to Test page and reset Test 
            webAppComp.clickFirstTest()
            webAppComp.clickResetTestButton()

            // Verify the Result(Percent) should be N/A.
            webAppComp.getTestPageNAResult().then(NAResult => {
                const testPageNAResult = NAResult.text()
                cy.log("Test Page NA Result=" + testPageNAResult)
                expect(testPageNAResult.trim()).to.have.string("N/A")
            })

            
            // Go to Test Page.
            webAppComp.getTests()

            // Verify the Result(Percent) should be equal to N/A.
            webAppComp.getTestPageNAResult().then(NAResult => {
                const testPageNAResult = NAResult.text()
                cy.log("Test Listing Page NA Result=" + testPageNAResult)
                expect(testPageNAResult.trim()).to.have.string("N/A")
            })

            // Verify the previous table result has old result.
            webAppComp.getpreviousScoreReportsPercent().then(percent => {
                const previousResultPercent = percent.text()
                cy.log("Previous Score Table=" + previousResultPercent)
                expect(previousResultPercent.trim()).to.have.string(percentTestDetails.trim())
            })
        })
    })
})