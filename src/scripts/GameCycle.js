import GameBoard from "./GameBoard";
import Player from "./Player";
import {generateBoard, showShips, getAttack, moveTurn} from "../DOM/dom";

export function startGame(name) {
    const boardBot = new GameBoard();
    const boardUser = new GameBoard();

    const user = new Player(name);
    const bot = new Player("Bot");

    const fieldBot = boardBot.createBoard();
    boardBot.arrangeShips();

    const fieldUser = boardUser.createBoard();
    boardUser.arrangeShips();

    const gridBot = document.querySelector('.gridBot');
    const gridUser = document.querySelector('.gridUser')
    generateBoard(gridBot, fieldBot);
    generateBoard(gridUser, fieldUser);
    const allCellsBot = gridBot.querySelectorAll(".cell");
    const allCellsUser = gridUser.querySelectorAll(".cell");
    showShips(boardUser.getShips(), allCellsUser);

    let botAttack;
    let userAttack;
    let turn;

    gridBot.addEventListener('click', (e) => {
        if (e.target === gridBot) return;
        if (turn === false) return;
        allCellsBot.forEach(item => {
            if (e.target === item) {
                userAttack = user.userAttack(boardBot, item.dataset.idY, item.dataset.idX);
                if (userAttack === undefined) return;
                getAttack(userAttack, allCellsBot);
                checkEndGame(boardBot, user);
                turn = false;
                moveTurn();

                setTimeout(() => {
                    botAttack = bot.cleverBotAttack(boardUser);
                    getAttack(botAttack, allCellsUser);
                    checkEndGame (boardUser, bot)
                    turn = true;
                    moveTurn();
                }, 1000)
            }
        });
    });

    function checkEndGame(board, player) {
        if (board.areAllShips()) {
            setTimeout(() => {
                player.showWinUI();
            }, 500);
        }
    }
}