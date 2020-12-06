var textInput = document.querySelector("#text-input");

var outputDiv = document.querySelector("#output-div");

var translateButton = document.querySelector("#trans-button");

var clearButton = document.querySelector("#clear-button");

var url = 'https://lessofourapi.tanaypratap.repl.co/translate/yoda.json';

function executeFetchCall(inputText) {
    fetch(getTranslatedURL(inputText))
        .then(response => response.json())
        .then(resp => {
            var output = resp.contents.translated;
            console.log(output);
            outputDiv.innerText = output;
        })
        .catch(errorHandler);
}

function getTranslatedURL(inputText) {
    var encodedURI = encodeURI(inputText);
    return `${url}?text=${encodedURI}`;
}

function errorHandler(error) {
    alert("The server is busy. Please try again after some time.");
    console.log(error);
}


function clickHandler(event) {
    // console.log(textInput.value);
    if (textInput.value !== "") {
        executeFetchCall(textInput)
    }
    else alert("Please enter text");
}

function clearClickHandler(event) {
    textInput.value = "";
    outputDiv.innerHTML = "";
}

clearButton.addEventListener('click',clearClickHandler)
translateButton.addEventListener('click', clickHandler);