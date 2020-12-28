
/*jshint esversion:8*/

//Environment variables
const dotEnv = require('dotenv'); // Used to get apikey from the environment
dotEnv.config();

var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const fetch = require("node-fetch");
const cors = require('cors');
const meaningCloudURL = 'https://api.meaningcloud.com/sentiment-2.1?key=';
const app = express();

app.use(cors());
app.use(express.static('dist')); // use for enrivronment api key

//Here we are configuring express
app.use(express.json()); // Enable the json parser from express.

// designates what port the app will listen to for incoming requests
app.listen(7777, function () {
    console.log('App listening on port 7777!');
});

// Return home webpage
app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'));
});

// POST methods to receive sentiment analysis
app.post('/sentiment', function (req, res) {

  meaningCloudAPIFetch(req.body.data)
      .then(response => response)
      .then(data => data.json())
      .then(jsonData => {
        console.log('Agreement:'+jsonData.agreement);
        console.log('Subjectivity:'+jsonData.subjectivity);
        console.log('Confidence:'+jsonData.confidence);
        res.send(jsonData); // Returning JSONData
      });
});

function meaningCloudAPIFetch(input) {

    if (input == null ) {
      input = 'http://www.yahoo.com';
    }
    console.log('Sending Request to Meaning Cloud at');
    const address = `${meaningCloudURL}${process.env.API_KEY}&of=json&lang=en&txtf=markup&url=${input}`;
    console.log(address);
    return fetch(address);

}
