import Player from "./Player";

const winner = startGame();
winner.isWin();

function startGame() {
    const bot = new Player("botGrigory");
    const user = new Player("Phantom");
    const boardBot = bot.initBoardBot();
    const boardUser = user.initBoardUser();
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
