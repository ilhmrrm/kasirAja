const locator = require('../../locators/homePage-locator')

class HomePage {

    async goHomepage() {
        cy.visit('https://kasiraja.ajikamaludin.id/')
    }
    async clickRegister() {
        cy.xpath(locator.dataTestID.regis).click()
        cy.wait(2000)
    }
}

module.exports = new HomePage()