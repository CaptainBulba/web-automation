import {pages} from '../support/pages'

export class LoginTest {
    async fillUsernameField(username) {
        await pages.basePage.getUsernameInputField().setValue(username)
    }

    async fillPasswordField(password) {
        await pages.basePage.getPasswordInputField().setValue(password)
    }

    async pressSignInButton() {
        await pages.basePage.getSignInButton().click()
    }

    async assertInvalidCredentialsMsg(errorMsg) {
        await pages.basePage.getCredentialsErrorMsg().waitForDisplayed({ timeout: 5000 })
        await expect(pages.basePage.getCredentialsErrorMsg()).toHaveText(errorMsg)
    }
}