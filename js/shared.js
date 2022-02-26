"use strict";

// FRIEND CLASS
class Friend {
    constructor(name = "", coordinates = []) {
        this._name = name;
        this._coordinates = coordinates;
        this._isGasStation = false;
    }

    // accessors
    get name() {
        return this._name;
    }

    get coordinates() {
        return this._coordinates;
    }

    get isGasStation() {
        return this._isGasStation;
    }

    // mutators
    set name(newName) {
        this._name = newName;
    }

    set isGasStation(boolean) {
        this._isGasStation = boolean;
    }

    set coordinates(newCoordinates) {
        this._coordinates = newCoordinates;
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