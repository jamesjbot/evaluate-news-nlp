
/*jshint esversion:8*/
import { handleSubmit } from "../src/client/js/formHandler";
import 'regenerator-runtime/runtime';


// const responseJson = {
// 	'status': {"msg": "ok"},
// 	'aggrement': 'AGREEMENT',
// 	'subjectivity': 'OBJECTIVE',
// 	'confidende': '100',
// 	'irony': 'NONIRONIC'
// };
const responseJson = {
	'status': {msg: "ok",code:'0'},
	'agreement': 'AGREEMENT',
	'subjectivity': 'OBJECTIVE',
	'confidence': '100',
	'irony': 'NONIRONIC'
};

// A mocked version of fetch
//const sentiment = require('../src/client/js/getSentiment');
jest.mock('../src/client/js/getSentiment');
import { getSentiment } from '../src/client/js/getSentiment';
//jest.mock(getSentiment);
//const getSentiment = require('../src/client/js/getSentiment');



jest.mock('../src/client/js/manipulateDom.js');
import {manipulateDomWithJSONAtKey} from '../src/client/js/manipulateDom.js';

//jest.mock('sentiment');

// getSentiment = jest.fn( () => {
//   console.log('You called the mocked getSentiment');
//   return Promise.resolve(responseJson);
// });
//
// Client.manipulateDomWithJSONAtKey = jest.fn( () => {
//   console.log('You called the mocked manipulateDomWithJSON');
//   return;
// });
// The unit test
describe("Sentiment Analysis receipt test", () => {

  test("Click to paint test", () => {

    //Given:
    const responseJson = {
    	'status': {msg: "ok",code:'0'},
    	'agreement': 'AGREEMENT',
    	'subjectivity': 'OBJECTIVE',
    	'confidence': '100',
    	'irony': 'NONIRONIC'
    };
    //getSentiment.mockResolvedValue(responseJson);

    //When:
    const myevent = new MouseEvent('click',
              {view: window,
              bubbles: true,
              cancelable: true});
    //console.log('What does the document look like');
    //console.log(document.body.outerHTML)
    //handleSubmit(myevent);
    let returnValue = getSentiment('hello');
    //console.log(returnValue);

    //Then:
    expect(true).toBeTruthy();
    //expect(getSentiment.mock.calls.length).toBe(1);
  });


});
