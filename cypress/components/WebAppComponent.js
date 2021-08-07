const MenuLesson = 'a[data-state="reading-lesson"]'
const navActive = '.nav-link.active'
const navItems = '.nav-link span'
const studyPlanMenu = '[data-state="study-plan"]'
const studyPlanHorMenu = '[aria-label="Study Plan"] .item'
const surveyModal = '[aria-label*="How likely are you"]'
const testsMenu = '[data-state="tests"]'
const firstTest = '.test-wrapper li.content:nth-child(2)'
const startTestbtn = '[href*="#exams/take_exam/"]'
const testAOptionButton = '[data-choice="A"]:nth-child(2)'
const testQConfirmbtn = '#confirm-choice'
const questonCount = 'div:not([style*="display:block;"])[id^=quiz_section]'
const resetTestBtn = 'a[href="#reset-wrapper"]'
const confirmReset = '.confirm-reset-btn.btn.btn-standard.btn-danger'
const currentPercentage = '.progress-group-inner .percent'
const testCompleteStatus = '.li-cell.state span'
const previousPercentCorrect = '.score-report:nth-child(1) .li-cell.percent-correct'
const tablePercentCorrect = '.exams-table-content .content:nth-child(2) .correctness'
const testpageNAResult = '.not-started'
const previousScoreReportsPercent= '#score-reports-list li:nth-child(1) span.percent-correct'


class LessonComponent {
    LessonMenu(){
        return cy.get(MenuLesson)
    }
    clickLesson() {
        cy.get(MenuLesson).click()
    }
    GetCourseA(){
        cy.visit("app/isaca-crisc-online-review-course#home", {timeout: 60000})
        cy.wait(35000)
        cy.get(surveyModal).then(() => {
            cy.get("body").type('{esc}')
            cy.wait(3000)
        })        
    }

    ProgressModal(){
        cy.get('body').then((body) => {
            if (body.find('div#progress-modal-inner').length > 0) {
                //element exists do something
                
                return  cy.wait(5000)

            } else {
                return false
            }
           
        })        
    }
    navActiveItem () {
        return cy.get(navActive)
      }
    navItems () {
        return cy.get(navItems)
    }  
    clickNavItem(menuItem){
        return cy.get(menuItem).click()
    }
    getStudyPlan(){
        return cy.get(studyPlanMenu).click()
    
    }
    getStudyPlanHorMenus(){
        return cy.get(studyPlanHorMenu)
    }
    getTests(){
        return cy.get(testsMenu).click()
    }
    clickFirstTest(){
        return cy.get(firstTest).click()
    }
    clickStartTest(){
        return cy.get(startTestbtn).click()
    }
    getStartTestButton(){
        return cy.get(startTestbtn)
    }
    clickTestAOption(){
        return cy.get(testAOptionButton).click()
    }
    clickTestQConfirm(){
        return cy.get(testQConfirmbtn).click()
    }
    getTestCompletePercentage(){
        return cy.get().text()
    }
    TestQConfirmbtnVisible(){
        cy.get("body").then((body) =>{
            console.log(body.find(testQConfirmbtn).length)
            return body.find(testQConfirmbtn).length
        })
    }
    CountQuestions(){
        return cy.get(questonCount)
    }
    getResetTestButton(){
        return cy.get(resetTestBtn)
    }
    clickResetTestButton(){
        cy.wait(3000)
        cy.get(resetTestBtn).click()
        cy.wait(3000)
        cy.get(resetTestBtn).click()
        cy.wait(3000)
        cy.get(confirmReset).click()
        cy.wait(5000)
    }
    getCurrentPercentage (){
        cy.wait(3000)
        return cy.get(currentPercentage).first()
    }
    getTestCompleteStatus (){
        return cy.get(testCompleteStatus)
    }
    getPreviousPercentCorrect() {
        return cy.get(previousPercentCorrect)
    }
    getTablePercentCorrect() {
        return cy.get(tablePercentCorrect)
    }
    getTestPageNAResult() {
        return cy.get(testpageNAResult)
    }
    getpreviousScoreReportsPercent() {
        return cy.get(previousScoreReportsPercent)
    }
    loopTest(body) {
        if (body.find(testQConfirmbtn).length > 0) {
            cy.get(testAOptionButton).then(optionA => {
                if (Cypress.dom.isVisible(optionA)) {
                    cy.get(testAOptionButton).click();
                    cy.get(testQConfirmbtn).then(confirm => {
                        if (!confirm.hasClass('is-disabled')) {
                            cy.get(testQConfirmbtn).click()
                            cy.log('clicked on confirm')
                            this.loopTest(body)
                        }
                    })
                }
            })
        }
    }
}

export default LessonComponent