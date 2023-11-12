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
    [y, x] = ships[i].getPointStart();

    if (ships[i].getAxis() === "Y") {
      for (let k = y; k <= ships[i].getPointEnd()[0]; k++) {
        findCell(k, x, allCells);
      }
    } else {
      for (let k = x; k <= ships[i].getPointEnd()[1]; k++) {
        findCell(y, k, allCells);
      }
    }
  }

  function findCell(y, x, allCells) {
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

  if (obj.dateAttack.attack === true) {
    targetCell.classList.remove('whole');
    targetCell.classList.add('wrecked');

    if (obj.dateAttack.shipLife === true) {
      if (obj.dateAttack.ship.getAxis() === "Y") {
        for (let i = obj.dateAttack.ship.getPointStart()[0]; i < obj.dateAttack.ship.getPointStart()[0] + obj.dateAttack.ship.getLengthShip(); i++) {
          allCells.forEach(item => {
            if (+item.dataset.idX === obj.dateAttack.ship.getPointStart()[1] && +item.dataset.idY === i) {
              item.classList.remove('whole');
              item.classList.add('destroyer');
            }
          });
        }
      } else {
        for (let i = obj.dateAttack.ship.getPointStart()[1]; i < obj.dateAttack.ship.getPointStart()[1] + obj.dateAttack.ship.getLengthShip(); i++) {
          allCells.forEach(item => {
            if (+item.dataset.idX === i && +item.dataset.idY === obj.dateAttack.ship.getPointStart()[0]) {
              item.classList.remove('whole');
              item.classList.add('destroyer');
            }
          });
        }
      }
      let stopZones = obj.dateAttack.ship.getStopZones();
      for (let i = 0; i < stopZones.length; i++) {
        allCells.forEach(item => {
          if (+item.dataset.idX === stopZones[i][1] &&
              +item.dataset.idY === stopZones[i][0] &&
              !item.classList.contains('miss')) {

            item.classList.add('miss');
          }
        });
      }
    }
  }
  else {
    targetCell.classList.add('miss');
  }
}

export function moveTurn() {
  const anchor = document.querySelector('.anchor');
  const stylesAnchor = window.getComputedStyle(anchor);

  switch (true) {
    case stylesAnchor.rotate === '0deg':
      document.querySelector('.anchor').style.rotate = '180deg';
      break;
    case stylesAnchor.rotate === '180deg':
      document.querySelector('.anchor').style.rotate = '0deg';
      break;
    case stylesAnchor.rotate === '90deg':
      document.querySelector('.anchor').style.rotate = '270deg';
      break;
    case stylesAnchor.rotate === '270deg':
      document.querySelector('.anchor').style.rotate = '90deg';
      break;
  }
}