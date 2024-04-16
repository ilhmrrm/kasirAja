const homePage = require('../support/pages/RegisPage/homePage')
const LoginPage = require('../support/pages/LoginPage/loginPage')

describe('Login Feature', () => {
    beforeEach(() => {
        homePage.goHomepage()
    })

    it('Success Login With Valid Data', () => {
        LoginPage.fillEmail()
        LoginPage.fillPassword()
        LoginPage.loginBtn()
    })

    it('Failed Login without Password', () => {
        LoginPage.fillEmail()
        // LoginPage.blankPassword()
        LoginPage.loginBtn()
        LoginPage.errorPassword()
    })

    it('Failed Login without email', () => {
        LoginPage.fillPassword()
        LoginPage.loginBtn()
        LoginPage.blankEmail()
    })

    it('Failed Login Wrong Password', () => {
        LoginPage.fillEmail()
        LoginPage.blankPassword()

        LoginPage.loginBtn()
        LoginPage.wrongPass()
    })
})