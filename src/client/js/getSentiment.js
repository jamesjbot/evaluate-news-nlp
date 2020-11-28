
/*jshint esversion:8*/
async function getSentiment(inputText) {
    const jsonText = {data: inputText};
    return fetch('http://localhost:7777/sentiment', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(jsonText)
    })
    .then(res => res.json()) // Receive JSON String, convert to JSON
    .then(json => {return json;})
    .catch(function(error) {
      console.log('Sorry error with getting sentiment',error);
    });
}

export { getSentiment };
