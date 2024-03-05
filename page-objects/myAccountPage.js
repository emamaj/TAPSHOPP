
import Urls from "./urls";

const usernameEmailField = '#username'
const userPasswordField = '#password'
const loginButton = 'button[name="login"]'
const myAccountNavigation = '.woocommerce-MyAccount-navigation-link'
const errorAfterWrongLogin = '.wc-block-components-notice-banner__content'

class AccountPage{

    fillUsernameFieldWithEmail(email){
       if (email) {
        cy.get(usernameEmailField).type(email)
       } else cy.get(usernameEmailField).clear()
    }

    fillPasswordField(password){
        if (password) {
         cy.get(userPasswordField).type(password)
        
        } else cy.get(userPasswordField).clear()
    }

    clickLoginButton(){
        cy.get(loginButton).click()
    }

    checkVisibilityOfMyAccountNavigation(){
        cy.get(myAccountNavigation).should('be.visible')
    }

    checkVisibilityOfErrorAfterWrongLogin(){
        cy.get(errorAfterWrongLogin).should('be.visible')
    }

    visitPage(){
        const urls = new Urls
        urls.visitMyAccountPage()
    }

}

export default AccountPage;