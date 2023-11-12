import GameBoard from "../scripts/GameBoard";
import * as constants from "../scripts/constants";

let board = [];
let obj;
beforeAll(() => {

    obj = new GameBoard();
    board = obj.createBoard();
    obj.arrangeShips()
});

test('Check 100 cells', () => {
    expect(board.reduce((acc, elem) => {
        return acc + elem.length;
    }, 0)).toBe(100);
});

test('Check attack ship', () => {
    const date_obj = obj.receiveAttack(1, 1);
    expect(date_obj.attack).toBe(false);
});

test('Check, what all ships destroyer', () => {
    expect(obj.checkAllShips()).toBe(false);
});