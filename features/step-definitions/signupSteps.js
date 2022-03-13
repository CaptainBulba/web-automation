import {Given, When, Then} from '@wdio/cucumber-framework';
import {tests} from '../support/tests'

When("User accepts all cookies", async function() {
    await tests.navigationTest.acceptCookies();
})

When("User fills out Create Account form", async function() {
    await tests.signupTest.fillOutCreateAccountForm();
})