import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

When(/^I insert the standard username$/, () => {
	cy.fixture('element').then((el)=>{
		cy.typeAText(el.user_name_field, el.standard)
	})
});

When(/^I insert the password$/, () => {
	cy.fixture('element').then((el)=>{
		cy.typeAText(el.password_field, el.password)
	})
});

Then(/^I should see the product list page$/, () => {
	cy.fixture('element').then((el)=>{
		cy.get(el.product_header).should('have.text', 'Products')
	})
});

When(/^I add an Item to cart$/, () => {
	cy.fixture('element').then((el)=>{
		cy.clickAnElement(el.add_cart_button)
	})
});


Then(/^I should see the item in the cart$/, () => {
	cy.fixture('element').then((el)=>{
		cy.get(el.sauce_labs_backpack).should('have.text', 'Sauce Labs Backpack')
	})
});

Then(/^I logout$/, () => {
	cy.fixture('element').then((el)=>{
		cy.clickAnElement(el.burger_menu)
		cy.clickAnElement(el.logout_link)
	})
});

When(/^I click the cart icon$/, () => {
	cy.fixture('element').then((el)=>{
		cy.clickAnElement(el.cart_icon)
	})
});

When(/^I click the login button$/, () => {
	cy.fixture('element').then((el)=>{
		cy.clickAnElement(el.login_button)
	})
});
