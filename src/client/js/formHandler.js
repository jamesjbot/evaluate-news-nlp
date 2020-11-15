function handleSubmit(event) {
    event.preventDefault()
    console.log("!!!Submit Button Presed!!!")
    // check what text was put into the form field
    let requestType = document.getElementById('requestType').value
    console.log('The requested Type is:'+requestType)
    //let formText = document.getElementById('name').value
    if (requestType == 'SentimentAnalysis') {
        Client.getSentiment()
    } else if (requestType == 'Summarization'){
        Client.getSummarization()
    }
    //Client.checkForName(formText)
    //Client.getSummarization(formText)

    // console.log("::: Form Submitted :::")
    // fetch('http://localhost:8081/test')
    // .then(res => res.json()) // Receive data from our server, convert to JSON
    // .then(function(res) {
    //     document.getElementById('results').innerHTML = res.score_tag
    // })
}

export { handleSubmit }
