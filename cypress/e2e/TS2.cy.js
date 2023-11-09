import HomePage from "../../page-objects/homePage";     
import CartPage from "../../page-objects/cartPage";
import OrderPage from "../../page-objects/orderPage";

describe('my first scenario', () => {
    const homePage = new HomePage();
    const cartPage = new CartPage();
    const orderPage = new OrderPage();

    before(function (){
        cy.fixture('products').as('productsData')
    })

    it('should order product from the shop', function(){
        homePage.visitPage()
        homePage.addProductToCart(this.productsData.Polo)
        homePage.clickGoToCartFromProductButton()
        cartPage.goToPayment()
        orderPage.fillAllRequiredFields()
        orderPage.clickOrderFinishButton()
        orderPage.checkOrderFinished()
        
    })
})