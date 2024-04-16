const timeout = require('../../../config')
const locator = require('../../locators/catPage-locator')
const bulkTexts = require('../../data_texts/bulkText')

class CatPage{
    async cateBtn() {
        cy.xpath(locator.dataCategoriesID.cateMenu)
            .click()
        cy.wait(1000)
    }

    async addBtn() {
        cy.xpath(locator.dataCategoriesID.addCat)
            .click()
        cy.wait(1000)
    }

    async fillFormName() {
        cy.xpath(locator.dataCategoriesID.nameForm)
            .type(bulkTexts.categories.nameCategories, {force: true})
            .should('have.value', bulkTexts.categories.nameCategories, timeout.e2e)
    }

    async fillDesc() {
        cy.xpath(locator.dataCategoriesID.desc)
            .type(bulkTexts.categories.deskripsi, {force: true})
            .should('have.value', bulkTexts.categories.deskripsi, timeout.e2e)
    }

    async saveBtn() {
        cy.xpath(locator.dataCategoriesID.saveBtn)
            .click()
        cy.wait(1000)
    }
}

module.exports = new CatPage()