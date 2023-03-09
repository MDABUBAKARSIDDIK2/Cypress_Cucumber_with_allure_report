Feature: signin

    Background: Open the  Website
        Given open rokomari website
        
    
    Scenario: User Signin successfully
        When Click on signin navibar
        And  write Your email 
        And  Write Your Password
        And click on signin button
        Then User should be able to see book page
   