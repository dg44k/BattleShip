import * as constants from "../scripts/constants";

export function generateBoard(parentNode, board) {
  board.map((row, j) => {
    row.map((elem, i) => {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.idY = j;
      cell.dataset.idX = i;
      parentNode.appendChild(cell);
    });
  });
}

export function showShips(ships, allCells) {
  let x, y;

  for (let i = 0; i < ships.length; i++) {
    [x, y] = ships[i].getPointStart();

    if (ships[i].getAxis() === "Y") {
      for (let k = x; k <= ships[i].getPointEnd()[0]; k++) {
        searchCell(k, y, allCells);
      }
    } else {
      for (let k = y; k <= ships[i].getPointEnd()[1]; k++) {
        searchCell(x, k, allCells);
      }
    }
  }

  function searchCell(x, y, allCells) {
    allCells.forEach(item => {
      if (+item.dataset.idX === x && +item.dataset.idY === y) {
        item.classList.add("whole");
      }
    })
  }
}

export function getAttack (obj, allCells) {
  let targetCell;
  allCells.forEach(item => {
    if (+item.dataset.idX === obj.coordinateX && +item.dataset.idY === obj.coordinateY) {
      targetCell = item;
    }
  });

  if (obj.date_attack.attack === true) {
    targetCell.classList.remove('whole');
    targetCell.classList.add('wrecked');

    if (obj.date_attack.ship_life === true) {
      if (obj.date_attack.ship.getAxis() === "Y") {
        for (let i = obj.date_attack.ship.getPointStart()[0]; i < obj.date_attack.ship.getPointStart()[0] + obj.date_attack.ship.getLengthShip(); i++) {
          allCells.forEach(item => {
            if (+item.dataset.idX === obj.date_attack.getPointStart()[1] && +item.dataset.idY === i) {
              item.classList.remove('whole');
              item.classList.add('destroyer');
            }
          });
        }
      } else {
        for (let i = obj.date_attack.ship.getPointStart()[1]; i < obj.date_attack.ship.getPointStart()[1] + obj.date_attack.ship.getLengthShip(); i++) {
          allCells.forEach(item => {
            if (+item.dataset.idX === i && +item.dataset.idY === obj.date_attack.getPointStart()[0]) {
              item.classList.remove('whole');
              item.classList.add('destroyer');
            }
          });
        }
      }
    }
  }
  else {
    targetCell.classList.add('miss');
  }
}