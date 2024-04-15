const homePage = require('../support/pages/RegisPage/homePage')
const LoginPage = require('../support/pages/LoginPage/loginPage')
// const InvalidRegisPage = require('../support/pages/RegisPage/invalidPage')

describe('Login Feature', () => {
    it('Success Login With Valid Data', () => {
        homePage.goHomepage()

        LoginPage.fillEmail()
        LoginPage.fillPassword()
        LoginPage.loginBtn()
    })
})