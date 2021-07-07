/// <reference types="cypress" />

const cucumber = require('cypress-cucumber-preprocessor').default
const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin')

const fs = require('fs-extra')
const path = require('path')

function getConfigurationByFile(file) {
	const pathToConfigFile = path.resolve('cypress', 'config', `${file}.json`)
	if (!fs.existsSync(pathToConfigFile)) {
		return {}
	}

	return fs.readJson(pathToConfigFile)
}

module.exports = (on, config) => {
	// `on` is used to hook into various events Cypress emits
	// `config` is the resolved Cypress config

	on('file:preprocessor', cucumber())
	addMatchImageSnapshotPlugin(on, config)

	on('task', {
		failed: require('cypress-failed-log/src/failed')(),
		log(message) {
			console.log(message)

			return null
		},
		table(message) {
			console.table(message)

			return null
		},
	})

	const file = config.env.configFile
	return getConfigurationByFile(file)
}
