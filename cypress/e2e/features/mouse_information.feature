Feature: mouse information

    
    Background: open the  website
        Given open rokomari website
        When Click on signin navibar
        And  write Your email 
        And  Write Your Password
        And click on signin button

    @focus     
    Scenario: Check that a mouse information

       When user click on mouse 
       And Click on a mouse &  User should see the mouse information
    