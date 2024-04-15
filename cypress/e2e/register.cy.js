const homePage = require('../support/pages/RegisPage/homePage')
const RegisterPage = require('../support/pages/RegisPage/regisPage')
const InvalidRegisPage = require('../support/pages/RegisPage/invalidPage')

describe('Register Feature', () => {
    beforeEach(() => {
        homePage.goHomepage()
    
        homePage.clickRegister()
    })

    it('Success Register with valid data', () => {
        RegisterPage.fillStoreName()
        RegisterPage.fillEmail()
        RegisterPage.fillPassword()
        RegisterPage.regisBtn()
    })

    it('Failed Register with same data', () => {
        RegisterPage.fillStoreName()
        RegisterPage.fillEmail()
        RegisterPage.fillPassword()
        RegisterPage.regisBtn()
        RegisterPage.errorMessage()
    })

    it('Failed Register with invalid data', () => {
        InvalidRegisPage.fillStoreName()
        RegisterPage.fillEmail()
        InvalidRegisPage.regisBtn()
        InvalidRegisPage.errorMessage()
    })

    it('Failed register with invalid email', () => {
        InvalidRegisPage.fillStoreName()
        InvalidRegisPage.fillEmail()
        RegisterPage.fillPassword()
        InvalidRegisPage.regisBtn()
        InvalidRegisPage.invalidEmail()
    })

    it('Failed register with blank store name', () => {

        InvalidRegisPage.invalidBlankStore()
        InvalidRegisPage.fillEmail()
        RegisterPage.fillPassword()
        InvalidRegisPage.regisBtn()
        InvalidRegisPage.blankStore()
    })
})