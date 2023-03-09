Feature: search

    
    Background: open website
        Given open rokomari website
        When Click on signin navibar
        And  write Your email 
        And  Write Your Password
        And click on signin button
        
    Scenario: search  item successfully found
       When click on search text box and write a name Alor jholok
       Then  User should see the finding book