Feature: Tramate Homepage and login

    Traxmate Homepage is there and I log into my account

    Scenario:
        When I goto traxmate.io
        Then the traxmate homepage shows up
        When I click on the login button
        Then I am directed to the login page
        When I enter my email "srchap78@gmail.com"
        And my password "8904apwL"
        And click on the log in button
        Then I should be logged in