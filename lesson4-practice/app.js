// var userName = prompt("Give your name please");

// alert("Welcome " + userName + " !");


var clickButton = document.querySelector("#click-button");

var textInput = document.querySelector("#text-input");

var outputDiv = document.querySelector("#output-div");

var serverURL = 'https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json';

// var serverURL = "https://api.funtranslations.com/translate/minion.json";

function constructURL(text) {
    return serverURL + '?' + 'text=' + text;
}

function errorHandler(error) {
    console.log("error occured " + error);
    alert("Please try again later! ");
}

function doFetch(text) {
    fetch(constructURL(text))
        .then(resp => resp.json())
        .then(res => {
            console.log(res);
            const translated = res.contents.translated;
            outputDiv.innerText = translated
            console.log(translated)
        })
        .catch(errorHandler);
}

function clickHandler() {
    // console.log('clicked ');
    // console.log(textInput.value);
    // outputDiv.innerText = ' Your entered text is:'+textInput.value;
    doFetch(textInput.value);
}

// function constructURL(inputText) {
//     var encodedURI = encodeURI(inputText);
//     return `${url}?text=${encodedURI}`;
// }

clickButton.addEventListener('click', clickHandler);