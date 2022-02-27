"use strict";

function onLoad() {
    let message = document.getElementById("greeting");
    message.innerText = `Welcome Bestie ${currentAccount._name}!`;
}

onLoad()