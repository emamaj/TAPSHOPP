import HomePage from "../../page-objects/homePage"
import RegistrationPage from "../../page-objects/registrationPage"
import { faker } from '@faker-js/faker'


describe('my fisrts scenario - registration test', () => {
    const homePage = new HomePage();
    const registrationPage = new RegistrationPage()


    it('should register to the website', function() {
        homePage.visitPage()
        homePage.clickMyAccountHeaderButton()
        registrationPage.fillAddressEmailField(faker.internet.email())
        registrationPage.clickRegisterButton()
        registrationPage.checkVisibilityOfMyRegistration()

    })
})