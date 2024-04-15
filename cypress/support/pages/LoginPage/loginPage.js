const timeout = require('../../../config')
const locator = require('../../locators/regisPage-locator')
const loginLocator = require('../../locators/loginPage-locator')
const bulkTexts = require('../../data_texts/bulkText')

class LoginPage {
    async fillEmail() {
        cy.xpath(locator.dataTestID.email)
            .type(bulkTexts.regisPage.email, {force: true})
            .should('have.value', bulkTexts.regisPage.email, timeout.e2e)
    }

    async fillPassword() {
        cy.xpath(locator.dataTestID.password)
            .type(bulkTexts.regisPage.password, {force: true})
            .should('have.value', bulkTexts.regisPage.password, timeout.e2e)
    }

    async loginBtn(){
        cy.xpath(loginLocator.dataLoginID.login)
            .click()
        cy.wait(1000)
    }
}

module.exports = new LoginPage()