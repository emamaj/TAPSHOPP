const searchingIput = '#woocommerce-product-search-field-0.search-field[name="s"]'
const searchingProducts = '.summary.entry-summary'


class SearchingPage {
    searchAvailableProduct(){
        cy.get(searchingIput, { timeout: 5000 }).type('sunglasses{enter}').should('be.visible')
    }

    searchingProductShouldExist() {
        cy.get(searchingProducts).should('exist')
    }
}


export default SearchingPage;