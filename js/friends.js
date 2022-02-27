"use strict";

function addFriendForm() {
    // display dialog box pop-up
    dialog.showModal();
}

function cancelFriend() {
    dialog.close();
}

// Global code
// Registers the dialog box polyfill
let dialog = document.getElementById("addDialog");
if (!dialog.showModal) 
{
    dialogPolyfill.registerDialog(dialog);
}