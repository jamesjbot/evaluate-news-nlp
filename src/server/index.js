/*jshint esversion:8*/

//Environment variables
const dotEnv = require('dotenv'); // Used to get apikey from the environment
dotEnv.config();

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const fetch = require("node-fetch");

const cors = require('cors');

const meaningCloudURL = 'https://api.meaningcloud.com/sentiment-2.1?key='
// TODO remove
console.log('Your api key is:'+process.env.API_KEY);

const app = express()

app.use(cors());
app.use(express.static('dist')); // use for enrivronment api key
//app.use(express.json()); // for parsin application/json

//Here we are configuring express to use body-parser as middle-ware.
//const bodyParser = require('body-parser');
app.use(express.json()); // Enable the json parser from express.
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());


console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(7777, function () {
    console.log('Example app listening on port 7777!')
})

app.get('/test', function (req, res) {
    console.log('Receved Request for /test')
    console.log('The request is:');
    //console.log(req.body)
    // meaningCloudAPIFetch(req)
    //     .then(response => response)
    //     .then(data => data.json())
    //     .then(jsonData => {
    //       console.log('Agreement:'+jsonData.agreement);
    //       console.log('Subjectivity:'+jsonData.subjective);
    //       console.log('Confidence:'+jsonData.confidence);
    //       res.send(jsonData); // Returning JSONData
    //     });
    //res.send(req.body);
});

// POST methods to receive sentiment analysis
app.post('/sentiment', function (req, res) {
  console.log('call to post sentiment received');
  try {
    let data = req.body; //By having express.json(), this is automatically parsed
    console.log('received:',data.data);
  } catch (err){
    console.log('error parsing request body:', err);
  }
  console.log('past body.json()');
  res.send(JSON.stringify(responseJson));
});

function meaningCloudAPIFetch(input) {
    if (input == null ) {
      input = 'http://www.yahoo.com';
    } else {
      console.log('input:');
      console.log(input);
    }
    console.log('Sending Request to Meaning Cloud at');
    const address = `${meaningCloudURL}${process.env.API_KEY}&of=json&lang=en&txtf=markup&url=${input}`;
    console.log(address);
    return fetch(address);
}

const responseJson = {
	status: {"msg": "ok"},
	aggrement: 'AGREEMENT',
	subjectivity: 'OBJECTIVE',
	confidence: '100',
	irony: 'NONIRONIC'
};
