/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/check.js":
/*!**********************!*\
  !*** ./src/check.js ***!
  \**********************/
/*! namespace exports */
/*! export checkblankTodo [provided] [no usage info] [missing usage info prevents renaming] */
/*! export checkblankinput [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkblankinput": () => /* binding */ checkblankinput,
/* harmony export */   "checkblankTodo": () => /* binding */ checkblankTodo
/* harmony export */ });




function checkblankinput(callback) {
    let alertblank = document.getElementById("alert")
    if (input.value.length == 0) {
        alertblank.textContent = "Do not leave the input blank"
        console.log("123")
    }
    else if (alertblank == null) {
        callback()
    }
    else {
        alertblank.textContent = ""
        callback()
    }
    checkcontententer()
    checkblankTodo()
}

function checkblankTodo() {
    let licom = document.getElementsByClassName("complete")
    let liuncom = document.getElementsByClassName("uncomplete")
    if (licom.length == 0 && liuncom.length == 0) {
        document.getElementById("blank").textContent = `What will you do?`
        input.placeholder = "What need to be done?"
        document.getElementById("alert").textContent = ""
        console.log(1234)

    }
    else input.placeholder = "What you need to do next?"
}

function checkcontententer() {
    document.execCommand('defaultParagraphSeparator', false, 'p')
}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! export addlist [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addlist": () => /* binding */ addlist
/* harmony export */ });
/* harmony import */ var _check__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check */ "./src/check.js");


let list = document.getElementById("list")
let content = document.getElementById("blank")
let datalistodo = []
let input = document.getElementById("input")
let btnadd = document.getElementById("add")


//function thêm value người dùng nhập vào trang chính
 function addlist() {
    content.textContent = ''
    list.insertAdjacentHTML(`beforeend`, newlist(input.value))
    datalistodo.push(input.value)
    console.log(datalistodo)
    addeventremove()
    input.value = ""
    addeventcomplete()
}
// function value người dùng nhập
function newlist(value) {
    let newtodo = `<li class="uncomplete"><input  class ="checkbox" type="checkbox">
    <span  contenteditable="true"><p>${value}</p></span>
    <button class="remove">X</button></li>`
    return newtodo
}
// function xóa 
function removelist(e) {
    let click = e.target
    click.parentElement.remove()
    datalistodo.splice(click.id, 1)
    addeventremove()
    console.log(datalistodo)
    ;(0,_check__WEBPACK_IMPORTED_MODULE_0__.checkblankTodo)()//

}
// Tạo event xóa cho nút xóa
function addeventremove() {
    let btnremove = document.getElementsByClassName("remove")
    for (let i = 0; i < btnremove.length; i++) {
        btnremove[i].addEventListener('click', removelist)
        btnremove[i].id = i
    }
}
// Tạo event hoàn thành cho nút tick
function addeventcomplete() {
    let checkcomplete = document.getElementsByClassName(`checkbox`)
    for (let i = 0; i < checkcomplete.length; i++) {
        checkcomplete[i].addEventListener('click', complete)
    }
}
// Đổi class khi tick 
function complete(e) {
    let click = e.target.parentElement
    if (e.target.checked == true) {
        click.className = "complete"
        click.children[1].contentEditable = false// Không cho sửa khi đã hoàn thành
    }
    else {
        click.className = "uncomplete"
        click.children[1].contentEditable = true
    }
}



/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _check__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check */ "./src/check.js");


let input = document.getElementById("input")
let btnadd = document.getElementById("add")
btnadd.addEventListener(`click`, ()=>{;(0,_check__WEBPACK_IMPORTED_MODULE_1__.checkblankinput)(_index__WEBPACK_IMPORTED_MODULE_0__.addlist)})
input.addEventListener('keyup', function (e) {
    if (e.key == 'Enter') {
        ;(0,_check__WEBPACK_IMPORTED_MODULE_1__.checkblankinput)(_index__WEBPACK_IMPORTED_MODULE_0__.addlist)
    }
})

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/main.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=bundle.js.map