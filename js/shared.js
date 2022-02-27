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
        } else if (duration = "weekly") {
            this.contact_frequency = 7;
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