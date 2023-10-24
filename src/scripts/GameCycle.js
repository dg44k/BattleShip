import GameBoard from "./GameBoard";
import Player from "./Player";
import {generateBoard, showShips} from "../DOM/dom";

export function startGame() {
    const board_bot = new GameBoard();
    const board_user = new GameBoard();

    const name = prompt("What is name?", "User");

    const user = new Player(name);
    const bot = new Player("Bot Grigoriy");

    const field_bot = board_bot.createBoard();
    board_bot.arrangementShips();

    const field_user = board_user.createBoard();
    board_user.arrangementShips();

    generateBoard(document.querySelector('.gridBot'), field_bot);
    generateBoard(document.querySelector('.gridUser'), field_user);
    showShips(board_user.getShips())
}
