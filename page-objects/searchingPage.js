const searchingIput = '#woocommerce-product-search-field-0.search-field[name="s"]'
const searchingProducts = '.summary.entry-summary'
const productDoesntExist = '.woocommerce-info'


class SearchingPage {
    searchAvailableProduct(){
        cy.get(searchingIput, { timeout: 5000 }).type('sunglasses{enter}').should('be.visible')
    }

    searchingProductShouldExist() {
        cy.get(searchingProducts).should('exist')
    }

    searchingUnavailableTerm() {
        cy.get(searchingIput, {timeout: 5000}).type('unavailable term - hello!{enter}').should('be.visible')
    }

    searchingProductNotExist() {
        cy.get(productDoesntExist).should('contain', 'Nie znaleziono produktów, których szukasz')
    }
}


export default SearchingPage;