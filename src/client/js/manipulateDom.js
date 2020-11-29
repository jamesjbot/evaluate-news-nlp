
/*jshint esversion:8*/
function manipulateDomWithJSONAtKey(document, JSON, key) {

    if (JSON.status.code == '0') { // Success!

      let element = document.getElementById(key);

      element.innerHTML =
      `<p>Aggrement: ${JSON.agreement}</p>`
      + `<p>Subjectivity: ${JSON.subjectivity}</p>`
      + `<p>Confidence: ${JSON.confidence}</p>`
      + `<p>Irony: ${JSON.irony}</p>`;

      return document;

    } else {

      document.getElementById(key).textContent = 'Could not analyze website'

    }


}

export { manipulateDomWithJSONAtKey };
