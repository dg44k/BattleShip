const Ship = function(length) {
    let length_ship = length;
    let count_hit = 0;
    let life_ship = false;
    let point_start = [0, 0];
    let point_end = [0, 0];

    function getLengthShip() {
        return length_ship;
    }
    function getLifeShip() {
        return life_ship;
    }
    function getPointStart() {
        return point_start;
    }
    function getPointEnd() {
        return point_end;
    }
    function setPointStart(point) {
        point_start = point;
    }
    function setPointEnd(point) {
        point_end = point;
    }
    const hit = function() {
        count_hit += 1;
        isSunk();
        return count_hit;
    }
    const isSunk = function () {
        count_hit === length_ship ? life_ship = true : life_ship = false;
        return life_ship;
    }
    return {
        getLifeShip,
        getLengthShip,
        isSunk,
        hit,
        getPointStart,
        getPointEnd,
        setPointStart,
        setPointEnd
    }
};

export default Ship;