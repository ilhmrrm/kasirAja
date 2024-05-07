import('../support/commands.js');
const CatPage = require('../support/pages/CategoriesPage/catPage')

describe('Add Categories Functionality', () => {
    beforeEach(() => {
        cy.login()
        CatPage.cateBtn()
        CatPage.addBtn()
    })

    it('Create New Categories With Valid Data', () => {
        CatPage.fillFormName()
        CatPage.fillDesc()
        CatPage.saveBtn()
    })

    it('Create New Categories Without Name', () => {
        CatPage.fillDesc()
        CatPage.saveBtn()
        CatPage.nameNotAllowed()
    })

    it("Create New Catergories Without Desc", () => {
        CatPage.fillFormName()
        CatPage.saveBtn()
    })

    it("Create New Categories fill form blank", () => {
        CatPage.saveBtn()
        CatPage.nameNotAllowed()
    })
})

describe('Delete Categories Functionality', () => {
    beforeEach(() => {
        cy.login()
        CatPage.cateBtn()
    })

    it.only('Delete Categories', () => {
        CatPage.delCategories()
    })
})