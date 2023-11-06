/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DOM/dom.js":
/*!************************!*\
  !*** ./src/DOM/dom.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateBoard: () => (/* binding */ generateBoard),\n/* harmony export */   getAttack: () => (/* binding */ getAttack),\n/* harmony export */   moveTurn: () => (/* binding */ moveTurn),\n/* harmony export */   showShips: () => (/* binding */ showShips)\n/* harmony export */ });\nfunction generateBoard(parentNode, board) {\n  board.map((row, j) => {\n    row.map((elem, i) => {\n      const cell = document.createElement(\"div\");\n      cell.classList.add(\"cell\");\n      cell.dataset.idY = j;\n      cell.dataset.idX = i;\n      parentNode.appendChild(cell);\n    });\n  });\n}\nfunction showShips(ships, allCells) {\n  let x, y;\n  for (let i = 0; i < ships.length; i++) {\n    [y, x] = ships[i].getPointStart();\n    if (ships[i].getAxis() === \"Y\") {\n      for (let k = y; k <= ships[i].getPointEnd()[0]; k++) {\n        searchCell(k, x, allCells);\n      }\n    } else {\n      for (let k = x; k <= ships[i].getPointEnd()[1]; k++) {\n        searchCell(y, k, allCells);\n      }\n    }\n  }\n  function searchCell(y, x, allCells) {\n    allCells.forEach(item => {\n      if (+item.dataset.idX === x && +item.dataset.idY === y) {\n        item.classList.add(\"whole\");\n      }\n    });\n  }\n}\nfunction getAttack(obj, allCells) {\n  let targetCell;\n  allCells.forEach(item => {\n    if (+item.dataset.idX === obj.coordinateX && +item.dataset.idY === obj.coordinateY) {\n      targetCell = item;\n    }\n  });\n  if (obj.date_attack.attack === true) {\n    targetCell.classList.remove('whole');\n    targetCell.classList.add('wrecked');\n    if (obj.date_attack.ship_life === true) {\n      if (obj.date_attack.ship.getAxis() === \"Y\") {\n        for (let i = obj.date_attack.ship.getPointStart()[0]; i < obj.date_attack.ship.getPointStart()[0] + obj.date_attack.ship.getLengthShip(); i++) {\n          allCells.forEach(item => {\n            if (+item.dataset.idX === obj.date_attack.ship.getPointStart()[1] && +item.dataset.idY === i) {\n              item.classList.remove('whole');\n              item.classList.add('destroyer');\n            }\n          });\n        }\n      } else {\n        for (let i = obj.date_attack.ship.getPointStart()[1]; i < obj.date_attack.ship.getPointStart()[1] + obj.date_attack.ship.getLengthShip(); i++) {\n          allCells.forEach(item => {\n            if (+item.dataset.idX === i && +item.dataset.idY === obj.date_attack.ship.getPointStart()[0]) {\n              item.classList.remove('whole');\n              item.classList.add('destroyer');\n            }\n          });\n        }\n      }\n      let stop_zones = obj.date_attack.ship.getStopZones();\n      for (let i = 0; i < stop_zones.length; i++) {\n        allCells.forEach(item => {\n          if (+item.dataset.idX === stop_zones[i][1] && +item.dataset.idY === stop_zones[i][0] && !item.classList.contains('miss')) {\n            item.classList.add('miss');\n          }\n        });\n      }\n    }\n  } else {\n    targetCell.classList.add('miss');\n  }\n}\nfunction moveTurn() {\n  const anchor = document.querySelector('.anchor');\n  const stylesAnchor = window.getComputedStyle(anchor);\n  switch (true) {\n    case stylesAnchor.rotate === '0deg':\n      document.querySelector('.anchor').style.rotate = '180deg';\n      break;\n    case stylesAnchor.rotate === '180deg':\n      document.querySelector('.anchor').style.rotate = '0deg';\n      break;\n    case stylesAnchor.rotate === '90deg':\n      document.querySelector('.anchor').style.rotate = '270deg';\n      break;\n    case stylesAnchor.rotate === '270deg':\n      document.querySelector('.anchor').style.rotate = '90deg';\n      break;\n  }\n}\n\n//# sourceURL=webpack://battleship/./src/DOM/dom.js?");

/***/ }),

/***/ "./src/scripts/GameBoard.js":
/*!**********************************!*\
  !*** ./src/scripts/GameBoard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/scripts/constants.js\");\n/* harmony import */ var _setStopZone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setStopZone */ \"./src/scripts/setStopZone.js\");\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Ship */ \"./src/scripts/Ship.js\");\n\n\n\nconst GameBoard = function () {\n  let board = [];\n  let ships = [];\n  function getBoard() {\n    return board;\n  }\n  function getShips() {\n    return ships;\n  }\n  const createBoard = function () {\n    for (let i = 0; i < 10; i++) {\n      board.push([]);\n      for (let j = 0; j < 10; j++) {\n        board[i][j] = _constants__WEBPACK_IMPORTED_MODULE_0__.EMPTY;\n      }\n    }\n    return board;\n  };\n  const arrangementShips = function () {\n    const four_deck = new _Ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"](4);\n    cycleArrangement(four_deck);\n    ships.push(four_deck);\n    const triple_deck_1 = new _Ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"](3);\n    cycleArrangement(triple_deck_1);\n    ships.push(triple_deck_1);\n    const triple_deck_2 = new _Ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"](3);\n    cycleArrangement(triple_deck_2);\n    ships.push(triple_deck_2);\n    const dual_deck_1 = new _Ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"](2);\n    cycleArrangement(dual_deck_1);\n    ships.push(dual_deck_1);\n    const dual_deck_2 = new _Ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"](2);\n    cycleArrangement(dual_deck_2);\n    ships.push(dual_deck_2);\n    const dual_deck_3 = new _Ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"](2);\n    cycleArrangement(dual_deck_3);\n    ships.push(dual_deck_3);\n    const single_deck_1 = new _Ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"](1);\n    cycleArrangement(single_deck_1);\n    ships.push(single_deck_1);\n    const single_deck_2 = new _Ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"](1);\n    cycleArrangement(single_deck_2);\n    ships.push(single_deck_2);\n    const single_deck_3 = new _Ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"](1);\n    cycleArrangement(single_deck_3);\n    ships.push(single_deck_3);\n    const single_deck_4 = new _Ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"](1);\n    cycleArrangement(single_deck_4);\n    ships.push(single_deck_4);\n  };\n  const cycleArrangement = function (ship) {\n    const [coordY, coordX] = getRandomCoordinates(ship);\n    ship.setPointStart([coordY, coordX]);\n    if (ship.getAxis() === \"Y\") {\n      for (let i = coordY; i < coordY + ship.getLengthShip(); i++) {\n        board[i][coordX] = _constants__WEBPACK_IMPORTED_MODULE_0__.WHOLE_SHIP;\n      }\n      ship.setPointEnd([coordY + ship.getLengthShip() - 1, coordX]);\n    } else {\n      for (let i = coordX; i < coordX + ship.getLengthShip(); i++) {\n        board[coordY][i] = _constants__WEBPACK_IMPORTED_MODULE_0__.WHOLE_SHIP;\n      }\n      ship.setPointEnd([coordY, coordX + ship.getLengthShip() - 1]);\n    }\n    (0,_setStopZone__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ship, board);\n  };\n  const getRandomCoordinates = function (ship) {\n    let coordinateX;\n    let coordinateY;\n    let check_nearby_ship = false;\n    while (check_nearby_ship !== true) {\n      coordinateX = Math.floor(Math.random() * 10);\n      coordinateY = Math.floor(Math.random() * 10);\n      ship.setAxis(toggleAxis());\n      check_nearby_ship = checkShipNearby(ship, coordinateY, coordinateX);\n    }\n    return [coordinateY, coordinateX];\n  };\n  const checkShipNearby = function (ship, coordY, coordX) {\n    if (ship.getAxis() === \"Y\") {\n      if (coordY + ship.getLengthShip() - 1 > 9) return false;\n      for (let i = coordY; i < coordY + ship.getLengthShip(); i++) {\n        if (board[i][coordX] !== _constants__WEBPACK_IMPORTED_MODULE_0__.WHOLE_SHIP && board[i][coordX] !== _constants__WEBPACK_IMPORTED_MODULE_0__.STOP_ZONE) continue;else return false;\n      }\n    } else {\n      if (coordX + ship.getLengthShip() - 1 > 9) return false;\n      for (let i = coordX; i < coordX + ship.getLengthShip(); i++) {\n        if (board[coordY][i] !== _constants__WEBPACK_IMPORTED_MODULE_0__.WHOLE_SHIP && board[coordY][i] !== _constants__WEBPACK_IMPORTED_MODULE_0__.STOP_ZONE) continue;else return false;\n      }\n    }\n    return true;\n  };\n  function fillDestroyCells(ship) {\n    if (ship.getAxis() === \"Y\") {\n      for (let i = ship.getPointStart()[0]; i < ship.getPointStart()[0] + ship.getLengthShip(); i++) {\n        board[i][ship.getPointStart()[1]] = _constants__WEBPACK_IMPORTED_MODULE_0__.DESTROY_WHOLE;\n      }\n    } else {\n      for (let i = ship.getPointStart()[1]; i < ship.getPointStart()[1] + ship.getLengthShip(); i++) {\n        board[ship.getPointStart()[0]][i] = _constants__WEBPACK_IMPORTED_MODULE_0__.DESTROY_WHOLE;\n      }\n    }\n    let stop_zones = ship.getStopZones();\n    for (let i = 0; i < stop_zones.length; i++) {\n      if (board[stop_zones[i][0]][stop_zones[i][1]] !== _constants__WEBPACK_IMPORTED_MODULE_0__.MISS) {\n        board[stop_zones[i][0]][stop_zones[i][1]] = _constants__WEBPACK_IMPORTED_MODULE_0__.MISS;\n      }\n    }\n    return {\n      attack: true,\n      ship_life: true,\n      ship\n    };\n  }\n  function checkAttackShip(coordY, coordX) {\n    for (let i = 0; i < 10; i++) {\n      if (coordY >= ships[i].getPointStart()[0] && coordY <= ships[i].getPointEnd()[0] && ships[i].getPointStart()[1] === coordX || coordX >= ships[i].getPointStart()[1] && coordX <= ships[i].getPointEnd()[1] && ships[i].getPointStart()[0] === coordY) {\n        ships[i].hit();\n        if (ships[i].isSunk() === true) {\n          return fillDestroyCells(ships[i]);\n        } else {\n          board[coordY][coordX] = _constants__WEBPACK_IMPORTED_MODULE_0__.WRECKED_SHIP;\n          return {\n            attack: true,\n            ship_life: false\n          };\n        }\n      }\n    }\n    return true;\n  }\n  const receiveAttack = function (coordY, coordX) {\n    if (board[coordY][coordX] === _constants__WEBPACK_IMPORTED_MODULE_0__.WHOLE_SHIP) {\n      return checkAttackShip(coordY, coordX);\n    } else if (board[coordY][coordX] === _constants__WEBPACK_IMPORTED_MODULE_0__.EMPTY || board[coordY][coordX] === _constants__WEBPACK_IMPORTED_MODULE_0__.STOP_ZONE) {\n      board[coordY][coordX] = _constants__WEBPACK_IMPORTED_MODULE_0__.MISS;\n      return {\n        attack: false,\n        ship_life: false\n      };\n    } else {\n      return {\n        attack: undefined,\n        ship_life: undefined\n      };\n    }\n  };\n  function toggleAxis() {\n    if (Math.floor(Math.random() * 10) > 4) return \"X\";else return \"Y\";\n  }\n  function checkAllShips() {\n    for (let i = 0; i < ships.length; i++) {\n      if (ships[i].getLifeShip() !== true) {\n        return false;\n      }\n    }\n    return true;\n  }\n  return {\n    cycleArrangement,\n    getRandomCoordinates,\n    createBoard,\n    checkShipNearby,\n    toggleAxis,\n    arrangementShips,\n    receiveAttack,\n    checkAllShips,\n    getBoard,\n    getShips\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameBoard);\n\n//# sourceURL=webpack://battleship/./src/scripts/GameBoard.js?");

/***/ }),

/***/ "./src/scripts/GameCycle.js":
/*!**********************************!*\
  !*** ./src/scripts/GameCycle.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   startGame: () => (/* binding */ startGame)\n/* harmony export */ });\n/* harmony import */ var _GameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameBoard */ \"./src/scripts/GameBoard.js\");\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player */ \"./src/scripts/Player.js\");\n/* harmony import */ var _DOM_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DOM/dom */ \"./src/DOM/dom.js\");\n\n\n\nfunction startGame(name) {\n  let board_bot = new _GameBoard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  const board_user = new _GameBoard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  const user = new _Player__WEBPACK_IMPORTED_MODULE_1__[\"default\"](name);\n  const bot = new _Player__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Bot\");\n  const field_bot = board_bot.createBoard();\n  board_bot.arrangementShips();\n  const field_user = board_user.createBoard();\n  board_user.arrangementShips();\n  const gridBot = document.querySelector('.gridBot');\n  const gridUser = document.querySelector('.gridUser');\n  (0,_DOM_dom__WEBPACK_IMPORTED_MODULE_2__.generateBoard)(gridBot, field_bot);\n  (0,_DOM_dom__WEBPACK_IMPORTED_MODULE_2__.generateBoard)(gridUser, field_user);\n  const allCellsBot = gridBot.querySelectorAll(\".cell\");\n  const allCellsUser = gridUser.querySelectorAll(\".cell\");\n  (0,_DOM_dom__WEBPACK_IMPORTED_MODULE_2__.showShips)(board_user.getShips(), allCellsUser);\n  let bot_attack;\n  let user_attack;\n  let turn;\n  gridBot.addEventListener('click', e => {\n    if (e.target === gridBot) return;\n    if (turn === false) return;\n    allCellsBot.forEach(item => {\n      if (e.target === item) {\n        user_attack = user.userAttack(board_bot, item.dataset.idY, item.dataset.idX);\n        if (user_attack === undefined) return;\n        (0,_DOM_dom__WEBPACK_IMPORTED_MODULE_2__.getAttack)(user_attack, allCellsBot);\n        checkEndGame(board_bot, user);\n        turn = false;\n        (0,_DOM_dom__WEBPACK_IMPORTED_MODULE_2__.moveTurn)();\n        setTimeout(() => {\n          bot_attack = bot.cleverBotAttack(board_user);\n          (0,_DOM_dom__WEBPACK_IMPORTED_MODULE_2__.getAttack)(bot_attack, allCellsUser);\n          checkEndGame(board_user, bot);\n          turn = true;\n          (0,_DOM_dom__WEBPACK_IMPORTED_MODULE_2__.moveTurn)();\n        }, 1000);\n      }\n    });\n  });\n  function checkEndGame(board, player) {\n    if (board.checkAllShips() === true) {\n      setTimeout(() => {\n        player.isWin();\n        location.reload();\n      }, 500);\n    }\n  }\n}\n\n//# sourceURL=webpack://battleship/./src/scripts/GameCycle.js?");

/***/ }),

/***/ "./src/scripts/Player.js":
/*!*******************************!*\
  !*** ./src/scripts/Player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Player(name) {\n  function userAttack(board_bot, y, x) {\n    let flag = 0;\n    let date_attack;\n    while (flag !== 1) {\n      date_attack = board_bot.receiveAttack(+y, +x);\n      flag = date_attack.attack === true || date_attack.attack === false ? 1 : 0;\n      if (flag === 0) {\n        alert(\"Вы уже сюда стреляли\");\n        return undefined;\n      }\n    }\n    return {\n      coordinateX: +x,\n      coordinateY: +y,\n      date_attack\n    };\n  }\n  function cleverBotAttack(board_user) {\n    let coordinateX;\n    let coordinateY;\n    let flag = 0;\n    let date_attack;\n    while (flag !== 1) {\n      coordinateX = Math.floor(Math.random() * 10);\n      coordinateY = Math.floor(Math.random() * 10);\n      date_attack = board_user.receiveAttack(coordinateY, coordinateX);\n      flag = date_attack.attack === true || date_attack.attack === false ? 1 : 0;\n    }\n    return {\n      coordinateX,\n      coordinateY,\n      date_attack\n    };\n  }\n  function isWin() {\n    alert(`${name} won!`);\n  }\n  return {\n    userAttack,\n    cleverBotAttack,\n    isWin\n  };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n//# sourceURL=webpack://battleship/./src/scripts/Player.js?");

/***/ }),

/***/ "./src/scripts/Ship.js":
/*!*****************************!*\
  !*** ./src/scripts/Ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Ship = function (length) {\n  let length_ship = length;\n  let count_hit = 0;\n  let life_ship = false;\n  let point_start = [0, 0];\n  let point_end = [0, 0];\n  let stop_zone = [];\n  let axis;\n  function getAxis() {\n    return axis;\n  }\n  function getStopZones() {\n    return stop_zone;\n  }\n  function setStopZones(zone) {\n    stop_zone.push(zone);\n  }\n  function setAxis(ax) {\n    axis = ax;\n  }\n  function getLengthShip() {\n    return length_ship;\n  }\n  function getLifeShip() {\n    return life_ship;\n  }\n  function getPointStart() {\n    return point_start;\n  }\n  function getPointEnd() {\n    return point_end;\n  }\n  function setPointStart(point) {\n    point_start = point;\n  }\n  function setPointEnd(point) {\n    point_end = point;\n  }\n  const hit = function () {\n    count_hit += 1;\n    isSunk();\n    return count_hit;\n  };\n  const isSunk = function () {\n    return life_ship = count_hit === length_ship;\n  };\n  return {\n    getLifeShip,\n    getLengthShip,\n    isSunk,\n    hit,\n    getPointStart,\n    getPointEnd,\n    setPointStart,\n    setPointEnd,\n    getAxis,\n    setAxis,\n    getStopZones,\n    setStopZones\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n//# sourceURL=webpack://battleship/./src/scripts/Ship.js?");

/***/ }),

/***/ "./src/scripts/constants.js":
/*!**********************************!*\
  !*** ./src/scripts/constants.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DESTROY_WHOLE: () => (/* binding */ DESTROY_WHOLE),\n/* harmony export */   EMPTY: () => (/* binding */ EMPTY),\n/* harmony export */   MISS: () => (/* binding */ MISS),\n/* harmony export */   STOP_ZONE: () => (/* binding */ STOP_ZONE),\n/* harmony export */   WHOLE_SHIP: () => (/* binding */ WHOLE_SHIP),\n/* harmony export */   WRECKED_SHIP: () => (/* binding */ WRECKED_SHIP)\n/* harmony export */ });\nconst EMPTY = \"empty\";\nconst MISS = \"miss\";\nconst WRECKED_SHIP = \"wrecked\";\nconst DESTROY_WHOLE = \"destroy\";\nconst WHOLE_SHIP = \"whole\";\nconst STOP_ZONE = 'stop';\n\n\n//# sourceURL=webpack://battleship/./src/scripts/constants.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _GameCycle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameCycle */ \"./src/scripts/GameCycle.js\");\n/* harmony import */ var _img_github_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/github.png */ \"./src/img/github.png\");\n/* harmony import */ var _img_anchor_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/anchor.png */ \"./src/img/anchor.png\");\n\n\n\n\n\n// document.querySelector('.modal').style.display = 'block';\n//\n// document.querySelector('.btn-primary').addEventListener('click', () => {\n//     const name = document.querySelector('.inputName').value;\n//\n//     document.querySelector('.nameUser').textContent = name || 'User';\n//     document.querySelector('.nameBot').textContent = 'Bot';\n//\n//     document.querySelector('.modal').style.display = 'none';\n// });\n\nlet img = new Image();\nimg.src = _img_github_png__WEBPACK_IMPORTED_MODULE_2__;\nimg.classList.add('img_footer');\ndocument.querySelector('.link_footer').appendChild(img);\nlet imgAnchor = new Image();\nimgAnchor.src = _img_anchor_png__WEBPACK_IMPORTED_MODULE_3__;\nimgAnchor.classList.add('anchor');\ndocument.querySelector('.anchorBlock').appendChild(imgAnchor);\n(0,_GameCycle__WEBPACK_IMPORTED_MODULE_1__.startGame)(name);\n\n//# sourceURL=webpack://battleship/./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/setStopZone.js":
/*!************************************!*\
  !*** ./src/scripts/setStopZone.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/scripts/constants.js\");\n\nconst setStopZone = function (ship, board) {\n  if (ship.getAxis() === \"Y\") {\n    try {\n      if (ship.getPointStart()[0] !== 0) {\n        board[ship.getPointStart()[0] - 1][ship.getPointStart()[1]] = _constants__WEBPACK_IMPORTED_MODULE_0__.STOP_ZONE;\n        ship.setStopZones([ship.getPointStart()[0] - 1, ship.getPointStart()[1]]);\n      }\n    } catch (e) {}\n    try {\n      if (ship.getPointStart()[0] + ship.getLengthShip() <= 9) {\n        board[ship.getPointStart()[0] + ship.getLengthShip()][ship.getPointStart()[1]] = _constants__WEBPACK_IMPORTED_MODULE_0__.STOP_ZONE;\n        ship.setStopZones([ship.getPointStart()[0] + ship.getLengthShip(), ship.getPointStart()[1]]);\n      }\n    } catch (e) {}\n    try {\n      const j = ship.getPointStart()[1] - 1;\n      if (ship.getPointStart()[0] !== 0) {\n        for (let i = ship.getPointStart()[0] - 1; i < ship.getLengthShip() + ship.getPointStart()[0] + 1; i++) {\n          if (i <= 9 && j <= 9 && i >= 0 && j >= 0) {\n            board[i][j] = _constants__WEBPACK_IMPORTED_MODULE_0__.STOP_ZONE;\n            ship.setStopZones([i, j]);\n          }\n        }\n      } else {\n        for (let i = ship.getPointStart()[0]; i < ship.getLengthShip() + ship.getPointStart()[0] + 1; i++) {\n          if (i <= 9 && j <= 9 && i >= 0 && j >= 0) {\n            board[i][j] = _constants__WEBPACK_IMPORTED_MODULE_0__.STOP_ZONE;\n            ship.setStopZones([i, j]);\n          }\n        }\n      }\n    } catch (e) {}\n    try {\n      const j = ship.getPointStart()[1] + 1;\n      if (ship.getPointStart()[0] !== 0) {\n        for (let i = ship.getPointStart()[0] - 1; i < ship.getLengthShip() + ship.getPointStart()[0] + 1; i++) {\n          if (i <= 9 && j <= 9 && i >= 0 && j >= 0) {\n            board[i][j] = _constants__WEBPACK_IMPORTED_MODULE_0__.STOP_ZONE;\n            ship.setStopZones([i, j]);\n          }\n        }\n      } else {\n        for (let i = ship.getPointStart()[0]; i < ship.getLengthShip() + ship.getPointStart()[0] + 1; i++) {\n          if (i <= 9 && j <= 9 && i >= 0 && j >= 0) {\n            board[i][j] = _constants__WEBPACK_IMPORTED_MODULE_0__.STOP_ZONE;\n            ship.setStopZones([i, j]);\n          }\n        }\n      }\n    } catch (e) {}\n  } else {\n    try {\n      if (ship.getPointStart()[1] !== 0) {\n        board[ship.getPointStart()[0]][ship.getPointStart()[1] - 1] = _constants__WEBPACK_IMPORTED_MODULE_0__.STOP_ZONE;\n        ship.setStopZones([ship.getPointStart()[0], ship.getPointStart()[1] - 1]);\n      }\n    } catch (e) {}\n    try {\n      if (ship.getPointStart()[1] + ship.getLengthShip() <= 9) {\n        board[ship.getPointStart()[0]][ship.getPointStart()[1] + ship.getLengthShip()] = _constants__WEBPACK_IMPORTED_MODULE_0__.STOP_ZONE;\n        ship.setStopZones([ship.getPointStart()[0], ship.getPointStart()[1] + ship.getLengthShip()]);\n      }\n    } catch (e) {}\n    try {\n      const j = ship.getPointStart()[0] - 1;\n      if (ship.getPointStart()[0] !== 0) {\n        for (let i = ship.getPointStart()[1] - 1; i < ship.getLengthShip() + ship.getPointStart()[1] + 1; i++) {\n          if (i <= 9 && j <= 9 && i >= 0 && j >= 0) {\n            board[j][i] = _constants__WEBPACK_IMPORTED_MODULE_0__.STOP_ZONE;\n            ship.setStopZones([j, i]);\n          }\n        }\n      } else {\n        for (let i = ship.getPointStart()[1]; i < ship.getLengthShip() + ship.getPointStart()[1] + 1; i++) {\n          if (i <= 9 && j <= 9 && i >= 0 && j >= 0) {\n            board[j][i] = _constants__WEBPACK_IMPORTED_MODULE_0__.STOP_ZONE;\n            ship.setStopZones([j, i]);\n          }\n        }\n      }\n    } catch (e) {}\n    try {\n      const j = ship.getPointStart()[0] + 1;\n      if (ship.getPointStart()[1] !== 0) {\n        for (let i = ship.getPointStart()[1] - 1; i < ship.getLengthShip() + ship.getPointStart()[1] + 1; i++) {\n          if (i <= 9 && j <= 9 && i >= 0 && j >= 0) {\n            board[j][i] = _constants__WEBPACK_IMPORTED_MODULE_0__.STOP_ZONE;\n            ship.setStopZones([j, i]);\n          }\n        }\n      } else {\n        for (let i = ship.getPointStart()[1]; i < ship.getLengthShip() + ship.getPointStart()[1] + 1; i++) {\n          if (i <= 9 && j <= 9 && i >= 0 && j >= 0) {\n            board[j][i] = _constants__WEBPACK_IMPORTED_MODULE_0__.STOP_ZONE;\n            ship.setStopZones([j, i]);\n          }\n        }\n      }\n    } catch (e) {}\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setStopZone);\n\n//# sourceURL=webpack://battleship/./src/scripts/setStopZone.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://battleship/./src/css/style.css?");

/***/ }),

/***/ "./src/img/anchor.png":
/*!****************************!*\
  !*** ./src/img/anchor.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/anchor..png\";\n\n//# sourceURL=webpack://battleship/./src/img/anchor.png?");

/***/ }),

/***/ "./src/img/github.png":
/*!****************************!*\
  !*** ./src/img/github.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/github..png\";\n\n//# sourceURL=webpack://battleship/./src/img/github.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;