import * as constants from "./constants";
const setStopZone = function (ship, board) {
    if (ship.getAxis() === "Y") {
        try {
            if (ship.getPointStart()[0] !== 0) {
                board[ship.getPointStart()[0] - 1][ship.getPointStart()[1]] =
                    constants.STOP_ZONE;
            }
        } catch (e) {}
        try {
            if (ship.getPointStart()[0] + ship.getLengthShip() <= 9) {
                board[ship.getPointStart()[0] + ship.getLengthShip()][ship.getPointStart()[1]] =
                    constants.STOP_ZONE;
            }

        } catch (e) {}
        try {
            if (ship.getPointStart()[0] !== 0) {
                const j = ship.getPointStart()[1] - 1;
                for (let i = ship.getPointStart()[0] - 1; i < ship.getLengthShip() + ship.getPointStart()[0] + 1; i++) {
                    if (i <= 9) board[i][j] = constants.STOP_ZONE;
                }
            }
        } catch (e) {}
        try {
            const j = ship.getPointStart()[1] + 1;
            if (ship.getPointStart()[0] !== 0) {
                for (let i = ship.getPointStart()[0] - 1; i < ship.getLengthShip() + ship.getPointStart()[0] + 1; i++) {
                    if (i <= 9) board[i][j] = constants.STOP_ZONE;
                }
            } else {
                for (let i = ship.getPointStart()[0]; i < ship.getLengthShip() + ship.getPointStart()[0] + 1; i++) {
                    if (i <= 9) board[i][j] = constants.STOP_ZONE;
                }
            }

        } catch (e) {}
        console.log(board)
    } else {
        try {
            if (ship.getPointStart()[1] !== 0) {
                board[ship.getPointStart()[0]][ship.getPointStart()[1] - 1] =
                    constants.STOP_ZONE;
            }
        } catch (e) {}
        try {
            if (ship.getPointStart()[1] + ship.getLengthShip() <= 9) {
                board[ship.getPointStart()[0]][ship.getPointStart()[1] + ship.getLengthShip()] =
                    constants.STOP_ZONE;
            }
        } catch (e) {}
        try {
            if (ship.getPointStart()[0] !== 0) {
                const j = ship.getPointStart()[0] - 1;
                for (let i = ship.getPointStart()[1] - 1; i < ship.getLengthShip() + ship.getPointStart()[1] + 1; i++) {
                    if (i <= 9) board[j][i] = constants.STOP_ZONE;
                }
            }
        } catch (e) {}
        try {
            const j = ship.getPointStart()[0] + 1;
            if (ship.getPointStart()[1] !== 0) {
                for (let i = ship.getPointStart()[1] - 1; i < ship.getLengthShip() + ship.getPointStart()[1] + 1; i++) {
                    if (i <= 9) board[j][i] = constants.STOP_ZONE;
                }
            } else {
                for (let i = ship.getPointStart()[1]; i < ship.getLengthShip() + ship.getPointStart()[1] + 1; i++) {
                    if (i <= 9) board[j][i] = constants.STOP_ZONE;
                }
            }
        } catch (e) {}
        console.log(board)
    }
}

export default setStopZone;