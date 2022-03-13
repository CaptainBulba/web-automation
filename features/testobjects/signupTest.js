import {pages} from '../support/pages'
import {data} from '../support/data'

export class SignupTest {
    async fillOutCreateAccountForm() {
        await pages.createAccountPage.getInputField('email').setValue(await data.userData.oracleUser.email)
        await browser.pause(200);
        await pages.createAccountPage.getInputField('password').setValue(await data.userData.oracleUser.password)
        await browser.pause(200);
        await pages.createAccountPage.setDropdownValue('country', await data.userData.oracleUser.country)
        await browser.pause(200);
        await pages.createAccountPage.getInputField('retypePassword').setValue(await data.userData.oracleUser.password)
        await browser.pause(200);
        await pages.createAccountPage.getInputField('firstName').setValue(await data.userData.oracleUser.firstname)
        await browser.pause(200);
        await pages.createAccountPage.getInputField('lastName').setValue(await data.userData.oracleUser.lastName)
        await browser.pause(200);
        await pages.createAccountPage.getInputField('jobTitle').setValue(await data.userData.oracleUser.jobTitle)
        await browser.pause(200);
        await pages.createAccountPage.getInputField('workPhone').setValue(await data.userData.oracleUser.phone)
        await browser.pause(200);
        await pages.createAccountPage.getInputField('companyName').setValue(await data.userData.oracleUser.company)
        await browser.pause(200);
        await pages.createAccountPage.getInputField('address1').setValue(await data.userData.oracleUser.address)
        await browser.pause(200);
        await pages.createAccountPage.getInputField('city').setValue(await data.userData.oracleUser.city)
        await browser.pause(200);
        await pages.createAccountPage.setDropdownValue('state', await data.userData.oracleUser.state)
        await browser.pause(200);
        await pages.createAccountPage.getInputField('postalCode').setValue(await data.userData.oracleUser.postCode)
    }

    async assertCheckEmailPage() {
        await pages.checkEmailPage.getCheckEmailHeader().waitForDisplayed({ timeout: 5000 })
        await pages.checkEmailPage.getEmailText().waitForDisplayed()
        await expect(pages.checkEmailPage.getEmailText()).toHaveText(`We sent an email to ${data.userData.oracleUser.email} with a button to verify your email address.`)
    }
}