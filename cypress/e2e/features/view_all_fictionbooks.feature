Feature: fictionbooks

    
    Background: open the  website
        Given open rokomari website
        When Click on signin navibar
        And  write Your email 
        And  Write Your Password
        And click on signin button

           
    Scenario: User view all fictionbooks
       When click on view all button
       And Scroll down & User should see the fictionbooks