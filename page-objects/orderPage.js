import { fa, faker } from '@faker-js/faker'
import { each } from 'bluebird'
import { add } from 'lodash'

const firstNameInput = '#billing_first_name'
const lastNameInput = '#billing_last_name'
const countryDropdown = '#billing_country'
const addressInput = '#billing_address_1'
const postcodeInput = '#billing_postcode'
const cityInput = '#billing_city'
const phoneInput = '#billing_phone'
const emailInput = '#billing_email'
const finishOrderButton = '#place_order'
const countryDropdownPoland = 'Polska'
const orderNumber = "li[class='woocommerce-order-overview__order order']"



class OrderPage{
    fillAllRequiredFields(){
        cy.get(firstNameInput).type(faker.name.firstName())
        cy.get(lastNameInput).type(faker.name.lastName())
        cy.get(countryDropdown).select(countryDropdownPoland, { force: true })
        cy.get(addressInput).type(faker.address.street())
        cy.get(postcodeInput).type(faker.address.zipCode('##-###'))
        cy.get(cityInput).type(faker.address.city())
        cy.get(phoneInput).type(faker.phone.number('+48#########'))
        cy.get(emailInput).type(faker.internet.email())

    }

    clickOrderFinishButton(){
        cy.get(finishOrderButton).click()
    }

    checkOrderFinished(){
        cy.get(orderNumber, { timeout: 5000 }).should('exist')

    }


}

export default OrderPage