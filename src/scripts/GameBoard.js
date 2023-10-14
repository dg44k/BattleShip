import * as constants from './constants';
import setStopZone from "./setStopZone";
import Ship from "./Ship";


const GameBoard = function () {
    let show_board = false;
    let board = [];
    let axisX = true;
    let axisY = false;

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
        cycleArrangement(four_deck.getLengthShip());
        const triple_deck_1 = new Ship(3);
        cycleArrangement(triple_deck_1.getLengthShip());
        const triple_deck_2 = new Ship(3);
        cycleArrangement(triple_deck_2.getLengthShip());
        const dual_deck_1 = new Ship(2);
        cycleArrangement(dual_deck_1.getLengthShip());
        const dual_deck_2 = new Ship(2);
        cycleArrangement(dual_deck_2.getLengthShip());
        const dual_deck_3 = new Ship(2);
        cycleArrangement(dual_deck_3.getLengthShip());
        const single_deck_1 = new Ship(1);
        cycleArrangement(single_deck_1.getLengthShip());
        const single_deck_2 = new Ship(1);
        cycleArrangement(single_deck_2.getLengthShip());
        const single_deck_3 = new Ship(1);
        cycleArrangement(single_deck_3.getLengthShip());
        const single_deck_4 = new Ship(1);
        cycleArrangement(single_deck_4.getLengthShip());
        console.log(board)
    }
    const getRandomCoordinates = function (ship_length) {
        let coordinateX;
        let coordinateY;
        let check_nearby_ship = false;
        while (check_nearby_ship !== true) {
            coordinateX = Math.floor(Math.random()*9);
            coordinateY = Math.floor(Math.random()*9);
            if(Math.floor(Math.random()) === 0) toggleAxis();
            check_nearby_ship = checkShipNearby(ship_length, coordinateX, coordinateY)
        }
        return [coordinateX, coordinateY];
    }
    const checkShipNearby = function (ship_length, coordX, coordY) {
        if (axisX === false) {
            if (coordX + ship_length > 9) return false;
            for (let i = coordX; i < coordX + ship_length; i++) {
                if(board[i][coordY] !== constants.WHOLE_SHIP &&
                   board[i][coordY] !== constants.STOP_ZONE) continue;
                else return false;
            }
        } else {
            if (coordY + ship_length > 9) return false;
            for (let i = coordY; i < coordY + ship_length; i++) {
                if(board[coordX][i] !== constants.WHOLE_SHIP &&
                    board[coordX][i] !== constants.STOP_ZONE) continue;
                else return false;
            }
        }
        return true;
    }
    const cycleArrangement = function (ship_length) {
        const [coordX, coordY] = getRandomCoordinates(ship_length);

        if (axisX === false) {
            for (let i = coordX; i < coordX + ship_length; i++) {
                board[i][coordY] = constants.WHOLE_SHIP;
            }
        } else {
            for (let i = coordY; i < coordY + ship_length; i++) {
                board[coordX][i] = constants.WHOLE_SHIP;
            }
        }
        setStopZone(ship_length, coordX, coordY, axisX, board)
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

    const receiveAttack = function (coordX, coordY) {
        
    }

    return {
        board,
        cycleArrangement,
        getRandomCoordinates,
        createBoard,
        checkShipNearby,
        toggleAxis,
        randomArrangementShips,
    }
}

export default GameBoard;
