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

function notifyMe() {
    // Let's check if the browser supports notifications
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    }
  
    // Let's check whether notification permissions have already been granted
    else if (Notification.permission === "granted") {
      // If it's okay let's create a notification
      var notification = new Notification("Hi there!");
    }
  
    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function (permission) {
        // If the user accepts, let's create a notification
        if (permission === "granted") {
          var notification = new Notification("Hi there!");
        }
      });
    }
  
    // At last, if the user has denied notifications, and you
    // want to be respectful there is no need to bother them any more.
  }
  

// Global code
// Registers the dialog box polyfill
let dialog = document.getElementById("addDialog");
if (!dialog.showModal) 
{
    dialogPolyfill.registerDialog(dialog);
}

function displayFriends() {
    let displayArea = document.getElementById("friendsLst");
    friendLst = '';
    for (let i = 0; i < reachAccounts._accounts.length; i++) {
        friendLst += ``
    }
}