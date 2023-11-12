const Ship = function(length) {
    let lengthShip = length;
    let countHit = 0;
    let lifeShip = false;
    let pointStart = [0, 0];
    let pointEnd = [0, 0];
    let stopZone = [];
    let axis;

    function getAxis() {
        return axis;
    }

    function getStopZones () {
        return stopZone;
    }

    function setStopZones(zone) {
        stopZone.push(zone);
    }

    function setAxis(ax) {
        axis = ax;
    }

    function getLengthShip() {
        return lengthShip;
    }

    function getLifeShip() {
        return lifeShip;
    }

    function getPointStart() {
        return pointStart;
    }

    function getPointEnd() {
        return pointEnd;
    }

    function setPointStart(point) {
        pointStart = point;
    }

    function setPointEnd(point) {
        pointEnd = point;
    }

    const hit = function() {
        countHit += 1;
        isSunk();
        return countHit;
    }

    const isSunk = function () {
        return lifeShip = countHit === lengthShip;
    }

    return {
        getLifeShip,
        getLengthShip,
        isSunk,
        hit,
        getPointStart,
        getPointEnd,
        setPointStart,
        setPointEnd,
        getAxis,
        setAxis,
        getStopZones,
        setStopZones,
    }
};

export default Ship;