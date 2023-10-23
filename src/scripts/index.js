import Player from "./Player";
import '../css/style.css';
import generateBoard from "../DOM/dom";

const winner = startGame();
winner.isWin();

function startGame() {
    const bot = new Player("botGrigory");
    const user = new Player("Phantom");
    const boardBot = bot.initBoardBot();
    generateBoard("bot");
    const boardUser = user.initBoardUser();
    generateBoard("user");
    let botCheck;
    let userCheck;
    let flag = false;

    while (flag !== true) {
        user.userAttack(boardBot);
        bot.cleverBotAttack(boardUser);
        userCheck = boardUser.checkAllShips();
        botCheck = boardBot.checkAllShips();

        flag = !(botCheck !== true || userCheck !== true);
    }

    return boardBot === true ? bot : user;
}


export default startGame;
