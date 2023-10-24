import * as constants from './constants';
import setStopZone from "./setStopZone";
import Ship from "./Ship";
import {logPlugin} from "@babel/preset-env/lib/debug";


const GameBoard = function () {
    let board = [];
    let ships = [];

    function getBoard () {
        return board;
    }

    function getShips () {
        return ships;
    }

    const createBoard = function () {
        for (let i = 0; i < 10; i++) {
            board.push([]);
            for (let j = 0; j < 10; j++) {
                board[i][j] = constants.EMPTY;
            }
        }
        return board;
    }
    const arrangementShips = function () {
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
        console.log(board)
    }
    const cycleArrangement = function (ship) {
        const [coordX, coordY] = getRandomCoordinates(ship);
        ship.setPointStart([coordX, coordY]);

        if (ship.getAxis() === "Y") {
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
        console.log(board)
        setStopZone(ship, board)
    }
    const getRandomCoordinates = function (ship) {
        let coordinateX;
        let coordinateY;
        let check_nearby_ship = false;
        while (check_nearby_ship !== true) {
            coordinateX = Math.floor(Math.random()*9);
            coordinateY = Math.floor(Math.random()*9);
            ship.setAxis(toggleAxis())
            check_nearby_ship = checkShipNearby(ship, coordinateX, coordinateY)
        }
        return [coordinateX, coordinateY];
    }
    const checkShipNearby = function (ship, coordX, coordY) {
        if (ship.getAxis() === "Y") {
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

    function fillDestroyCells (ship) {
        if (ship.getAxis() === "Y") {
            for (let i = ship.getPointStart()[0]; i < ship.getPointStart()[0] + ship.getLengthShip(); i++) {
                board[i][ship.getPointStart()[1]] = constants.DESTROY_WHOLE;
            }
            ship.setPointEnd([ship.getPointStart()[0] + ship.getLengthShip() - 1, ship.getPointStart()[1]]);
        } else {
            for (let i = ship.getPointStart()[1]; i < ship.getPointStart()[1] + ship.getLengthShip(); i++) {
                board[ship.getPointStart()[0]][i] = constants.DESTROY_WHOLE;
            }
        }

    }

    function checkAttackShip(coordX, coordY) {
        for (let i = 0; i < 10; i++) {
            if (coordY >= ships[i].getPointStart()[1] && coordY <= ships[i].getPointEnd()[1]){
                ships[i].hit();
                if (ships[i].isSunk() === true) {
                    fillDestroyCells(ships[i])
                } else {
                    board[coordX][coordY] = constants.WRECKED_SHIP;
                }
            }
        }
        return true;
    }

    const receiveAttack = function (coordX, coordY) {
        if (board[coordX][coordY] === constants.WHOLE_SHIP) {
            return checkAttackShip(coordX, coordY);
        }
        else if (board[coordX][coordY] === constants.EMPTY ||
            board[coordX][coordY] === constants.STOP_ZONE) {
            board[coordX][coordY] = constants.MISS;
            return false;
        }
    }
    function toggleAxis() {
        if (Math.floor(Math.random()*10) >= 4){
            return "X";
        }
        return "Y";
    }
    function checkAllShips() {
        for (let i = 0; i < ships.length; i++) {
            if(ships[i].getLifeShip() !== true) {
                return false;
            }
        }
        return true;
    }

    return {
        cycleArrangement,
        getRandomCoordinates,
        createBoard,
        checkShipNearby,
        toggleAxis,
        arrangementShips,
        receiveAttack,
        checkAllShips,
        getBoard,
        getShips
    }
}

export default GameBoard;
