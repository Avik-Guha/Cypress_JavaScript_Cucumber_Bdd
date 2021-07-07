/// <reference types="cypress" />
import register_BC from '../../pages/register_BC'
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'

When('Enter First Name in Register page', () => {
	register_BC.enter_first_name()
})
