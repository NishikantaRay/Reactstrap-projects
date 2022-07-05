Feature: AddButton
    It displays the name and email of a user.

    Scenario: Display log it is a Mandatory field 
        When initially
        Then showing Mandatory field inside console panel
    Scenario: Display data 
        Given user list 
        When clicking add
        Then showing UserData contact list

    