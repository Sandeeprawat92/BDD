#Author: Sandeep Rawat
@Matboard-Category
Feature: Acceptanace testing to validate Matbaord category page is working fine.
   In order to validate that 
   the Matboard category page is working fine
   we will do the acceptance testing

  @Matboard-Category-positive
  Scenario: Validate Matboard category page and select product from the moulding page
    Given I am on the home page "http://me.sourcemash.com" of shoplj website
    Then click on "Matboard" link on Homepage
    And the page title should be "Matboards" on matboards page
    And select any product from the matboards page
