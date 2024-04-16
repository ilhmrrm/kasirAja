import('../support/commands.js');
const CatPage = require('../support/pages/CategoriesPage/catPage')
describe('Categories Functionality', () => {
    beforeEach(() => {
        cy.login()
    })

    it('Create New Categories With Valid Data', () => {
        CatPage.cateBtn()
        CatPage.addBtn()
        CatPage.fillFormName()
        CatPage.fillDesc()
        CatPage.saveBtn()
    })
})