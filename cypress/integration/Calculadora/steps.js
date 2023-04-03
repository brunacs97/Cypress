
import { Given, And, When, Then } from 'cypress-cucumber-preprocessor/steps';
import * as user from './actions';

Given(/^que eu acesso a Calculadora$/, () => {
	return true;
});

When(/^desejo realizar uma "([^"]*)"$/, (args1) => {
	console.log(args1);
	return true;
});

When(/^informar os valores "([^"]*)" e "([^"]*)"$/, (args1,args2) => {
	console.log(args1,args2);
	return true;
});

When(/^finalizar a conta$/, () => {
	return true;
});

Then(/^devo obter o resultado "([^"]*)"$/, (args1) => {
	console.log(args1);
	return true;
});




