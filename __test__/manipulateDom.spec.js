
/*jshint esversion:8*/
import { manipulateDomWithJSONAtKey } from "../src/client/js/manipulateDom";

test("Testing manipulate dom function", () => {

  // Given: A basic HTML DOM
  document.body.outerHTML = '<div id="target">virgin text</div>';

  // Then:
  manipulateDomWithJSONAtKey(document, {data:"manipulated text"}, "target");

  // Then:
  expect(document.body.textContent).toEqual('manipulated text');

});
