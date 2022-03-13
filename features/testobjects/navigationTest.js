import {pages} from '../support/pages'

export class NavigationTest {
    async openProfilePage() {
       await browser.url('/');
       await pages.basePage.getCreateAccountButton().waitForDisplayed({ timeout: 5000 })
    }

    async pressCreateAccountButton() {
        await pages.basePage.getCreateAccountButton().click();
        await browser.switchWindow('Oracle | Create Account');
    }

    async acceptCookies() {
        if (await pages.createAccountPage.getCookieFrame().isDisplayed({ timeout: 5000 })) {
            await browser.switchToFrame(await pages.createAccountPage.getCookieFrame())
            await pages.createAccountPage.getAcceptAllButton().click()
        }
    }

    async pressSignUpButton() {
        await pages.createAccountPage.getSignUpButton().click()
    }
}