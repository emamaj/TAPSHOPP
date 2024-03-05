import { home } from "ospath";
import HomePage from "../../page-objects/homePage";
import AccountPage from "../../page-objects/myAccountPage";
import { fa, faker } from '@faker-js/faker';
import CartPage from "../../page-objects/cartPage";

describe('my first scenario', () => {
    const homePage = new HomePage();
    const accountPage = new AccountPage();
    const cartPage = new CartPage();

    beforeEach(function () {
        cy.fixture('users').as('userData')
    })


    it('should login to the application', function () {
        homePage.visitPage()
        homePage.clickMyAccountHeaderButton()
        accountPage.fillUsernameFieldWithEmail(this.userData.email)
        accountPage.fillPasswordField(this.userData.password)
        accountPage.clickLoginButton()
        accountPage.checkVisibilityOfMyAccountNavigation()
    })

    it('should not login to the application - wrong email and password', function () {
        accountPage.visitPage()
        accountPage.fillUsernameFieldWithEmail(faker.internet.email())
        accountPage.fillPasswordField(faker.internet.password())
        accountPage.clickLoginButton()
        accountPage.checkVisibilityOfErrorAfterWrongLogin()
    }) 

    it('user type proper email but wrong password', function() {
        accountPage.visitPage()
        cy.wait(1000)
        accountPage.fillUsernameFieldWithEmail(this.userData.email)
        accountPage.fillPasswordField(faker.internet.password())
        accountPage.clickLoginButton()
        accountPage.checkVisibilityOfErrorAfterWrongLogin()
    })

    it('should not login to the application - empty email and empty password', function() {
        accountPage.visitPage()
        accountPage.fillUsernameFieldWithEmail("")
        accountPage.fillPasswordField("")
        accountPage.clickLoginButton()
        accountPage.checkVisibilityOfErrorAfterWrongLogin()
    })
})