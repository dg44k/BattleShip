import * as constants from './constants';
import setStopZone from "./setStopZone";
import Ship from "./Ship";



const GameBoard = function () {
    const board = [];
    const ships = [];

    function getBoard () {
        return board;
    }

    function getShips () {
        return ships;
    }

    function createBoard() {
        for (let i = 0; i < 10; i++) {
            board.push([]);
            for (let j = 0; j < 10; j++) {
                board[i][j] = constants.EMPTY;
            }
        }
        return board;
    }

    function arrangeShips() {
        constants.CONFIG_ARRAY_SHIPS.forEach(ship => {
            let count = 0;
            let objShip;
            while (ship.count !== count) {
                objShip = new Ship(ship.length);
                cycleArrangement(objShip);
                ships.push(objShip);
                count++;
            }
            
        });
    }

    function cycleArrangement(ship) {
        const [coordY, coordX] = getRandomCoordinates(ship);
        ship.setPointStart([coordY, coordX]);

        if (ship.getAxis() === constants.AXIS_Y) {
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

    function getRandomCoordinates(ship) {
        let coordinateX;
        let coordinateY;
        let checkNearbyShip = false;
        while (checkNearbyShip !== true) {
            coordinateX = Math.floor(Math.random()*10);
            coordinateY = Math.floor(Math.random()*10);
            ship.setAxis(toggleAxis())
            checkNearbyShip = checkShipNearby(ship, coordinateY, coordinateX);
        }
        return [coordinateY, coordinateX];
    }

    function checkShipNearby(ship, coordY, coordX) {
        if (ship.getAxis() === constants.AXIS_Y) {
            if (coordY + ship.getLengthShip() - 1 > constants.LAST_NUMBER_BOARD) return false;
            for (let i = coordY; i < coordY + ship.getLengthShip(); i++) {
                if(board[i][coordX] !== constants.WHOLE_SHIP &&
                   board[i][coordX] !== constants.STOP_ZONE) continue;
                
                return false;
            }
        } else {
            if (coordX + ship.getLengthShip() - 1 > constants.LAST_NUMBER_BOARD) return false;
            for (let i = coordX; i < coordX + ship.getLengthShip(); i++) {
                if(board[coordY][i] !== constants.WHOLE_SHIP &&
                    board[coordY][i] !== constants.STOP_ZONE) continue;
                
                return false;
            }
        }
        return true;
    }

    function fillDestroyCells (ship) {
        if (ship.getAxis() === constants.AXIS_Y) {
            for (let i = ship.getPointStart()[0]; i < ship.getPointStart()[0] + ship.getLengthShip(); i++) {
                board[i][ship.getPointStart()[1]] = constants.DESTROY_WHOLE;

            }
        } else {
            for (let i = ship.getPointStart()[1]; i < ship.getPointStart()[1] + ship.getLengthShip(); i++) {
                board[ship.getPointStart()[0]][i] = constants.DESTROY_WHOLE;
            }
        }

        let stopZones = ship.getStopZones();
        for (let i = 0; i < stopZones.length; i++) {
           if (board[stopZones[i][0]][stopZones[i][1]] !== constants.MISS) {
               board[stopZones[i][0]][stopZones[i][1]] = constants.MISS;
           }
        }

        return {
            attacked: true,
            sunk: true,
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
                            attacked: true,
                            sunk: false
                        }
                    }
                }
        }
        return true;
    }

    function receiveAttack(coordY, coordX) {
        if (board[coordY][coordX] === constants.WHOLE_SHIP) {
            return checkAttackShip(coordY, coordX);
        }
        else if (board[coordY][coordX] === constants.EMPTY ||
            board[coordY][coordX] === constants.STOP_ZONE) {

            board[coordY][coordX] = constants.MISS;
            return {
                attacked: false,
                sunk: false
            };
        } else {
            return {
                attacked: undefined,
                sunk: undefined
            };
        }
    }
    function toggleAxis() {
        if (Math.floor(Math.random() * 10) > constants.NUMBER_DEFINE_AXIS) return constants.AXIS_X;
        
        return constants.AXIS_Y;
    }
    function areAllShips() {
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
        arrangeShips,
        receiveAttack,
        areAllShips,
        getBoard,
        getShips
    }
}

export default GameBoard;
