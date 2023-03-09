Feature: signout

    
    Background: open the  website
        Given open rokomari website
        When Click on signin navibar
        And  write Your email 
        And  Write Your Password
        And click on signin button

           
    Scenario: User Signout successfully 
       When user click on profile icon
       And Click on sign out button