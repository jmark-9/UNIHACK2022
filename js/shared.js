"use strict";

const ACCOUNT_KEY = "account"

// REACH ACCOUNT
class ReachAccounts {
    constructor() {
        this._accounts = [];
    }



    searchAccount(username) {
        for (let i = 0; i < this._accounts.length; i++) {
            if (this._accounts[i]._username == username) {
                return i;
            }
        }
        alert(`Could not find user`)
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

    add_friend(new_name, new_frequency) {
        var new_friend = new Friend();
        new_friend.name = new_name;
        new_friend.contact_frequency = new_frequency;
    }

    get_name() {
        return this._name;
    }

    set_name(new_name) {
        this._name = new_name;
    }

    remove_friend(freind_name) {
        for (i = 0; i < this._friends.length; ++i) {
            if (this._friends[i].name == freind_name) {
                this._friends[i] = null;
            }
        }
    }

}

// FRIEND CLASS
class Friend {
    constructor(name = "", contact_history = [], contact_frequency) {
        this._name = name;
        this._contact_history = contact_history;
        this._contact_frequency = contact_frequency;
    }

    // accessors
    get name() {
        return this._name;
    }

    get contact_history() {
        return this._contact_history;
    }

    get contact_frequency() {
        return this._contact_frequency;
    }

    // mutators
    set name(newName) {
        this._name = newName;
    }

    set contact_history() {


    }

    set contact_frequency(duration) {
        if (duration == "daily") {
            this._contact_frequency = 1;
        } else if (duration == "weekly") {
            this._contact_frequency = 7;
        } else if (duration == "monthly") {
            this._contact_frequency = 30;
        } else if (duration == "yearly") {
            this._contact_frequency = 365;
        }
    }

    // methods
    /**
     * fromData function
     * Retrieves data from storage back into the class instance
     * @param {object} data an instance of the location class
     */
    fromData(data) {
        this._name = data._name;
        this._coordinates = data._coordinates;
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
if (checkLSData(CURRENT_ACCOUNT)) {
    // If data exists, retrieve it
    let data = retrieveLSData(CURRENT_ACCOUNT);
    // Restore data into vacationList
    accounts.fromData(data);
}

// Global vacation variable
let current_account = reachAccounts.accounts[reachAccounts.searchAccount(username)];