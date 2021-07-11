# Cypress_JavaScript_Cucumber_Bdd

This is an Web Automation Testing framework using:

     Cypress
     JavaScript
     Cucumber BDD
     mochawesome report
     Page Object Model

## Installation

### Prerequisite:

     Node.js
     Editor (preferred - Visual Studio Code)

### Extensions in VS Code:

     vscode-icons
     Prettier - Code formatter
     Output Colorizer
     Visual Studio IntelliCode
     npm
     npm Intellisense
     Cucumber (Gherkin) Full Support
     ES7 React/Redux/GraphQL/React-Native snippets

All set!!! Just download the Project folder...

## Framework Structure

     .npm\logs --> contains execution logs

     .vscode --> contains settings.js folder (contains parameters for cucumber and prettier)

     Cypress:

          config --> contains configuration / environment files

          fixtures --> contains fixture files (Json files)

          integration:

               common\steps --> contains Step Definition files

               features --> contains feature files

               pages --> Contains Business Components and Object Locator files

                    *_BC.js --> contains methods

                    *_OB.js --> contains locators

               Base --> contains methods to set viewport

               logs --> contains failed logs

               plugins --> contains index.js files for the plugins

               results --> stores execution result files

               support:

                    commands --> used to store custom commands

                    index --> global configuration and behavior that modifies Cypress

     mochawesome-report --> HTML report is generated using cucumber-html-reporter

     .prettierrc --> configuration file for Prettier

     cypress.json --> configuration file for Cypress

     package.json --> contains scripts and dependency info

     reporter-config.json --> configuration file for typescript

## Usage

     1. Download the Project folder

     2. Install dependencies

          npm install

          New folder "node_modules" will be created with all the dependencies after running this command.

     3. Run command to run the test:

          Command to delete existing reports:

          npm run prereport

          Command to run script w.r.t.  the package.json file:

          npm run cypress_runtest_browser_headless

          Command to merge and generate single HTML report:

          npm run mochawesome_merge

         E.g. npm run Test_QA
         (scripts must be added in Scripts section inside package.json file. For e.g., "cypress_runtest_browser_headless" and "mochawesome_merge" demo script has been added in this framework.)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Contributors

Avik Guha

## License

Licensed under the [MIT License](LICENSE).
