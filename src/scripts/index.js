import GameBoard from "./GameBoard";

const john = new GameBoard();
john.createBoard();
john.randomArrangementShips();
console.log(john.receiveAttack(0, 0))