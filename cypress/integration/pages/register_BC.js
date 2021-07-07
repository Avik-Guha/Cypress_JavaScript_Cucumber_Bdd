/// <reference types="cypress" />
import BasePage from '../BasePage'
import * as register_locator from './register_OB'
// import * as register_Data from '../../fixtures/register_details.json'

export default class register_BC extends BasePage {
	static enter_first_name() {
		// BasePage.setMobileViewPort()

		cy.fixture('register_details').then((details) => {
			const first_name = details.first_name

			cy.get(register_locator.first_name_textbox)
				.should('be.visible')
				.type(first_name)
		})

		//Alternate way to fetch data from Json
		// cy.get(register_locator.first_name_textbox)
		// 	.should('be.visible')
		// 	.type(register_Data.first_name)
		cy.wait(5000)
	}
}
