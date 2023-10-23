const gridUser = document.querySelector(".gridUser");
const gridBot = document.querySelector(".gridBot");
function generateBoard(player) {
    if (player === 'bot') {
        for (let i = 0; i < 100; i++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            gridBot.appendChild(cell);
        }
    } else {
        for (let i = 0; i < 100; i++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            gridUser.appendChild(cell);
        }
    }
}

export default generateBoard;