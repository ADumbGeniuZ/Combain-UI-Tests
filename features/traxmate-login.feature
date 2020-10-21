Feature: Traxmate Login

    As an user I want to login with my account
    on the Traxmate page



    Scenario: Login an account
        Given that I am at the Traxmate homepage
        And I have clicked on the Login button on the homepage
        And I have entered the credentials
        And I have clicked Log In
        Then I should get directed to the dashboard on my account

