Feature: Oracle sign up test

    @signup
    Scenario: Sign up a new user
        Given User has opened Oracle Profile page
        When User presses the Create Account button
        And User accepts all cookies
        And User fills out Create Account form
        And User presses the Sign Up button
        Then User is redirected to Check Your Email page