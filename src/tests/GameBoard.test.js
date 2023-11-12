import GameBoard from "../scripts/GameBoard";
import * as constants from "../scripts/constants";

let board = [];
let obj;
beforeAll(() => {

    obj = new GameBoard();
    board = obj.createBoard();
    obj.arrangementShips()
});

test('Проверка на наличие 100 клеток', () => {
    expect(board.reduce((acc, elem) => {
        return acc + elem.length;
    }, 0)).toBe(100);
});

test('Проверка атаки в корабль', () => {
    const date_obj = obj.receiveAttack(1, 1);
    expect(date_obj.attack).toBe(false);
});

test('Проверка того, что все корабли уничтожены', () => {
    expect(obj.checkAllShips()).toBe(false);
});