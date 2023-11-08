function Player (name) {

    function userAttack(board_bot, y, x) {
        let flag = 0;
        let date_attack;

        while (flag !== 1) {
            date_attack = board_bot.receiveAttack(+y, +x);
            flag = date_attack.attack === true ||
                   date_attack.attack  === false ? 1 : 0;
            if (flag === 0) {
                document.querySelector('.err').style.display = 'flex';
                document.querySelector('.modal_block_err').style.display = 'block';
                document.querySelector('.btn-ok').addEventListener('click', () => {
                    document.querySelector('.modal_block_err').style.display = 'none';
                    document.querySelector('.err').style.display = 'none';
                })
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
        document.querySelector('.end').style.display = 'flex';
        document.querySelector('.modal_block_end').style.display = 'block';
        document.querySelector('.title_win').textContent = `${name} won!`

        document.querySelector('.btn-newGame').addEventListener('click', () => {
            location.reload()
        })
    }

    return {
        userAttack,
        cleverBotAttack,
        isWin,
    }
}


 export default Player;