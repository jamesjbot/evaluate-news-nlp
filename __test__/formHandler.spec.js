
/*jshint esversion:8*/
import { validateEntry } from "../src/client/js/formHandler";
import 'regenerator-runtime/runtime';

describe("Form handler tests", () => {

	test("Valid URL Checker",() => {
		expect(validateEntry("http://www.google.com")).toBeTruthy();
		expect(validateEntry("https://www.yahoo.com")).toBeTruthy();
		expect(validateEntry("blahblahblah")).toBeFalsy();
	});

});
