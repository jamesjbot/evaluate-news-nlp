
/*jshint esversion:8*/
function manipulateDomWithJSONAtKey(document, JSON, key) {

    console.log('mani received', JSON);

    let element = document.getElementById(key);

    element.innerHTML =
    `<p>Aggrement: ${JSON.aggrement}</p>`
    + `<p>Subjectivity: ${JSON.subjectivity}</p>`
    + `<p>Confidence: ${JSON.confidence}</p>`
    + `<p>Irony: ${JSON.irony}</p>`;

    return document;
}

export { manipulateDomWithJSONAtKey };
