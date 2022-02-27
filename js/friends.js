"use strict";

function addFriendForm() {
    // display dialog box pop-up
    dialog.showModal();
}

function cancelFriend() {
    dialog.close();
}

function saveFriend() {
    // get info
    let friendNameInput = document.getElementById("fname");
    let frequency = ''
    if (document.getElementById("daily").checked) {
        frequency = "daily";
    }
    else if (document.getElementById("weekly").checked) {
        frequency = "weekly";
    }
    else if (document.getElementById("biweekly").checked) {
        frequency = "biweekly";
    }
    else if (document.getElementById("monthly").checked) {
        frequency = "monthly";
    }
    else if (document.getElementById("threeMonths").checked) {
        frequency = "threeMonths";
    }
    else if (document.getElementById("yearly").checked) {
        frequency = "yearly";
    }
    // close dialog
    dialog.close();
}

// Global code
// Registers the dialog box polyfill
let dialog = document.getElementById("addDialog");
if (!dialog.showModal) 
{
    dialogPolyfill.registerDialog(dialog);
}