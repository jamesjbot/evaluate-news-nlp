/*jshint esversion:8*/
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const fetch = require("node-fetch");

const dotEnv = require('dotenv');
dotEnv.config();

const cors = require('cors');

const meaningCloudURL = 'https://api.meaningcloud.com/sentiment-2.1?key='
// TODO remove
console.log('Your api key is:'+process.env.API_KEY);

const app = express()
app.use(cors());
app.use(express.static('dist'));

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    console.log('Receved Request for /test')
    meaningCloudAPIFetch(req)
        .then(response => response)
        .then(data => data.json())
        .then(jsonData => {
          console.log('Agreement:'+jsonData.agreement);
          console.log('Subjectivity:'+jsonData.subjective);
          console.log('Confidence:'+jsonData.confidence);
          //console.log(jsonData);
          res.send(jsonData); // Returning JSONData
        });
})

function meaningCloudAPIFetch(input) {
    console.log('Sending Request to Meaning Cloud at');
    const address = `${meaningCloudURL}${process.env.API_KEY}&of=json&lang=en&txtf=markup&url=https://www.yahoo.com`;
    console.log(address);
    return fetch(address);
}

function nlp() {
  let json = {
      'title': 'test json response',
      'message': 'this is a message',
      'time': 'now'
  }

  module.exports = json
  return json;
}
