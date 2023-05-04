Feature: A login test



  Scenario: A standard user should be able to checkout successfully
    When I insert the standard username
    And I insert the password
    And I click the login button
    Then I should see the product list page
    When I add an Item to cart
    And I click the cart icon
    Then I should see the item in the cart
    And I logout