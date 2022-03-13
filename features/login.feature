Feature: Oracle login test

  @login
  Scenario Outline: Invalid login in with user
    Given User has opened Oracle Profile page
    When User inputs <username> as username
    And User inputs <password> as password
    And User presses the Sign In button
    Then User sees "Invalid username and/or password." as error message

    Examples:
        | username          | password          |
        | sdnf@kjsdf.com    | Password12$       |
        # | sdnf@inbox.lv     | Password1fwef2$   |
        # | fsgfsj@gmail.com  | Passwsdfjnord12$  |