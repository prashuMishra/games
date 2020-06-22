function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _board_board_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./board/board.component */
    "./src/app/board/board.component.ts");
    /* harmony import */


    var _new_board_new_board_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./new-board/new-board.component */
    "./src/app/new-board/new-board.component.ts");

    var routes = [{
      path: "board",
      component: _board_board_component__WEBPACK_IMPORTED_MODULE_2__["BoardComponent"]
    }, {
      path: "newboard",
      component: _new_board_new_board_component__WEBPACK_IMPORTED_MODULE_3__["NewBoardComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'chess';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _board_board_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./board/board.component */
    "./src/app/board/board.component.ts");
    /* harmony import */


    var _new_board_new_board_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./new-board/new-board.component */
    "./src/app/new-board/new-board.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _board_board_component__WEBPACK_IMPORTED_MODULE_4__["BoardComponent"], _new_board_new_board_component__WEBPACK_IMPORTED_MODULE_5__["NewBoardComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _board_board_component__WEBPACK_IMPORTED_MODULE_4__["BoardComponent"], _new_board_new_board_component__WEBPACK_IMPORTED_MODULE_5__["NewBoardComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/board/board.component.ts":
  /*!******************************************!*\
    !*** ./src/app/board/board.component.ts ***!
    \******************************************/

  /*! exports provided: BoardComponent */

  /***/
  function srcAppBoardBoardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BoardComponent", function () {
      return BoardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function BoardComponent_div_1_div_2_button_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardComponent_div_1_div_2_button_2_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var col_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var row_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r17.selectedItem(row_r1, col_r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var col_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var row_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("id", "", row_r1, "", col_r3, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", (col_r3 + row_r1) % 2 == 0 ? "black" : "white");
      }
    }

    function BoardComponent_div_1_div_2_button_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardComponent_div_1_div_2_button_3_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

          var col_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var row_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r23.selectedItem(row_r1, col_r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var col_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var row_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("id", "", row_r1, "", col_r3, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", (col_r3 + row_r1) % 2 == 0 ? "black" : "white")("innerHtml", ctx_r5.whiteBishop, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function BoardComponent_div_1_div_2_button_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardComponent_div_1_div_2_button_4_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);

          var col_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var row_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r29.selectedItem(row_r1, col_r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var col_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var row_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("id", "", row_r1, "", col_r3, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", (col_r3 + row_r1) % 2 == 0 ? "black" : "white")("innerHtml", ctx_r6.whiteQueen, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function BoardComponent_div_1_div_2_button_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardComponent_div_1_div_2_button_5_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

          var col_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var row_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r35.selectedItem(row_r1, col_r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var col_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var row_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("id", "", row_r1, "", col_r3, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", (col_r3 + row_r1) % 2 == 0 ? "black" : "white")("innerHtml", ctx_r7.whiteKing, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function BoardComponent_div_1_div_2_button_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardComponent_div_1_div_2_button_6_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

          var col_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var row_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r41.selectedItem(row_r1, col_r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var col_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var row_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("id", "", row_r1, "", col_r3, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", (col_r3 + row_r1) % 2 == 0 ? "black" : "white")("innerHtml", ctx_r8.whiteKnight, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function BoardComponent_div_1_div_2_button_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardComponent_div_1_div_2_button_7_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49);

          var col_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var row_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r47.selectedItem(row_r1, col_r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var col_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var row_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("id", "", row_r1, "", col_r3, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", (col_r3 + row_r1) % 2 == 0 ? "black" : "white")("innerHtml", ctx_r9.whitePawn, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function BoardComponent_div_1_div_2_button_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardComponent_div_1_div_2_button_8_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

          var col_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var row_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r53.selectedItem(row_r1, col_r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var col_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var row_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("id", "", row_r1, "", col_r3, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", (col_r3 + row_r1) % 2 == 0 ? "black" : "white")("innerHtml", ctx_r10.whiteRook, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function BoardComponent_div_1_div_2_button_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardComponent_div_1_div_2_button_9_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61);

          var col_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var row_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r59.selectedItem(row_r1, col_r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var col_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var row_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("id", "", row_r1, "", col_r3, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", (col_r3 + row_r1) % 2 == 0 ? "black" : "white")("innerHtml", ctx_r11.blackRook, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function BoardComponent_div_1_div_2_button_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardComponent_div_1_div_2_button_10_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67);

          var col_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var row_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r65.selectedItem(row_r1, col_r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var col_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var row_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("id", "", row_r1, "", col_r3, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", (col_r3 + row_r1) % 2 == 0 ? "black" : "white")("innerHtml", ctx_r12.blackBishop, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function BoardComponent_div_1_div_2_button_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardComponent_div_1_div_2_button_11_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73);

          var col_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var row_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r71.selectedItem(row_r1, col_r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var col_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var row_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("id", "", row_r1, "", col_r3, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", (col_r3 + row_r1) % 2 == 0 ? "black" : "white")("innerHtml", ctx_r13.blackKnight, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function BoardComponent_div_1_div_2_button_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardComponent_div_1_div_2_button_12_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79);

          var col_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var row_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r77.selectedItem(row_r1, col_r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var col_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var row_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("id", "", row_r1, "", col_r3, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", (col_r3 + row_r1) % 2 == 0 ? "black" : "white")("innerHtml", ctx_r14.blackPawn, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function BoardComponent_div_1_div_2_button_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardComponent_div_1_div_2_button_13_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r85);

          var col_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var row_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r83.selectedItem(row_r1, col_r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var col_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var row_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("id", "", row_r1, "", col_r3, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", (col_r3 + row_r1) % 2 == 0 ? "black" : "white")("innerHtml", ctx_r15.blackQueen, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function BoardComponent_div_1_div_2_button_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardComponent_div_1_div_2_button_14_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91);

          var col_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var row_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r89.selectedItem(row_r1, col_r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var col_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var row_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("id", "", row_r1, "", col_r3, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", (col_r3 + row_r1) % 2 == 0 ? "black" : "white")("innerHtml", ctx_r16.blackKing, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function BoardComponent_div_1_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BoardComponent_div_1_div_2_button_2_Template, 1, 3, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BoardComponent_div_1_div_2_button_3_Template, 1, 4, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BoardComponent_div_1_div_2_button_4_Template, 1, 4, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BoardComponent_div_1_div_2_button_5_Template, 1, 4, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BoardComponent_div_1_div_2_button_6_Template, 1, 4, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BoardComponent_div_1_div_2_button_7_Template, 1, 4, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, BoardComponent_div_1_div_2_button_8_Template, 1, 4, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, BoardComponent_div_1_div_2_button_9_Template, 1, 4, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, BoardComponent_div_1_div_2_button_10_Template, 1, 4, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, BoardComponent_div_1_div_2_button_11_Template, 1, 4, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, BoardComponent_div_1_div_2_button_12_Template, 1, 4, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, BoardComponent_div_1_div_2_button_13_Template, 1, 4, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, BoardComponent_div_1_div_2_button_14_Template, 1, 4, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var col_r3 = ctx.$implicit;

        var row_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.blank(row_r1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.whiteBishopCon(row_r1, col_r3));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.whiteQueenCon(row_r1, col_r3));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.whiteKingCon(row_r1, col_r3));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.whiteKnightCon(row_r1, col_r3));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.whitePawnCon(row_r1, col_r3));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.whiteRookCon(row_r1, col_r3));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.blackRookCon(row_r1, col_r3));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.blackBishopCon(row_r1, col_r3));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.blackKnightCon(row_r1, col_r3));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.blackPawnCon(row_r1, col_r3));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.blackQueenCon(row_r1, col_r3));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.blackKingCon(row_r1, col_r3));
      }
    }

    var _c0 = function _c0() {
      return [0, 1, 2, 3, 4, 5, 6, 7];
    };

    function BoardComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BoardComponent_div_1_div_2_Template, 15, 13, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
      }
    }

    var BoardComponent = /*#__PURE__*/function () {
      function BoardComponent() {
        _classCallCheck(this, BoardComponent);

        this.whiteKing = '&#9812;';
        this.whiteQueen = "&#9813;";
        this.whiteRook = "&#9814;";
        this.whiteBishop = "&#9815;";
        this.whiteKnight = "&#9816;";
        this.whitePawn = "&#9817;";
        this.blackKing = " &#9818;";
        this.blackQueen = "&#9819;";
        this.blackRook = "&#9820;";
        this.blackBishop = "&#9821;";
        this.blackKnight = "&#9822;";
        this.blackPawn = "&#9823;";
        this.whoseNextMoveis = '';
      }

      _createClass(BoardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "blank",
        value: function blank(row) {
          if (row >= 2 && row <= 5) {
            return true;
          }

          return false;
        }
      }, {
        key: "whiteRookCon",
        value: function whiteRookCon(row, col) {
          if (row === 0 && col === 0) {
            return true;
          }

          if (row === 0 && col === 7) {
            return true;
          }

          return false;
        }
      }, {
        key: "blackRookCon",
        value: function blackRookCon(row, col) {
          if (row === 7 && col === 0) {
            return true;
          }

          if (row === 7 && col === 7) {
            return true;
          }

          return false;
        }
      }, {
        key: "whitePawnCon",
        value: function whitePawnCon(row, col) {
          if (row === 1) {
            return true;
          }
        }
      }, {
        key: "blackPawnCon",
        value: function blackPawnCon(row, col) {
          if (row === 6) {
            return true;
          }
        }
      }, {
        key: "whiteKnightCon",
        value: function whiteKnightCon(row, col) {
          if (row === 0 && col === 1) {
            return true;
          }

          if (row === 0 && col === 6) {
            return true;
          }
        }
      }, {
        key: "whiteBishopCon",
        value: function whiteBishopCon(row, col) {
          if (row === 0 && col === 5) {
            return true;
          }

          if (row === 0 && col === 2) {
            return true;
          }
        }
      }, {
        key: "whiteQueenCon",
        value: function whiteQueenCon(row, col) {
          if (row == 0 && col === 3) {
            return true;
          }
        }
      }, {
        key: "whiteKingCon",
        value: function whiteKingCon(row, col) {
          if (row == 0 && col === 4) {
            return true;
          }
        }
      }, {
        key: "blackBishopCon",
        value: function blackBishopCon(row, col) {
          if (row === 7 && col === 5) {
            return true;
          }

          if (row === 7 && col === 2) {
            return true;
          }
        }
      }, {
        key: "blackKnightCon",
        value: function blackKnightCon(row, col) {
          if (row === 7 && col === 1) {
            return true;
          }

          if (row === 7 && col === 6) {
            return true;
          }
        }
      }, {
        key: "blackQueenCon",
        value: function blackQueenCon(row, col) {
          if (row == 7 && col === 3) {
            return true;
          }
        }
      }, {
        key: "blackKingCon",
        value: function blackKingCon(row, col) {
          if (row == 7 && col === 4) {
            return true;
          }
        }
      }, {
        key: "selectedItem",
        value: function selectedItem(row, col) {
          var current = document.getElementById("".concat(row).concat(col));

          if (current.className.split(' ').filter(function (a) {
            return a === 'active';
          }).length > 0) {
            current.className = current.className.replace(' active', "");
            return;
          }

          var prevActive = document.getElementsByClassName('active');

          if (prevActive.length > 0) {
            this.itemMoves(current, prevActive[0]);
            return;
          }

          if (current.name) {
            current.className = current.className.replace(current.className, "".concat(current.className, " active"));
          }
        }
      }, {
        key: "itemMoves",
        value: function itemMoves(current, prevActive) {
          var key = prevActive.name;

          switch (key) {
            case "Black_queen":
            case "White_queen":
              if (this.canQueenMove(current, prevActive)) {
                this.itemMoved(current, prevActive);
              }

              break;

            case "White_king":
            case "Black_king":
              if (this.canKingMove(current, prevActive)) {
                this.itemMoved(current, prevActive);
              }

              break;

            case "White_pawn":
              if (this.canWhitePawnMove(current, prevActive)) {
                this.itemMoved(current, prevActive);
              }

              break;

            case "Black_pawn":
              if (this.canBlackPawnMove(current, prevActive)) {
                this.itemMoved(current, prevActive);
              }

              break;

            case "White_bishop":
            case "Black_bishop":
              if (this.canBishopMove(current, prevActive)) {
                this.itemMoved(current, prevActive);
              }

              break;

            case "White_knight":
            case "Black_knight":
              if (this.canKnightMove(current, prevActive)) {
                this.itemMoved(current, prevActive);
              }

              break;

            case "White_rook":
            case "Black_rook":
              if (this.canRookMove(current, prevActive)) {
                this.itemMoved(current, prevActive);
              }

              break;

            default:
              break;
          }
        }
      }, {
        key: "canQueenMove",
        value: function canQueenMove(current, prevActive) {
          if (this.kingMoveIsValid(current, prevActive) || this.horVerMove(current, prevActive) || this.bishopMoveIsValid(current, prevActive)) {
            return true;
          }

          return false;
        }
      }, {
        key: "canKingMove",
        value: function canKingMove(current, prevActive) {
          if (this.kingMoveIsValid(current, prevActive)) {
            return true;
          }

          return false;
        }
      }, {
        key: "kingMoveIsValid",
        value: function kingMoveIsValid(current, prevActive) {
          var prePos = parseInt(prevActive.id);
          var curPos = parseInt(current.id);

          if (prePos + 1 === curPos || prePos - 1 === curPos || prePos + 10 === curPos || prePos - 10 === curPos || prePos + 9 === curPos || prePos - 9 === curPos || prePos + 11 === curPos || prePos - 11 === curPos) {
            return true;
          }

          return false;
        }
      }, {
        key: "canBlackPawnMove",
        value: function canBlackPawnMove(current, prevActive) {
          var prePos = parseInt(prevActive.id);
          var curPos = parseInt(current.id); // move one step

          if (prePos - 10 === curPos) {
            return true;
          } // For very first move with two steps


          if (prePos > 59 && prePos < 68 && prePos - 20 === curPos) {
            return true;
          }

          if (prePos - 9 === curPos || prePos - 11 === curPos && current.name) {
            var next = document.getElementById(curPos.toString());

            if (next.name) {
              return true;
            }
          }

          return false;
        }
      }, {
        key: "canWhitePawnMove",
        value: function canWhitePawnMove(current, prevActive) {
          var prePos = parseInt(prevActive.id);
          var curPos = parseInt(current.id);

          if (prePos + 10 === curPos) {
            return true;
          }

          if (prePos > 9 && prePos < 18 && prePos + 20 === curPos) {
            return true;
          }

          if (prePos + 9 === curPos || prePos + 11 === curPos) {
            var next = document.getElementById(curPos.toString());

            if (next.name) {
              return true;
            }
          }

          return false;
        }
      }, {
        key: "canRookMove",
        value: function canRookMove(current, prevActive) {
          if (this.horVerMove(current, prevActive)) {
            return true;
          }

          return false;
        }
      }, {
        key: "bishopMoveIsValid",
        value: function bishopMoveIsValid(current, prevActive) {
          var prePos = parseInt(prevActive.id);
          var curPos = parseInt(current.id);

          if ((prePos - curPos) % 11 === 0) {
            if (!this.isPlayerFound(current, prevActive, 11)) {
              return true;
            }
          } else if ((prePos - curPos) % 9 === 0) {
            if (!this.isPlayerFound(current, prevActive, 9)) {
              return true;
            }
          }

          return false;
        }
      }, {
        key: "isPlayerFound",
        value: function isPlayerFound(current, prevActive, incrmentOrDecrmntBy) {
          var prePos = parseInt(prevActive.id);
          var curPos = parseInt(current.id);

          if (prePos < curPos) {
            for (var index = prePos + incrmentOrDecrmntBy; index <= curPos - incrmentOrDecrmntBy; index = index + incrmentOrDecrmntBy) {
              var next = document.getElementById(index.toString());

              if (next.name) {
                return true;
              }
            }
          } else {
            for (var _index = prePos - incrmentOrDecrmntBy; _index >= curPos + incrmentOrDecrmntBy; _index = incrmentOrDecrmntBy - _index) {
              var _next = document.getElementById(_index.toString());

              if (_next.name) {
                return true;
              }
            }
          }

          return false;
        }
      }, {
        key: "canBishopMove",
        value: function canBishopMove(current, prevActive) {
          if (this.bishopMoveIsValid(current, prevActive)) {
            return true;
          }

          return false;
        }
      }, {
        key: "canKnightMove",
        value: function canKnightMove(current, prevActive) {
          var prePos = parseInt(prevActive.id);
          var curPos = parseInt(current.id);

          if (prePos + 19 === curPos || prePos - 19 === curPos || prePos + 21 === curPos || prePos - 21 === curPos || prePos - 12 === curPos || prePos + 12 === curPos || prePos - 8 === curPos || prePos + 8 === curPos) {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "horVerMove",
        value: function horVerMove(current, prevActive) {
          var prePos = parseInt(prevActive.id);
          var curPos = parseInt(current.id);
          var curPosRow = curPos / 10;
          var curPosCol = curPos % 10;
          var prePosRow = prePos / 10;
          var prePosCol = prePos % 10;

          if (parseInt(curPosRow) === parseInt(prePosRow)) {
            if (!this.isIteminhrzntalCol(current, prevActive)) {
              return true;
            }
          }

          if (parseInt(curPosCol) === parseInt(prePosCol)) {
            if (!this.isIteminvertclCol(current, prevActive)) {
              return true;
            }
          }

          return false;
        }
      }, {
        key: "itemMoved",
        value: function itemMoved(current, prevActive) {
          var cItmColor = current.name.split("_")[0];
          var prItmColor = prevActive.name.split("_")[0];

          if (prItmColor === cItmColor) {
            return;
          }

          if (prItmColor === this.whoseNextMoveis) {
            return;
          }

          current.name = prevActive.name;
          current.innerHTML = prevActive.innerHTML;
          prevActive.innerHTML = "";
          prevActive.name = "";
          prevActive.className = prevActive.className.replace(" active", "");
          current.className = current.className.replace(" active", "");
          prevActive.className = prevActive.className.replace(' whiteItme', "");
          prevActive.className = prevActive.className.replace(' blackItem', "");
          this.whoseNextMoveis = prItmColor;
        }
      }, {
        key: "isIteminhrzntalCol",
        value: function isIteminhrzntalCol(current, prevActive) {
          var prePos = parseInt(prevActive.id);
          var curPos = parseInt(current.id);

          if (curPos < prePos) {
            for (var index = prePos - 1; index >= curPos + 1; index--) {
              var next = document.getElementById(index.toString());

              if (next.name) {
                return true;
              }
            }
          } else {
            for (var _index2 = prePos + 1; _index2 <= curPos - 1; _index2++) {
              var _next2 = document.getElementById(_index2.toString());

              if (_next2.name) {
                return true;
              }
            }
          }

          return false;
        }
      }, {
        key: "isIteminvertclCol",
        value: function isIteminvertclCol(current, prevActive) {
          var prePos = parseInt(prevActive.id);
          var curPos = parseInt(current.id);

          if (curPos < prePos) {
            for (var index = prePos - 10; index >= curPos + 10; index = index - 10) {
              var next = document.getElementById(index.toString());

              if (next.name) {
                return true;
              }
            }
          } else {
            for (var _index3 = prePos + 10; _index3 <= curPos - 10; _index3 = _index3 + 10) {
              var _next3 = document.getElementById(_index3.toString());

              if (_next3.name) {
                return true;
              }
            }
          }

          return false;
        }
      }]);

      return BoardComponent;
    }();

    BoardComponent.ɵfac = function BoardComponent_Factory(t) {
      return new (t || BoardComponent)();
    };

    BoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BoardComponent,
      selectors: [["app-board"]],
      decls: 2,
      vars: 2,
      consts: [[1, "container"], [4, "ngFor", "ngForOf"], [1, "row", 2, "display", "flex"], [1, "col-sm-1", "col-md-1", "col-lg-1"], ["type", "button", "style", "font-size: 8rem;", "class", "btn defaultSize", 3, "id", "ngClass", "click", 4, "ngIf"], ["type", "button", "style", "font-size: 8rem;", "name", "White_bishop", "class", "btn defaultSize whiteItme", 3, "id", "ngClass", "innerHtml", "click", 4, "ngIf"], ["type", "button", "style", "font-size: 8rem;", "name", "White_queen", "class", "btn defaultSize whiteItme", 3, "id", "ngClass", "innerHtml", "click", 4, "ngIf"], ["type", "button", "style", "font-size: 8rem;", "name", "White_king", "class", "btn defaultSize whiteItme", 3, "id", "ngClass", "innerHtml", "click", 4, "ngIf"], ["type", "button", "style", "font-size: 8rem;", "name", "White_knight", "class", "btn defaultSize whiteItme", 3, "id", "ngClass", "innerHtml", "click", 4, "ngIf"], ["type", "button", "style", "font-size: 8rem;", "name", "White_pawn", "class", "btn defaultSize whiteItme", 3, "id", "ngClass", "innerHtml", "click", 4, "ngIf"], ["type", "button", "style", "font-size: 8rem;", "name", "White_rook", "class", "btn defaultSize whiteItme", 3, "id", "ngClass", "innerHtml", "click", 4, "ngIf"], ["type", "button", "style", "font-size: 8rem;", "name", "Black_rook", "class", "btn defaultSize blackItem", 3, "id", "ngClass", "innerHtml", "click", 4, "ngIf"], ["type", "button", "style", "font-size: 8rem;", "name", "Black_bishop", "class", "btn defaultSize blackItem", 3, "id", "ngClass", "innerHtml", "click", 4, "ngIf"], ["type", "button", "style", "font-size: 8rem;", "name", "Black_knight", "class", "btn defaultSize blackItem", 3, "id", "ngClass", "innerHtml", "click", 4, "ngIf"], ["type", "button", "style", "font-size: 8rem;", "name", "Black_pawn", "class", "btn defaultSize blackItem", 3, "id", "ngClass", "innerHtml", "click", 4, "ngIf"], ["type", "button", "style", "font-size: 8rem;", "name", "Black_queen", "class", "btn defaultSize blackItem", 3, "id", "ngClass", "innerHtml", "click", 4, "ngIf"], ["type", "button", "style", "font-size: 8rem;", "name", "Black_king", "class", "btn defaultSize blackItem", 3, "id", "ngClass", "innerHtml", "click", 4, "ngIf"], ["type", "button", 1, "btn", "defaultSize", 2, "font-size", "8rem", 3, "id", "ngClass", "click"], ["type", "button", "name", "White_bishop", 1, "btn", "defaultSize", "whiteItme", 2, "font-size", "8rem", 3, "id", "ngClass", "innerHtml", "click"], ["type", "button", "name", "White_queen", 1, "btn", "defaultSize", "whiteItme", 2, "font-size", "8rem", 3, "id", "ngClass", "innerHtml", "click"], ["type", "button", "name", "White_king", 1, "btn", "defaultSize", "whiteItme", 2, "font-size", "8rem", 3, "id", "ngClass", "innerHtml", "click"], ["type", "button", "name", "White_knight", 1, "btn", "defaultSize", "whiteItme", 2, "font-size", "8rem", 3, "id", "ngClass", "innerHtml", "click"], ["type", "button", "name", "White_pawn", 1, "btn", "defaultSize", "whiteItme", 2, "font-size", "8rem", 3, "id", "ngClass", "innerHtml", "click"], ["type", "button", "name", "White_rook", 1, "btn", "defaultSize", "whiteItme", 2, "font-size", "8rem", 3, "id", "ngClass", "innerHtml", "click"], ["type", "button", "name", "Black_rook", 1, "btn", "defaultSize", "blackItem", 2, "font-size", "8rem", 3, "id", "ngClass", "innerHtml", "click"], ["type", "button", "name", "Black_bishop", 1, "btn", "defaultSize", "blackItem", 2, "font-size", "8rem", 3, "id", "ngClass", "innerHtml", "click"], ["type", "button", "name", "Black_knight", 1, "btn", "defaultSize", "blackItem", 2, "font-size", "8rem", 3, "id", "ngClass", "innerHtml", "click"], ["type", "button", "name", "Black_pawn", 1, "btn", "defaultSize", "blackItem", 2, "font-size", "8rem", 3, "id", "ngClass", "innerHtml", "click"], ["type", "button", "name", "Black_queen", 1, "btn", "defaultSize", "blackItem", 2, "font-size", "8rem", 3, "id", "ngClass", "innerHtml", "click"], ["type", "button", "name", "Black_king", 1, "btn", "defaultSize", "blackItem", 2, "font-size", "8rem", 3, "id", "ngClass", "innerHtml", "click"]],
      template: function BoardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BoardComponent_div_1_Template, 3, 2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
      styles: [".black[_ngcontent-%COMP%] {\n  background-color: #D18B47;\n}\n\n.white[_ngcontent-%COMP%] {\n  background-color: #F7CD9D;\n}\n\n.active[_ngcontent-%COMP%] {\n  border-color: red;\n  border-width: 6px;\n}\n\n.defaultSize[_ngcontent-%COMP%] {\n  width: 8rem;\n  height: 8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ByYXNoYW50L3Rlc3RpbmcgcmVwby9nYW1lcy9zcmMvYXBwL2JvYXJkL2JvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ib2FyZC9ib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtBQ0NKOztBRENBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQ0VKOztBREFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL2JvYXJkL2JvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsYWNre1xuICAgIGJhY2tncm91bmQtY29sb3I6I0QxOEI0NztcbiAgICBcbn1cbi53aGl0ZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNGN0NEOUQ7ICAgIFxufVxuLmFjdGl2ZXtcbiAgICBib3JkZXItY29sb3I6IHJlZDtcbiAgICBib3JkZXItd2lkdGg6IDZweDtcbn1cbi5kZWZhdWx0U2l6ZXtcbiAgICB3aWR0aDogOHJlbTtcbiAgICBoZWlnaHQ6IDhyZW07XG59XG4iLCIuYmxhY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDE4QjQ3O1xufVxuXG4ud2hpdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdDRDlEO1xufVxuXG4uYWN0aXZlIHtcbiAgYm9yZGVyLWNvbG9yOiByZWQ7XG4gIGJvcmRlci13aWR0aDogNnB4O1xufVxuXG4uZGVmYXVsdFNpemUge1xuICB3aWR0aDogOHJlbTtcbiAgaGVpZ2h0OiA4cmVtO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BoardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-board',
          templateUrl: './board.component.html',
          styleUrls: ['./board.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/new-board/new-board.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/new-board/new-board.component.ts ***!
    \**************************************************/

  /*! exports provided: NewBoardComponent */

  /***/
  function srcAppNewBoardNewBoardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewBoardComponent", function () {
      return NewBoardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NewBoardComponent = /*#__PURE__*/function () {
      function NewBoardComponent() {
        _classCallCheck(this, NewBoardComponent);
      }

      _createClass(NewBoardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NewBoardComponent;
    }();

    NewBoardComponent.ɵfac = function NewBoardComponent_Factory(t) {
      return new (t || NewBoardComponent)();
    };

    NewBoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NewBoardComponent,
      selectors: [["app-new-board"]],
      decls: 2,
      vars: 0,
      template: function NewBoardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "new-board works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ldy1ib2FyZC9uZXctYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewBoardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-new-board',
          templateUrl: './new-board.component.html',
          styleUrls: ['./new-board.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/prashant/testing repo/games/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map