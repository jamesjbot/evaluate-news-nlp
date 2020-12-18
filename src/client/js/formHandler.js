
/*jshint esversion:8*/

async function handleSubmit(event) {
    event.preventDefault();
    let formText = document.getElementById('searchValue').value;

    if ( validateEntry(formText) ) {
      // Notify the user that their request was submitted
      document.getElementById('results').textContent = 'Processing...';

      // Submit request to server
      await Client.getSentiment(formText).then(message => {
        Client.manipulateDomWithJSONAtKey(document, message,'results');
      });

    } else {

    document.getElementById('results').textContent = 'You did not enter a website starting with http:// or https://';

    }
}

function validateEntry( website ) {
  let validWebsiteAddress = false;
  let regularExpression = new RegExp('^https?:\/\/[a-zA-Z]{3,}\.[a-zA-Z]{1,}\.[a-zA-Z]{3,}');
  validWebsiteAddress = regularExpression.test(website);

  return validWebsiteAddress;
}

export { handleSubmit, validateEntry };
