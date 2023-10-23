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

/***/ "./src/scripts/GameBoard.js":
/*!**********************************!*\
  !*** ./src/scripts/GameBoard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/scripts/constants.js\");\n/* harmony import */ var _setStopZone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setStopZone */ \"./src/scripts/setStopZone.js\");\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Ship */ \"./src/scripts/Ship.js\");\n\n\n\nconst GameBoard = function () {\n  let board = [];\n  let axisX = true;\n  let axisY = false;\n  let ships = [];\n  const createBoard = function () {\n    for (let i = 0; i < 10; i++) {\n      board.push([]);\n      for (let j = 0; j < 10; j++) {\n        board[i][j] = _constants__WEBPACK_IMPORTED_MODULE_0__.EMPTY;\n      }\n    }\n    return board;\n  };\n  const randomArrangementShips = function () {\n    const four_deck = new _Ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"](4);\n    cycleArrangement(four_deck);\n    ships.push(four_deck);\n    const triple_deck_1 = new _Ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"](3);\n    cycleArrangement(triple_deck_1);\n    ships.push(triple_deck_1);\n    const triple_deck_2 = new _Ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"](3);\n    cycleArrangement(triple_deck_2);\n    ships.push(triple_deck_2);\n    const dual_deck_1 = new _Ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"](2);\n    cycleArrangement(dual_deck_1);\n    ships.push(dual_deck_1);\n    const dual_deck_2 = new _Ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"](2);\n    cycleArrangement(dual_deck_2);\n    ships.push(dual_deck_2);\n    const dual_deck_3 = new _Ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"](2);\n    cycleArrangement(dual_deck_3);\n    ships.push(dual_deck_3);\n    const single_deck_1 = new _Ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"](1);\n    cycleArrangement(single_deck_1);\n    ships.push(single_deck_1);\n    const single_deck_2 = new _Ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"](1);\n    cycleArrangement(single_deck_2);\n    ships.push(single_deck_2);\n    const single_deck_3 = new _Ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"](1);\n    cycleArrangement(single_deck_3);\n    ships.push(single_deck_3);\n    const single_deck_4 = new _Ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"](1);\n    cycleArrangement(single_deck_4);\n    ships.push(single_deck_4);\n  };\n  const cycleArrangement = function (ship) {\n    const [coordX, coordY] = getRandomCoordinates(ship);\n    ship.setPointStart([coordX, coordY]);\n    if (axisX === false) {\n      for (let i = coordX; i < coordX + ship.getLengthShip(); i++) {\n        board[i][coordY] = _constants__WEBPACK_IMPORTED_MODULE_0__.WHOLE_SHIP;\n      }\n      ship.setPointEnd([coordX + ship.getLengthShip() - 1, coordY]);\n    } else {\n      for (let i = coordY; i < coordY + ship.getLengthShip(); i++) {\n        board[coordX][i] = _constants__WEBPACK_IMPORTED_MODULE_0__.WHOLE_SHIP;\n      }\n      ship.setPointEnd([coordX, coordY + ship.getLengthShip() - 1]);\n    }\n    (0,_setStopZone__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ship.getLengthShip(), coordX, coordY, axisX, board);\n  };\n  const getRandomCoordinates = function (ship) {\n    let coordinateX;\n    let coordinateY;\n    let check_nearby_ship = false;\n    while (check_nearby_ship !== true) {\n      coordinateX = Math.floor(Math.random() * 9);\n      coordinateY = Math.floor(Math.random() * 9);\n      if (Math.floor(Math.random()) === 0) toggleAxis();\n      check_nearby_ship = checkShipNearby(ship, coordinateX, coordinateY);\n    }\n    return [coordinateX, coordinateY];\n  };\n  const checkShipNearby = function (ship, coordX, coordY) {\n    if (axisX === false) {\n      if (coordX + ship.getLengthShip() > 9) return false;\n      for (let i = coordX; i < coordX + ship.getLengthShip(); i++) {\n        if (board[i][coordY] !== _constants__WEBPACK_IMPORTED_MODULE_0__.WHOLE_SHIP && board[i][coordY] !== _constants__WEBPACK_IMPORTED_MODULE_0__.STOP_ZONE) continue;else return false;\n      }\n    } else {\n      if (coordY + ship.getLengthShip() > 9) return false;\n      for (let i = coordY; i < coordY + ship.getLengthShip(); i++) {\n        if (board[coordX][i] !== _constants__WEBPACK_IMPORTED_MODULE_0__.WHOLE_SHIP && board[coordX][i] !== _constants__WEBPACK_IMPORTED_MODULE_0__.STOP_ZONE) continue;else return false;\n      }\n    }\n    return true;\n  };\n  const receiveAttack = function (coordX, coordY) {\n    if (board[coordX][coordY] === _constants__WEBPACK_IMPORTED_MODULE_0__.WHOLE_SHIP) {\n      for (let i = 0; i < 10; i++) {\n        if (axisX === true) {\n          if (coordX === ships[i].getPointStart()[0]) {\n            if (coordY >= ships[i].getPointStart()[1] && coordY <= ships[i].getPointEnd()[1]) {\n              ships[i].hit();\n              board[coordX][coordY] = _constants__WEBPACK_IMPORTED_MODULE_0__.WRECKED_SHIP;\n              return true;\n            }\n          }\n        } else {\n          if (coordY === ships[i].getPointStart()[1]) {\n            if (coordX >= ships[i].getPointStart()[0] && coordX <= ships[i].getPointEnd()[0]) {\n              ships[i].hit();\n              board[coordX][coordY] = _constants__WEBPACK_IMPORTED_MODULE_0__.WRECKED_SHIP;\n              return true;\n            }\n          }\n        }\n      }\n    } else if (board[coordX][coordY] === _constants__WEBPACK_IMPORTED_MODULE_0__.EMPTY || board[coordX][coordY] === _constants__WEBPACK_IMPORTED_MODULE_0__.STOP_ZONE) {\n      board[coordX][coordY] = _constants__WEBPACK_IMPORTED_MODULE_0__.MISS;\n      return false;\n    }\n  };\n  function toggleAxis() {\n    if (axisX === true) {\n      axisX = false;\n      axisY = true;\n    } else {\n      axisX = true;\n      axisY = false;\n    }\n  }\n  function checkAllShips() {\n    for (let i = 0; i < ships.length; i++) {\n      if (ships[i].getLifeShip() !== true) {\n        return false;\n      }\n    }\n    return true;\n  }\n  return {\n    cycleArrangement,\n    getRandomCoordinates,\n    createBoard,\n    checkShipNearby,\n    toggleAxis,\n    randomArrangementShips,\n    receiveAttack,\n    checkAllShips,\n    board\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameBoard);\n\n//# sourceURL=webpack://battleship/./src/scripts/GameBoard.js?");

/***/ }),

/***/ "./src/scripts/Player.js":
/*!*******************************!*\
  !*** ./src/scripts/Player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _GameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameBoard */ \"./src/scripts/GameBoard.js\");\n\nfunction Player(name) {\n  function initBoardBot() {\n    const boardBot = new _GameBoard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    boardBot.createBoard();\n    boardBot.randomArrangementShips();\n    return boardBot;\n  }\n  function initBoardUser() {\n    const boardUser = new _GameBoard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    boardUser.createBoard();\n    boardUser.randomArrangementShips();\n    return boardUser;\n  }\n  function userAttack(boardBot) {\n    let flag = 0;\n    let date_attack;\n    let x;\n    let y;\n    while (flag !== 1) {\n      x = +prompt(\"x\");\n      y = +prompt(\"y\");\n      date_attack = boardBot.receiveAttack(x, y);\n      flag = date_attack === true || date_attack === false ? 1 : 0;\n      if (flag === 0) {\n        alert(\"Вы уже сюда стреляли\");\n      }\n    }\n  }\n  function cleverBotAttack(boardUser) {\n    let coordinateX;\n    let coordinateY;\n    let flag = 0;\n    let date_attack;\n    while (flag !== 1) {\n      coordinateX = Math.floor(Math.random() * 9);\n      coordinateY = Math.floor(Math.random() * 9);\n      date_attack = boardUser.receiveAttack(coordinateX, coordinateY);\n      flag = date_attack === true || date_attack === false ? 1 : 0;\n    }\n  }\n  function isWin() {\n    return name;\n  }\n  return {\n    userAttack,\n    initBoardUser,\n    initBoardBot,\n    cleverBotAttack,\n    isWin\n  };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n//# sourceURL=webpack://battleship/./src/scripts/Player.js?");

/***/ }),

/***/ "./src/scripts/Ship.js":
/*!*****************************!*\
  !*** ./src/scripts/Ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Ship = function (length) {\n  let length_ship = length;\n  let count_hit = 0;\n  let life_ship = false;\n  let point_start = [0, 0];\n  let point_end = [0, 0];\n  function getLengthShip() {\n    return length_ship;\n  }\n  function getLifeShip() {\n    return life_ship;\n  }\n  function getPointStart() {\n    return point_start;\n  }\n  function getPointEnd() {\n    return point_end;\n  }\n  function setPointStart(point) {\n    point_start = point;\n  }\n  function setPointEnd(point) {\n    point_end = point;\n  }\n  const hit = function () {\n    count_hit += 1;\n    isSunk();\n    return count_hit;\n  };\n  const isSunk = function () {\n    count_hit === length_ship ? life_ship = true : life_ship = false;\n    return life_ship;\n  };\n  return {\n    getLifeShip,\n    getLengthShip,\n    isSunk,\n    hit,\n    getPointStart,\n    getPointEnd,\n    setPointStart,\n    setPointEnd\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n//# sourceURL=webpack://battleship/./src/scripts/Ship.js?");

/***/ }),

/***/ "./src/scripts/constants.js":
/*!**********************************!*\
  !*** ./src/scripts/constants.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EMPTY: () => (/* binding */ EMPTY),\n/* harmony export */   MISS: () => (/* binding */ MISS),\n/* harmony export */   STOP_ZONE: () => (/* binding */ STOP_ZONE),\n/* harmony export */   WHOLE_SHIP: () => (/* binding */ WHOLE_SHIP),\n/* harmony export */   WRECKED_SHIP: () => (/* binding */ WRECKED_SHIP)\n/* harmony export */ });\nconst EMPTY = \"empty\";\nconst MISS = \"miss\";\nconst WRECKED_SHIP = \"wrecked\";\nconst WHOLE_SHIP = \"whole\";\nconst STOP_ZONE = 'stop';\n\n\n//# sourceURL=webpack://battleship/./src/scripts/constants.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ \"./src/scripts/Player.js\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n\n\nconst winner = startGame();\nwinner.isWin();\nfunction startGame() {\n  const bot = new _Player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"botGrigory\");\n  const user = new _Player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Phantom\");\n  const boardBot = bot.initBoardBot();\n  const boardUser = user.initBoardUser();\n  let botCheck;\n  let userCheck;\n  let flag = false;\n  while (flag !== true) {\n    user.userAttack(boardBot);\n    bot.cleverBotAttack(boardUser);\n    userCheck = boardUser.checkAllShips();\n    botCheck = boardBot.checkAllShips();\n    flag = !(botCheck !== true || userCheck !== true);\n  }\n  return boardBot === true ? bot : user;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startGame);\n\n//# sourceURL=webpack://battleship/./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/setStopZone.js":
/*!************************************!*\
  !*** ./src/scripts/setStopZone.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/scripts/constants.js\");\n\nconst setStopZone = function (ship_length, coordX, coordY, axisX, board) {\n  if (axisX === false) {\n    try {\n      if (coordX !== 0) {\n        board[coordX - 1][coordY] = _constants__WEBPACK_IMPORTED_MODULE_0__.STOP_ZONE;\n      }\n    } catch (e) {}\n    try {\n      board[coordX + ship_length][coordY] = _constants__WEBPACK_IMPORTED_MODULE_0__.STOP_ZONE;\n    } catch (e) {}\n    try {\n      if (coordY !== 0 && coordX !== 0) {\n        const j = coordY - 1;\n        for (let i = coordX - 1; i < ship_length + coordX + 1; i++) {\n          board[i][j] = _constants__WEBPACK_IMPORTED_MODULE_0__.STOP_ZONE;\n        }\n      }\n    } catch (e) {}\n    try {\n      const j = coordY + 1;\n      if (coordX !== 0) {\n        for (let i = coordX - 1; i < ship_length + coordX + 1; i++) {\n          board[i][j] = _constants__WEBPACK_IMPORTED_MODULE_0__.STOP_ZONE;\n        }\n      } else {\n        for (let i = coordX; i < ship_length + coordX + 1; i++) {\n          board[i][j] = _constants__WEBPACK_IMPORTED_MODULE_0__.STOP_ZONE;\n        }\n      }\n    } catch (e) {}\n  } else {\n    try {\n      if (coordY !== 0) {\n        board[coordX][coordY - 1] = _constants__WEBPACK_IMPORTED_MODULE_0__.STOP_ZONE;\n      }\n    } catch (e) {}\n    try {\n      board[coordX][coordY + ship_length] = _constants__WEBPACK_IMPORTED_MODULE_0__.STOP_ZONE;\n    } catch (e) {}\n    try {\n      if (coordX !== 0 && coordY !== 0) {\n        const j = coordX - 1;\n        for (let i = coordY - 1; i < ship_length + coordY + 1; i++) {\n          board[j][i] = _constants__WEBPACK_IMPORTED_MODULE_0__.STOP_ZONE;\n        }\n      }\n    } catch (e) {}\n    try {\n      const j = coordX + 1;\n      if (coordY !== 0) {\n        for (let i = coordY - 1; i < ship_length + coordY + 1; i++) {\n          board[j][i] = _constants__WEBPACK_IMPORTED_MODULE_0__.STOP_ZONE;\n        }\n      } else {\n        for (let i = coordY; i < ship_length + coordY + 1; i++) {\n          board[j][i] = _constants__WEBPACK_IMPORTED_MODULE_0__.STOP_ZONE;\n        }\n      }\n    } catch (e) {}\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setStopZone);\n\n//# sourceURL=webpack://battleship/./src/scripts/setStopZone.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://battleship/./src/css/style.css?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;