import { home } from "ospath";
import HomePage from "../../page-objects/homePage";
import AccountPage from "../../page-objects/myAccountPage";
import { fa, faker } from '@faker-js/faker';
import CartPage from "../../page-objects/cartPage";

describe('my first scenario', () => {
    const homePage = new HomePage();
    const accountPage = new AccountPage();
    const cartPage = new CartPage();

    before(function () {
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

    it('should not login to the application', function () {
        accountPage.visitPage()
        accountPage.fillUsernameFieldWithEmail(faker.internet.email())
        accountPage.fillPasswordField(faker.internet.password())
        accountPage.clickLoginButton()
        accountPage.checkVisibilityOfErrorAfterWrongLogin()

    }) 

    it('should product add to cart', function () {
        homePage.visitPage()
        homePage.addProductToCart()
        homePage.clickGoToCartFromProductButton()
        cartPage.checkVisibilityOfProductName()
        cartPage.removeProductFromCart()
        cartPage.checkEmptyCart()

    })
})