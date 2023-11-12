import * as constants from "./constants";

const setStopZone = function (ship, board) {
    if (ship.getAxis() === constants.AXIS_Y) {
        try {
            if (ship.getPointStart()[0] !== constants.FIRST_NUMBER_BOARD) {
                board[ship.getPointStart()[0] - 1][ship.getPointStart()[1]] =
                    constants.STOP_ZONE;
                ship.setStopZones([ship.getPointStart()[0] - 1, ship.getPointStart()[1]]);
            }
        } catch (e) {
            console.log(e.message)
        }
        try {
            if (ship.getPointStart()[0] + ship.getLengthShip() <= constants.LAST_NUMBER_BOARD) {
                board[ship.getPointStart()[0] + ship.getLengthShip()][ship.getPointStart()[1]] =
                    constants.STOP_ZONE;
                ship.setStopZones([ship.getPointStart()[0] + ship.getLengthShip(), ship.getPointStart()[1]]);
            }

        } catch (e) {
            console.log(e.message)
        }
        try {
            const j = ship.getPointStart()[1] - 1;

            if (ship.getPointStart()[0] !== constants.FIRST_NUMBER_BOARD) {
                for (let i = ship.getPointStart()[0] - 1; i < ship.getLengthShip() + ship.getPointStart()[0] + 1; i++) {
                    if (i <= constants.LAST_NUMBER_BOARD && j <= constants.LAST_NUMBER_BOARD && 
                        i >= constants.FIRST_NUMBER_BOARD && j >= constants.FIRST_NUMBER_BOARD) {

                        board[i][j] = constants.STOP_ZONE;
                        ship.setStopZones([i, j]);
                    }
                }
            } else {
                for (let i = ship.getPointStart()[0]; i < ship.getLengthShip() + ship.getPointStart()[0] + 1; i++) {
                    if (i <= constants.LAST_NUMBER_BOARD && j <= constants.LAST_NUMBER_BOARD && 
                        i >= constants.FIRST_NUMBER_BOARD && j >= constants.FIRST_NUMBER_BOARD) {

                        board[i][j] = constants.STOP_ZONE;
                        ship.setStopZones([i, j]);
                    }
                }
            }
        } catch (e) {
            console.log(e.message)
        }
        try {
            const j = ship.getPointStart()[1] + 1;
            if (ship.getPointStart()[0] !== constants.FIRST_NUMBER_BOARD) {
                for (let i = ship.getPointStart()[0] - 1; i < ship.getLengthShip() + ship.getPointStart()[0] + 1; i++) {
                    if (i <= constants.LAST_NUMBER_BOARD && j <= constants.LAST_NUMBER_BOARD && 
                        i >= constants.FIRST_NUMBER_BOARD && j >= constants.FIRST_NUMBER_BOARD) {

                        board[i][j] = constants.STOP_ZONE;
                        ship.setStopZones([i, j]);
                    }
                }
            } else {
                for (let i = ship.getPointStart()[0]; i < ship.getLengthShip() + ship.getPointStart()[0] + 1; i++) {
                    if (i <= constants.LAST_NUMBER_BOARD && j <= constants.LAST_NUMBER_BOARD && 
                        i >= constants.FIRST_NUMBER_BOARD && j >= constants.FIRST_NUMBER_BOARD) {

                        board[i][j] = constants.STOP_ZONE;
                        ship.setStopZones([i, j]);
                    }
                }
            }

        } catch (e) {
            console.log(e.message)
        }
    } else {
        try {
            if (ship.getPointStart()[1] !== constants.FIRST_NUMBER_BOARD) {
                board[ship.getPointStart()[0]][ship.getPointStart()[1] - 1] =
                    constants.STOP_ZONE;
                ship.setStopZones([ship.getPointStart()[0], ship.getPointStart()[1] - 1]);
            }
        } catch (e) {
            console.log(e.message)
        }
        try {
            if (ship.getPointStart()[1] + ship.getLengthShip() <= constants.LAST_NUMBER_BOARD) {
                board[ship.getPointStart()[0]][ship.getPointStart()[1] + ship.getLengthShip()] =
                    constants.STOP_ZONE;
                ship.setStopZones([ship.getPointStart()[0], ship.getPointStart()[1] + ship.getLengthShip()]);
            }
        } catch (e) {
            console.log(e.message)
        }
        try {
            const j = ship.getPointStart()[0] - 1;
            if (ship.getPointStart()[0] !== 0) {
                for (let i = ship.getPointStart()[1] - 1; i < ship.getLengthShip() + ship.getPointStart()[1] + 1; i++) {
                    if (i <= constants.LAST_NUMBER_BOARD && j <= constants.LAST_NUMBER_BOARD && 
                        i >= constants.FIRST_NUMBER_BOARD && j >= constants.FIRST_NUMBER_BOARD) {

                        board[j][i] = constants.STOP_ZONE;
                        ship.setStopZones([j, i]);
                    }
                }

            } else {
                for (let i = ship.getPointStart()[1]; i < ship.getLengthShip() + ship.getPointStart()[1] + 1; i++) {
                    if (i <= constants.LAST_NUMBER_BOARD && j <= constants.LAST_NUMBER_BOARD && 
                        i >= constants.FIRST_NUMBER_BOARD && j >= constants.FIRST_NUMBER_BOARD) {

                        board[j][i] = constants.STOP_ZONE;
                        ship.setStopZones([j, i]);
                    }
                }
            }
        } catch (e) {
            console.log(e.message)
        }
        try {
            const j = ship.getPointStart()[0] + 1;
            if (ship.getPointStart()[1] !== constants.FIRST_NUMBER_BOARD) {
                for (let i = ship.getPointStart()[1] - 1; i < ship.getLengthShip() + ship.getPointStart()[1] + 1; i++) {
                    if (i <= constants.LAST_NUMBER_BOARD && j <= constants.LAST_NUMBER_BOARD && 
                        i >= constants.FIRST_NUMBER_BOARD && j >= constants.FIRST_NUMBER_BOARD) {

                        board[j][i] = constants.STOP_ZONE;
                        ship.setStopZones([j, i]);
                    }
                }
            } else {
                for (let i = ship.getPointStart()[1]; i < ship.getLengthShip() + ship.getPointStart()[1] + 1; i++) {
                    if (i <= constants.LAST_NUMBER_BOARD && j <= constants.LAST_NUMBER_BOARD && 
                        i >= constants.FIRST_NUMBER_BOARD && j >= constants.FIRST_NUMBER_BOARD) {

                        board[j][i] = constants.STOP_ZONE;
                        ship.setStopZones([j, i]);
                    }
                }
            }
        } catch (e) {
            console.log(e.message)
        }
    }
}

export default setStopZone;