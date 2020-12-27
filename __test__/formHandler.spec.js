
/*jshint esversion:8*/
import { validateEntry, handleSubmit } from "../src/client/js/formHandler";
import 'regenerator-runtime/runtime';

describe("Form handler tests", () => {

	test("Check handleSubmit function", () => {
		expect(handleSubmit).toBeDefined();
	});

	test("Testing the handleSubmit() function", () => {
		expect(validateEntry("http://www.google.com")).toBeDefined();
	});

	test("Valid URL Checker",() => {
		expect(validateEntry("http://www.google.com")).toBeTruthy();
		expect(validateEntry("https://www.yahoo.com")).toBeTruthy();
		expect(validateEntry("blahblahblah")).toBeFalsy();
	});

});
