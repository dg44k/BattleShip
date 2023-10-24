function Player (name) {

    function userAttack(board_bot, x, y) {
        let flag = 0;
        let date_attack;

        while (flag !== 1) {
            date_attack = board_bot.receiveAttack(x, y);
            flag = date_attack === true ||
                   date_attack  === false ? 1 : 0;
            if (flag === 0) {
                alert("Вы уже сюда стреляли");
            }
        }
        return date_attack;
    }
    function cleverBotAttack(board_user) {
        let coordinateX;
        let coordinateY;
        let flag = 0;
        let date_attack;

        while (flag !== 1) {
            coordinateX = Math.floor(Math.random()*9);
            coordinateY = Math.floor(Math.random()*9);
            date_attack = board_user.receiveAttack(coordinateX, coordinateY);
            flag = date_attack === true ||
                   date_attack  === false ? 1 : 0;
        }
        return date_attack;
    }
    
    function isWin() {
        // Logic reset game and output winner
        return name;
    }

    return {
        userAttack,
        cleverBotAttack,
        isWin,
    }
}


 export default Player;