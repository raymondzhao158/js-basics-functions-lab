// Code your solution in this file!
const hqBlock = 42

function distanceFromHqInBlocks(targetBlock) {
    return Math.abs(hqBlock - targetBlock)
};


function distanceFromHqInFeet(blockEnded) {
    return (Math.abs(hqBlock - blockEnded)*264)
};

function distanceTravelledInFeet(blockStarted, blockEnded) {
    return (Math.abs(blockStarted - blockEnded)*264)
};

function calculatesFarePrice(start, destination) {
    let fee;
    if (distanceTravelledInFeet(start, destination) <400) {
        fee = 0
    }
    if ((distanceTravelledInFeet(start, destination) >=400) && (distanceTravelledInFeet(start, destination) <=2000)) {
        fee = (distanceTravelledInFeet(start, destination)-400)*.02
    }
    if ((distanceTravelledInFeet(start, destination) >2000) && (distanceTravelledInFeet(start, destination) <=2500)) {
        fee = 25
    }
    if (distanceTravelledInFeet(start, destination) >2500) {
        fee = `cannot travel that far`
    }
    return fee
};