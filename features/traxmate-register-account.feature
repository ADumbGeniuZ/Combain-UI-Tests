Feature: Traxmate Registration

          As an user I want to register an account
          on the Traxmate page
    


    Scenario: Register an account
        Given that I am at the Traxmate homepage
        And I have clicked on the free sign in button on the homepage
        And I have clicked free sign in button again
        And I have entered all the credentials
        And I should get a message saying account created
        Then I should get an activation email to activate your account


