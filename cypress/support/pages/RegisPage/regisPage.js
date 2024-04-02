const timeout = require('../../../config')
const locator = require('../../locators/regisPage-locator')
const bulkTexts = require('../../data_texts/bulkText')

class RegisPage {
    async fillStoreName() {
        cy.xpath(locator.dataTestID.storeName)
            .type(bulkTexts.regisPage.storeName, {force: true})
            .should('have.value', bulkTexts.regisPage.storeName, timeout.e2e)
    }

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
    
    async regisBtn() {
        cy.xpath(locator.dataTestID.register)
            .click()
        cy.wait(2000)
    }

    async errorMessage() {
        cy.xpath(locator.dataTestID.errorMessage)
            .should('be.visible')
        cy.wait(2000)
    }
    
}

module.exports = new RegisPage()