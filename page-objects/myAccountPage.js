
import Urls from "./urls";

const usernameEmailField = '#username'
const userPasswordField = '#password'
const loginButton = 'button[name="login"]'
const myAccountNavigation = '.woocommerce-MyAccount-navigation-link'
const errorAfterWrongLogin = 'ul[role="alert"]'

class AccountPage{

    fillUsernameFieldWithEmail(email){
        cy.get(usernameEmailField).type(email)
    }

    fillPasswordField(password){
        cy.get(userPasswordField).type(password)
    }

    clickLoginButton(){
        cy.get(loginButton).click()
    }

    checkVisibilityOfMyAccountNavigation(){
        cy.get(myAccountNavigation).should('be.visible')
    }

    checkVisibilityOfErrorAfterWrongLogin() {
        cy.get(errorAfterWrongLogin).should('be.visible')
    }

    visitPage(){
        const urls = new Urls
        urls.visitMyAccountPage()
    }

}

export default AccountPage;