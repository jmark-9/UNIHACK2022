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
        frequency = 1;
    }
    else if (document.getElementById("weekly").checked) {
        frequency = 7;
    }
    else if (document.getElementById("fortnightly").checked) {
        frequency = 14;
    }
    else if (document.getElementById("monthly").checked) {
        frequency = 31;
    }
    else if (document.getElementById("threeMonths").checked) {
        frequency = 63;
    }
    else if (document.getElementById("yearly").checked) {
        frequency = 365;
    }
    let newFriend = new Friend();
    newFriend._name = friendNameInput;
    newFriend._contact_frequency = frequency;
    currentAccount.addFriend(newFriend);
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

function displayFriends() {
    
}