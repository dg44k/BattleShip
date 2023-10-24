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

export function showShips(ships) {
  const allCells = document.querySelector('.gridUser').
  querySelectorAll(".cell");
  let x, y;
  for (let j = 0; j < 10; j++) {
    console.table(ships[j].getLengthShip(), ships[j].getPointStart(), ships[j].getPointEnd() )
  }
  for (let i = 0; i < ships.length; i++) {
    [x, y] = ships[i].getPointStart();

    if (ships[i].getAxis() === "Y") {
      for (let k = x; k <= ships[i].getPointEnd()[0]; k++) {
        searchCell(k, y);
      }
    } else {
      for (let k = y; k <= ships[i].getPointEnd()[1]; k++) {
        searchCell(x, k);
      }
    }
  }

  function searchCell(x, y) {
    allCells.forEach(item => {
      if (+item.dataset.idX === y && +item.dataset.idY === x) {
        item.classList.add("whole");

      }
    })
  }

}
// export function getAttack(event) {
//   try {
//
//     let target = gridBot.querySelector('.cell');
//     const cells_all = gridBot.querySelectorAll('.cell');
//     let index_clicked_elem;
//
//     if (target.classList.contains('cell')) {
//       cells_all.forEach((elem, index) => {
//         if(elem === target) {
//           index_clicked_elem = index;
//         }
//       });
//       return {
//         coords: [Math.floor(index_clicked_elem/10), index_clicked_elem - Math.floor(index_clicked_elem/10)],
//         target: target
//       }
//     }
//   } catch (e){}
//
// }
//
// export function displayAttack(obj) {
//   if (obj.date_attack === true) {
//     obj.target.classList.add('wrecked')
//   }
//
//   else if (obj.date_attack === true){
//     obj.target.classList.add('wrecked')
//   }
//   // else if () {
//   //
//   // }
//   else {
//     obj.target.classList.add('miss')
//   }
// }
