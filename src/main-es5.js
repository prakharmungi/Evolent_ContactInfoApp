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
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"container-fluid wrapper\">\n <app-header></app-header>\n <app-contacts></app-contacts>\n</div>\n\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contacts/contacts.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/contacts/contacts.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsContactsContactsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "    <div class=\"row add-contacts-button-section vertical-space-10px\">\n        <div class=\"col-lg-9\">\n        </div>\n        <div class=\"col-lg-3\">\n            <span class=\"horizontal-space-10px\">Add new Contact</span>\n            <button class=\"btn btn-primary\" (click)=\"addBtnClicked()\"><i class=\"fas fa-user-plus\"></i></button>\n        </div>\n    </div>\n    <div class=\"row table-container horizontal-space-10px\">\n        <div class=\"col-lg-9\">\n            <div class=\"row headings-row vertical-space-20px\">\n                <div class=\"col-lg-3\" *ngFor=\"let heading of headings\">\n                    {{heading}}\n                </div>\n                <div class=\"col-lg-3\">\n                    \n                </div>\n            </div>\n            <div class=\"row data-row vertical-space-10px\" [ngClass]=\"{'theme-color-border': updateIconClicked === i || shareIconClicked === i}\" *ngFor=\"let contactData of contactsData; let i = index\">\n                <div class=\"col-lg-3\">\n                    {{contactData.firstName}} {{contactData.lastName}}\n                </div>\n                <div class=\"col-lg-3\">\n                    {{contactData.email}}\n                </div>\n                <div class=\"col-lg-3\">\n                    {{contactData.phNumber}}\n                </div>\n                <div class=\"col-lg-3\">\n                    <i class=\"fas fa-edit horizontal-space-10px\" [ngClass]=\"{'theme-color': updateIconClicked === i}\" \n                    (click)=\"editBtnClicked(contactData, i);\"></i>\n                    <i class=\"fas fa-trash-alt horizontal-space-10px\" (click)=\"deleteBtnClicked(contactData)\"></i>\n                    <i class=\"fas fa-share-alt horizontal-space-10px\" [ngClass]=\"{'theme-color': shareIconClicked === i}\"\n                    (click)=\"shareBtnClicked(i)\"></i>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-lg-3\">\n            <div *ngIf=\"showAddEditForm\" class=\"add-contacts-section vertical-space-20px\">\n                <div class= \"headings-row\"><span>{{formHeading}}</span>\n                <i class=\"fas fa-times shift-right\" (click)=\"showAddEditForm = false\"></i></div>\n            <form>\n                <div class=\"form-group\">\n                    <label for=\"fNAme\">First Name</label>\n                    <input class=\"form-control\" name=\"firstName\" [(ngModel)]=\"formData.firstName\" id=\"fNAme\" placeholder=\"first name\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"lName\">Last Name</label>\n                    <input class=\"form-control\" name=\"lastName\" [(ngModel)]=\"formData.lastName\" id=\"lName\"  placeholder=\"last name\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"email\">Email</label>\n                    <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"email\" name=\"email\"\n                    [(ngModel)]=\"formData.email\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"phNumber\">Phone Number</label>\n                    <input class=\"form-control\" type=\"number\" name=\"phNumber\" [(ngModel)]=\"formData.phNumber\" id=\"phNumber\"  placeholder=\"phone number\">\n                </div>\n                <input type=\"submit\" [disabled] = \"formData.firstName.length === 0\" class=\"btn btn-primary\" value=\"{{formButtonText}}\" (click)=\"saveContact()\"/>\n            </form>\n        </div>\n        </div>\n    </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n  <nav class=\"navbar navbar-expand-sm\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <h1 class=\"fas fa-users\"></h1>\n        <h1 class=\"nav-link\" href=\"#\">Contact Information</h1>\n      </li>\n    </ul>\n  </nav>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal_components/add-contact-modal/add-contact-modal.component.html":
  /*!**************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal_components/add-contact-modal/add-contact-modal.component.html ***!
    \**************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsModal_componentsAddContactModalAddContactModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal-heading\">\n<span>Scan the QR code to access contact Information</span>\n<i class=\"fas fa-times modal-close\" (click)=\"bsModalRef.hide()\"></i>\n</div>\n<img class=\"modal-img-align\" src=\"../../../../assets/images/qrCodeSample.png\" alt=\"qr code\">";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'ContactInfoWebApp';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/contacts/contacts.component */
    "./src/app/components/contacts/contacts.component.ts");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _components_modal_components_add_contact_modal_add_contact_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/modal_components/add-contact-modal/add-contact-modal.component */
    "./src/app/components/modal_components/add-contact-modal/add-contact-modal.component.ts"); // import { AppRoutingModule } from './app-routing.module'; to be used if routing required.


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_8__["ContactsComponent"], _components_modal_components_add_contact_modal_add_contact_modal_component__WEBPACK_IMPORTED_MODULE_10__["AddContactModalComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["ModalModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]],
      entryComponents: [_components_modal_components_add_contact_modal_add_contact_modal_component__WEBPACK_IMPORTED_MODULE_10__["AddContactModalComponent"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/contacts/contacts.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/components/contacts/contacts.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsContactsContactsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".headings-row {\n  font-size: 20px;\n}\n\n.add-contacts-section {\n  border-left: 3px solid #72a9e3;\n  padding-left: 10px;\n}\n\n.add-contacts-section .shift-right {\n  float: right;\n}\n\n.add-contacts-button-section span {\n  color: #72a9e3;\n}\n\n.add-contacts-button-section button,\n.add-contacts-section button {\n  background-color: #72a9e3;\n}\n\n.headings-row {\n  border-bottom: 3px solid #72a9e3;\n}\n\n.headings-row div {\n  text-align: center;\n}\n\n.data-row div {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0cy9GOlxcVGVjaFxcU2FtcGxlQXBwbGljYXRpb25zXFxFdm9sZW50QXNzaWdubWVudFxcQ29udGFjdEluZm9XZWJBcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNvbnRhY3RzXFxjb250YWN0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0cy9jb250YWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGVBQUE7QUNGRjs7QURLQTtFQUNFLDhCQUFBO0VBQ0Esa0JBQUE7QUNGRjs7QURJRTtFQUNFLFlBQUE7QUNGSjs7QURPRTtFQUNFLGNBbEJlO0FDY25COztBRFNFOztFQUNFLHlCQXhCZTtBQ21CbkI7O0FEUUE7RUFDRSxnQ0FBQTtBQ0xGOztBRE1FO0VBQ0Usa0JBQUE7QUNKSjs7QURRRTtFQUNFLGtCQUFBO0FDTEoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRhY3RzL2NvbnRhY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHRoZW1lLWNvbG9yLWJsdWU6ICM3MmE5ZTM7XHJcblxyXG5cclxuLmhlYWRpbmdzLXJvd3tcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5hZGQtY29udGFjdHMtc2VjdGlvbiB7XHJcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAkdGhlbWUtY29sb3ItYmx1ZTtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcblxyXG4gIC5zaGlmdC1yaWdodCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG59XHJcbi5hZGQtY29udGFjdHMtYnV0dG9uLXNlY3Rpb257XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgY29sb3I6ICR0aGVtZS1jb2xvci1ibHVlO1xyXG4gIH1cclxufVxyXG4uYWRkLWNvbnRhY3RzLWJ1dHRvbi1zZWN0aW9uLFxyXG4uYWRkLWNvbnRhY3RzLXNlY3Rpb24ge1xyXG4gIGJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhlbWUtY29sb3ItYmx1ZTtcclxuICB9XHJcbn1cclxuLmhlYWRpbmdzLXJvdyB7XHJcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICR0aGVtZS1jb2xvci1ibHVlO1xyXG4gIGRpdiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcbi5kYXRhLXJvdyB7XHJcbiAgZGl2IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbn1cclxuIiwiLmhlYWRpbmdzLXJvdyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmFkZC1jb250YWN0cy1zZWN0aW9uIHtcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjNzJhOWUzO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4uYWRkLWNvbnRhY3RzLXNlY3Rpb24gLnNoaWZ0LXJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uYWRkLWNvbnRhY3RzLWJ1dHRvbi1zZWN0aW9uIHNwYW4ge1xuICBjb2xvcjogIzcyYTllMztcbn1cblxuLmFkZC1jb250YWN0cy1idXR0b24tc2VjdGlvbiBidXR0b24sXG4uYWRkLWNvbnRhY3RzLXNlY3Rpb24gYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcyYTllMztcbn1cblxuLmhlYWRpbmdzLXJvdyB7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjNzJhOWUzO1xufVxuLmhlYWRpbmdzLXJvdyBkaXYge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kYXRhLXJvdyBkaXYge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/contacts/contacts.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/contacts/contacts.component.ts ***!
    \***********************************************************/

  /*! exports provided: ContactsComponent */

  /***/
  function srcAppComponentsContactsContactsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactsComponent", function () {
      return ContactsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_contacts_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/contacts-data.service */
    "./src/app/services/contacts-data.service.ts");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _modal_components_add_contact_modal_add_contact_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../modal_components/add-contact-modal/add-contact-modal.component */
    "./src/app/components/modal_components/add-contact-modal/add-contact-modal.component.ts");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/underscore.js");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_5__);

    var ContactsComponent =
    /*#__PURE__*/
    function () {
      function ContactsComponent(contactsDataService, modalService) {
        var _this = this;

        _classCallCheck(this, ContactsComponent);

        this.contactsDataService = contactsDataService;
        this.modalService = modalService;
        this.headings = [];

        this.addBtnClicked = function () {
          _this.showAddEditForm = true;
          _this.formHeading = 'Create new contact - ';
          _this.formButtonText = 'Save';
          _this.formData = {
            firstName: '',
            lastName: '',
            email: '',
            phNumber: ''
          };
          _this.shareIconClicked = null;
          _this.updateIconClicked = null;
        };

        this.editBtnClicked = function (contactData, index) {
          _this.updateIconClicked = index;
          _this.shareIconClicked = null;
          _this.showAddEditForm = true;
          _this.formHeading = 'Update this contact - ';
          _this.formData = Object.assign({}, contactData);
          _this.formButtonText = 'Update';
        };

        this.getContactsData = function () {
          _this.contactsDataService.getContactsData().subscribe(function (response) {
            _this.contactsData = response;
          });
        };

        this.deleteBtnClicked = function (contactData) {
          _this.showAddEditForm = false;

          _this.contactsDataService.deleteContact(contactData).subscribe(function () {
            _this.contactsData = underscore__WEBPACK_IMPORTED_MODULE_5__["filter"](_this.contactsData, function (eachContactData) {
              return contactData.id !== eachContactData.id;
            });
          });
        };

        this.shareBtnClicked = function (index) {
          _this.openModalWithComponent();

          _this.shareIconClicked = index;
          _this.updateIconClicked = null;
          _this.showAddEditForm = false;
        };

        this.saveContact = function () {
          if (_this.formData.phNumber.toString().length === 10) {
            _this.showAddEditForm = false;

            if (_this.formButtonText === 'Save') {
              _this.contactsDataService.addnewContact(_this.formData).subscribe(function (response) {
                _this.contactsData.push(response);
              });
            } else {
              _this.contactsDataService.updateContact(_this.formData).subscribe(function (response) {
                var contactsData = underscore__WEBPACK_IMPORTED_MODULE_5__["map"](_this.contactsData, function (contactData) {
                  if (contactData.id === response.id) {
                    return response;
                  } else {
                    return contactData;
                  }

                  ;
                });
                _this.contactsData = contactsData;
              });
            }

            _this.formData = {
              firstName: '',
              lastName: '',
              email: '',
              phNumber: ''
            };
            _this.updateIconClicked = null;
          } else {
            alert('Please enter a 10 digit phone number!!');
          }
        };
      }

      _createClass(ContactsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.formData = {
            firstName: '',
            lastName: '',
            email: '',
            phNumber: ''
          };
          this.headings = ['Name', 'Email', 'Phone number'];
          this.getContactsData();
          this.showAddEditForm = false;
        }
      }, {
        key: "openModalWithComponent",
        value: function openModalWithComponent() {
          this.modalRef = this.modalService.show(_modal_components_add_contact_modal_add_contact_modal_component__WEBPACK_IMPORTED_MODULE_4__["AddContactModalComponent"]);
          this.modalRef.content.addBtnName = 'Add Contact';
        }
      }]);

      return ContactsComponent;
    }();

    ContactsComponent.ctorParameters = function () {
      return [{
        type: _services_contacts_data_service__WEBPACK_IMPORTED_MODULE_2__["ContactsDataService"]
      }, {
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"]
      }];
    };

    ContactsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contacts',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contacts.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contacts/contacts.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contacts.component.scss */
      "./src/app/components/contacts/contacts.component.scss")).default]
    })], ContactsComponent);
    /***/
  },

  /***/
  "./src/app/components/header/header.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/components/header/header.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".nav-item h1 {\n  display: inline-block;\n}\n.nav-item .nav-link, .nav-item .fas {\n  color: #72a9e3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvRjpcXFRlY2hcXFNhbXBsZUFwcGxpY2F0aW9uc1xcRXZvbGVudEFzc2lnbm1lbnRcXENvbnRhY3RJbmZvV2ViQXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0kscUJBQUE7QUNEUjtBREdJO0VBQ0ksY0FBQTtBQ0RSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5uYXYtaXRlbSB7XHJcbiAgICBoMSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG4gICAgLm5hdi1saW5rICwgLmZhcyB7XHJcbiAgICAgICAgY29sb3I6ICM3MmE5ZTM7XHJcbiAgICB9XHJcbn0iLCIubmF2LWl0ZW0gaDEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4ubmF2LWl0ZW0gLm5hdi1saW5rLCAubmF2LWl0ZW0gLmZhcyB7XG4gIGNvbG9yOiAjNzJhOWUzO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/header/header.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/header/header.component.ts ***!
    \*******************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/components/header/header.component.scss")).default]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/components/modal_components/add-contact-modal/add-contact-modal.component.scss":
  /*!************************************************************************************************!*\
    !*** ./src/app/components/modal_components/add-contact-modal/add-contact-modal.component.scss ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsModal_componentsAddContactModalAddContactModalComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".modal-img-align {\n  padding-left: 50px;\n}\n\n.modal-heading {\n  text-align: center;\n}\n\n.modal-close {\n  float: right;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb2RhbF9jb21wb25lbnRzL2FkZC1jb250YWN0LW1vZGFsL0Y6XFxUZWNoXFxTYW1wbGVBcHBsaWNhdGlvbnNcXEV2b2xlbnRBc3NpZ25tZW50XFxDb250YWN0SW5mb1dlYkFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xcbW9kYWxfY29tcG9uZW50c1xcYWRkLWNvbnRhY3QtbW9kYWxcXGFkZC1jb250YWN0LW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21vZGFsX2NvbXBvbmVudHMvYWRkLWNvbnRhY3QtbW9kYWwvYWRkLWNvbnRhY3QtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7QUNFRjs7QURDQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21vZGFsX2NvbXBvbmVudHMvYWRkLWNvbnRhY3QtbW9kYWwvYWRkLWNvbnRhY3QtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtaW1nLWFsaWduIHtcclxuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbn1cclxuLm1vZGFsLWhlYWRpbmcge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1vZGFsLWNsb3NlIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4iLCIubW9kYWwtaW1nLWFsaWduIHtcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xufVxuXG4ubW9kYWwtaGVhZGluZyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1vZGFsLWNsb3NlIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nOiAxMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/modal_components/add-contact-modal/add-contact-modal.component.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/components/modal_components/add-contact-modal/add-contact-modal.component.ts ***!
    \**********************************************************************************************/

  /*! exports provided: AddContactModalComponent */

  /***/
  function srcAppComponentsModal_componentsAddContactModalAddContactModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddContactModalComponent", function () {
      return AddContactModalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");

    var AddContactModalComponent =
    /*#__PURE__*/
    function () {
      function AddContactModalComponent(bsModalRef) {
        _classCallCheck(this, AddContactModalComponent);

        this.bsModalRef = bsModalRef;
      }

      _createClass(AddContactModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AddContactModalComponent;
    }();

    AddContactModalComponent.ctorParameters = function () {
      return [{
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"]
      }];
    };

    AddContactModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-contact-modal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-contact-modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal_components/add-contact-modal/add-contact-modal.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-contact-modal.component.scss */
      "./src/app/components/modal_components/add-contact-modal/add-contact-modal.component.scss")).default]
    })], AddContactModalComponent);
    /***/
  },

  /***/
  "./src/app/services/contacts-data.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/services/contacts-data.service.ts ***!
    \***************************************************/

  /*! exports provided: ContactsDataService */

  /***/
  function srcAppServicesContactsDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactsDataService", function () {
      return ContactsDataService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var ContactsDataService = function ContactsDataService(httpClient) {
      var _this2 = this;

      _classCallCheck(this, ContactsDataService);

      this.httpClient = httpClient;

      this.getContactsData = function () {
        return _this2.httpClient.get('http://localhost:3000/contactsInfo');
      };

      this.addnewContact = function (newContactData) {
        return _this2.httpClient.post('http://localhost:3000/contactsInfo', newContactData);
      };

      this.updateContact = function (dataToUpdate) {
        return _this2.httpClient.put('http://localhost:3000/contactsInfo/' + '/' + dataToUpdate.id, dataToUpdate);
      };

      this.deleteContact = function (dataToDelete) {
        return _this2.httpClient.delete('http://localhost:3000/contactsInfo/' + dataToDelete.id + '/');
      };
    };

    ContactsDataService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ContactsDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ContactsDataService);
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
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
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
    /*! F:\Tech\SampleApplications\EvolentAssignment\ContactInfoWebApp\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map