/// <reference types="cypress" />
import { Before } from 'cypress-cucumber-preprocessor/steps'
import BasePage from '../../BasePage'

Before(() => {
	cy.log('This is executed first')
	const viewport = Cypress.env('viewport')
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
