
/*jshint esversion:8*/
import { manipulateDomWithJSONAtKey } from "../src/client/js/manipulateDom";

jest.clearAllMocks();

test("Testing manipulate dom function", () => {

  // Given: A basic HTML DOM
  document.body.outerHTML = '<div id="target">virgin text</div>';

  // When:
  manipulateDomWithJSONAtKey(document, responseJson, "target");

  // Then:
  let output = `<p>Agreement: AGREEMENT</p>`
  + `<p>Subjectivity: OBJECTIVE</p>`
  + `<p>Confidence: 100</p>`
  + `<p>Irony: NONIRONIC</p>`

  let target = document.getElementById("target");

  expect(target.innerHTML).toEqual(output);

});

const responseJson = {
	'status': {msg: "ok",code:'0'},
	'agreement': 'AGREEMENT',
	'subjectivity': 'OBJECTIVE',
	'confidence': '100',
	'irony': 'NONIRONIC'
};
