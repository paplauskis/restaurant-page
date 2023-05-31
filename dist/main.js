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

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadContent: () => (/* binding */ loadContent)\n/* harmony export */ });\n const loadContent = (() => {\n  const content = document.getElementById('content');\n  content.innerHTML = `<div id=\"content\" /><div class=\"nav-bar\">\n    <div class=\"logo\">\n      <img class=\"logo-img\" src=\"../assets/logo.png\" alt=\"Logo\" />\n      <h3 class=\"title\">Wicked Wok</h3>\n    </div>\n    <h5 class=\"slogan\"> <em> The Finest Asian Food </em> </h5>\n    <div class=\"links\">\n      <button class=\"home-button\">Home</button>\n      <button class=\"menu-button\">Menu</button>\n      <button class=\"contact-button\">Contact</button>\n    </div>\n  </div><div class=\"description\">\n      <div class=\"why-us\">\n        <h2>Why us?</h2>\n        <p>Quality of Service, Food, Ambiance and Value of Money are the primary elements for choosing a restaurant. Wicked Wok is one of the most exquisite fine-dinning restaurant in twin cities with a captivating view of Murree Hills, perfect ambiance and scrumptious food. Our team is always looking forward to provide you exceptional services and win your hearts out.</p>\n      </div>\n      <div class=\"working-hours\">\n        <h2>Working hours</h2>\n        <p>Mon: 10:00 - 22:00</p>\n        <p>Tue: 10:00 - 22:00</p>\n        <p>Wed: 10:00 - 22:00</p>\n        <p>Thu: 10:00 - 22:00</p>\n        <p>Fri: 10:00 - 00:00</p>\n        <p>Sat: 08:00 - 00:00</p>\n        <p>Sun: 08:00 - 22:00</p>\n      </div>\n      <div class=\"review\">\n        <h2>What people think</h2>\n        <p>We stumbled across this place after a day of travel and were pleasantly surprised by the quality of food. We went back the next day and were greeted with delight. Love the woks here, some of the best I have tasted.</p>\n      </div>\n    </div><img src=\"../assets/home-img.jpeg\" alt=\"banner\" />`\n})();\n\n// export { loadContent }\n// const navBarDiv = document.createElement('div');\n// navBarDiv.classList.add('nav-bar');\n// const logo = document.createElement('div');\n// logo.classList.add('logo');\n// const title = document.createElement('h3');\n// title.classList.add('title');\n// title.textContent = 'Wicked Wok';\n// const logoImg = document.createElement('img');\n// logoImg.classList.add('logo-img');\n// logoImg.src = '../assets/logo.png';\n// const slogan = document.createElement('h5');\n// slogan.classList.add('slogan');\n// slogan.textContent = 'The Finest Asian Food';\n// const linksDiv = document.createElement('div');\n// linksDiv.classList.add('links');\n// const homeButton = document.createElement('button');\n// homeButton.classList.add('home-button');\n// homeButton.textContent = 'Home';\n// const menuButton = document.createElement('button');\n// menuButton.classList.add('menu-button');\n// menuButton.textContent = 'Menu';\n// const contactButton = document.createElement('button');\n// contactButton.classList.add('contact-button');\n// contactButton.textContent = 'Contact';\n\n// content.appendChild(navBarDiv);\n// navBarDiv.appendChild(logo);\n// navBarDiv.appendChild(slogan);\n// logo.appendChild(logoImg);\n// logo.appendChild(title);\n// navBarDiv.appendChild(linksDiv);\n// linksDiv.appendChild(homeButton);\n// linksDiv.appendChild(menuButton);\n// linksDiv.appendChild(contactButton);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n\n_home__WEBPACK_IMPORTED_MODULE_0__.loadContent;\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

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