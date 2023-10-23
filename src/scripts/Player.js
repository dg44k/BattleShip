import GameBoard from "./GameBoard";

function Player (name) {
    function initBoardBot() {
        const boardBot = new GameBoard();
        boardBot.createBoard();
        boardBot.randomArrangementShips()
        return boardBot;
    }
    function initBoardUser() {
        const boardUser = new GameBoard();
        boardUser.createBoard();
        boardUser.randomArrangementShips()
        return boardUser;
    }

    function userAttack(boardBot) {
        let flag = 0;
        let date_attack;
        let x;
        let y;

        while (flag !== 1) {
            // x = +prompt("x");
            // y = +prompt("y");
            date_attack = boardBot.receiveAttack(x, y);
            flag = date_attack === true ||
                   date_attack  === false ? 1 : 0;
            if (flag === 0) {
                alert("Вы уже сюда стреляли")
            }
        }
    }
    function cleverBotAttack(boardUser) {
        let coordinateX;
        let coordinateY;
        let flag = 0;
        let date_attack;

        while (flag !== 1) {
            coordinateX = Math.floor(Math.random()*9);
            coordinateY = Math.floor(Math.random()*9);
            date_attack = boardUser.receiveAttack(coordinateX, coordinateY);
            flag = date_attack === true ||
                   date_attack  === false ? 1 : 0;
        }
    }
    
    function isWin() {
        return name;
    }

    return {
        userAttack,
        initBoardUser,
        initBoardBot,
        cleverBotAttack,
        isWin
    }
}


 export default Player;