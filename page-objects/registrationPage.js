

const addressEmailField = '#reg_email'
const registerButton = 'button[name="register"]'
const myAccountRegister = 'nav[class="woocommerce-MyAccount-navigation"]'

class RegistrationPage {

    fillAddressEmailField(email) {
        cy.get(addressEmailField).type(email)
    }

    clickRegisterButton() {
        cy.get(registerButton).click()
    }

    checkVisibilityOfMyRegistration() {
        cy.get(myAccountRegister).should('be.visible')
    }
}

export default RegistrationPage