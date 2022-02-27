"use strict";

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
            this.contact_frequency = 1;
        } else if (duration == "weekly") {
            this.contact_frequency = 7;
        } else if (duration == "monthly") {
            this.contact_frequency = 30;
        } else if (duration == "yearly") {
            this.contact_frequency = 365;
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

// Global VacationList variable
let vacationList = new VacationList();
// Check if data available in LS before continuing
if (checkLSData(VACATIONLIST_KEY)) {
    // If data exists, retrieve it
    let data = retrieveLSData(VACATIONLIST_KEY);
    // Restore data into vacationList
    vacationList.fromData(data);
}

// Global vacation variable
let vacation = vacationList.vacations[vacationList.vacations.length - 1];