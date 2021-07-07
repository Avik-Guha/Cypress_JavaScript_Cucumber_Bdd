import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command'
import 'cypress-file-upload'

export function terminalLog(violations) {
	cy.task(
		'log',
		`${violations.length} accessibility violation${
			violations.length === 1 ? '' : 's'
		} ${violations.length === 1 ? 'was' : 'were'} detected`
	)
	// pluck specific keys to keep the table readable
	const violationData = violations.map(
		({ id, impact, description, nodes }) => ({
			id,
			impact,
			description,
			nodes: nodes.length,
		})
	)

	cy.task('table', violationData)
}

addMatchImageSnapshotCommand({
	failureThreshold: 0.0,
	failureThresholdType: 'percent',
	customDiffConfig: { threshold: 0.0 },
	capture: 'viewport',
})

Cypress.Commands.add('setResolution', (size) => {
	if (Cypress._.isArray(size)) {
		cy.viewport(size[0], size[1])
	} else {
		cy.viewport(size)
	}
})

const application_url = {
	url: Cypress.env('url'),
}

Cypress.Commands.add('launch_application', () => {
	cy.visit(application_url.url)
})

Cypress.Commands.add('click_on_Element', (elementLocator) => {
	cy.get(elementLocator).should('be.visible').click()
})

Cypress.Commands.add('enter_Text', (elementLocator, textToEnter) => {
	cy.get(elementLocator).should('be.visible').type(textToEnter)
})

Cypress.Commands.add('verify_Text', (elementLocator, textToCheck) => {
	cy.get(elementLocator).should('have.text', textToCheck)
})

Cypress.Commands.add(
	'select_dropdown_by_value',
	(dropdownLocator, valueToSelect) => {
		cy.get(dropdownLocator).select(valueToSelect)
	}
)

Cypress.Commands.add(
	'select_dropdown_by_text_and_verify_value',
	(dropdownLocator, textToSelect, dropdownValue) => {
		cy.get(dropdownLocator)
			.select(textToSelect)
			.should('have.value', dropdownValue)
	}
)

Cypress.Commands.add('select_in_dropdown', (dropdownLocator, textToSelect) => {
	cy.get(dropdownLocator).select(textToSelect)
})
