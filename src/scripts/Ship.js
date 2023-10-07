const Ship = function(length) {
    let length_ship = length;
    let count_hit = 0;
    let life_ship = false;

    function getLengthShip() {
        return length_ship;
    }
    function getCountHit() {
        return count_hit;
    }
    function getLifeShip() {
        return life_ship;
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
        getCountHit,
        isSunk,
        hit,
    }
};

export default Ship;