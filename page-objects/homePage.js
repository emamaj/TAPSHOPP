import Urls from './urls';

const myAccountHeaderButton = '#menu-item-100'
const dataBlockNameNew = 'div[data-block-name="woocommerce/product-new"]'
const checkCartFromProductLevel = '.added_to_cart' 


class HomePage{

    clickMyAccountHeaderButton() {
        cy.get(myAccountHeaderButton).click()
    }

    addProductToCart(Polo) {
        cy.get(dataBlockNameNew).within(()=>{
            cy.get(Polo.Locator).click()
        })
    }

    clickGoToCartFromProductButton(){
        cy.get(dataBlockNameNew).within(()=> {
            cy.get(checkCartFromProductLevel).click()
        })
    }

    visitPage(){
        const urls = new Urls
        urls.visitHomePage()
    }
}

export default HomePage;