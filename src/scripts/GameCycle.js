import GameBoard from "./GameBoard";
import Player from "./Player";
import {generateBoard, showShips, getAttack} from "../DOM/dom";

export function startGame() {
    const board_bot = new GameBoard();
    const board_user = new GameBoard();

    const name = prompt("What is name?", "User");
    document.querySelector('.nameUser').textContent = name;

    const user = new Player(name);
    const bot = new Player("Bot Grigoriy");

    const field_bot = board_bot.createBoard();
    board_bot.arrangementShips();

    const field_user = board_user.createBoard();
    board_user.arrangementShips();

    const gridBot = document.querySelector('.gridBot');
    const gridUser = document.querySelector('.gridUser')
    generateBoard(gridBot, field_bot);
    generateBoard(gridUser, field_user);
    const allCellsBot = gridBot.querySelectorAll(".cell");
    const allCellsUser = gridUser.querySelectorAll(".cell");
    showShips(board_user.getShips(), allCellsUser)

    let bot_attack;
    let user_attack;

    gridBot.addEventListener('click', (e) => {
        if (e.target === gridBot) return;
        allCellsBot.forEach(item => {
            if (e.target === item) {
                user_attack = user.userAttack(board_bot, item.dataset.idX, item.dataset.idY);
                if (user_attack === undefined) return;
                getAttack(user_attack, allCellsBot);
                checkEndGame(board_bot, user);

                bot_attack = bot.cleverBotAttack(board_user);
                getAttack(bot_attack, allCellsUser);
                checkEndGame (board_user, bot)

            }
        });
    });

    function checkEndGame(board, player) {
        if (board.checkAllShips() === true) {
            player.isWin(player)
        }
    }
}
