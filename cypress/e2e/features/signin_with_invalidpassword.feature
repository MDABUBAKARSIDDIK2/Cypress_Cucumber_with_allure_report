Feature: signin with invalid password

    Background: Open the  Website
        Given open rokomari website
        
    
    Scenario: User can't signin 
        When Click on signin navibar
        And  write Your email 
        And  Write Your invalid password
        And click on signin button