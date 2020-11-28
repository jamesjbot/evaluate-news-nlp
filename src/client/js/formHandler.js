
/*jshint esversion:8*/

async function handleSubmit(event) {
    event.preventDefault();
    let formText = document.getElementById('searchValue').value;
    await Client.getSentiment(formText).then(message => {
      Client.manipulateDomWithJSONAtKey(document, message,'results');
    });
}

export { handleSubmit };
