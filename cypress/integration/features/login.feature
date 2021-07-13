@sanity
@Login
Feature: Test login feature
    I want to test login feature using various credentials

@Login_Desktop
Scenario: Test user login as Admin using correct credentials in Desktop
    Given Set viewport to "desktop"
    And Launch Application
    # When Enter First Name in Register page

@Login_Mobile
Scenario: Test user login as Admin using correct credentials in Mobile
    Given Set viewport to "mobile"
    And Launch Application
    # When Enter First Name in Register page

@Login_Ipad
Scenario: Test user login as Admin using correct credentials in Ipad
    Given Set viewport to "tablet"
    And Launch Application
    # When Enter First Name in Register page
    
