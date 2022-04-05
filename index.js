// Code your solution in this file!
const returnFirstTwoDrivers = array => {
    let newArray = [];
    newArray.push(array[0], array[1])
    return newArray;
}

const returnLastTwoDrivers = array => {
    let newArray = [];
    newArray.push(array[array.length - 2], array[array.length - 1]);
    return newArray
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int) {
    return function fareMultiplier(fare) {
        return fare * int
    }
}

function createFareMultiplier(int) {
    return function fareMultiplier(fare) {
        return fare * int
    }
}

const fareDoubler = fare => createFareMultiplier(2)(fare);

const fareTripler = fare => createFareMultiplier(3)(fare);

const selectDifferentDrivers = (drivers, callBack) => {
    return callBack(drivers);
};




