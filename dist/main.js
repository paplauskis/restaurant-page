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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadContact: () => (/* binding */ loadContact)\n/* harmony export */ });\nconst loadContact = (load) => {\n  load.innerHTML = `<div class=\"contact\">\n  <h4>Have questions?</h4>\n  <h4>Want to book your spot?</h4>\n  <h4>Contact us</h4>\n  <br>\n  <p>+37064616969</p>\n  <p>info@wickedwok.com</p>\n  <p>46, Salako Street, Oluyole Estate, Ibadan</p>\n</div`\n}\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadContent: () => (/* binding */ loadContent)\n/* harmony export */ });\n const loadContent = (load) => {\n  load.innerHTML = `<div class=\"description\">\n      <div class=\"why-us\">\n        <h2>Why us?</h2>\n        <p>Quality of Service, Food, Ambiance and Value of Money are the primary elements for choosing a restaurant. Wicked Wok is one of the most exquisite fine-dinning restaurant in twin cities with a captivating view of Murree Hills, perfect ambiance and scrumptious food. Our team is always looking forward to provide you exceptional services and win your hearts out.</p>\n      </div>\n      <div class=\"working-hours\">\n        <h2>Working hours</h2>\n        <p>Mon: 10:00 - 22:00</p>\n        <p>Tue: 10:00 - 22:00</p>\n        <p>Wed: 10:00 - 22:00</p>\n        <p>Thu: 10:00 - 22:00</p>\n        <p>Fri: 10:00 - 00:00</p>\n        <p>Sat: 08:00 - 00:00</p>\n        <p>Sun: 08:00 - 22:00</p>\n      </div>\n      <div class=\"review\">\n        <h2>What people think</h2>\n        <p>We stumbled across this place after a day of travel and were pleasantly surprised by the quality of food. We went back the next day and were greeted with delight. Love the woks here, some of the best I have tasted.</p>\n      </div>\n    </div><img src=\"../assets/home-img.jpeg\" alt=\"banner\" />`\n};\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\nconst content = document.getElementById('content');\ncontent.innerHTML = `<div class=\"nav-bar\">\n  <div class=\"logo\">\n    <img class=\"logo-img\" src=\"../assets/logo.png\" alt=\"Logo\">\n    <h3 class=\"title\">Wicked Wok</h3>\n  </div>\n  <h5 class=\"slogan\"><em>The Finest Asian Food</em></h5>\n  <div class=\"links\">\n    <button class=\"home-button\">Home</button>\n    <button class=\"menu-button\">Menu</button>\n    <button class=\"contact-button\">Contact</button>\n  </div>\n</div>`\n\nconst load = document.querySelector('#load');\n\n(0,_home__WEBPACK_IMPORTED_MODULE_0__.loadContent)(load);\n\nconst menuButton = document.querySelector('.menu-button');\nmenuButton.addEventListener('click', () => (0,_menu__WEBPACK_IMPORTED_MODULE_1__.loadMenu)(load));\n\nconst contactButton = document.querySelector('.contact-button');\ncontactButton.addEventListener('click', () => (0,_contact__WEBPACK_IMPORTED_MODULE_2__.loadContact)(load));\n\nconst homeButton = document.querySelector('.home-button');\nhomeButton.addEventListener('click', () => (0,_home__WEBPACK_IMPORTED_MODULE_0__.loadContent)(load));\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMenu: () => (/* binding */ loadMenu)\n/* harmony export */ });\nconst loadMenu = (load) => {\n  load.innerHTML = `<div class=\"menu\">\n  <h2>Wok</h2>\n  <div class=\"woks dishes\">\n    <div class=\"wok1 dish-item\">\n      <h4>Ebi Curry</h4>\n      <img src=\"../assets/wok-ebi-curry.jpeg\" alt=\"ebi curry\">\n      <p>Made by my indian friend</p>\n      <p>10.99$</p>\n    </div>\n    <div class=\"wok2 dish-item\">\n      <h4>Gju Soba</h4>\n      <img src=\"../assets/wok-gju-soba.jpeg\" alt=\"gju soba\">\n      <p>Spicy, be careful</p>\n      <p>9.99$</p>\n    </div>\n    <div class=\"wok3 dish-item\">\n      <h4>Pork Teriyaki Jaki Soba</h4>\n      <img src=\"../assets/wok-pork-teriyaki-jaki-soba.jpeg\" alt=\"pork teriyaki jaki soba\">\n      <p>Some people have strong diarrhea after this</p>\n      <p>9.99$</p>\n    </div>\n    <div class=\"wok4 dish-item\">\n      <h4>Savory Eggplants</h4>\n      <img src=\"../assets/wok-savory-eggplants.jpeg\" alt=\"savory eggplants\">\n      <p>Tasty for some people</p>\n      <p>8.99$</p>\n    </div>\n  </div>\n  <hr>\n  <h2>Donburi</h2>\n  <div class=\"donburi dishes\">\n    <div class=\"donburi1 dish-item\">\n      <h4>Gju Teriyaki</h4>\n      <img src=\"../assets/gju-teriyaki-donburi.jpeg\" alt=\"gju teriyaki\">\n      <p>Our personal favourite</p>\n      <p>9.99$</p>\n    </div>\n    <div class=\"donburi2 dish-item\">\n      <h4>Tori Teriyaki</h4>\n      <img src=\"../assets/tori-teriyaki-donburi.jpeg\" alt=\"tori teriyaki\">\n      <p>After eating this you will want a cocktail</p>\n      <p>9.99$</p>\n    </div>\n    <div class=\"donburi3 dish-item\">\n      <h4>Teriyaki Ahibu</h4>\n      <img src=\"../assets/teriyaki-ahiru-donburi.jpeg\" alt=\"teriyaki ahiru\">\n      <p>Either a hit or miss</p>\n      <p>10.99$</p>\n    </div>\n    <div class=\"donburi4 dish-item\">\n      <h4>Kaisen Donburi</h4>\n      <img src=\"../assets/kaisen-donburi.jpeg\" alt=\"kaisen donburi\">\n      <p>People favourite</p>\n      <p>10.99$</p>\n    </div>\n  </div>\n  <hr>\n  <h2>Elixirs</h2>\n  <div class=\"drinks dishes\">\n    <div class=\"drink1 dish-item\">\n      <h4>Cosmopolitan</h4>\n      <img src=\"../assets/drink-cosmopolitan.webp\" alt=\"Cosmopolitan\">\n      <p>You'll start seeing hallucinations</p>\n      <p>7.99$</p>\n    </div>\n    <div class=\"drink2 dish-item\">\n      <h4>Dirty Shirley</h4>\n      <img src=\"../assets/drink-dirty-shirley.webp\" alt=\"Dirty Shirley\">\n      <p>After eating this you will want to get a girl</p>\n      <p>7.99$</p>\n    </div>\n    <div class=\"drink3 dish-item\">\n      <h4>Farmer</h4>\n      <img src=\"../assets/drink-farmer.webp\" alt=\"Farmer\">\n      <p>Unlocks ability to talk to cows</p>\n      <p>7.99$</p>\n    </div>\n    <div class=\"drink4 dish-item\">\n      <h4>Mule</h4>\n      <img src=\"../assets/drink-mule.webp\" alt=\"Mule\">\n      <p>Just sparkling water, lime and vodka</p>\n      <p>6.99$</p>\n    </div>\n  </div>\n</div>`\n};\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;