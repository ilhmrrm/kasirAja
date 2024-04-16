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

    async blankPassword(){
        cy.xpath(locator.dataTestID.password)
            .type(bulkTexts.invalidRegis.password)
        cy.wait(1000)
    }

    async errorPassword(){
        cy.get('.chakra-alert').contains('"password" is not allowed to be empty')
            .should('be.visible')
    }

    async wrongPass(){
        cy.xpath(loginLocator.dataLoginID.wrongPass)
            .should('be.visible')
        cy.wait(1000)
    }

    async blankEmail(){
        cy.xpath(loginLocator.dataLoginID.emailEmpty)
            .should('be.visible')
        cy.wait(1000)
    }
}

module.exports = new LoginPage()