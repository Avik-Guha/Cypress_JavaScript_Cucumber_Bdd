/// <reference types="cypress" />
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'

Given('Launch Application', () => {
	cy.launch_application()
})
