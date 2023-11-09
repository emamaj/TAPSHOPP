
const productName = '.product-name'
const removeItemButton = '.remove'
const checkEmptyCart = '.cart-empty.woocommerce-info'
const goToPaymentButton = 'div[class="wc-proceed-to-checkout"]'

class CartPage {

    checkVisibilityOfProductName(Polo){
        cy.get(productName).contains(Polo.Locator).should('exist')
    }

    removeProductFromCart(){
        cy.get(removeItemButton).click()
    }

    checkEmptyCart(){
        cy.get(checkEmptyCart).should('exist')
    }

    goToPayment(){
        cy.get(goToPaymentButton).click()
    }


}

export default CartPage;