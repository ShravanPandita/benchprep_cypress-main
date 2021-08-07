const emailElm = 'input#login-email'
const pwdElm = 'input#login-password'
const loginBtnSelector = 'input[data-gaq-category="login_form"]'
const learner = Cypress.env('users')

class LoginPage{

    usernameType(username){        
        return cy.get(emailElm).type(username)
    }

    passwordType(password){
        return cy.get(pwdElm).type(password)
    }

    loginBtn(){
        return cy.get(loginBtnSelector).click()
    }
}

export default LoginPage