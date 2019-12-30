setElementVisibility('resetButtonId', false);

// set message
function setHTML(text) {
    var result = document.querySelector('#resultId');
    result.innerHTML = text;
}

// set elment visibility
function setElementVisibility(elementId, isVisibile){
    var properties = isVisibile ? "block" : "none";
    document.querySelector('#' + elementId).style.display = properties;
}

function onPlayClicked() {
    // hide play button
    setElementVisibility('playButtonId', false);
    // show reset button
    setElementVisibility('resetButtonId', true);
    setHTML("Played");
}

function onResetCliked() {
    // show play button
    setElementVisibility('playButtonId', true);
    // hide reset button
    setElementVisibility('resetButtonId', false);
    setHTML("Cleared");
}

const buttonPlay = document.querySelector('#playButtonId');
buttonPlay.addEventListener('click', onPlayClicked);

const buttonReset = document.querySelector('#resetButtonId');
buttonReset.addEventListener('click', onResetCliked);