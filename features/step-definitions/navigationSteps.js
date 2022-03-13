import {Given, When, Then} from '@wdio/cucumber-framework';
import {tests} from '../support/tests'

Given("User has opened Oracle Profile page", async function() {
    await tests.navigationTest.openProfilePage();
})

When("User presses the Create Account button", async function() {
    await tests.navigationTest.pressCreateAccountButton();
})

When("User presses the Sign Up button", async function() {
    await tests.navigationTest.pressSignUpButton();
})

Then("User is redirected to Check Your Email page", async function() {
    await tests.signupTest.assertCheckEmailPage();
})