#Author: Sandeep Rawat
@Moulding-Category
Feature: Acceptanace testing to validate Moulding category page is working fine.
   In order to validate that 
   the moulding category page is working fine
   we will do the acceptance testing

  @Moulding-Category-positive
  Scenario: Validate moulding category page and select product from the moulding page
    Given I am on the home page "http://me.sourcemash.com" of shoplj website
    Then verify the title of the home page
    Then click on "Moulding" link
    And the page title should be "Mouldings"
    And select any product from the moulding page
