"use strict";

function onLoad() {
    let message = document.getElementById("greeting");
    message.innerText = `Welcome Bestie ${currentAccount._name}!`;
}

function checkNotifs() {
    // Let's check if the browser supports notifications
  
    // Let's check whether notification permissions have already been granted
    if (Notification.permission === "granted") {
        // do nothing
    }
  
    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== "denied") {
      Notification.requestPermission()
    }
  
    // At last, if the user has denied notifications, and you
    // want to be respectful there is no need to bother them any more.
}

onLoad()
