function Player (name) {

    function userAttack(boardBot, y, x) {
        let flag = 0;
        let dateAttack;

        while (flag !== 1) {
            dateAttack = boardBot.receiveAttack(+y, +x);
            flag = dateAttack.attack === true ||
                   dateAttack.attack  === false ? 1 : 0;
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
            dateAttack,
        };
    }

    function cleverBotAttack(boardUser) {
        let coordinateX;
        let coordinateY;
        let flag = 0;
        let dateAttack;
        
        while (flag !== 1) {
            coordinateX = Math.floor(Math.random()*10);
            coordinateY = Math.floor(Math.random()*10);
            dateAttack = boardUser.receiveAttack(coordinateY, coordinateX);
            flag = dateAttack.attack === true ||
                   dateAttack.attack  === false ? 1 : 0;
        }
        return {
            coordinateX,
            coordinateY,
            dateAttack,

        };
    }
    
    function showWinUI() {
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
        showWinUI,
    }
}


 export default Player;