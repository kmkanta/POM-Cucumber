@Login
Feature: Register to facebook Application

  Scenario: Login Test
  
    Given launch "chrome" browser
    When enter application url
    Then enter username and password fields
    And click on submit button
    Then Close the browser
