import {Given, When, Then} from '@wdio/cucumber-framework';
import {tests} from '../support/tests'

When("User inputs {word} as username", async function(username) {
    await tests.loginTest.fillUsernameField(username);
})

When("User inputs {word} as password", async function(password) {
    await tests.loginTest.fillPasswordField(password);
})

When("User presses the Sign In button", async function() {
    await tests.loginTest.pressSignInButton();
})

Then("User sees {string} as error message", async function(errorMsg) {
    await tests.loginTest.assertInvalidCredentialsMsg(errorMsg);
})