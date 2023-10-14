import * as constants from "./constants";
const setStopZone = function (ship_length, coordX, coordY, axisX, board) {
    if (axisX === false) {
        try {
            if (coordX !== 0) {
                board[coordX - 1][coordY] = constants.STOP_ZONE;
            }
        } catch (e) {}
        try {
            board[coordX + ship_length][coordY] = constants.STOP_ZONE;
        } catch (e) {}
        try {
            if (coordY !== 0 && coordX !== 0) {
                const j = coordY - 1;
                for (let i = coordX - 1; i < ship_length + coordX + 1; i++) {
                    board[i][j] = constants.STOP_ZONE;
                }
            }
        } catch (e) {}
        try {
            const j = coordY + 1;
            if (coordX !== 0) {
                for (let i = coordX - 1; i < ship_length + coordX + 1; i++) {
                    board[i][j] = constants.STOP_ZONE;
                }
            } else {
                for (let i = coordX; i < ship_length + coordX + 1; i++) {
                    board[i][j] = constants.STOP_ZONE;
                }
            }

        } catch (e) {}
    } else {
        try {
            if (coordY !== 0) {
                board[coordX][coordY - 1] = constants.STOP_ZONE;
            }
        } catch (e) {}
        try {
            board[coordX][coordY + ship_length] = constants.STOP_ZONE;
        } catch (e) {}
        try {
            if (coordX !== 0 && coordY !== 0) {
                const j = coordX - 1;
                for (let i = coordY - 1; i < ship_length + coordY + 1; i++) {
                    board[j][i] = constants.STOP_ZONE;
                }
            }
        } catch (e) {}
        try {
            const j = coordX + 1;
            if (coordY !== 0) {
                for (let i = coordY - 1; i < ship_length + coordY + 1; i++) {
                    board[j][i] = constants.STOP_ZONE;
                }
            } else {
                for (let i = coordY; i < ship_length + coordY + 1; i++) {
                    board[j][i] = constants.STOP_ZONE;
                }
            }
        } catch (e) {}
    }
}

export default setStopZone;