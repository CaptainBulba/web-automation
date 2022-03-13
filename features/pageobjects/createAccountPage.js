import {BasePage} from './basePage'

export class CreateAccountPage extends BasePage {
    getCookieFrame() {
        return $('iframe[title*=Cookie]')
    }

    getAcceptAllButton() {
        return $('//a[text()="Accept all"]')
    }

    getInputField(name) {
        return $(`input[name="sView1:r1:0:${name}"]`)
    }

    getDropdownField(name) {
        return $(`select[name="sView1:r1:0:${name}"]`)
    }

    getSignUpButton() {
        return $('div[id="sView1:r1:0:b1"]')
    }

    async setDropdownValue(name, value) {
        await this.getDropdownField(name).click();
        await this.getDropdownField(name).selectByAttribute('title', value);
    }
}