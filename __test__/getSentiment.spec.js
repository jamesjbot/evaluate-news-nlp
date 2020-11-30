
/*jshint esversion:8*/
import { getSentiment } from "../src/client/js/getSentiment";
import 'regenerator-runtime/runtime';


const responseJson = {
	'status': {msg: "ok",code:'0'},
	'agreement': 'AGREEMENT',
	'subjectivity': 'OBJECTIVE',
	'confidence': '100',
	'irony': 'NONIRONIC'
};


// A mocked version of fetch
global.fetch = jest.fn( () => {
	if (true) {
		return Promise.resolve({
			json: () => Promise.resolve(responseJson),
		});
	} else {
		return Promise.reject({
			json: () => Promise.reject({msg: 'REJECTED'}),
		});
	}
});

// The unit test
describe("Sentiment Analysis receipt test", () => {

	test("Testing getSentiment() function", () => {
    // Given:
		// A supplied compatbile response called responseJson
		// and a mocked version of fetch
    // When:
		// we request any website
		return getSentiment('nonsensicalwebsite')
		.then( res => {
		// Then:
			expect(res).toStrictEqual(responseJson);
		})
		.catch(function(error) {
			error.then( res => {
				console.log('Sorry error with getting sentiment and the error is:');
				console.log(error)
			});
		});
	})
});
