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
    let friendNameInput = document.getElementById("fname").value;
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
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    newFriend.addHistory(today);
    currentAccount.addFriend(newFriend);
    // update the accounts list in LS
    updateLSData(ACCOUNT_KEY, reachAccounts);
    // close dialog
    dialog.close();
    location.reload();
}

var img = '/to-do-notifications/img/icon-128.png';
var text = 'HEY! Your task is now overdue.';
var notification = new Notification('To do list', { body: text, icon: img });

// Global code
// Registers the dialog box polyfill
let dialog = document.getElementById("addDialog");
if (!dialog.showModal) {
    dialogPolyfill.registerDialog(dialog);
}

function displayFriends() {
    let displayArea = document.getElementById("friendsLst");
    let friendLst = '';
    for (let i = 0; i < currentAccount._friends.length; i++) {
        friendLst += `<div id="friend${i}" class="friends">
        <p class="friendName">${currentAccount._friends[i]._name}</p>
        <hr>
        <p class="lastMsg">${currentAccount._friends[i]._contactHistory[reachAccounts._accounts[i]._friends._contactHistory.length-1]}</p>
    </div>`
    }
    displayArea.innerHTML = friendLst;
}

displayFriends()