/// <reference types="cypress" />
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import BasePage from '../../BasePage'

Given('Launch Application', () => {
	cy.launch_application()
})

Given('Set viewport to {string}', (viewport) => {
	switch (viewport) {
		case 'mobile':
			BasePage.setMobileViewPort()
			break
		case 'tablet':
			BasePage.setTabletViewPort()
			break
		case 'desktop':
			BasePage.setDesktopViewPort()
			break
		default:
			BasePage.setDefaultViewPort()
			break
	}
})
