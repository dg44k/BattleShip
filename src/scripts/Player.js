function Player (name) {
    function userAttack(board_bot, y, x) {
        let flag = 0;
        let date_attack;

        while (flag !== 1) {
            date_attack = board_bot.receiveAttack(+y, +x);
            flag = date_attack.attack === true ||
                   date_attack.attack  === false ? 1 : 0;
            if (flag === 0) {
                alert("Вы уже сюда стреляли");
                return undefined;
            }
        }
        return {
            coordinateX: +x,
            coordinateY: +y,
            date_attack,
        };
    }

    function cleverBotAttack(board_user) {
        let coordinateX;
        let coordinateY;
        let flag = 0;
        let date_attack;
        while (flag !== 1) {
            coordinateX = Math.floor(Math.random()*10);
            coordinateY = Math.floor(Math.random()*10);
            date_attack = board_user.receiveAttack(coordinateY, coordinateX);
            flag = date_attack.attack === true ||
                   date_attack.attack  === false ? 1 : 0;
        }
        return {
            coordinateX,
            coordinateY,
            date_attack,

        };
    }
    
    function isWin() {
        alert (`${name} won!`)
    }

    return {
        userAttack,
        cleverBotAttack,
        isWin,
    }
}


 export default Player;