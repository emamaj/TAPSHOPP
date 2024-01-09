import HomePage from "../../page-objects/homePage";
import SearchingPage from "../../page-objects/searchingPage";

describe('my first scenario', () => {
    const homePage = new HomePage();
    const searchingPage = new SearchingPage();

    it('should search a product', function() {
        homePage.visitPage()
        searchingPage.searchAvailableProduct()
        searchingPage.searchingProductShouldExist()
    })

    it('searching product is not exist', function() {
        homePage.visitPage()
        searchingPage.searchingUnavailableTerm()
        searchingPage.searchingProductNotExist()
    })
})