import * as constants from './constants';
import setStopZone from "./setStopZone";
import Ship from "./Ship";

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
    }

    const cycleArrangement = function (ship) {
        const [coordY, coordX] = getRandomCoordinates(ship);
        ship.setPointStart([coordY, coordX]);

        if (ship.getAxis() === "Y") {
            for (let i = coordY; i < coordY + ship.getLengthShip(); i++) {
                board[i][coordX] = constants.WHOLE_SHIP;
            }
            ship.setPointEnd([coordY + ship.getLengthShip() - 1, coordX]);
        } else {
            for (let i = coordX; i < coordX + ship.getLengthShip(); i++) {
                board[coordY][i] = constants.WHOLE_SHIP;
            }
            ship.setPointEnd([coordY, coordX + ship.getLengthShip() - 1]);
       }
        setStopZone(ship, board)
    }

    const getRandomCoordinates = function (ship) {
        let coordinateX;
        let coordinateY;
        let check_nearby_ship = false;
        while (check_nearby_ship !== true) {
            coordinateX = Math.floor(Math.random()*10);
            coordinateY = Math.floor(Math.random()*10);
            ship.setAxis(toggleAxis())
            check_nearby_ship = checkShipNearby(ship, coordinateY, coordinateX);
        }
        return [coordinateY, coordinateX];
    }

    const checkShipNearby = function (ship, coordY, coordX) {
        if (ship.getAxis() === "Y") {
            if (coordY + ship.getLengthShip() - 1 > 9) return false;
            for (let i = coordY; i < coordY + ship.getLengthShip(); i++) {
                if(board[i][coordX] !== constants.WHOLE_SHIP &&
                   board[i][coordX] !== constants.STOP_ZONE) continue;
                else return false;
            }
        } else {
            if (coordX + ship.getLengthShip() - 1 > 9) return false;
            for (let i = coordX; i < coordX + ship.getLengthShip(); i++) {
                if(board[coordY][i] !== constants.WHOLE_SHIP &&
                    board[coordY][i] !== constants.STOP_ZONE) continue;
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
        } else {
            for (let i = ship.getPointStart()[1]; i < ship.getPointStart()[1] + ship.getLengthShip(); i++) {
                board[ship.getPointStart()[0]][i] = constants.DESTROY_WHOLE;
            }
        }

        let stop_zones = ship.getStopZones();
        for (let i = 0; i < stop_zones.length; i++) {
           if (board[stop_zones[i][0]][stop_zones[i][1]] !== constants.MISS) {
               board[stop_zones[i][0]][stop_zones[i][1]] = constants.MISS;
           }
        }

        return {
            attack: true,
            ship_life: true,
            ship
        }
    }

    function checkAttackShip(coordY, coordX) {
        for (let i = 0; i < 10; i++) {
                if (coordY >= ships[i].getPointStart()[0] &&
                    coordY <= ships[i].getPointEnd()[0]  &&
                    ships[i].getPointStart()[1] === coordX ||
                    coordX >= ships[i].getPointStart()[1] &&
                    coordX <= ships[i].getPointEnd()[1]  &&
                    ships[i].getPointStart()[0] === coordY)
                {
                    ships[i].hit();
                    if (ships[i].isSunk() === true) {
                        return fillDestroyCells(ships[i]);

                    } else {
                        board[coordY][coordX] = constants.WRECKED_SHIP;
                        return {
                            attack: true,
                            ship_life: false
                        }
                    }
                }
        }
        return true;
    }

    const receiveAttack = function (coordY, coordX) {
        if (board[coordY][coordX] === constants.WHOLE_SHIP) {
            return checkAttackShip(coordY, coordX);
        }
        else if (board[coordY][coordX] === constants.EMPTY ||
            board[coordY][coordX] === constants.STOP_ZONE) {

            board[coordY][coordX] = constants.MISS;
            return {
                attack: false,
                ship_life: false
            };
        } else {
            return {
                attack: undefined,
                ship_life: undefined
            };
        }
    }
    function toggleAxis() {
        if (Math.floor(Math.random() * 10) > 4) return "X";
        else return "Y";
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
