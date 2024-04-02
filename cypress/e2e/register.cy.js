const homePage = require('../support/pages/RegisPage/homePage')
const RegisterPage = require('../support/pages/RegisPage/regisPage')
const InvalidRegisPage = require('../support/pages/RegisPage/invalidPage')

describe('Register Feature', () => {
    it('Success Register with valid data', () => {
        homePage.goHomepage()

        homePage.clickRegister()

        RegisterPage.fillStoreName()
        RegisterPage.fillEmail()
        RegisterPage.fillPassword()
        RegisterPage.regisBtn()
    })

    it('Failed Register with same data', () => {
        homePage.goHomepage()

        homePage.clickRegister()

        RegisterPage.fillStoreName()
        RegisterPage.fillEmail()
        RegisterPage.fillPassword()
        RegisterPage.regisBtn()
        RegisterPage.errorMessage()
    })

    it('Failed Register with invalid data', () => {
        homePage.goHomepage()
    
        homePage.clickRegister()

        InvalidRegisPage.fillStoreName()
        InvalidRegisPage.fillEmail()
        InvalidRegisPage.regisBtn()
        InvalidRegisPage.errorMessage()
    })

    it('Failed register with invalid email', () => {
        homePage.goHomepage()

        homePage.clickRegister()

        InvalidRegisPage.fillStoreName()
        InvalidRegisPage.fillEmail()
        RegisterPage.fillPassword()
        InvalidRegisPage.regisBtn()
        InvalidRegisPage.invalidEmail()
    })

    it('Failed register with blank store name', () => {
        homePage.goHomepage()
    
        homePage.clickRegister()

        InvalidRegisPage.invalidBlankStore()
        InvalidRegisPage.fillEmail()
        RegisterPage.fillPassword()
        InvalidRegisPage.regisBtn()
        InvalidRegisPage.blankStore()
    })
})