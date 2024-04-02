const timeout = require('../../../config')
const locator = require('../../locators/regisPage-locator')
const bulkTexts = require('../../data_texts/bulkText')

class InvalidRegisPage {
    async fillStoreName() {
        cy.xpath(locator.dataTestID.storeName)
            .type(bulkTexts.invalidRegis.storeName, {force: true})
            .should('have.value', bulkTexts.invalidRegis.storeName, timeout.e2e)
    }

    async invalidBlankStore() {
        cy.xpath(locator.dataTestID.storeName)
            .should('have.value', bulkTexts.invalidRegis.blankStore, timeout.e2e)
    }

    async fillEmail() {
        cy.xpath(locator.dataTestID.email)
            .type(bulkTexts.invalidRegis.invalidEmail, {force: true})
            .should('have.value', bulkTexts.invalidRegis.invalidEmail, timeout.e2e)
    }
    
    async regisBtn() {
        cy.xpath(locator.dataTestID.register)
            .click()
        cy.wait(2000)
    }

    async errorMessage() {
        cy.get('.chakra-alert.css-qwanz3').contains('"password" is not allowed to be empty')
            .should('be.visible')
    }
    
    async invalidEmail() {
        cy.get('.chakra-alert.css-qwanz3').contains('"email" must be a valid email')
            .should('be.visible')
    }

    async blankStore() {
        cy.get('.chakra-alert.css-qwanz3').contains('"name" is not allowed to be empty')
            .should('be.visible')
    }

}

module.exports = new InvalidRegisPage()