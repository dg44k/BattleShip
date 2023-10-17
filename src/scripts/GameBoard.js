import * as constants from './constants';
import setStopZone from "./setStopZone";
import Ship from "./Ship";


const GameBoard = function () {
    let board = [];
    let axisX = true;
    let axisY = false;
    let ships = [];

    const createBoard = function () {
        for (let i = 0; i < 10; i++) {
            board.push([]);
            for (let j = 0; j < 10; j++) {
                board[i][j] = constants.EMPTY;
            }
        }
        return board;
    }
    const randomArrangementShips = function () {
        const four_deck = new Ship(4);
        cycleArrangement(four_deck);
        ships.push(four_deck);
        const triple_deck_1 = new Ship(3);
        cycleArrangement(triple_deck_1);
        ships.push(triple_deck_1);
        const triple_deck_2 = new Ship(3);
        cycleArrangement(triple_deck_2);
        ships.push(triple_deck_2);
        const dual_deck_1 = new Ship(2);
        cycleArrangement(dual_deck_1);
        ships.push(dual_deck_1);
        const dual_deck_2 = new Ship(2);
        cycleArrangement(dual_deck_2);
        ships.push(dual_deck_2);
        const dual_deck_3 = new Ship(2);
        cycleArrangement(dual_deck_3);
        ships.push(dual_deck_3);
        const single_deck_1 = new Ship(1);
        cycleArrangement(single_deck_1);
        ships.push(single_deck_1);
        const single_deck_2 = new Ship(1);
        cycleArrangement(single_deck_2);
        ships.push(single_deck_2);
        const single_deck_3 = new Ship(1);
        cycleArrangement(single_deck_3);
        ships.push(single_deck_3);
        const single_deck_4 = new Ship(1);
        cycleArrangement(single_deck_4);
        ships.push(single_deck_4);

    }
    const cycleArrangement = function (ship) {
        const [coordX, coordY] = getRandomCoordinates(ship);
        ship.setPointStart([coordX, coordY]);

        if (axisX === false) {
            for (let i = coordX; i < coordX + ship.getLengthShip(); i++) {
                board[i][coordY] = constants.WHOLE_SHIP;
            }
            ship.setPointEnd([coordX + ship.getLengthShip() - 1, coordY]);
        } else {
            for (let i = coordY; i < coordY + ship.getLengthShip(); i++) {
                board[coordX][i] = constants.WHOLE_SHIP;
            }
            ship.setPointEnd([coordX, coordY + ship.getLengthShip() - 1]);
        }
        setStopZone(ship.getLengthShip(), coordX, coordY, axisX, board)
    }
    const getRandomCoordinates = function (ship) {
        let coordinateX;
        let coordinateY;
        let check_nearby_ship = false;
        while (check_nearby_ship !== true) {
            coordinateX = Math.floor(Math.random()*9);
            coordinateY = Math.floor(Math.random()*9);
            if(Math.floor(Math.random()) === 0) toggleAxis();
            check_nearby_ship = checkShipNearby(ship, coordinateX, coordinateY)
        }
        return [coordinateX, coordinateY];
    }
    const checkShipNearby = function (ship, coordX, coordY) {
        if (axisX === false) {
            if (coordX + ship.getLengthShip() > 9) return false;
            for (let i = coordX; i < coordX + ship.getLengthShip(); i++) {
                if(board[i][coordY] !== constants.WHOLE_SHIP &&
                   board[i][coordY] !== constants.STOP_ZONE) continue;
                else return false;
            }
        } else {
            if (coordY + ship.getLengthShip() > 9) return false;
            for (let i = coordY; i < coordY + ship.getLengthShip(); i++) {
                if(board[coordX][i] !== constants.WHOLE_SHIP &&
                    board[coordX][i] !== constants.STOP_ZONE) continue;
                else return false;
            }
        }
        return true;
    }
    const receiveAttack = function (coordX, coordY) {
        if (board[coordX][coordY] === constants.WHOLE_SHIP) {
            for (let i = 0; i < 10; i++) {
                if (axisX === false) {
                    if (coordX === ships[i].getPointStart()[0]) {
                        if (coordY >= ships[i].getPointStart()[1] && coordY <= ships[i].getPointEnd()[1]){
                            ships[i].hit();
                            return true;
                        }
                    }
                } else {
                    if (coordY === ships[i].getPointStart()[1]) {
                        if (coordX >= ships[i].getPointStart()[0] && coordX <= ships[i].getPointEnd()[0]){
                            ships[i].hit();
                            return true;
                        }
                    }
                }

            }

            board[coordX][coordY] = constants.WRECKED_SHIP;

        }
        else if (board[coordX][coordY] === constants.EMPTY ||
            board[coordX][coordY] === constants.STOP_ZONE) {
            board[coordX][coordY] = constants.MISS;
            return false;
        }

    }
    function toggleAxis() {
        if (axisX === true){
            axisX = false;
            axisY = true;
        } else {
            axisX = true;
            axisY = false;
        }
    }

    return {
        cycleArrangement,
        getRandomCoordinates,
        createBoard,
        checkShipNearby,
        toggleAxis,
        randomArrangementShips,
        receiveAttack
    }
}

export default GameBoard;
