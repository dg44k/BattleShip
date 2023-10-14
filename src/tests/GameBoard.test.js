import GameBoard from "../scripts/GameBoard";
import * as constants from "../scripts/constants";

const obj = new GameBoard();
test('Проверка на наличие 100 клеток', () => {
    expect(obj.createBoard().reduce((acc, elem) => {
        return acc + elem.length;
    }, 0)).toBe(100);
});
// test('Проверка на попадание атаки в корабль', () => {
//     expect().toBe(true);
// });
// test('Проверка на промах атаки в корабль', () => {
//     expect().toBe(false);
// });
//
// test('Проверка того, что все корабли уничтожены', () => {
//     expect().toBe(true);
// });