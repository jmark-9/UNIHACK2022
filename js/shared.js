"use strict";

const ACCOUNT_KEY = "account"

// REACH ACCOUNT
class ReachAccounts {
    constructor() {
        this._accounts = [];
        this._accountIndex = "";
    }

    get accountIndex() {
        return this._accountIndex;
    }

    set accountIndex(account) {
        this._accountIndex = account
    }

    addAccount(new_account) {
        this._accounts.push(new_account)
    }

    searchAccount(username) {
        for (let i = 0; i < this._accounts.length; i++) {
            if (this._accounts[i]._username == username) {
                return i;
            }
        }
        alert(`Could not find user`)
    }

    fromData(data) {
        for (let i = 0; i < data._accounts.length; i++) {
            let tempAccount = new Account();
            tempAccount.fromData(data._accounts[i]);
            this._accounts.push(tempAccount);
        }
        this._accountIndex = data._accountIndex
    }
}

// ACCOUNT 
class Account {
    constructor(name = "", username = "", profile_picture = "") {
        this._name = name;
        this._username = username;
        this._profile_picture = profile_picture;
        this._friends = [];
    }

    
    get name() {
        return this._name;
    }
    
    set name(new_name) {
        this._name = new_name;
    }
    
    removeFriend(friend_name) {
        for (i = 0; i < this._friends.length; ++i) {
            if (this._friends[i].name == friend_name) {
                this._friends[i] = null;
            }
        }
    }
    
    addFriend(friend) {
        this._friends.push(friend);
    }
    
    fromData(data) {
        this._name = data._name;
        this._username = data._username;
        this._profile_picture = data._profile_picture;
        for (let i = 0; i < data._friends.length; i++) {
            let tempFriend = new Friend();
            tempFriend.fromData(data._friends[i]);
            this._friends.push(tempFriend);
        }
    }
}

// FRIEND CLASS
class Friend {
    constructor() {
        this._name = "";
        this._contactHistory = [];
        this._contact_frequency = 0;
    }

    // accessors
    get name() {
        return this._name;
    }

    get contactHistory() {
        return this._contactHistory;
    }

    get contact_frequency() {
        return this._contact_frequency;
    }

    // mutators
    set name(newName) {
        this._name = newName;
    }

    set contact_frequency(duration) {
            this._contact_frequency = duration;
    }

    addHistory(date) {
        this._contactHistory.push(date);
    }

    // methods
    fromData(data) {
        this._name = data._name;
        this._contactHistory = data._contactHistory;
        this._contact_frequency = data._contact_frequency;
    }

}

// LOCAL STORAGE INFORMATION

/**
 * checkLSData function
 * Used to check if any data in LS exists at a specific key
 * @param {string} key LS Key to be used
 * @returns true or false representing if data exists at key in LS
 */
function checkLSData(key) {
    if (localStorage.getItem(key) != null) {
        return true;
    }
    return false;
}

/**
 * retrieveLSData function
 * Used to retrieve data from LS at a specific key. 
 * @param {string} key LS Key to be used
 * @returns data from LS in JS format
 */
function retrieveLSData(key) {
    let data = localStorage.getItem(key);
    try {
        data = JSON.parse(data);
    } catch (err) {} finally {
        return data;
    }
}

/**
 * updateLSData function
 * Used to store JS data in LS at a specific key
 * @param {string} key LS key to be used
 * @param {any} data data to be stored
 */
function updateLSData(key, data) {
    let json = JSON.stringify(data);
    localStorage.setItem(key, json);
}

// Global Accounts variable
let reachAccounts = new ReachAccounts();
// Check if data available in LS before continuing
if (checkLSData(ACCOUNT_KEY)) {
    // If data exists, retrieve it
    let data = retrieveLSData(ACCOUNT_KEY);
    // Restore data into vacationList
    reachAccounts.fromData(data);
}

let currentAccount = reachAccounts._accounts[reachAccounts._accountIndex];