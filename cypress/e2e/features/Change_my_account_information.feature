Feature: Change my account information

    Background: Open the  Website
        Given open rokomari website
        When Click on signin navibar
        And  write Your email 
        And  Write Your Password
        And click on signin button
    @focus
    Scenario: Change my Account information
        When user click on profile icon
        And  click on my Account
        And  click on change profile picture 
        And  click on choose file button
        And  click on save button



