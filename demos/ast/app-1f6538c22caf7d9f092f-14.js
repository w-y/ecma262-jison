webpackJsonp([52],{

/***/ "+flb":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./css/codeExample.txt": "QrjB",
	"./css/cssom.js": "dJzZ",
	"./css/csstree.js": "nhuG",
	"./css/index.js": "uQOR",
	"./css/postcss.js": "UEbe",
	"./css/rework.js": "RidM",
	"./css/transformers/postcss/codeExample.txt": "Ftao",
	"./css/transformers/postcss/index.js": "s9iO",
	"./glsl/codeExample.txt": "idRZ",
	"./glsl/glsl-parser.js": "wRaN",
	"./glsl/index.js": "dy7d",
	"./graphql/codeExample.txt": "I6mg",
	"./graphql/graphql-js.js": "spke",
	"./graphql/index.js": "PmAF",
	"./handlebars/codeExample.txt": "g4ij",
	"./handlebars/glimmer.js": "eiPt",
	"./handlebars/handlebars.js": "8ZNc",
	"./handlebars/index.js": "yf8N",
	"./handlebars/transformers/glimmer-compiler/codeExample.txt": "nhG3",
	"./handlebars/transformers/glimmer-compiler/index.js": "Y3Ek",
	"./handlebars/transformers/glimmer/codeExample.txt": "C7ZG",
	"./handlebars/transformers/glimmer/index.js": "hPTY",
	"./html/codeExample.txt": "nwpp",
	"./html/htmlparser2.js": "zyXp",
	"./html/index.js": "jlpK",
	"./html/parse5.js": "lRWh",
	"./icu/codeExample.txt": "IFWm",
	"./icu/index.js": "ksNG",
	"./icu/intl-messageformat-parser.js": "7tno",
	"./js/acorn-to-esprima.js": "lyIa",
	"./js/acorn.js": "1V+2",
	"./js/babel-eslint.js": "5yGg",
	"./js/babylon.js": "7LuP",
	"./js/babylon6.js": "941S",
	"./js/babylon7.js": "SLaV",
	"./js/codeExample.txt": "pCVc",
	"./js/ecma262-jison.js": "0F3L",
	"./js/esformatter.js": "y/zs",
	"./js/espree.js": "QWIc",
	"./js/esprima.js": "GMxf",
	"./js/flow.js": "YW1o",
	"./js/index.js": "1JC5",
	"./js/recast.js": "1yWD",
	"./js/shift.js": "/1LB",
	"./js/traceur.js": "d3R6",
	"./js/transformers/babel/codeExample.txt": "PEXx",
	"./js/transformers/babel/index.js": "V6CS",
	"./js/transformers/babel6/codeExample.txt": "NPN2",
	"./js/transformers/babel6/index.js": "uIi8",
	"./js/transformers/babel7/codeExample.txt": "cEuW",
	"./js/transformers/babel7/index.js": "0lpW",
	"./js/transformers/eslint1/codeExample.txt": "HjL8",
	"./js/transformers/eslint1/index.js": "JK6A",
	"./js/transformers/eslint1/loadRulesShim.js": "Cygi",
	"./js/transformers/eslint2/codeExample.txt": "gZy7",
	"./js/transformers/eslint2/index.js": "qzBz",
	"./js/transformers/eslint3/codeExample.txt": "2d+y",
	"./js/transformers/eslint3/index.js": "A9yG",
	"./js/transformers/eslint4/codeExample.txt": "HbH1",
	"./js/transformers/eslint4/index.js": "47jT",
	"./js/transformers/jscodeshift/codeExample.txt": "YyuK",
	"./js/transformers/jscodeshift/index.js": "D2yP",
	"./js/transformers/prettier/codeExample.txt": "95aw",
	"./js/transformers/prettier/index.js": "dLYH",
	"./js/transformers/tslint/codeExample.txt": "rWcW",
	"./js/transformers/tslint/index.js": "bruV",
	"./js/typescript-eslint-parser.js": "QVvP",
	"./js/typescript.js": "dZ3p",
	"./js/uglify.js": "/bn9",
	"./json/codeExample.txt": "JKkB",
	"./json/index.js": "GmPs",
	"./json/json-to-ast.js": "IZ4/",
	"./lua/codeExample.txt": "uocx",
	"./lua/index.js": "Zm4G",
	"./lua/luaparse.js": "gbpD",
	"./markdown/codeExample.txt": "Gju+",
	"./markdown/index.js": "1MwM",
	"./markdown/remark.js": "j5K2",
	"./php/codeExample.txt": "DV8Z",
	"./php/index.js": "5VxS",
	"./php/php-parser.js": "S/uV",
	"./regexp/codeExample.txt": "giVu",
	"./regexp/index.js": "boxU",
	"./regexp/regexp-tree.js": "JTge",
	"./regexp/transformers/regexp-tree/codeExample.txt": "zYNp",
	"./regexp/transformers/regexp-tree/index.js": "NSdD",
	"./scala/codeExample.txt": "eRru",
	"./scala/index.js": "2UKR",
	"./scala/scalameta.js": "61Ow",
	"./sql/codeExample.txt": "/1Ip",
	"./sql/index.js": "mk70",
	"./sql/sqlite-parser.js": "2E/V",
	"./webidl/codeExample.txt": "uUNL",
	"./webidl/index.js": "TBC3",
	"./webidl/webidl2.js": "8U2u",
	"./yaml/codeExample.txt": "aphx",
	"./yaml/index.js": "2TBo",
	"./yaml/yaml-ast-parser.js": "OMtC"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "+flb";

/***/ }),

/***/ "/1Ip":
/***/ (function(module, exports) {

module.exports = "--\n-- This is an example query\n--\nSELECT\n\tfoo, bar as baz\nFROM\n\tmytable\nWHERE\n\tfoo LIKE '%neat%'\nORDER BY\n\tfoo DESC\n"

/***/ }),

/***/ "/1LB":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _extends2=__webpack_require__("Dd8w"),_extends3=_interopRequireDefault(_extends2),_react=__webpack_require__("U7vG"),_react2=_interopRequireDefault(_react),_defaultParserInterface=__webpack_require__("zoXw"),_defaultParserInterface2=_interopRequireDefault(_defaultParserInterface),_package=__webpack_require__("se15"),_package2=_interopRequireDefault(_package),_SettingsRenderer=__webpack_require__("nhMB"),_SettingsRenderer2=_interopRequireDefault(_SettingsRenderer),ID="shift",defaultOptions={loc:!0,earlyErrors:!1,sourceType:"module"},parserSettingsConfiguration={fields:[["sourceType",["script","module"]],"loc","earlyErrors"],required:new Set(["loc"])};exports.default=(0,_extends3.default)({},_defaultParserInterface2.default,{id:ID,displayName:ID,version:_package2.default.version,homepage:_package2.default.homepage,locationProps:new Set(["loc"]),loadParser:function(e){__webpack_require__.e/* require */(22).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("HG7O")]; (e.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe)},parse:function(e,r,t){return t=(0,_extends3.default)({},defaultOptions,t),e["module"===t.sourceType?"parseModule":"parseScript"](r,t)},nodeToRange:function(e){var r=e.loc;if(r)return[r.start.offset,r.end.offset]},renderSettings:function(e,r){return _react2.default.createElement(_SettingsRenderer2.default,{settingsConfiguration:parserSettingsConfiguration,parserSettings:(0,_extends3.default)({},defaultOptions,e),onChange:r})},opensByDefault:function(e,r){return"items"===r||"declaration"===r||"declarators"===r||"statements"===r||"expression"===r||"body"===r}});

/***/ }),

/***/ "/bn9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _extends2=__webpack_require__("Dd8w"),_extends3=_interopRequireDefault(_extends2),_defaultParserInterface=__webpack_require__("zoXw"),_defaultParserInterface2=_interopRequireDefault(_defaultParserInterface),_package=__webpack_require__("Ur/u"),_package2=_interopRequireDefault(_package),_compileModule=__webpack_require__("K5Vt"),_compileModule2=_interopRequireDefault(_compileModule),ID="uglify-js";exports.default=(0,_extends3.default)({},_defaultParserInterface2.default,{id:ID,displayName:ID,version:_package2.default.version,homepage:_package2.default.homepage,locationProps:new Set(["start","end"]),loadParser:function(e){__webpack_require__.e/* require */(37).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("ezht"),__webpack_require__("FFWZ"),__webpack_require__("CUih")]; (function(){for(var r=arguments.length,a=Array(r),t=0;t<r;t++)a[t]=arguments[t];a.push("exports.parse = parse;"),e((0,_compileModule2.default)(a.join("\n\n")))}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}).catch(__webpack_require__.oe)},parse:function(e,r){return e.parse(r)},getNodeName:function(e){var r=e.TYPE;return"Token"===r&&(r+="("+e.type+")"),r},nodeToRange:function(e){var r=void 0,a=void 0;switch(e.TYPE){case"Token":r=a=e;break;case void 0:return;default:r=e.start,a=e.end}return[r.pos,a.endpos]},opensByDefault:function(e,r){return"body"===r||"elements"===r||"definitions"===r||"properties"===r},_ignoredProperties:new Set(["_walk","CTOR"])});

/***/ }),

/***/ "0F3L":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _regenerator=__webpack_require__("Xxa5"),_regenerator2=_interopRequireDefault(_regenerator),_extends2=__webpack_require__("Dd8w"),_extends3=_interopRequireDefault(_extends2),_react=__webpack_require__("U7vG"),_react2=_interopRequireDefault(_react),_defaultESTreeParserInterface=__webpack_require__("2Wat"),_defaultESTreeParserInterface2=_interopRequireDefault(_defaultESTreeParserInterface),_package=__webpack_require__("DN+T"),_package2=_interopRequireDefault(_package),_SettingsRenderer=__webpack_require__("nhMB"),_SettingsRenderer2=_interopRequireDefault(_SettingsRenderer),ID="ecma262-jison",defaultOptions={sourceType:"module",loc:!1,range:!0,tokens:!1,comment:!1,attachComment:!1,tolerant:!1,jsx:!0},parserSettingsConfiguration={fields:[["sourceType",["script","module"]],"range","loc","attachComment","comment","tokens","tolerant","jsx"],required:new Set(["range"])};exports.default=(0,_extends3.default)({},_defaultESTreeParserInterface2.default,{id:ID,displayName:ID,version:_package2.default.version,homepage:_package2.default.homepage,locationProps:new Set(["range","loc"]),loadParser:function(e){__webpack_require__.e/* require */(23).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("8Lk6")]; (e.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe)},parse:function(e,r,t){return e.parse(r,(0,_extends3.default)({},defaultOptions,t))},forEachProperty:_regenerator2.default.mark(function e(r){var t;return _regenerator2.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=_regenerator2.default.keys(r);case 1:if((e.t1=e.t0()).done){e.next=9;break}if(t=e.t1.value,"function"!=typeof r[t]){e.next=5;break}return e.abrupt("continue",1);case 5:return e.next=7,{value:r[t],key:t,computed:!1};case 7:e.next=1;break;case 9:case"end":return e.stop()}},e,this)}),renderSettings:function(e,r){return _react2.default.createElement(_SettingsRenderer2.default,{settingsConfiguration:parserSettingsConfiguration,parserSettings:(0,_extends3.default)({},defaultOptions,e),onChange:r})}});

/***/ }),

/***/ "0lpW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _compileModule=__webpack_require__("K5Vt"),_compileModule2=_interopRequireDefault(_compileModule),_babel7Package=__webpack_require__("8c1P"),_babel7Package2=_interopRequireDefault(_babel7Package),ID="babelv7";exports.default={id:ID,displayName:ID,version:_babel7Package2.default.version,homepage:_babel7Package2.default.homepage,defaultParserID:"babylon7",loadTransformer:function(e){__webpack_require__.e/* require */(9).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("Rd78"),__webpack_require__("pJo7")]; (function(a,r){return e({babel:a,recast:r})}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}).catch(__webpack_require__.oe)},transform:function(e,a,r){var t=e.babel,o=e.recast,i=(0,_compileModule2.default)(a);return t.transform(r,{parserOpts:{parser:o.parse,plugins:["asyncGenerators","classPrivateProperties","classProperties","decorators","doExpressions","exportExtensions","flow","functionSent","functionBind","jsx","objectRestSpread","dynamicImport","numericSeparator","optionalChaining","importMeta","bigInt","optionalCatchBinding","pipelineOperator"]},generatorOpts:{generator:o.print},plugins:[(i.default||i)(t)],sourceMaps:!0})}};

/***/ }),

/***/ "1JC5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0}),exports.fileExtension=exports.mimeTypes=exports.displayName=exports.id=void 0,__webpack_require__("5IAE");var id=exports.id="javascript",displayName=exports.displayName="JavaScript",mimeTypes=exports.mimeTypes=["text/javascript"],fileExtension=exports.fileExtension="js";

/***/ }),

/***/ "1MwM":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0}),exports.fileExtension=exports.mimeTypes=exports.displayName=exports.id=void 0,__webpack_require__("f6fj");var id=exports.id="markdown",displayName=exports.displayName="Markdown",mimeTypes=exports.mimeTypes=["text/markdown"],fileExtension=exports.fileExtension="md";

/***/ }),

/***/ "1V+2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _extends2=__webpack_require__("Dd8w"),_extends3=_interopRequireDefault(_extends2),_react=__webpack_require__("U7vG"),_react2=_interopRequireDefault(_react),_defaultESTreeParserInterface=__webpack_require__("2Wat"),_defaultESTreeParserInterface2=_interopRequireDefault(_defaultESTreeParserInterface),_package=__webpack_require__("ECNh"),_package2=_interopRequireDefault(_package),_SettingsRenderer=__webpack_require__("nhMB"),_SettingsRenderer2=_interopRequireDefault(_SettingsRenderer),ID="acorn",defaultOptions={ecmaVersion:7,sourceType:"module",allowReserved:!1,allowReturnOutsideFunction:!1,allowImportExportEverywhere:!1,allowHashBang:!1,locations:!1,loose:!1,ranges:!1,preserveParens:!1,"plugins.jsx":!0},settingsConfiguration={fields:[["ecmaVersion",[3,5,6,7,8],function(e){return Number(e)}],["sourceType",["script","module"]],"allowReserved","allowReturnOutsideFunction","allowImportExportEverywhere","allowHashBang","locations","loose","ranges","preserveParens","plugins.jsx"]};exports.default=(0,_extends3.default)({},_defaultESTreeParserInterface2.default,{id:ID,displayName:ID,version:""+_package2.default.version,homepage:_package2.default.homepage,locationProps:new Set(["range","loc","start","end"]),loadParser:function(e){__webpack_require__.e/* require */(36).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("7N8s"),__webpack_require__("Mx+R"),__webpack_require__("iY51")]; (function(r,t,n){r=n(r),e({acorn:r,acornLoose:t})}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}).catch(__webpack_require__.oe)},parse:function(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t=Object.assign({},defaultOptions,t),(t.loose?e.acornLoose.parse_dammit:e.acorn.parse)(r,(0,_extends3.default)({},t,{plugins:t["plugins.jsx"]&&!t.loose?{jsx:!0}:{}}))},nodeToRange:function(e){if("number"==typeof e.start)return[e.start,e.end]},renderSettings:function(e,r){return _react2.default.createElement("div",null,_react2.default.createElement("p",null,_react2.default.createElement("a",{href:"https://github.com/marijnh/acorn/blob/master/src/options.js",target:"_blank",rel:"noopener noreferrer"},"Option descriptions")),_react2.default.createElement(_SettingsRenderer2.default,{settingsConfiguration:settingsConfiguration,parserSettings:(0,_extends3.default)({},defaultOptions,e),onChange:r}))}});

/***/ }),

/***/ "1inQ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _classCallCheck2=__webpack_require__("Zrlr"),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__("wxAW"),_createClass3=_interopRequireDefault(_createClass2),_possibleConstructorReturn2=__webpack_require__("zwoO"),_possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2),_inherits2=__webpack_require__("Pf15"),_inherits3=_interopRequireDefault(_inherits2),_propTypes=__webpack_require__("KSGD"),_propTypes2=_interopRequireDefault(_propTypes),_react=__webpack_require__("U7vG"),_react2=_interopRequireDefault(_react),_classnames=__webpack_require__("HW6M"),_classnames2=_interopRequireDefault(_classnames),_parsers=__webpack_require__("Re4o"),TransformButton=function(e){function r(e){(0,_classCallCheck3.default)(this,r);var t=(0,_possibleConstructorReturn3.default)(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e));return t._onClick=t._onClick.bind(t),t._onToggle=t._onToggle.bind(t),t}return(0,_inherits3.default)(r,e),(0,_createClass3.default)(r,[{key:"_onClick",value:function(e){var r=e.target,t=void 0;t="li"===r.nodeName.toLowerCase()?r.children[0].value:r.value,this.props.onTransformChange((0,_parsers.getTransformerByID)(t))}},{key:"_onToggle",value:function(){this.props.transformer&&this.props.onTransformChange(null)}},{key:"render",value:function(){var e=this;return _react2.default.createElement("div",{className:(0,_classnames2.default)({button:!0,menuButton:!0,disabled:!this.props.category.transformers.length})},_react2.default.createElement("button",{type:"button",onClick:this._onToggle,disabled:!this.props.category.transformers.length},_react2.default.createElement("i",{className:(0,_classnames2.default)({fa:!0,"fa-lg":!0,"fa-toggle-off":!this.props.showTransformer,"fa-toggle-on":this.props.showTransformer,"fa-fw":!0})})," Transform"),!!this.props.category.transformers.length&&_react2.default.createElement("ul",null,this.props.category.transformers.map(function(r){return _react2.default.createElement("li",{key:r.id,className:(0,_classnames2.default)({selected:e.props.showTransformer&&e.props.transformer===r}),onClick:e._onClick},_react2.default.createElement("button",{value:r.id,type:"button"},r.displayName))})))}}]),r}(_react2.default.Component);exports.default=TransformButton,TransformButton.propTypes={category:_propTypes2.default.object,transformer:_propTypes2.default.object,showTransformer:_propTypes2.default.bool,onTransformChange:_propTypes2.default.func};

/***/ }),

/***/ "1yWD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _regenerator=__webpack_require__("Xxa5"),_regenerator2=_interopRequireDefault(_regenerator),_extends2=__webpack_require__("Dd8w"),_extends3=_interopRequireDefault(_extends2),_react=__webpack_require__("U7vG"),_react2=_interopRequireDefault(_react),_defaultESTreeParserInterface=__webpack_require__("2Wat"),_defaultESTreeParserInterface2=_interopRequireDefault(_defaultESTreeParserInterface),_package=__webpack_require__("014n"),_package2=_interopRequireDefault(_package),_SettingsRenderer=__webpack_require__("nhMB"),_SettingsRenderer2=_interopRequireDefault(_SettingsRenderer),_flow=__webpack_require__("YW1o"),flowSettings=_interopRequireWildcard(_flow),_babylon=__webpack_require__("941S"),babylonSettings=_interopRequireWildcard(_babylon),ID="recast",defaultOptions={tolerant:!1,range:!0,parser:"esprima",flow:flowSettings.defaultOptions,babylon:babylonSettings.defaultOptions},parserSettingsConfiguration={fields:[["parser",["esprima","babel5","babylon6","flow"]],"range","tolerant",{key:"flow",title:"Flow Settings",fields:flowSettings.parserSettingsConfiguration.fields,settings:function(e){return e.flow||defaultOptions.flow}},{key:"babylon",title:"Babylon 6 Settings",fields:babylonSettings.parserSettingsConfiguration.fields,settings:function(e){return e.babylon||defaultOptions.babylon}}],required:new Set(["range"])};exports.default=(0,_extends3.default)({},_defaultESTreeParserInterface2.default,{id:ID,displayName:ID,version:_package2.default.version,homepage:_package2.default.homepage,locationProps:new Set(["range","loc","start","end"]),loadParser:function(e){__webpack_require__.e/* require */(4).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("pJo7"),__webpack_require__("gg2H"),__webpack_require__("sboV"),__webpack_require__("59HM")]; (function(r,t,a,n){e({recast:r,parsers:{babel5:t,babylon6:a,flow:n}})}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}).catch(__webpack_require__.oe)},parse:function(e,r,t){var a=e.recast,n=e.parsers;t=(0,_extends3.default)({},defaultOptions,t);var o=t.flow,i=t.babylon;switch(delete t.flow,delete t.babylon,t.parser){case"esprima":delete t.parser;break;case"flow":t.parser={parse:function(e){return flowSettings.default.parse(n.flow,e,o)}};break;case"babylon6":t.parser={parse:function(e){return babylonSettings.default.parse(n.babylon6,e,i)}};break;default:t.parser=n[t.parser]}return a.parse(r,t)},_ignoredProperties:new Set(["__clone"]),forEachProperty:_regenerator2.default.mark(function e(r){var t;return _regenerator2.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=_regenerator2.default.keys(r);case 1:if((e.t1=e.t0()).done){e.next=9;break}if(t=e.t1.value,!this._ignoredProperties.has(t)&&"function"!=typeof r[t]){e.next=5;break}return e.abrupt("continue",1);case 5:return e.next=7,{value:r[t],key:t,computed:!1};case 7:e.next=1;break;case 9:case"end":return e.stop()}},e,this)}),nodeToRange:function(e){return"number"==typeof e.start?[e.start,e.end]:e.range},renderSettings:function(e,r){return _react2.default.createElement(_SettingsRenderer2.default,{settingsConfiguration:parserSettingsConfiguration,parserSettings:(0,_extends3.default)({},defaultOptions,e),onChange:r})}});

/***/ }),

/***/ "2E/V":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _extends2=__webpack_require__("Dd8w"),_extends3=_interopRequireDefault(_extends2),_defaultParserInterface=__webpack_require__("zoXw"),_defaultParserInterface2=_interopRequireDefault(_defaultParserInterface),_package=__webpack_require__("Ypjm"),_package2=_interopRequireDefault(_package),ID="sqlite-parser";exports.default=(0,_extends3.default)({},_defaultParserInterface2.default,{id:ID,displayName:ID,version:_package2.default.version,homepage:_package2.default.homepage||"https://github.com/codeschool/sqlite-parser",loadParser:function(e){__webpack_require__.e/* require */(44).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("K705")]; (e.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe)},parse:function(e,r){return e(r)},getNodeName:function(e){return e.type},opensByDefault:function(e,r){return"statement"===r}});

/***/ }),

/***/ "2TBo":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0}),exports.fileExtension=exports.mimeTypes=exports.displayName=exports.id=void 0,__webpack_require__("uqUb");var id=exports.id="yaml",displayName=exports.displayName="YAML",mimeTypes=exports.mimeTypes=["application/yaml"],fileExtension=exports.fileExtension="yaml";

/***/ }),

/***/ "2UKR":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0}),exports.fileExtension=exports.mimeTypes=exports.displayName=exports.id=void 0,__webpack_require__("6S2o");var id=exports.id="text/x-scala",displayName=exports.displayName="Scala",mimeTypes=exports.mimeTypes=[],fileExtension=exports.fileExtension="scala";

/***/ }),

/***/ "2Wat":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _extends2=__webpack_require__("Dd8w"),_extends3=_interopRequireDefault(_extends2),_defaultParserInterface=__webpack_require__("zoXw"),_defaultParserInterface2=_interopRequireDefault(_defaultParserInterface);exports.default=(0,_extends3.default)({},_defaultParserInterface2.default,{opensByDefault:function(e,r){return"Program"===e.type||"body"===r||"elements"===r||"declarations"===r||"expression"===r}});

/***/ }),

/***/ "2d+y":
/***/ (function(module, exports) {

module.exports = "export default function(context) {\n  return {\n    TemplateLiteral(node) {\n      context.report(node, 'Do not use template literals');\n    }\n  };\n};\n"

/***/ }),

/***/ "3jO0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function mapStateToProps(e){return{visible:(0,_selectors.isLoadingSnippet)(e)}}Object.defineProperty(exports,"__esModule",{value:!0});var _reactRedux=__webpack_require__("RH2O"),_LoadingIndicator=__webpack_require__("G98p"),_LoadingIndicator2=_interopRequireDefault(_LoadingIndicator),_selectors=__webpack_require__("cAC5");exports.default=(0,_reactRedux.connect)(mapStateToProps)(_LoadingIndicator2.default);

/***/ }),

/***/ "3ne4":
/***/ (function(module, exports, __webpack_require__) {

module.exports=__webpack_require__("W9QC");

/***/ }),

/***/ "47jT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _extends2=__webpack_require__("Dd8w"),_extends3=_interopRequireDefault(_extends2),_eslint4Package=__webpack_require__("N/NE"),_eslint4Package2=_interopRequireDefault(_eslint4Package),ID="eslint-v4",name="ESLint v4";exports.default={id:ID,displayName:name,version:_eslint4Package2.default.version,homepage:_eslint4Package2.default.homepage,defaultParserID:"babel-eslint",loadTransformer:function(e){__webpack_require__.e/* require */(11).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("N1lV"),__webpack_require__("0ewx")]; (function(t,n){return e((0,_extends3.default)({},t,{utils:n}))}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}).catch(__webpack_require__.oe)},transform:function(e,t,n){var i=e.eslint,r=e.sourceCode,a=e.utils;return a.defineRule(i,t),a.runRule(n,i,r)}};

/***/ }),

/***/ "5VxS":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0}),exports.fileExtension=exports.mimeTypes=exports.displayName=exports.id=void 0,__webpack_require__("c6RA");var id=exports.id="php",displayName=exports.displayName="PHP",mimeTypes=exports.mimeTypes=["application/php"],fileExtension=exports.fileExtension="php";

/***/ }),

/***/ "5yGg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _extends2=__webpack_require__("Dd8w"),_extends3=_interopRequireDefault(_extends2),_defaultESTreeParserInterface=__webpack_require__("2Wat"),_defaultESTreeParserInterface2=_interopRequireDefault(_defaultESTreeParserInterface),_package=__webpack_require__("2D0Z"),_package2=_interopRequireDefault(_package),ID="babel-eslint";exports.default=(0,_extends3.default)({},_defaultESTreeParserInterface2.default,{id:ID,displayName:ID,version:_package2.default.version,homepage:_package2.default.homepage,locationProps:new Set(["loc","start","end","range"]),loadParser:function(e){__webpack_require__.e/* require */(14).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("p0su")]; (e.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe)},parse:function(e,r){var a={sourceType:"module"},t=e.parseNoPatch(r,a);return delete t.tokens,t},nodeToRange:function(e){if(void 0!==e.start)return[e.start,e.end]},_ignoredProperties:new Set(["_paths","_babelType","__clone"])});

/***/ }),

/***/ "61Ow":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _extends2=__webpack_require__("Dd8w"),_extends3=_interopRequireDefault(_extends2),_react=__webpack_require__("U7vG"),_react2=_interopRequireDefault(_react),_package=__webpack_require__("AZ2s"),_package2=_interopRequireDefault(_package),_defaultParserInterface=__webpack_require__("zoXw"),_defaultParserInterface2=_interopRequireDefault(_defaultParserInterface),_SettingsRenderer=__webpack_require__("nhMB"),_SettingsRenderer2=_interopRequireDefault(_SettingsRenderer),ID="scalameta",dialects={"Scala 2.10":"Scala210","Scala 2.11":"Scala211","Scala 2.12":"Scala212","Sbt 0.13.6":"Sbt0136","Sbt 0.13.7":"Sbt0137",Dotty:"Dotty","Typelevel 2.11":"Typelevel211","Typelevel 2.12":"Typelevel212","Paradise 2.11":"Paradise211","Paradise 2.12":"Paradise212","Paradise Typelevel 2.11":"ParadiseTypelevel211","Paradise Typelevel 2.12":"ParadiseTypelevel212"},defaultOptions={dialect:"Scala 2.12"},settingsConfiguration={fields:[["dialect",Object.keys(dialects)]],required:new Set("dialect")};exports.default=(0,_extends3.default)({},_defaultParserInterface2.default,{id:ID,displayName:ID,version:_package2.default.version,homepage:_package2.default.homepage||"https://github.com/scalameta/scalameta",locationProps:new Set(["pos"]),loadParser:function(e){__webpack_require__.e/* require */(45).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("4eaw")]; (e.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe)},parse:function(e,t,a){var r=e.parseSource(t,(0,_extends3.default)({},defaultOptions,a,{dialect:dialects[defaultOptions.dialect||a.dialect]})),n=r.error,l=r.lineNumber,i=r.columnNumber;if(n){var s=new SyntaxError(r.error);throw s.lineNumber=l+1,s.columnNumber=i+1,s}return r},nodeToRange:function(e){if(e.pos)return[e.pos.start,e.pos.end]},getNodeName:function(e){return e.type},opensByDefault:function(e,t){return"Program"===e.type||"body"===t||"self"===t||"stats"===t},renderSettings:function(e,t){return _react2.default.createElement(_SettingsRenderer2.default,{settingsConfiguration:settingsConfiguration,parserSettings:(0,_extends3.default)({},defaultOptions,e),onChange:t})}});

/***/ }),

/***/ "74+k":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _classCallCheck2=__webpack_require__("Zrlr"),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__("wxAW"),_createClass3=_interopRequireDefault(_createClass2),_possibleConstructorReturn2=__webpack_require__("zwoO"),_possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2),_inherits2=__webpack_require__("Pf15"),_inherits3=_interopRequireDefault(_inherits2),_propTypes=__webpack_require__("KSGD"),_propTypes2=_interopRequireDefault(_propTypes),_react=__webpack_require__("U7vG"),_react2=_interopRequireDefault(_react),_classnames=__webpack_require__("HW6M"),_classnames2=_interopRequireDefault(_classnames),ForkButton=function(e){function r(){return(0,_classCallCheck3.default)(this,r),(0,_possibleConstructorReturn3.default)(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return(0,_inherits3.default)(r,e),(0,_createClass3.default)(r,[{key:"render",value:function(){var e=this.props,r=e.canFork,t=e.saving,s=e.forking,a=e.onFork;return _react2.default.createElement("button",{type:"button",disabled:!r||t||s,onClick:a},_react2.default.createElement("i",{className:(0,_classnames2.default)({fa:!0,"fa-spinner":s,"fa-pulse":s,"fa-code-fork":!s,"fa-fw":!0})})," Fork")}}]),r}(_react2.default.Component);exports.default=ForkButton,ForkButton.propTypes={canFork:_propTypes2.default.bool,saving:_propTypes2.default.bool,forking:_propTypes2.default.bool,onFork:_propTypes2.default.func};

/***/ }),

/***/ "7LuP":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _typeof2=__webpack_require__("pFYg"),_typeof3=_interopRequireDefault(_typeof2),_defineProperty2=__webpack_require__("bOdI"),_defineProperty3=_interopRequireDefault(_defineProperty2),_extends3=__webpack_require__("Dd8w"),_extends4=_interopRequireDefault(_extends3),_react=__webpack_require__("U7vG"),_react2=_interopRequireDefault(_react),_defaultESTreeParserInterface=__webpack_require__("2Wat"),_defaultESTreeParserInterface2=_interopRequireDefault(_defaultESTreeParserInterface),_babylonPackage=__webpack_require__("ZPAl"),_babylonPackage2=_interopRequireDefault(_babylonPackage),_SettingsRenderer=__webpack_require__("nhMB"),_SettingsRenderer2=_interopRequireDefault(_SettingsRenderer),ID="babylon",defaultOptions={sourceType:"module",allowReserved:!1,allowReturnOutsideFunction:!1,strictMode:!1,features:{"es7.asyncFunctions":!0,"es7.classProperties":!0,"es7.comprehensions":!0,"es7.decorators":!0,"es7.exportExtensions":!0,"es7.functionBind":!0,"es7.objectRestSpread":!0,"es7.trailingFunctionCommas":!0},plugins:{jsx:!0,flow:!0}},parserSettingsConfiguration={fields:[["sourceType",["module","script"]],"allowReserved","allowReturnOutsideFunction","strictMode",{key:"features",title:"Features",fields:Object.keys(defaultOptions.features),settings:function(e){return e.features||(0,_extends4.default)({},defaultOptions.features)}},{key:"plugins",title:"Plugins",fields:Object.keys(defaultOptions.plugins),settings:function(e){return e.plugins||(0,_extends4.default)({},defaultOptions.plugins)},values:function(e){return Object.keys(defaultOptions.plugins).reduce(function(t,r){return t[r]=r in e,t},{})},update:function(e,t,r){return r?(0,_extends4.default)({},e,(0,_defineProperty3.default)({},t,!0)):(e=(0,_extends4.default)({},e),delete e[t],e)}}]};exports.default=(0,_extends4.default)({},_defaultESTreeParserInterface2.default,{id:ID,displayName:ID,version:_babylonPackage2.default.version,homepage:_babylonPackage2.default.homepage,locationProps:new Set(["loc","start","end"]),loadParser:function(e){__webpack_require__.e/* require */(28).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("t2oU")]; (e.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe)},parse:function(e,t,r){return e.parse(t,(0,_extends4.default)({},defaultOptions,r))},getNodeName:function(e){switch((0,_typeof3.default)(e.type)){case"string":return e.type;case"object":return"Token ("+e.type.label+")"}},nodeToRange:function(e){if(void 0!==e.start)return[e.start,e.end]},_ignoredProperties:new Set(["__clone"]),renderSettings:function(e,t){return _react2.default.createElement("div",null,_react2.default.createElement(_SettingsRenderer2.default,{settingsConfiguration:parserSettingsConfiguration,parserSettings:e,onChange:t}))}});

/***/ }),

/***/ "7O3v":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function Toolbar(e){var t=e.parser,r=e.transformer,a=e.showTransformer,o=t.id,n="";return t&&(t.version&&(o+="-"+t.version),t.homepage&&(o=_react2.default.createElement("a",{href:t.homepage,target:"_blank",rel:"noopener noreferrer"},o))),a&&(n=r.displayName,r.version&&(n+="-"+r.version),r.homepage&&(n=_react2.default.createElement("a",{href:r.homepage,target:"_blank",rel:"noopener noreferrer"},n)),n=_react2.default.createElement("span",null,"Transformer: ",n)),_react2.default.createElement("div",{id:"Toolbar"},_react2.default.createElement("h1",null,"AST Explorer"),_react2.default.createElement(_SnippetButton2.default,e),_react2.default.createElement(_CategoryButton2.default,e),_react2.default.createElement(_ParserButton2.default,e),_react2.default.createElement(_TransformButton2.default,e),_react2.default.createElement(_KeyMapButton2.default,e),_react2.default.createElement("a",{style:{minWidth:0},target:"_blank",rel:"noopener noreferrer",title:"Help",href:"https://github.com/fkling/astexplorer/blob/master/README.md"},_react2.default.createElement("i",{className:"fa fa-lg fa-question fa-fw"})),_react2.default.createElement("div",{id:"info",className:n?"small":""},"Parser: ",o,_react2.default.createElement("br",null),n))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=Toolbar;var _propTypes=__webpack_require__("KSGD"),_propTypes2=_interopRequireDefault(_propTypes),_react=__webpack_require__("U7vG"),_react2=_interopRequireDefault(_react),_CategoryButton=__webpack_require__("c500"),_CategoryButton2=_interopRequireDefault(_CategoryButton),_ParserButton=__webpack_require__("A0XC"),_ParserButton2=_interopRequireDefault(_ParserButton),_SnippetButton=__webpack_require__("KWbL"),_SnippetButton2=_interopRequireDefault(_SnippetButton),_TransformButton=__webpack_require__("1inQ"),_TransformButton2=_interopRequireDefault(_TransformButton),_KeyMapButton=__webpack_require__("qKIG"),_KeyMapButton2=_interopRequireDefault(_KeyMapButton);Toolbar.propTypes={saving:_propTypes2.default.bool,forking:_propTypes2.default.bool,onSave:_propTypes2.default.func,onFork:_propTypes2.default.func,onParserChange:_propTypes2.default.func,onParserSettingsButtonClick:_propTypes2.default.func,onShareButtonClick:_propTypes2.default.func,onTransformChange:_propTypes2.default.func,onKeyMapChange:_propTypes2.default.func,parser:_propTypes2.default.object,transformer:_propTypes2.default.object,showTransformer:_propTypes2.default.bool,canSave:_propTypes2.default.bool,canFork:_propTypes2.default.bool};

/***/ }),

/***/ "7bGL":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function api(e,r){return fetch(API_HOST+"/api/v1"+e,r)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=api,__webpack_require__("j9g7");var API_HOST=""||"";

/***/ }),

/***/ "7mSw":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _classCallCheck2=__webpack_require__("Zrlr"),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__("wxAW"),_createClass3=_interopRequireDefault(_createClass2),_possibleConstructorReturn2=__webpack_require__("zwoO"),_possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2),_inherits2=__webpack_require__("Pf15"),_inherits3=_interopRequireDefault(_inherits2),_codemirror=__webpack_require__("8U58"),_codemirror2=_interopRequireDefault(_codemirror);__webpack_require__("5IAE"),__webpack_require__("Kk9m"),__webpack_require__("THjC"),__webpack_require__("fo6W");var _propTypes=__webpack_require__("KSGD"),_propTypes2=_interopRequireDefault(_propTypes),_pubsubJs=__webpack_require__("x9pK"),_pubsubJs2=_interopRequireDefault(_pubsubJs),_react=__webpack_require__("U7vG"),_react2=_interopRequireDefault(_react),Editor=function(e){function r(){return(0,_classCallCheck3.default)(this,r),(0,_possibleConstructorReturn3.default)(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return(0,_inherits3.default)(r,e),(0,_createClass3.default)(r,[{key:"componentWillReceiveProps",value:function(e){if(e.value!==this.codeMirror.getValue()){var r=this.codeMirror.getScrollInfo();this.codeMirror.setValue(e.value),this.codeMirror.scrollTo(r.left,r.top)}}},{key:"shouldComponentUpdate",value:function(){return!1}},{key:"componentDidMount",value:function(){var e=this;this._subscriptions=[],this.codeMirror=(0,_codemirror2.default)(this.container,{value:this.props.value,mode:{name:"javascript",json:!0},readOnly:!0,lineNumbers:!0,foldGutter:!0,gutters:["CodeMirror-linenumbers","CodeMirror-foldgutter"]}),this._subscriptions.push(_pubsubJs2.default.subscribe("PANEL_RESIZE",function(){e.codeMirror&&e.codeMirror.refresh()}))}},{key:"componentWillUnmount",value:function(){this._unbindHandlers();var e=this.container;e.removeChild(e.children[0]),this.codeMirror=null}},{key:"_unbindHandlers",value:function(){this._subscriptions.forEach(_pubsubJs2.default.unsubscribe)}},{key:"render",value:function(){var e=this;return _react2.default.createElement("div",{id:"JSONEditor",className:this.props.className,ref:function(r){return e.container=r}})}}]),r}(_react2.default.Component);exports.default=Editor,Editor.propTypes={value:_propTypes2.default.string,className:_propTypes2.default.string};

/***/ }),

/***/ "7tno":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _extends2=__webpack_require__("Dd8w"),_extends3=_interopRequireDefault(_extends2),_defaultParserInterface=__webpack_require__("zoXw"),_defaultParserInterface2=_interopRequireDefault(_defaultParserInterface),_package=__webpack_require__("wMHn"),_package2=_interopRequireDefault(_package),ID="intl-messageformat-parser";exports.default=(0,_extends3.default)({},_defaultParserInterface2.default,{id:ID,displayName:ID,version:_package2.default.version,homepage:_package2.default.homepage||"https://github.com/yahoo/intl-messageformat-parser",locationProps:new Set(["location"]),loadParser:function(e){__webpack_require__.e/* require */(39).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("tmb7")]; (e.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe)},parse:function(e,t){return e.parse(t)},getNodeName:function(e){return e.type},nodeToRange:function(e){var t=e.location;if(t&&t.start&&t.end)return[t.start.offset,t.end.offset]},opensByDefault:function(e,t){return"elements"===t||"options"===t}});

/***/ }),

/***/ "8U2u":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _extends2=__webpack_require__("Dd8w"),_extends3=_interopRequireDefault(_extends2),_react=__webpack_require__("U7vG"),_react2=_interopRequireDefault(_react),_defaultParserInterface=__webpack_require__("zoXw"),_defaultParserInterface2=_interopRequireDefault(_defaultParserInterface),_package=__webpack_require__("eSaf"),_package2=_interopRequireDefault(_package),_SettingsRenderer=__webpack_require__("nhMB"),_SettingsRenderer2=_interopRequireDefault(_SettingsRenderer),ID="webidl2",defaultOptions={allowNestedTypedefs:!1},parserSettingsConfiguration={fields:Object.keys(defaultOptions)};exports.default=(0,_extends3.default)({},_defaultParserInterface2.default,{id:ID,displayName:ID,version:_package2.default.version,homepage:_package2.default.homepage||"https://github.com/w3c/webidl2.js",getNodeName:function(e){return e.name?e.name+(e.optional?"?":""):e.type?e.type:e.idlType?e.idlType.idlType||e.idlType:void 0},loadParser:function(e){__webpack_require__.e/* require */(41).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("FWEX")]; (e.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe)},parse:function(e,t,r){return(0,e.parse)(t,(0,_extends3.default)({},defaultOptions,r))},opensByDefault:function(e,t){return"members"===t},renderSettings:function(e,t){return _react2.default.createElement(_SettingsRenderer2.default,{settingsConfiguration:parserSettingsConfiguration,parserSettings:(0,_extends3.default)({},defaultOptions,{parserSettings:e}),onChange:t})}});

/***/ }),

/***/ "8ZNc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _extends2=__webpack_require__("Dd8w"),_extends3=_interopRequireDefault(_extends2),_defaultHandlebarsParserInterface=__webpack_require__("orwP"),_defaultHandlebarsParserInterface2=_interopRequireDefault(_defaultHandlebarsParserInterface),_package=__webpack_require__("3zGG"),_package2=_interopRequireDefault(_package),ID="handlebars";exports.default=(0,_extends3.default)({},_defaultHandlebarsParserInterface2.default,{id:ID,displayName:ID,version:_package2.default.version,homepage:_package2.default.homepage,loadParser:function(e){__webpack_require__.e/* require */(26).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("LjmN")]; (function(a){return e(a.parse)}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}).catch(__webpack_require__.oe)},opensByDefault:function(e,a){return"body"===a}});

/***/ }),

/***/ "8c1P":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
module.exports=__webpack_require__("Oznz");

/***/ }),

/***/ "941S":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.parserSettingsConfiguration=exports.defaultOptions=void 0;var _typeof2=__webpack_require__("pFYg"),_typeof3=_interopRequireDefault(_typeof2),_extends2=__webpack_require__("Dd8w"),_extends3=_interopRequireDefault(_extends2),_react=__webpack_require__("U7vG"),_react2=_interopRequireDefault(_react),_defaultESTreeParserInterface=__webpack_require__("2Wat"),_defaultESTreeParserInterface2=_interopRequireDefault(_defaultESTreeParserInterface),_babylonPackage=__webpack_require__("LHZ0"),_babylonPackage2=_interopRequireDefault(_babylonPackage),_SettingsRenderer=__webpack_require__("nhMB"),_SettingsRenderer2=_interopRequireDefault(_SettingsRenderer),availablePlugins=["asyncGenerators","classConstructorCall","classProperties","decorators","doExpressions","estree","exportExtensions","flow","functionSent","functionBind","jsx","objectRestSpread","dynamicImport"],ID="babylon6",defaultOptions=exports.defaultOptions={sourceType:"module",allowImportExportEverywhere:!1,allowReturnOutsideFunction:!1,plugins:["asyncGenerators","classConstructorCall","classProperties","decorators","doExpressions","exportExtensions","flow","functionSent","functionBind","jsx","objectRestSpread","dynamicImport"]},parserSettingsConfiguration={fields:[["sourceType",["module","script"]],"allowReturnOutsideFunction","allowImportExportEverywhere",{key:"plugins",title:"Plugins",fields:availablePlugins,settings:function(e){return e.plugins||defaultOptions.plugins},values:function(e){return availablePlugins.reduce(function(t,r){return t[r]=e.indexOf(r)>-1,t},{})}}]};exports.parserSettingsConfiguration=parserSettingsConfiguration,exports.default=(0,_extends3.default)({},_defaultESTreeParserInterface2.default,{id:ID,displayName:ID,version:_babylonPackage2.default.version,homepage:_babylonPackage2.default.homepage,locationProps:new Set(["loc","start","end"]),loadParser:function(e){__webpack_require__.e/* require */(40).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("sboV")]; (e.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe)},parse:function(e,t,r){return e.parse(t,(0,_extends3.default)({},defaultOptions,r))},getNodeName:function(e){switch((0,_typeof3.default)(e.type)){case"string":return e.type;case"object":return"Token ("+e.type.label+")"}},nodeToRange:function(e){if(void 0!==e.start)return[e.start,e.end]},renderSettings:function(e,t){return _react2.default.createElement(_SettingsRenderer2.default,{settingsConfiguration:parserSettingsConfiguration,parserSettings:(0,_extends3.default)({},defaultOptions,e),onChange:t})}});

/***/ }),

/***/ "95aw":
/***/ (function(module, exports) {

module.exports = "export default {\n  \"printWidth\": 80,\n  \"tabWidth\": 2,\n  \"useTabs\": false,\n  \"semi\": false,\n  \"singleQuote\": false,\n  \"trailingComma\": \"none\",\n  \"bracketSpacing\": true,\n  \"jsxBracketSameLine\": false,\n\n  \"parser\": \"babylon\"\n}\n"

/***/ }),

/***/ "A0XC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _classCallCheck2=__webpack_require__("Zrlr"),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__("wxAW"),_createClass3=_interopRequireDefault(_createClass2),_possibleConstructorReturn2=__webpack_require__("zwoO"),_possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2),_inherits2=__webpack_require__("Pf15"),_inherits3=_interopRequireDefault(_inherits2),_propTypes=__webpack_require__("KSGD"),_propTypes2=_interopRequireDefault(_propTypes),_react=__webpack_require__("U7vG"),_react2=_interopRequireDefault(_react),_parsers=__webpack_require__("Re4o"),ParserButton=function(e){function t(e){(0,_classCallCheck3.default)(this,t);var r=(0,_possibleConstructorReturn3.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r._onClick=r._onClick.bind(r),r}return(0,_inherits3.default)(t,e),(0,_createClass3.default)(t,[{key:"_onClick",value:function(e){var t=e.currentTarget,r=t.getAttribute("data-id");this.props.onParserChange((0,_parsers.getParserByID)(r))}},{key:"render",value:function(){var e=this,t=this.props.category.parsers.filter(function(e){return e.showInMenu});return _react2.default.createElement("div",{className:"button menuButton"},_react2.default.createElement("span",null,_react2.default.createElement("i",{className:"fa fa-lg fa-code fa-fw"})," ",this.props.parser.displayName),_react2.default.createElement("ul",null,t.map(function(t){return _react2.default.createElement("li",{key:t.id,onClick:e._onClick,"data-id":t.id},_react2.default.createElement("button",{type:"button"},t.displayName))})),_react2.default.createElement("button",{type:"button",title:"Parser Settings",style:{minWidth:0},disabled:!this.props.parser.renderSettings,onClick:this.props.onParserSettingsButtonClick},_react2.default.createElement("i",{className:"fa fa-cog fa-fw"})))}}]),t}(_react2.default.Component);exports.default=ParserButton,ParserButton.propTypes={onParserChange:_propTypes2.default.func,onParserSettingsButtonClick:_propTypes2.default.func,parser:_propTypes2.default.object,category:_propTypes2.default.object};

/***/ }),

/***/ "A9yG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _extends2=__webpack_require__("Dd8w"),_extends3=_interopRequireDefault(_extends2),_eslint3Package=__webpack_require__("N4o6"),_eslint3Package2=_interopRequireDefault(_eslint3Package),ID="eslint-v3",name="ESLint v3";exports.default={id:ID,displayName:name,version:_eslint3Package2.default.version,homepage:_eslint3Package2.default.homepage,defaultParserID:"babel-eslint",loadTransformer:function(e){__webpack_require__.e/* require */(10).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("H6Fr"),__webpack_require__("fh/x")]; (function(t,n){return e((0,_extends3.default)({},t,{utils:n}))}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}).catch(__webpack_require__.oe)},transform:function(e,t,n){var r=e.eslint,i=e.rules,a=e.sourceCode,l=e.utils;return l.defineRule(i,t),l.runRule(n,r,a)}};

/***/ }),

/***/ "AA7S":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _classCallCheck2=__webpack_require__("Zrlr"),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__("wxAW"),_createClass3=_interopRequireDefault(_createClass2),_possibleConstructorReturn2=__webpack_require__("zwoO"),_possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2),_inherits2=__webpack_require__("Pf15"),_inherits3=_interopRequireDefault(_inherits2),_propTypes=__webpack_require__("KSGD"),_propTypes2=_interopRequireDefault(_propTypes),_react=__webpack_require__("U7vG"),_react2=_interopRequireDefault(_react),SettingsDialog=function(e){function t(e){(0,_classCallCheck3.default)(this,t);var r=(0,_possibleConstructorReturn3.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r._outerClick=r._outerClick.bind(r),r._onChange=r._onChange.bind(r),r._reset=r._reset.bind(r),r._saveAndClose=r._saveAndClose.bind(r),r.state={parserSettings:r.props.parserSettings},r}return(0,_inherits3.default)(t,e),(0,_createClass3.default)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({parserSettings:e.parserSettings})}},{key:"_outerClick",value:function(e){e.target===document.getElementById("SettingsDialog")&&this._saveAndClose()}},{key:"_onChange",value:function(e){this.setState({parserSettings:e})}},{key:"_saveAndClose",value:function(){this.props.onSave(this.props.parser,this.state.parserSettings),this.props.onWantToClose()}},{key:"_reset",value:function(){this.setState({parserSettings:{}})}},{key:"render",value:function(){return this.props.visible&&this.props.parser.renderSettings?_react2.default.createElement("div",{id:"SettingsDialog",className:"dialog",onClick:this._outerClick},_react2.default.createElement("div",{className:"inner"},_react2.default.createElement("div",{className:"header"},_react2.default.createElement("h3",null,this.props.parser.displayName," Settings")),_react2.default.createElement("div",{className:"body"},this.props.parser.renderSettings(this.state.parserSettings,this._onChange)),_react2.default.createElement("div",{className:"footer"},_react2.default.createElement("button",{style:{marginRight:10},onClick:this._reset},"Reset"),_react2.default.createElement("button",{onClick:this._saveAndClose},"Close")))):null}}]),t}(_react2.default.Component);exports.default=SettingsDialog,SettingsDialog.propTypes={onSave:_propTypes2.default.func,onWantToClose:_propTypes2.default.func,visible:_propTypes2.default.bool,parser:_propTypes2.default.object.isRequired,parserSettings:_propTypes2.default.object};

/***/ }),

/***/ "BGII":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports,"__esModule",{value:!0});var storage=global.localStorage,key="explorerSettingsV1",noop=function(){},writeState=exports.writeState=storage?function(e){try{storage.setItem(key,JSON.stringify(e))}catch(e){console.warn("Unable to write to local storage.")}}:noop,readState=exports.readState=storage?function(){try{var e=storage.getItem(key);if(e)return JSON.parse(e)}catch(e){console.warn("Unable to read from local storage.")}}:noop;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("DuR2")))

/***/ }),

/***/ "C1Fw":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _typeof2=__webpack_require__("pFYg"),_typeof3=_interopRequireDefault(_typeof2),_toConsumableArray2=__webpack_require__("Gu7T"),_toConsumableArray3=_interopRequireDefault(_toConsumableArray2),_classCallCheck2=__webpack_require__("Zrlr"),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__("wxAW"),_createClass3=_interopRequireDefault(_createClass2),_possibleConstructorReturn2=__webpack_require__("zwoO"),_possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2),_inherits2=__webpack_require__("Pf15"),_inherits3=_interopRequireDefault(_inherits2),_CompactArrayView=__webpack_require__("qk5u"),_CompactArrayView2=_interopRequireDefault(_CompactArrayView),_CompactObjectView=__webpack_require__("lve6"),_CompactObjectView2=_interopRequireDefault(_CompactObjectView),_propTypes=__webpack_require__("KSGD"),_propTypes2=_interopRequireDefault(_propTypes),_pubsubJs=__webpack_require__("x9pK"),_pubsubJs2=_interopRequireDefault(_pubsubJs),_react=__webpack_require__("U7vG"),_react2=_interopRequireDefault(_react),_RecursiveTreeElement=__webpack_require__("MAR6"),_RecursiveTreeElement2=_interopRequireDefault(_RecursiveTreeElement),_getFocusPath=__webpack_require__("aiYT"),_classnames=__webpack_require__("HW6M"),_classnames2=_interopRequireDefault(_classnames),_stringify=__webpack_require__("VLQX"),_stringify2=_interopRequireDefault(_stringify),lastClickedElement=void 0,_Element=function(e){function t(e,a){(0,_classCallCheck3.default)(this,t);var r=(0,_possibleConstructorReturn3.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,a));r._execFunction=r._execFunction.bind(r),r._onMouseLeave=r._onMouseLeave.bind(r),r._onMouseOver=r._onMouseOver.bind(r),r._toggleClick=r._toggleClick.bind(r);var l=e.value,n=e.name,s=e.deepOpen,u=e.parser,o=e.open||0===e.level||s||!!l&&u.opensByDefault(l,n);return r.state={open:o,deepOpen:s,value:l},r}return(0,_inherits3.default)(t,e),(0,_createClass3.default)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({open:e.open||e.deepOpen||this.state.open,deepOpen:e.deepOpen,value:e.value})}},{key:"componentWillUnmount",value:function(){lastClickedElement===this&&(lastClickedElement=null)}},{key:"_shouldAutoFocus",value:function(e,t){var a=e.focusPath,r=t.settings,l=t.focusPath;return a!==l&&l.indexOf(t.value)>-1&&r.autofocus}},{key:"componentDidMount",value:function(){this.props.settings.autofocus&&this._scrollIntoView()}},{key:"componentDidUpdate",value:function(e){this._shouldAutoFocus(e,this.props)&&this._scrollIntoView()}},{key:"_scrollIntoView",value:function(){var e=this,t=this.props,a=t.focusPath,r=t.value;a.length>0&&a[a.length-1]===r&&setTimeout(function(){return e.container.scrollIntoView()},0)}},{key:"_toggleClick",value:function(e){var t=this,a=e.shiftKey,r=a||!this.state.open,l=function(){r?global.$node=t.state.value:delete global.$node,t.setState({open:r,deepOpen:a})};if(lastClickedElement&&lastClickedElement!==this){var n=lastClickedElement;return lastClickedElement=r?this:null,void n.forceUpdate(l)}lastClickedElement=r?this:null,l()}},{key:"_onMouseOver",value:function(e){e.stopPropagation();var t=this.state.value;_pubsubJs2.default.publish("HIGHLIGHT",{node:t,range:(0,_getFocusPath.nodeToRange)(this.props.parser,t)})}},{key:"_onMouseLeave",value:function(){var e=this.state.value;_pubsubJs2.default.publish("CLEAR_HIGHLIGHT",{node:e,range:(0,_getFocusPath.nodeToRange)(this.props.parser,e)})}},{key:"_isFocused",value:function(e,t,a,r){return 0!==e&&t.indexOf(a)>-1&&(!r||t[t.length-1]===a)}},{key:"_getProperties",value:function(e,t){var a=this.props.settings,r=a.hideFunctions,l=a.hideEmptyKeys,n=a.hideLocationData,s=a.hideTypeKeys;return[].concat((0,_toConsumableArray3.default)(e.forEachProperty(t))).filter(function(e){var t=e.value;return!r||"function"!=typeof t}).filter(function(e){var t=e.value;return!l||null!=t}).filter(function(t){var a=t.key;return!n||!e.locationProps.has(a)}).filter(function(e){var t=e.key;return!s||"type"!==t})}},{key:"_execFunction",value:function(){var e={error:null};try{e.value=this.state.value.call(this.props.parent),console.log(e.value)}catch(t){console.error('Unable to run "'+this.props.name+'": ',t.message),e.error=t}this.setState(e)}},{key:"_createSubElement",value:function(e,t,a,r){return _react2.default.createElement(_Element,{key:e,name:a,focusPath:this.props.focusPath,deepOpen:this.state.deepOpen,value:t,computed:r,level:this.props.level+1,parser:this.props.parser,settings:this.props.settings,parent:this.props.value})}},{key:"render",value:function(){var e=this,t=this.props,a=t.focusPath,r=t.parser,l=t.level,n=this.state,s=n.open,u=n.value,o=this._isFocused(l,a,u,s),i=null,p=null,c=null,_=null,f=!1,d=!1;if(u&&"object"===(void 0===u?"undefined":(0,_typeof3.default)(u))){if(Array.isArray(u))d=!0;else{var m=r.getNodeName(u);m&&(i=_react2.default.createElement("span",{className:"tokenName nc",onClick:this._toggleClick},m,lastClickedElement===this?_react2.default.createElement("span",{className:"ge",style:{fontSize:"0.8em"}}," = $node"):null)),d=r.nodeToRange(u)&&0!==l}if("number"==typeof u.length){if(u.length>0&&s){c="[",_="]";var h=this._getProperties(r,u).filter(function(e){return"length"!==e.key}).map(function(t){var a=t.key,r=t.value,l=t.computed;return e._createSubElement(a,r,Number.isInteger(+a)?void 0:a,l)});p=_react2.default.createElement("ul",{className:"value-body"},h)}else i=_react2.default.createElement("span",null,i,_react2.default.createElement(_CompactArrayView2.default,{array:u,onClick:this._toggleClick}));f=u.length>0}else if(s){c="{",_="}";var v=this._getProperties(r,u).map(function(t){var a=t.key,r=t.value,l=t.computed;return e._createSubElement(a,r,a,l)});p=_react2.default.createElement("ul",{className:"value-body"},v),f=v.length>0}else{var y=this._getProperties(r,u).map(function(e){return e.key});i=_react2.default.createElement("span",null,i,_react2.default.createElement(_CompactObjectView2.default,{onClick:this._toggleClick,keys:y})),f=y.length>0}}else"function"==typeof u?(i=_react2.default.createElement("span",{className:"ge invokeable",title:"Click to invoke function",onClick:this._execFunction},"(...)"),f=!1):(i=_react2.default.createElement("span",{className:"s"},(0,_stringify2.default)(u)),f=!1);var b=this.props.name?_react2.default.createElement("span",{className:"key",onClick:f?this._toggleClick:null},_react2.default.createElement("span",{className:"name nb"},this.props.computed?_react2.default.createElement("span",{title:"computed"},"*",this.props.name):this.props.name),_react2.default.createElement("span",{className:"p"},": ")):null,g=(0,_classnames2.default)({entry:!0,focused:o,toggable:f,open:s});return _react2.default.createElement("li",{ref:function(t){return e.container=t},className:g,onMouseOver:d?this._onMouseOver:null,onMouseLeave:d?this._onMouseLeave:null},b,_react2.default.createElement("span",{className:"value"},i),c?_react2.default.createElement("span",{className:"prefix p"}," ",c):null,p,_?_react2.default.createElement("div",{className:"suffix p"},_):null,this.state.error?_react2.default.createElement("span",null," ",_react2.default.createElement("i",{title:this.state.error.message,className:"fa fa-exclamation-triangle"})):null)}}]),t}(_react2.default.Component);_Element.propTypes={name:_propTypes2.default.string,value:_propTypes2.default.any,computed:_propTypes2.default.bool,open:_propTypes2.default.bool,deepOpen:_propTypes2.default.bool,focusPath:_propTypes2.default.array.isRequired,level:_propTypes2.default.number,parser:_propTypes2.default.object.isRequired,settings:_propTypes2.default.object.isRequired,parent:_propTypes2.default.oneOfType([_propTypes2.default.object,_propTypes2.default.array])},exports.default=_Element=(0,_RecursiveTreeElement2.default)(_Element);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("DuR2")))

/***/ }),

/***/ "C7ZG":
/***/ (function(module, exports) {

module.exports = "module.exports = function() {\n  return {\n    name: 'ast-transform',\n\n    visitor: {\n      ElementNode(node) {\n        node.tag = node.tag.split('').reverse().join('');\n      }\n    }\n  };\n};\n"

/***/ }),

/***/ "Cygi":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
module.exports=function(){return[]};

/***/ }),

/***/ "D2yP":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _typeof2=__webpack_require__("pFYg"),_typeof3=_interopRequireDefault(_typeof2),_compileModule=__webpack_require__("K5Vt"),_compileModule2=_interopRequireDefault(_compileModule),_package=__webpack_require__("BtBj"),_package2=_interopRequireDefault(_package),ID="jscodeshift",sessionMethods=new Set;exports.default={id:ID,displayName:ID,version:_package2.default.version,homepage:_package2.default.homepage||"https://github.com/facebook/jscodeshift",defaultParserID:"recast",loadTransformer:function(e){__webpack_require__.e/* require */(3).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("tNJs")]; (function(t){var r=t.registerMethods,o=void 0;t.registerMethods({hasOwnProperty:function(e){return o||(o=new Set(Object.getOwnPropertyNames(this))),o.has(e)||sessionMethods.has(e)}}),t.registerMethods=function(e){r.apply(this,arguments);for(var t in e)sessionMethods.add(t)},e({jscodeshift:t})}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}).catch(__webpack_require__.oe)},transform:function(e,t,r){var o=e.jscodeshift;sessionMethods.clear();var s=(0,_compileModule2.default)(t),i=s.__esModule?s.default:s,a=Object.create(null),n=!1,u=i({path:"Live.js",source:r},{jscodeshift:s.parser?o.withParser(s.parser):o,stats:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;n=!0,a[e]=(a[e]?a[e]:0)+t}},{});if(n&&console.log(JSON.stringify(a,null,4)),null==u)return r;if("string"!=typeof u)throw new Error('Transformers must either return undefined, null or a string, not "'+(void 0===u?"undefined":(0,_typeof3.default)(u))+'".');return u}};

/***/ }),

/***/ "D88E":
/***/ (function(module, exports, __webpack_require__) {

module.exports=__webpack_require__("bxK8");

/***/ }),

/***/ "DV8Z":
/***/ (function(module, exports) {

module.exports = "<?php\n\n$tips = [\n    \"Click on any AST node with a '+' to expand it\",\n\n    \"Hovering over a node highlights the \\\n    corresponding part in the source code\",\n\n    \"Shift click on an AST node expands the whole substree\"\n];\n\nfunction printTips() {\n    global $tips;\n    foreach($tips as $i => $tip) {\n        echo \"Tip $i: \" . $tip;\n    }\n}\n"

/***/ }),

/***/ "Fd0k":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function SaveButton(e){var t=e.saving,r=e.forking,o=e.onNew;return _react2.default.createElement("button",{type:"button",disabled:t||r,onClick:o},_react2.default.createElement("i",{className:"fa fa-file-o fa-fw"})," New")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=SaveButton;var _propTypes=__webpack_require__("KSGD"),_propTypes2=_interopRequireDefault(_propTypes),_react=__webpack_require__("U7vG"),_react2=_interopRequireDefault(_react);SaveButton.propTypes={saving:_propTypes2.default.bool,forking:_propTypes2.default.bool,onNew:_propTypes2.default.func};

/***/ }),

/***/ "Ftao":
/***/ (function(module, exports) {

module.exports = "import * as postcss from 'postcss';\n\nexport default postcss.plugin('postcss-reverse-props', (options = {}) => {\n    // Work with options here\n    return root => {\n        // Transform CSS AST here\n        root.walkRules(rule => {\n            // Transform each rule here\n            rule.walkDecls(decl => {\n                // Transform each property declaration here\n                decl.prop = decl.prop.split('').reverse().join('');\n            });\n        });\n    };\n});\n"

/***/ }),

/***/ "G98p":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function LoadingIndicator(e){return e.visible?_react2.default.createElement("div",{className:"loadingIndicator cover"},_react2.default.createElement("div",null,_react2.default.createElement("i",{className:"fa fa-lg fa-spinner fa-pulse"}))):null}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=LoadingIndicator;var _propTypes=__webpack_require__("KSGD"),_propTypes2=_interopRequireDefault(_propTypes),_react=__webpack_require__("U7vG"),_react2=_interopRequireDefault(_react);LoadingIndicator.propTypes={visible:_propTypes2.default.bool};

/***/ }),

/***/ "GMxf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _regenerator=__webpack_require__("Xxa5"),_regenerator2=_interopRequireDefault(_regenerator),_extends2=__webpack_require__("Dd8w"),_extends3=_interopRequireDefault(_extends2),_react=__webpack_require__("U7vG"),_react2=_interopRequireDefault(_react),_defaultESTreeParserInterface=__webpack_require__("2Wat"),_defaultESTreeParserInterface2=_interopRequireDefault(_defaultESTreeParserInterface),_package=__webpack_require__("SCCI"),_package2=_interopRequireDefault(_package),_SettingsRenderer=__webpack_require__("nhMB"),_SettingsRenderer2=_interopRequireDefault(_SettingsRenderer),ID="esprima",defaultOptions={sourceType:"module",loc:!1,range:!0,tokens:!1,comment:!1,attachComment:!1,tolerant:!1,jsx:!0},parserSettingsConfiguration={fields:[["sourceType",["script","module"]],"range","loc","attachComment","comment","tokens","tolerant","jsx"],required:new Set(["range"])};exports.default=(0,_extends3.default)({},_defaultESTreeParserInterface2.default,{id:ID,displayName:ID,version:_package2.default.version,homepage:_package2.default.homepage,locationProps:new Set(["range","loc"]),loadParser:function(e){__webpack_require__.e/* require */(49).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("FpGq")]; (e.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe)},parse:function(e,r,t){try{e.parse(r,(0,_extends3.default)({},defaultOptions,t))}catch(e){throw e}},forEachProperty:_regenerator2.default.mark(function e(r){var t;return _regenerator2.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=_regenerator2.default.keys(r);case 1:if((e.t1=e.t0()).done){e.next=9;break}if(t=e.t1.value,"function"!=typeof r[t]){e.next=5;break}return e.abrupt("continue",1);case 5:return e.next=7,{value:r[t],key:t,computed:!1};case 7:e.next=1;break;case 9:case"end":return e.stop()}},e,this)}),renderSettings:function(e,r){return _react2.default.createElement(_SettingsRenderer2.default,{settingsConfiguration:parserSettingsConfiguration,parserSettings:(0,_extends3.default)({},defaultOptions,e),onChange:r})}});

/***/ }),

/***/ "Gju+":
/***/ (function(module, exports) {

module.exports = "# Hello\n\nSome *emphasis*, **importance**, and `code`.\n\n---\n\n```javascript\nconsole.log('!');\n```\n\n* foo\n* bar\n* baz\n"

/***/ }),

/***/ "GmPs":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0}),exports.fileExtension=exports.mimeTypes=exports.displayName=exports.id=void 0,__webpack_require__("5IAE");var id=exports.id="json",displayName=exports.displayName="JSON",mimeTypes=exports.mimeTypes=["application/json"],fileExtension=exports.fileExtension="json";

/***/ }),

/***/ "H4bS":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _JSON=__webpack_require__("S/L0"),_JSON2=_interopRequireDefault(_JSON),_Tree=__webpack_require__("zvp3"),_Tree2=_interopRequireDefault(_Tree);exports.default=[_Tree2.default,_JSON2.default];

/***/ }),

/***/ "HbH1":
/***/ (function(module, exports) {

module.exports = "export default function(context) {\n  return {\n    TemplateLiteral(node) {\n      context.report(node, 'Do not use template literals');\n    }\n  };\n};\n"

/***/ }),

/***/ "HjL8":
/***/ (function(module, exports) {

module.exports = "export default function(context) {\n  return {\n    TemplateLiteral(node) {\n      context.report(node, 'Do not use template literals');\n    }\n  };\n};\n"

/***/ }),

/***/ "I6mg":
/***/ (function(module, exports) {

module.exports = "# Paste or drop some GraphQL queries or schema\n# definitions here and explore the syntax tree\n# created by the GraphQL parser.\n\nquery GetUser($userId: ID!) {\n  user(id: $userId) {\n    id,\n    name,\n    isViewerFriend,\n    profilePicture(size: 50)  {\n      ...PictureFragment\n    }\n  }\n}\n\nfragment PictureFragment on Picture {\n  uri,\n  width,\n  height\n}\n"

/***/ }),

/***/ "IFWm":
/***/ (function(module, exports) {

module.exports = "On {takenDate, date, short} {name} took {numPhotos, plural,\n    =0 {no photos.}\n    =1 {one photo.}\n    other {# photos.}\n}"

/***/ }),

/***/ "IIQh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function mapStateToProps(e){return{visible:(0,_selectors.showShareDialog)(e),snippet:(0,_selectors.getRevision)(e)}}function mapDispatchToProps(e){return{onWantToClose:function(){return e((0,_actions.closeShareDialog)())}}}Object.defineProperty(exports,"__esModule",{value:!0});var _reactRedux=__webpack_require__("RH2O"),_actions=__webpack_require__("mUbh"),_selectors=__webpack_require__("cAC5"),_ShareDialog=__webpack_require__("qdAQ"),_ShareDialog2=_interopRequireDefault(_ShareDialog);exports.default=(0,_reactRedux.connect)(mapStateToProps,mapDispatchToProps)(_ShareDialog2.default);

/***/ }),

/***/ "IZ4/":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _extends2=__webpack_require__("Dd8w"),_extends3=_interopRequireDefault(_extends2),_defaultParserInterface=__webpack_require__("zoXw"),_defaultParserInterface2=_interopRequireDefault(_defaultParserInterface),_package=__webpack_require__("84Jb"),_package2=_interopRequireDefault(_package),ID="jsonToAst";exports.default=(0,_extends3.default)({},_defaultParserInterface2.default,{id:ID,displayName:ID,version:_package2.default.version,homepage:_package2.default.homepage,locationProps:new Set(["loc"]),loadParser:function(e){__webpack_require__.e/* require */(47).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("IJnf")]; (e.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe)},parse:function(e,t){return e(t)},getNodeName:function(e){return e.type},nodeToRange:function(e){var t=e.loc;if(t)return[t.start.offset,t.end.offset]}});

/***/ }),

/***/ "JK6A":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _extends2=__webpack_require__("Dd8w"),_extends3=_interopRequireDefault(_extends2),_package=__webpack_require__("D88E"),_package2=_interopRequireDefault(_package),ID="eslint-v1",name="ESLint v1";exports.default={id:ID,displayName:name,version:_package2.default.version,homepage:_package2.default.homepage,defaultParserID:"acorn-to-esprima",loadTransformer:function(e){__webpack_require__.e/* require */(13).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("8FrL"),__webpack_require__("fh/x")]; (function(t,r){return e((0,_extends3.default)({},t,{utils:r}))}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}).catch(__webpack_require__.oe)},transform:function(e,t,r){var a=e.eslint,n=e.sourceCode,u=e.rules,i=e.utils;return i.defineRule(u,t),i.runRule(r,a,n)}};

/***/ }),

/***/ "JKkB":
/***/ (function(module, exports) {

module.exports = "{\n    \"key1\": [true, false, null],\n    \"key2\": {\n        \"key3\": [1, 2, \"3\", 1e10, 1e-3]\n    }\n}"

/***/ }),

/***/ "JP8E":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function mapStateToProps(e){return{keyMap:(0,_selectors.getKeyMap)(e),value:(0,_selectors.getCode)(e),mode:(0,_selectors.getParser)(e).category.id,error:(0,_selectors.getParseError)(e)}}function mapDispatchToProps(e){return{onContentChange:function(r){var t=r.value,o=r.cursor;e((0,_actions.setCode)({code:t,cursor:o}))},onActivity:function(r){return e((0,_actions.setCursor)(r))}}}Object.defineProperty(exports,"__esModule",{value:!0});var _reactRedux=__webpack_require__("RH2O"),_actions=__webpack_require__("mUbh"),_Editor=__webpack_require__("sMBK"),_Editor2=_interopRequireDefault(_Editor),_selectors=__webpack_require__("cAC5");exports.default=(0,_reactRedux.connect)(mapStateToProps,mapDispatchToProps)(_Editor2.default);

/***/ }),

/***/ "JTge":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _extends2=__webpack_require__("Dd8w"),_extends3=_interopRequireDefault(_extends2),_react=__webpack_require__("U7vG"),_react2=_interopRequireDefault(_react),_defaultParserInterface=__webpack_require__("zoXw"),_defaultParserInterface2=_interopRequireDefault(_defaultParserInterface),_package=__webpack_require__("gnAm"),_package2=_interopRequireDefault(_package),_SettingsRenderer=__webpack_require__("nhMB"),_SettingsRenderer2=_interopRequireDefault(_SettingsRenderer),ID="regexp-tree",defaultOptions={captureLocations:!0},settingsConfiguration={fields:Object.keys(defaultOptions)};exports.default=(0,_extends3.default)({},_defaultParserInterface2.default,{id:ID,displayName:ID,version:_package2.default.version,homepage:_package2.default.homepage,locationProps:new Set(["loc"]),loadParser:function(e){__webpack_require__.e/* require */(1/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("iq2H")]; (function(t){e(t)}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}).catch(__webpack_require__.oe)},parse:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r=Object.assign({},defaultOptions,r),e.parser.setOptions(r),e.parse(t)},nodeToRange:function(e){if(null!=e.loc)return[e.loc.start,e.loc.end]},getNodeName:function(e){return e.type},opensByDefault:function(e,t){return"RegExp"===e.type||"body"===t||"expressions"===t},renderSettings:function(e,t){return _react2.default.createElement(_SettingsRenderer2.default,{settingsConfiguration:settingsConfiguration,parserSettings:(0,_extends3.default)({},defaultOptions,e),onChange:t})}});

/***/ }),

/***/ "K2dk":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function resize(){_pubsubJs2.default.publish("PANEL_RESIZE")}function Transformer(e){var t=_react2.default.createElement("jscodeshift"===e.transformer.id?_JSCodeshiftEditor2.default:_Editor2.default,{highlight:!1,value:e.transformCode,onContentChange:e.onContentChange,enableFormatting:e.enableFormatting,keyMap:e.keyMap}),r=_react2.default.createElement("div",null,_react2.default.createElement(_PrettierButton2.default,{toggleFormatting:e.toggleFormatting,enableFormatting:e.enableFormatting}),t);return _react2.default.createElement(_SplitPane2.default,{className:"splitpane",onResize:resize},r,_react2.default.createElement(_TransformOutput2.default,{transformer:e.transformer,transformCode:e.transformCode,code:e.code,mode:e.mode,keyMap:e.keyMap}))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=Transformer;var _Editor=__webpack_require__("sMBK"),_Editor2=_interopRequireDefault(_Editor),_JSCodeshiftEditor=__webpack_require__("WjbE"),_JSCodeshiftEditor2=_interopRequireDefault(_JSCodeshiftEditor),_propTypes=__webpack_require__("KSGD"),_propTypes2=_interopRequireDefault(_propTypes),_pubsubJs=__webpack_require__("x9pK"),_pubsubJs2=_interopRequireDefault(_pubsubJs),_react=__webpack_require__("U7vG"),_react2=_interopRequireDefault(_react),_SplitPane=__webpack_require__("aCxF"),_SplitPane2=_interopRequireDefault(_SplitPane),_TransformOutput=__webpack_require__("LC6T"),_TransformOutput2=_interopRequireDefault(_TransformOutput),_PrettierButton=__webpack_require__("pT+C"),_PrettierButton2=_interopRequireDefault(_PrettierButton);Transformer.propTypes={defaultTransformCode:_propTypes2.default.string,transformCode:_propTypes2.default.string,transformer:_propTypes2.default.object,code:_propTypes2.default.string,mode:_propTypes2.default.string,keyMap:_propTypes2.default.string,onContentChange:_propTypes2.default.func,toggleFormatting:_propTypes2.default.func,enableFormatting:_propTypes2.default.bool};

/***/ }),

/***/ "K5Vt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function compileModule(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o={},t={exports:o},u=Object.keys(r),a=["module","exports"].concat((0,_toConsumableArray3.default)(u)),n=[t,o].concat((0,_toConsumableArray3.default)(u.map(function(e){return r[e]})));return new Function(a.join(),e).apply(o,n),t.exports}Object.defineProperty(exports,"__esModule",{value:!0});var _toConsumableArray2=__webpack_require__("Gu7T"),_toConsumableArray3=_interopRequireDefault(_toConsumableArray2);exports.default=compileModule;

/***/ }),

/***/ "KWbL":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function SnippetButton(e){var t=e.canFork&&!e.canSave,a=e.saving||e.forking;return _react2.default.createElement("div",{className:"button menuButton"},_react2.default.createElement("span",null,_react2.default.createElement("i",{className:"fa fa-lg fa-file-code-o fa-fw"})," Snippet"),_react2.default.createElement("ul",null,_react2.default.createElement("li",null,_react2.default.createElement(_NewButton2.default,e)),_react2.default.createElement("li",null,_react2.default.createElement(_SaveButton2.default,e)),_react2.default.createElement("li",null,_react2.default.createElement(_ForkButton2.default,e)),_react2.default.createElement("li",null,_react2.default.createElement(_ShareButton2.default,e))),_react2.default.createElement("button",{type:"button",title:t?"Fork":"Save",style:{minWidth:0},disabled:a||!(e.canSave||e.canFork),onClick:t?e.onFork:e.onSave},_react2.default.createElement("i",{className:(0,_classnames2.default)({fa:!0,"fa-spinner":a,"fa-pulse":a,"fa-floppy-o":!a&&!t,"fa-code-fork":!a&&t,"fa-fw":!0})})))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=SnippetButton;var _propTypes=__webpack_require__("KSGD"),_propTypes2=_interopRequireDefault(_propTypes),_react=__webpack_require__("U7vG"),_react2=_interopRequireDefault(_react),_ForkButton=__webpack_require__("74+k"),_ForkButton2=_interopRequireDefault(_ForkButton),_NewButton=__webpack_require__("Fd0k"),_NewButton2=_interopRequireDefault(_NewButton),_SaveButton=__webpack_require__("tLzh"),_SaveButton2=_interopRequireDefault(_SaveButton),_ShareButton=__webpack_require__("UULN"),_ShareButton2=_interopRequireDefault(_ShareButton),_classnames=__webpack_require__("HW6M"),_classnames2=_interopRequireDefault(_classnames);SnippetButton.propTypes={canFork:_propTypes2.default.bool,canSave:_propTypes2.default.bool,forking:_propTypes2.default.bool,onFork:_propTypes2.default.func,onSave:_propTypes2.default.func,saving:_propTypes2.default.bool};

/***/ }),

/***/ "LC6T":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function loadJSTransformer(e){__webpack_require__.e/* require */(8).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("bNft")]; (function(r){return e(r.default)}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}).catch(__webpack_require__.oe)}function transform(e,r,t){return e._promise||(e._promise=Promise.all([new Promise(e.loadTransformer),new Promise(loadJSTransformer)])),e._promise.then(function(o){var n=(0,_slicedToArray3.default)(o,2),s=n[0],a=n[1],i=a(r);(0,_haltingProblem2.default)(i);var u=Date.now();i=(0,_haltingProblem.loopProtect)(i,["(function (line) {","if (Date.now() > "+(u+5e3)+") {",'  throw new Error("Infinite loop detected on line " + line);',"}","})"].join(""));var l=e.transform(s,i,t);return Promise.resolve(l).then(function(e){var r=null;return"string"!=typeof e&&(e.map&&(r=new _sourceMapConsumer.SourceMapConsumer(e.map)),e=e.code),{result:e,map:r}})})}Object.defineProperty(exports,"__esModule",{value:!0});var _classCallCheck2=__webpack_require__("Zrlr"),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__("wxAW"),_createClass3=_interopRequireDefault(_createClass2),_possibleConstructorReturn2=__webpack_require__("zwoO"),_possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2),_inherits2=__webpack_require__("Pf15"),_inherits3=_interopRequireDefault(_inherits2),_slicedToArray2=__webpack_require__("d7EF"),_slicedToArray3=_interopRequireDefault(_slicedToArray2),_Editor=__webpack_require__("sMBK"),_Editor2=_interopRequireDefault(_Editor),_JSONEditor=__webpack_require__("7mSw"),_JSONEditor2=_interopRequireDefault(_JSONEditor),_propTypes=__webpack_require__("KSGD"),_propTypes2=_interopRequireDefault(_propTypes),_react=__webpack_require__("U7vG"),_react2=_interopRequireDefault(_react),_haltingProblem=__webpack_require__("y1fA"),_haltingProblem2=_interopRequireDefault(_haltingProblem),_sourceMapConsumer=__webpack_require__("G4xT"),_jsonStringifySafe=__webpack_require__("mOwr"),_jsonStringifySafe2=_interopRequireDefault(_jsonStringifySafe),TransformOutput=function(e){function r(e){(0,_classCallCheck3.default)(this,r);var t=(0,_possibleConstructorReturn3.default)(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e));return t.state={result:"",map:null,error:null},t._posFromIndex=t._posFromIndex.bind(t),t}return(0,_inherits3.default)(r,e),(0,_createClass3.default)(r,[{key:"componentDidMount",value:function(){var e=this;transform(this.props.transformer,this.props.transformCode,this.props.code).then(function(r){var t=r.result,o=r.map;return e.setState({result:t,map:o})},function(r){return e.setState({error:r})})}},{key:"componentWillReceiveProps",value:function(e){var r=this;this.props.transformCode===e.transformCode&&this.props.code===e.code&&this.props.transformer===e.transformer||(console.clear&&console.clear(),transform(e.transformer,e.transformCode,e.code).then(function(e){return{result:e.result,map:e.map,error:null}},function(e){return console.error(e),{error:e}}).then(function(e){return r.setState(e)}))}},{key:"shouldComponentUpdate",value:function(e,r){return this.state.result!==r.result||this.state.error!==r.error}},{key:"_posFromIndex",value:function(e){var r=this.state.map;if(r){var t=r.sourcesContent[0];if(0===e)return{line:0,ch:0};for(var o=t.lastIndexOf("\n",e-1),n=e-o-1,s=1;o>0;)o=t.lastIndexOf("\n",o-1),s++;0===o&&s++;var a=r.generatedPositionFor({line:s,column:n,source:r.sources[0]});if(s=a.line,n=a.column,null!==s&&null!==n)return{line:s-1,ch:n}}}},{key:"render",value:function(){return _react2.default.createElement("div",{className:"output highlight"},this.state.error?_react2.default.createElement(_Editor2.default,{highlight:!1,key:"error",lineNumbers:!1,readOnly:!0,value:this.state.error.message}):"string"==typeof this.state.result?_react2.default.createElement(_Editor2.default,{posFromIndex:this._posFromIndex,mode:this.props.mode,key:"output",readOnly:!0,value:this.state.result}):_react2.default.createElement(_JSONEditor2.default,{className:"container no-toolbar",value:(0,_jsonStringifySafe2.default)(this.state.result,null,2)}))}}]),r}(_react2.default.Component);exports.default=TransformOutput,TransformOutput.propTypes={transformer:_propTypes2.default.object,transformCode:_propTypes2.default.string,mode:_propTypes2.default.string,code:_propTypes2.default.string};

/***/ }),

/***/ "LHZ0":
/***/ (function(module, exports, __webpack_require__) {

module.exports=__webpack_require__("ZnpT");

/***/ }),

/***/ "M2YX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function getIDAndRevisionFromHash(){var e=global.location.hash.match(/^#\/gist\/([^\/]+)(?:\/([^\/]+))?/);return e?{id:e[1],rev:e[2]}:null}function fetchSnippet(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"latest";return(0,_api2.default)("/gist/"+e+(t?"/"+t:""),{method:"GET"}).then(function(n){if(n.ok)return n.json();switch(n.status){case 404:throw new Error("Snippet with ID "+e+"/"+t+" doesn't exist.");default:throw new Error("Unknown error.")}}).then(function(e){return new Revision(e)})}function owns(e){return e instanceof Revision}function matchesURL(){return null!==getIDAndRevisionFromHash()}function fetchFromURL(){var e=getIDAndRevisionFromHash();return e?fetchSnippet(e.id,e.rev):Promise.resolve(null)}function create(e){return(0,_api2.default)("/gist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(e){if(e.ok)return e.json();throw new Error("Unable to create snippet.")}).then(function(e){return new Revision(e)})}function update(e,t){return fetchSnippet(e.getSnippetID()).then(function(n){return n.getTransformerID()&&!t.toolID&&(t.transform=null),(0,_api2.default)("/gist/"+e.getSnippetID(),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(function(e){if(e.ok)return e.json();throw new Error("Unable to update snippet.")}).then(function(e){return new Revision(e)})})}function fork(e,t){return(0,_api2.default)("/gist/"+e.getSnippetID()+"/"+e.getRevisionID(),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(function(e){if(e.ok)return e.json();throw new Error("Unable to fork snippet.")}).then(function(e){return new Revision(e)})}function getSource(e,t){switch(e.v){case 1:return t.files["code.js"].content;case 2:var n=(0,_parsers.getParserByID)(e.parserID).category.fileExtension;return t.files["source."+n].content}}Object.defineProperty(exports,"__esModule",{value:!0});var _classCallCheck2=__webpack_require__("Zrlr"),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__("wxAW"),_createClass3=_interopRequireDefault(_createClass2);exports.owns=owns,exports.matchesURL=matchesURL,exports.fetchFromURL=fetchFromURL,exports.create=create,exports.update=update,exports.fork=fork;var _react=__webpack_require__("U7vG"),_react2=_interopRequireDefault(_react),_api=__webpack_require__("7bGL"),_api2=_interopRequireDefault(_api),_parsers=__webpack_require__("Re4o"),Revision=function(){function e(t){(0,_classCallCheck3.default)(this,e),this._gist=t,this._config=JSON.parse(t.files["astexplorer.json"].content)}return(0,_createClass3.default)(e,[{key:"canSave",value:function(){return!0}},{key:"getPath",value:function(){return"/gist/"+this.getSnippetID()+"/"+this.getRevisionID()}},{key:"getSnippetID",value:function(){return this._gist.id}},{key:"getRevisionID",value:function(){return this._gist.history[0].version}},{key:"getTransformerID",value:function(){return this._config.toolID}},{key:"getTransformCode",value:function(){var e=this._gist.files["transform.js"];return e?e.content:""}},{key:"getParserID",value:function(){return this._config.parserID}},{key:"getCode",value:function(){return null==this._code&&(this._code=getSource(this._config,this._gist)||""),this._code}},{key:"getParserSettings",value:function(){return this._config.settings[this._config.parserID]}},{key:"getShareInfo",value:function(){var e=this.getSnippetID(),t=this.getRevisionID();return _react2.default.createElement("div",{className:"shareInfo"},_react2.default.createElement("dl",null,_react2.default.createElement("dt",null,"Current Revision"),_react2.default.createElement("dd",null,_react2.default.createElement("input",{readOnly:!0,onFocus:function(e){return e.target.select()},value:"https://astexplorer.net/#/gist/"+e+"/"+t})),_react2.default.createElement("dt",null,"Latest Revision"),_react2.default.createElement("dd",null,_react2.default.createElement("input",{readOnly:!0,onFocus:function(e){return e.target.select()},value:"https://astexplorer.net/#/gist/"+e+"/latest"})),_react2.default.createElement("dt",null,"Gist"),_react2.default.createElement("dd",null,_react2.default.createElement("input",{readOnly:!0,onFocus:function(e){return e.target.select()},value:"https://gist.github.com/"+e+"/"+t}))))}}]),e}();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("DuR2")))

/***/ }),

/***/ "MAR6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function shouldAutoFocus(e){var t=e.value,r=e.settings,u=e.focusPath;return!!r.autofocus&&u.indexOf(t)>-1}function RecursiveTreeElement(e){function t(e){u.has(e)?u.set(e,u.get(e)+1):u.set(e,1)}function r(e){var t=u.get(e)-1;0===t?u.delete(e):u.set(e,t)}var u=new WeakMap,s=function(s){function a(e){(0,_classCallCheck3.default)(this,a);var r=(0,_possibleConstructorReturn3.default)(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e)),s=e.deepOpen,l=shouldAutoFocus(e);return e.value&&"object"===(0,_typeof3.default)(e.value)&&(u.has(e.value)&&(s=!1,l=!1),t(e.value)),r.state={deepOpen:s,open:l},r}return(0,_inherits3.default)(a,s),(0,_createClass3.default)(a,[{key:"componentWillUnmount",value:function(){var e=this.props.value;e&&"object"===(void 0===e?"undefined":(0,_typeof3.default)(e))&&r(e)}},{key:"componentWillReceiveProps",value:function(e){var s=e.deepOpen,a=shouldAutoFocus(e);!this.props.value!==e.value&&(this.props.value&&"object"===(0,_typeof3.default)(this.props.value)&&r(this.props.value),e.value&&"object"===(0,_typeof3.default)(e.value)&&(u.has(e.value)&&(s=!1,a=!1),t(e.value))),this.setState({deepOpen:s,open:a})}},{key:"render",value:function(){var t=this.props;return _react2.default.createElement(e,(0,_extends3.default)({},t,{open:this.state.open,deepOpen:this.state.deepOpen}))}}]),a}(_react2.default.Component);return s.propTypes={deepOpen:_propTypes2.default.bool,value:_propTypes2.default.any},s}Object.defineProperty(exports,"__esModule",{value:!0});var _extends2=__webpack_require__("Dd8w"),_extends3=_interopRequireDefault(_extends2),_typeof2=__webpack_require__("pFYg"),_typeof3=_interopRequireDefault(_typeof2),_classCallCheck2=__webpack_require__("Zrlr"),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__("wxAW"),_createClass3=_interopRequireDefault(_createClass2),_possibleConstructorReturn2=__webpack_require__("zwoO"),_possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2),_inherits2=__webpack_require__("Pf15"),_inherits3=_interopRequireDefault(_inherits2);exports.default=RecursiveTreeElement;var _propTypes=__webpack_require__("KSGD"),_propTypes2=_interopRequireDefault(_propTypes),_react=__webpack_require__("U7vG"),_react2=_interopRequireDefault(_react);

/***/ }),

/***/ "N/NE":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
module.exports=__webpack_require__("eG/S");

/***/ }),

/***/ "N0Gc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function persist(e){return(0,_extends5.default)({},pick(e,"showTransformPanel","parserSettings","parserPerCategory"),{workbench:(0,_extends5.default)({},pick(e.workbench,"parser","code","keyMap"),{transform:pick(e.workbench.transform,"code","transformer")})})}function revive(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:initialState;return(0,_extends5.default)({},e,{workbench:(0,_extends5.default)({},e.workbench,{initialCode:e.workbench.code,parserSettings:e.parserSettings[e.workbench.parser]||{},transform:(0,_extends5.default)({},e.workbench.transform,{initialCode:e.workbench.transform.code})})})}function astexplorer(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:initialState,r=arguments[1];return{showSettingsDialog:showSettingsDialog(e.showSettingsDialog,r),showShareDialog:showShareDialog(e.showShareDialog,r),loadingSnippet:loadSnippet(e.loadingSnippet,r),saving:saving(e.saving,r),forking:forking(e.forking,r),cursor:cursor(e.cursor,r),error:error(e.error,r),showTransformPanel:showTransformPanel(e.showTransformPanel,r),activeRevision:activeRevision(e.activeRevision,r),parserPerCategory:parserPerCategory(e.parserPerCategory,r),parserSettings:parserSettings(e.parserSettings,r,e),workbench:workbench(e.workbench,r,e),enableFormatting:format(e.enableFormatting,r,e)}}function format(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:initialState.enableFormatting;return arguments[1].type===actions.TOGGLE_FORMATTING?!e:e}function workbench(){function e(e){var r=a.parserPerCategory[e.id]||(0,_parsers.getDefaultParser)(e).id;return{parser:r,parserSettings:a.parserSettings[r]||{},code:e.codeExample,initialCode:e.codeExample}}var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:initialState.workbench,t=arguments[1],a=arguments[2];switch(t.type){case actions.SELECT_CATEGORY:return(0,_extends5.default)({},r,e(t.category));case actions.DROP_TEXT:return(0,_extends5.default)({},r,e((0,_parsers.getCategoryByID)(t.categoryId)),{code:t.text,initialCode:t.text});case actions.SET_PARSE_ERROR:return(0,_extends5.default)({},r,{parseError:t.error});case actions.SET_PARSER_SETTINGS:return(0,_extends5.default)({},r,{parserSettings:t.settings});case actions.SET_PARSER:var n=(0,_extends5.default)({},r,{parser:t.parser.id});return t.parser!==r.parser&&(n.parserSettings=a.parserSettings[t.parser.id]||{}),n;case actions.SET_CODE:return(0,_extends5.default)({},r,{code:t.code});case actions.SELECT_TRANSFORMER:var s=t.transformer.defaultParserID!==r.parser,i=t.transformer.id!==r.transform.transformer;if(!s&&!i)return r;var o=(0,_extends5.default)({},r);if(s&&(o.parser=t.transformer.defaultParserID,o.parserSettings=a.parserSettings[t.transformer.defaultParserID]||{}),i){var c=a.activeRevision&&a.activeRevision.getTransformerID()===t.transformer.id;o.transform=(0,_extends5.default)({},r.transform,{transformer:t.transformer.id,code:c?r.transform.code:t.transformer.defaultTransform,initialCode:c?a.activeRevision.getTransformCode():t.transformer.defaultTransform})}return o;case actions.SET_TRANSFORM:return(0,_extends5.default)({},r,{transform:(0,_extends5.default)({},r.transform,{code:t.code})});case actions.SET_SNIPPET:var l=t.revision,u=l.getTransformerID(),d=l.getParserID();return(0,_extends5.default)({},r,{parser:d,parserSettings:l.getParserSettings()||a.parserSettings[d]||{},code:l.getCode(),initialCode:l.getCode(),transform:(0,_extends5.default)({},r.transform,{transformer:u,code:l.getTransformCode(),initialCode:l.getTransformCode()})});case actions.CLEAR_SNIPPET:case actions.RESET:var f=Boolean(actions.RESET),p=(0,_extends5.default)({},r,{parserSettings:a.parserSettings[r.parser]||{},code:(0,_parsers.getParserByID)(r.parser).category.codeExample,initialCode:(0,_parsers.getParserByID)(r.parser).category.codeExample});if(a.activeRevision&&a.activeRevision.getTransformerID()||f&&r.transform.transformer){var S=(0,_parsers.getTransformerByID)(r.transform.transformer);p.transform=(0,_extends5.default)({},r.transform,{code:S.defaultTransform,initialCode:S.defaultTransform})}return p;case actions.SET_KEY_MAP:return(0,_extends5.default)({},r,{keyMap:t.keyMap});default:return r}}function parserSettings(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:initialState.parserSettings,r=arguments[1],t=arguments[2];switch(r.type){case actions.SET_PARSER_SETTINGS:return t.activeRevision?e:(0,_extends5.default)({},e,(0,_defineProperty3.default)({},t.workbench.parser,r.settings));default:return e}}function parserPerCategory(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:initialState.parserPerCategory,r=arguments[1];switch(r.type){case actions.SET_PARSER:return(0,_extends5.default)({},e,(0,_defineProperty3.default)({},r.parser.category.id,r.parser.id));default:return e}}function showSettingsDialog(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:initialState.showSettingsDialog;switch(arguments[1].type){case actions.OPEN_SETTINGS_DIALOG:return!0;case actions.CLOSE_SETTINGS_DIALOG:return!1;default:return e}}function showShareDialog(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:initialState.showShareDialog;switch(arguments[1].type){case actions.OPEN_SHARE_DIALOG:return!0;case actions.CLOSE_SHARE_DIALOG:return!1;default:return e}}function loadSnippet(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:initialState.loadingSnippet;switch(arguments[1].type){case actions.START_LOADING_SNIPPET:return!0;case actions.DONE_LOADING_SNIPPET:return!1;default:return e}}function saving(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:initialState.saving,r=arguments[1];switch(r.type){case actions.START_SAVE:return!r.fork;case actions.END_SAVE:return!1;default:return e}}function forking(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:initialState.forking,r=arguments[1];switch(r.type){case actions.START_SAVE:return r.fork;case actions.END_SAVE:return!1;default:return e}}function cursor(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:initialState.cursor,r=arguments[1];switch(r.type){case actions.SET_CURSOR:return r.cursor;case actions.SET_CODE:return null!=r.cursor&&0!==r.cursor?r.cursor:e;case actions.RESET:case actions.SET_SNIPPET:case actions.CLEAR_SNIPPET:return null;default:return e}}function error(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:initialState.error,r=arguments[1];switch(r.type){case actions.SET_ERROR:return r.error;case actions.CLEAR_ERROR:return null;default:return e}}function showTransformPanel(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:initialState.showTransformPanel,r=arguments[1];switch(r.type){case actions.SELECT_TRANSFORMER:return!0;case actions.HIDE_TRANSFORMER:case actions.SELECT_CATEGORY:case actions.CLEAR_SNIPPET:return!1;case actions.SET_SNIPPET:return Boolean(r.revision.getTransformerID());default:return e}}function activeRevision(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:initialState.selectedRevision,r=arguments[1];switch(r.type){case actions.SET_SNIPPET:return r.revision;case actions.SELECT_CATEGORY:case actions.CLEAR_SNIPPET:case actions.RESET:return null;default:return e}}function pick(e){for(var r=arguments.length,t=Array(r>1?r-1:0),a=1;a<r;a++)t[a-1]=arguments[a];return t.reduce(function(r,t){return r[t]=e[t],r},{})}Object.defineProperty(exports,"__esModule",{value:!0});var _defineProperty2=__webpack_require__("bOdI"),_defineProperty3=_interopRequireDefault(_defineProperty2),_extends4=__webpack_require__("Dd8w"),_extends5=_interopRequireDefault(_extends4);exports.persist=persist,exports.revive=revive,exports.astexplorer=astexplorer;var _actions=__webpack_require__("mUbh"),actions=_interopRequireWildcard(_actions),_parsers=__webpack_require__("Re4o"),defaultParser=(0,_parsers.getDefaultParser)((0,_parsers.getCategoryByID)("javascript")),initialState={showSettingsDialog:!1,showShareDialog:!1,loadingSnippet:!1,forking:!1,saving:!1,cursor:null,error:null,showTransformPanel:!1,selectedRevision:null,parserSettings:{},parserPerCategory:{},workbench:{parser:defaultParser.id,parserSettings:{},parseError:null,code:defaultParser.category.codeExample,keyMap:"default",initialCode:defaultParser.category.codeExample,transform:{code:"",initialCode:"",transformer:null}},enableFormatting:!1};

/***/ }),

/***/ "N4o6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
module.exports=__webpack_require__("cDiI");

/***/ }),

/***/ "NFrT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function debounce(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,o=void 0,n=void 0,r=void 0;return function(){r=this;for(var u=arguments.length,i=Array(u),d=0;d<u;d++)i[d]=arguments[d];n=i,o||(o=setTimeout(function(){o=null,e.apply(r,n)},t))}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=debounce;

/***/ }),

/***/ "NPN2":
/***/ (function(module, exports) {

module.exports = "export default function (babel) {\n  const { types: t } = babel;\n  \n  return {\n    name: \"ast-transform\", // not required\n    visitor: {\n      Identifier(path) {\n        path.node.name = path.node.name.split('').reverse().join('');\n      }\n    }\n  };\n}\n"

/***/ }),

/***/ "NSdD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _compileModule=__webpack_require__("K5Vt"),_compileModule2=_interopRequireDefault(_compileModule),_package=__webpack_require__("gnAm"),_package2=_interopRequireDefault(_package),ID="regexp-tree";exports.default={id:ID,displayName:ID,version:_package2.default.version,homepage:_package2.default.homepage,defaultParserID:ID,loadTransformer:function(e){__webpack_require__.e/* require */(1/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("iq2H")]; (e.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe)},transform:function(e,r,a){var o=(0,_compileModule2.default)(r);return e.transform(a,o).toString()}};

/***/ }),

/***/ "OMtC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _extends2=__webpack_require__("Dd8w"),_extends3=_interopRequireDefault(_extends2),_defaultParserInterface=__webpack_require__("zoXw"),_defaultParserInterface2=_interopRequireDefault(_defaultParserInterface),_package=__webpack_require__("nWUZ"),_package2=_interopRequireDefault(_package),ID="yaml-ast-parser",Kind=null;exports.default=(0,_extends3.default)({},_defaultParserInterface2.default,{id:ID,displayName:ID,version:_package2.default.version,homepage:_package2.default.homepage||"https://www.npmjs.com/package/yaml-ast-parser",_ignoredProperties:new Set(["parent","errors","kind"]),locationProps:new Set(["startPosition","endPosition"]),nodeToRange:function(e){if("number"==typeof e.startPosition)return[e.startPosition,e.endPosition]},getNodeName:function(e){return Kind[e.kind]},loadParser:function(e){__webpack_require__.e/* require */(25).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("ajGo")]; (function(r){Kind=r.Kind,e(r)}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}).catch(__webpack_require__.oe)},parse:function(e,r){return(0,e.load)(r)}});

/***/ }),

/***/ "PEXx":
/***/ (function(module, exports) {

module.exports = "export default function ({Plugin, types: t}) {\n  return new Plugin('ast-transform', {\n    visitor: {\n      Identifier(node) {\n        return t.identifier(node.name.split('').reverse().join(''));\n      }\n    }\n  });\n}\n"

/***/ }),

/***/ "PbNL":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "PmAF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0}),exports.fileExtension=exports.mimeTypes=exports.displayName=exports.id=void 0,__webpack_require__("EyrF");var id=exports.id="graphql",displayName=exports.displayName="GraphQL",mimeTypes=exports.mimeTypes=["application/graphql"],fileExtension=exports.fileExtension="graphql";

/***/ }),

/***/ "QVvP":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _extends2=__webpack_require__("Dd8w"),_extends3=_interopRequireDefault(_extends2),_react=__webpack_require__("U7vG"),_react2=_interopRequireDefault(_react),_defaultESTreeParserInterface=__webpack_require__("2Wat"),_defaultESTreeParserInterface2=_interopRequireDefault(_defaultESTreeParserInterface),_package=__webpack_require__("xh2N"),_package2=_interopRequireDefault(_package),_SettingsRenderer=__webpack_require__("nhMB"),_SettingsRenderer2=_interopRequireDefault(_SettingsRenderer),ID="typescript-eslint-parser",defaultOptions={range:!0,loc:!1,tokens:!1,comment:!1,tolerant:!1,useJSXTextNode:!1,ecmaFeatures:{jsx:!0}},parserSettingsConfiguration={fields:["range","loc","tokens","comment","tolerant","useJSXTextNode",{key:"ecmaFeatures",title:"ecmaFeatures",fields:Object.keys(defaultOptions.ecmaFeatures),settings:function(e){return e.ecmaFeatures||(0,_extends3.default)({},defaultOptions.ecmaFeatures)}}],required:new Set(["range"])};exports.default=(0,_extends3.default)({},_defaultESTreeParserInterface2.default,{id:ID,displayName:ID,version:_package2.default.version,homepage:_package2.default.homepage,locationProps:new Set(["loc","start","end","range"]),loadParser:function(e){__webpack_require__.e/* require */(34).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("v1cd")]; (e.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe)},parse:function(e,t,r){return e.parse(t,(0,_extends3.default)({},defaultOptions,r))},renderSettings:function(e,t){return _react2.default.createElement(_SettingsRenderer2.default,{settingsConfiguration:parserSettingsConfiguration,parserSettings:(0,_extends3.default)({},defaultOptions,e),onChange:t})}});

/***/ }),

/***/ "QWIc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _extends2=__webpack_require__("Dd8w"),_extends3=_interopRequireDefault(_extends2),_react=__webpack_require__("U7vG"),_react2=_interopRequireDefault(_react),_defaultESTreeParserInterface=__webpack_require__("2Wat"),_defaultESTreeParserInterface2=_interopRequireDefault(_defaultESTreeParserInterface),_package=__webpack_require__("6Vvw"),_package2=_interopRequireDefault(_package),_SettingsRenderer=__webpack_require__("nhMB"),_SettingsRenderer2=_interopRequireDefault(_SettingsRenderer),ID="espree",defaultOptions={range:!0,loc:!1,comment:!1,attachComment:!1,tokens:!1,tolerant:!1,ecmaVersion:6,sourceType:"module",ecmaFeatures:{jsx:!0,globalReturn:!0,experimentalObjectRestSpread:!0}},parserSettingsConfiguration={fields:[["ecmaVersion",[3,5,6,7,8,9],function(e){return Number(e)}],["sourceType",["script","module"]],"range","loc","comment","attachComment","tokens","tolerant",{key:"ecmaFeatures",title:"ecmaFeatures",fields:Object.keys(defaultOptions.ecmaFeatures),settings:function(e){return e.ecmaFeatures||(0,_extends3.default)({},defaultOptions.ecmaFeatures)}}]};exports.default=(0,_extends3.default)({},_defaultESTreeParserInterface2.default,{id:ID,displayName:ID,version:_package2.default.version,homepage:_package2.default.homepage,locationProps:new Set(["range","loc","start","end"]),loadParser:function(e){__webpack_require__.e/* require */(35).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("7fUR")]; (e.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe)},parse:function(e,t,r){return e.parse(t,(0,_extends3.default)({},defaultOptions,r))},nodeToRange:function(e){if("number"==typeof e.start)return[e.start,e.end]},renderSettings:function(e,t){return _react2.default.createElement("div",null,_react2.default.createElement("p",null,_react2.default.createElement("a",{href:"https://github.com/eslint/espree#usage",target:"_blank",rel:"noopener noreferrer"},"Option descriptions")),_react2.default.createElement(_SettingsRenderer2.default,{settingsConfiguration:parserSettingsConfiguration,parserSettings:(0,_extends3.default)({},defaultOptions,e),onChange:t}))}});

/***/ }),

/***/ "QrjB":
/***/ (function(module, exports) {

module.exports = "/**\n * Paste or drop some CSS here and explore\n * the syntax tree created by chosen parser.\n * Enjoy!\n */\n\n@media screen and (min-width: 480px) {\n    body {\n        background-color: lightgreen;\n    }\n}\n\n#main {\n    border: 1px solid black;\n}\n\nul li {\n\tpadding: 5px;\n}\n"

/***/ }),

/***/ "Re4o":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function getDefaultCategory(){return categoryByID.javascript}function getDefaultParser(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:getDefaultCategory()).parsers[6]}function getCategoryByID(e){return categoryByID[e]}function getParserByID(e){return parserByID[e]}function getTransformerByID(e){return transformerByID[e]}Object.defineProperty(exports,"__esModule",{value:!0}),exports.categories=void 0;var _slicedToArray2=__webpack_require__("d7EF"),_slicedToArray3=_interopRequireDefault(_slicedToArray2);exports.getDefaultCategory=getDefaultCategory,exports.getDefaultParser=getDefaultParser,exports.getCategoryByID=getCategoryByID,exports.getParserByID=getParserByID,exports.getTransformerByID=getTransformerByID;var localRequire=__webpack_require__("+flb"),files=localRequire.keys().map(function(e){return e.split("/").slice(1)}),categoryByID={},parserByID={},transformerByID={},restrictedParserNames=new Set(["index.js","codeExample.txt","transformers","utils"]),categories=exports.categories=files.filter(function(e){return"index.js"===e[1]}).map(function(e){var r=(0,_slicedToArray3.default)(e,1),t=r[0],a=localRequire("./"+t+"/index.js");categoryByID[a.id]=a,a.codeExample=localRequire("./"+t+"/codeExample.txt");var o=files.filter(function(e){return(0,_slicedToArray3.default)(e,1)[0]===t}).map(function(e){return e.slice(1)});return a.parsers=o.filter(function(e){var r=(0,_slicedToArray3.default)(e,1),t=r[0];return!restrictedParserNames.has(t)}).map(function(e){var r=(0,_slicedToArray3.default)(e,1),o=r[0],s=localRequire("./"+t+"/"+o);return s=s.__esModule?s.default:s,parserByID[s.id]=s,s.category=a,s}),a.transformers=o.filter(function(e){var r=(0,_slicedToArray3.default)(e,3),t=r[0],a=r[2];return"transformers"===t&&"index.js"===a}).map(function(e){var r=(0,_slicedToArray3.default)(e,2),a=r[1],o="./"+t+"/transformers/"+a,s=localRequire(o+"/index.js");return s=s.__esModule?s.default:s,transformerByID[s.id]=s,s.defaultTransform=localRequire(o+"/codeExample.txt"),s}),a});

/***/ }),

/***/ "RidM":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _extends2=__webpack_require__("Dd8w"),_extends3=_interopRequireDefault(_extends2),_defaultCSSParserInterface=__webpack_require__("xf3G"),_defaultCSSParserInterface2=_interopRequireDefault(_defaultCSSParserInterface),_package=__webpack_require__("5xev"),_package2=_interopRequireDefault(_package),ID="rework";exports.default=(0,_extends3.default)({},_defaultCSSParserInterface2.default,{id:ID,displayName:ID,version:_package2.default.version,homepage:_package2.default.homepage||"https://github.com/reworkcss/rework",locationProps:new Set(["position"]),loadParser:function(e){__webpack_require__.e/* require */(50).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("g+NW")]; (e.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe)},nodeToRange:function(e){var r=this,t=e.position;if(t)return[t.start,t.end].map(function(e){return r.getOffset(e)})},opensByDefault:function(e,r){return"rules"===r},_ignoredProperties:new Set(["parsingErrors","source","content"])});

/***/ }),

/***/ "S/L0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _classCallCheck2=__webpack_require__("Zrlr"),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__("wxAW"),_createClass3=_interopRequireDefault(_createClass2),_possibleConstructorReturn2=__webpack_require__("zwoO"),_possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2),_inherits2=__webpack_require__("Pf15"),_inherits3=_interopRequireDefault(_inherits2),_JSONEditor=__webpack_require__("7mSw"),_JSONEditor2=_interopRequireDefault(_JSONEditor),_propTypes=__webpack_require__("KSGD"),_propTypes2=_interopRequireDefault(_propTypes),_react=__webpack_require__("U7vG"),_react2=_interopRequireDefault(_react),_jsonStringifySafe=__webpack_require__("mOwr"),_jsonStringifySafe2=_interopRequireDefault(_jsonStringifySafe),JSON=function(e){function JSON(){return(0,_classCallCheck3.default)(this,JSON),(0,_possibleConstructorReturn3.default)(this,(JSON.__proto__||Object.getPrototypeOf(JSON)).apply(this,arguments))}return(0,_inherits3.default)(JSON,e),(0,_createClass3.default)(JSON,[{key:"render",value:function(){return _react2.default.createElement(_JSONEditor2.default,{className:"container",value:(0,_jsonStringifySafe2.default)(this.props.ast,null,2)})}}]),JSON}(_react2.default.Component);exports.default=JSON,JSON.propTypes={ast:_propTypes2.default.oneOfType([_propTypes2.default.array,_propTypes2.default.object])};

/***/ }),

/***/ "S/uV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _extends2=__webpack_require__("Dd8w"),_extends3=_interopRequireDefault(_extends2),_defaultParserInterface=__webpack_require__("zoXw"),_defaultParserInterface2=_interopRequireDefault(_defaultParserInterface),_package=__webpack_require__("8o2u"),_package2=_interopRequireDefault(_package),ID="php-parser",defaultOptions={parser:{extractDoc:!0},ast:{withPositions:!0}};exports.default=(0,_extends3.default)({},_defaultParserInterface2.default,{id:ID,displayName:ID,version:_package2.default.version,homepage:_package2.default.homepage,locationProps:new Set(["loc"]),loadParser:function(e){__webpack_require__.e/* require */(18).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("6PgS")]; (e.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe)},parse:function(e,t,r){return new e((0,_extends3.default)({},defaultOptions,r)).parseCode(t,"")},getNodeName:function(e){return e.kind},nodeToRange:function(e){if(e.loc&&e.loc.start&&e.loc.end)return[e.loc.start.offset,e.loc.end.offset]},opensByDefault:function(e,t){return"body"===t||"what"===t||"items"===t}});

/***/ }),

/***/ "SLaV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.parserSettingsConfiguration=exports.defaultOptions=void 0;var _typeof2=__webpack_require__("pFYg"),_typeof3=_interopRequireDefault(_typeof2),_extends2=__webpack_require__("Dd8w"),_extends3=_interopRequireDefault(_extends2),_react=__webpack_require__("U7vG"),_react2=_interopRequireDefault(_react),_defaultESTreeParserInterface=__webpack_require__("2Wat"),_defaultESTreeParserInterface2=_interopRequireDefault(_defaultESTreeParserInterface),_babylonPackage=__webpack_require__("kjiV"),_babylonPackage2=_interopRequireDefault(_babylonPackage),_SettingsRenderer=__webpack_require__("nhMB"),_SettingsRenderer2=_interopRequireDefault(_SettingsRenderer),availablePlugins=["asyncGenerators","classProperties","classPrivateProperties","decorators","doExpressions","estree","exportExtensions","flow","functionSent","functionBind","jsx","objectRestSpread","dynamicImport","numericSeparator","optionalChaining","importMeta","typescript","bigInt","optionalCatchBinding","pipelineOperator"],ID="babylon7",defaultOptions=exports.defaultOptions={sourceType:"module",allowImportExportEverywhere:!1,allowReturnOutsideFunction:!1,ranges:!1,plugins:["asyncGenerators","classProperties","decorators","doExpressions","exportExtensions","flow","functionSent","functionBind","jsx","objectRestSpread","dynamicImport","numericSeparator","optionalChaining","optionalCatchBinding"]},parserSettingsConfiguration={fields:[["sourceType",["module","script"]],"allowReturnOutsideFunction","allowImportExportEverywhere","ranges",{key:"plugins",title:"Plugins",fields:availablePlugins,settings:function(e){return e.plugins||defaultOptions.plugins},values:function(e){return availablePlugins.reduce(function(t,r){return t[r]=e.indexOf(r)>-1,t},{})}}]};exports.parserSettingsConfiguration=parserSettingsConfiguration,exports.default=(0,_extends3.default)({},_defaultESTreeParserInterface2.default,{id:ID,displayName:ID,version:_babylonPackage2.default.version,homepage:_babylonPackage2.default.homepage,locationProps:new Set(["range","loc","start","end"]),loadParser:function(e){__webpack_require__.e/* require */(42).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("b7Wi")]; (e.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe)},parse:function(e,t,r){return e.parse(t,(0,_extends3.default)({},defaultOptions,r))},getNodeName:function(e){switch((0,_typeof3.default)(e.type)){case"string":return e.type;case"object":return"Token ("+e.type.label+")"}},nodeToRange:function(e){if(void 0!==e.start)return[e.start,e.end]},renderSettings:function(e,t){return _react2.default.createElement(_SettingsRenderer2.default,{settingsConfiguration:parserSettingsConfiguration,parserSettings:(0,_extends3.default)({},defaultOptions,e),onChange:t})}});

/***/ }),

/***/ "TBC3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0}),exports.fileExtension=exports.mimeTypes=exports.displayName=exports.id=void 0,__webpack_require__("JfGf");var id=exports.id="webidl",displayName=exports.displayName="Web IDL",mimeTypes=exports.mimeTypes=["text/x-webidl"],fileExtension=exports.fileExtension="webidl";

/***/ }),

/***/ "THJH":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function save(e,r){var t,a,n,s,c,o,i,f,u,l,_,d;return _regenerator2.default.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return t="new_revision",p.next=3,[(0,_effects.select)(_selectors.getRevision),(0,_effects.select)(_selectors.getParser),(0,_effects.select)(_selectors.getParserSettings),(0,_effects.select)(_selectors.getCode),(0,_effects.select)(_selectors.getTransformCode),(0,_effects.select)(_selectors.getTransformer),(0,_effects.select)(_selectors.showTransformer)];case 3:if(a=p.sent,n=(0,_slicedToArray3.default)(a,7),s=n[0],c=n[1],o=n[2],i=n[3],f=n[4],u=n[5],l=n[6],!e&&s||(t=e?"fork":"create"),_={parserID:c.id,settings:(0,_defineProperty3.default)({},c.id,o),versions:(0,_defineProperty3.default)({},c.id,c.version),filename:"source."+c.category.fileExtension,code:i},l&&u&&(_.toolID=u.id,_.versions[u.id]=u.version,_.transform=f),(0,_logger.logEvent)("snippet",t,_.toolID),p.prev=16,d=void 0,!e){p.next=24;break}return p.next=21,r.fork(s,_);case 21:d=p.sent,p.next=33;break;case 24:if(!s){p.next=30;break}return p.next=27,r.update(s,_);case 27:d=p.sent,p.next=33;break;case 30:return p.next=32,r.create(_);case 32:d=p.sent;case 33:d&&r.updateHash(d),p.next=41;break;case 36:return p.prev=36,p.t0=p.catch(16),(0,_logger.logError)(p.t0.message),p.next=41,(0,_effects.put)(actions.setError(p.t0));case 41:case"end":return p.stop()}},_marked,this,[[16,36]])}function watchSave(e,r){var t=r.fork;return _regenerator2.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,_effects.put)(actions.startSave(t));case 2:return r.delegateYield(save(t,e),"t0",3);case 3:return r.next=5,(0,_effects.put)(actions.endSave(t));case 5:case"end":return r.stop()}},_marked2,this)}function goBack(){return _regenerator2.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,_effects.take)(actions.CLEAR_ERROR);case 3:global.location.hash="";case 4:return e.prev=4,e.next=7,(0,_effects.cancelled)();case 7:if(!e.sent){e.next=8;break}case 8:return e.finish(4);case 9:case"end":return e.stop()}},_marked3,this,[[0,,4,9]])}function watchSnippetURI(e){var r,t,a,n,s,c;return _regenerator2.default.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(!goBackTask){o.next=3;break}return o.next=3,(0,_effects.cancel)(goBackTask);case 3:return o.next=5,[(0,_effects.select)(_selectors.isSaving),(0,_effects.select)(_selectors.isForking)];case 5:if(r=o.sent,t=(0,_slicedToArray3.default)(r,2),a=t[0],n=t[1],!a&&!n){o.next=11;break}return o.abrupt("return");case 11:return o.next=13,(0,_effects.put)((0,_reduxBatchedActions.batchActions)([actions.setError(null),actions.startLoadingSnippet()]));case 13:return s=void 0,o.prev=14,o.next=17,(0,_effects.call)(e.fetchFromURL.bind(e));case 17:s=o.sent,o.next=31;break;case 20:return o.prev=20,o.t0=o.catch(14),c="Failed to fetch revision: "+o.t0.message,(0,_logger.logError)(c),o.next=26,(0,_effects.put)((0,_reduxBatchedActions.batchActions)([actions.setError(new Error(c)),actions.doneLoadingSnippet()]));case 26:if(!global.history){o.next=30;break}return o.next=29,(0,_effects.fork)(goBack);case 29:goBackTask=o.sent;case 30:return o.abrupt("return");case 31:return s&&(0,_logger.logEvent)("snippet","load"),o.next=34,(0,_effects.put)((0,_reduxBatchedActions.batchActions)([s?actions.setSnippet(s):actions.clearSnippet(),actions.doneLoadingSnippet()]));case 34:case"end":return o.stop()}},_marked4,this,[[14,20]])}function _callee(e){return _regenerator2.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,_effects.takeEvery)(actions.LOAD_SNIPPET,watchSnippetURI,e);case 2:return r.next=4,(0,_effects.takeEvery)(actions.SAVE,watchSave,e);case 4:case"end":return r.stop()}},_marked5,this)}Object.defineProperty(exports,"__esModule",{value:!0});var _regenerator=__webpack_require__("Xxa5"),_regenerator2=_interopRequireDefault(_regenerator),_defineProperty2=__webpack_require__("bOdI"),_defineProperty3=_interopRequireDefault(_defineProperty2),_slicedToArray2=__webpack_require__("d7EF"),_slicedToArray3=_interopRequireDefault(_slicedToArray2);exports.default=_callee;var _actions=__webpack_require__("mUbh"),actions=_interopRequireWildcard(_actions),_effects=__webpack_require__("egdi"),_reduxBatchedActions=__webpack_require__("pBCT"),_logger=__webpack_require__("fz81"),_selectors=__webpack_require__("cAC5"),_marked=_regenerator2.default.mark(save),_marked2=_regenerator2.default.mark(watchSave),_marked3=_regenerator2.default.mark(goBack),_marked4=_regenerator2.default.mark(watchSnippetURI),_marked5=_regenerator2.default.mark(_callee),goBackTask=null;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("DuR2")))

/***/ }),

/***/ "UEbe":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _extends2=__webpack_require__("Dd8w"),_extends3=_interopRequireDefault(_extends2),_react=__webpack_require__("U7vG"),_react2=_interopRequireDefault(_react),_defaultCSSParserInterface=__webpack_require__("xf3G"),_defaultCSSParserInterface2=_interopRequireDefault(_defaultCSSParserInterface),_package=__webpack_require__("dlma"),_package2=_interopRequireDefault(_package),_SettingsRenderer=__webpack_require__("nhMB"),_SettingsRenderer2=_interopRequireDefault(_SettingsRenderer),ID="postcss",defaultOptions={parser:"built-in"},parserSettingsConfiguration={fields:[["parser",["built-in","scss","less","safe-parser"]]]};exports.default=(0,_extends3.default)({},_defaultCSSParserInterface2.default,{id:ID,displayName:ID,version:_package2.default.version,homepage:_package2.default.homepage,locationProps:new Set(["source"]),loadParser:function(e){__webpack_require__.e/* require */(20).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("9lgM"),__webpack_require__("e5zh"),__webpack_require__("k5w0"),__webpack_require__("/CVv")]; (function(t,r,s,a){e({"built-in":t,scss:r,less:s,"safe-parser":a})}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}).catch(__webpack_require__.oe)},parse:function(e,t,r){return _defaultCSSParserInterface2.default.parse.call(this,e[r.parser||defaultOptions.parser],t)},nodeToRange:function(e){var t=e.source;if(t&&t.end)return[this.getOffset(t.start),this.getOffset(t.end)+1]},opensByDefault:function(e,t){return"nodes"===t},_ignoredProperties:new Set(["parent","input"]),renderSettings:function(e,t){return _react2.default.createElement(_SettingsRenderer2.default,{settingsConfiguration:parserSettingsConfiguration,parserSettings:(0,_extends3.default)({},defaultOptions,e),onChange:t})}});

/***/ }),

/***/ "UULN":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function ShareButton(e){var t=e.onShareButtonClick,r=e.snippet;return _react2.default.createElement("button",{type:"button",disabled:!r,onClick:t},_react2.default.createElement("i",{className:"fa fa-share fa-fw"})," Share...")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=ShareButton;var _propTypes=__webpack_require__("KSGD"),_propTypes2=_interopRequireDefault(_propTypes),_react=__webpack_require__("U7vG"),_react2=_interopRequireDefault(_react);ShareButton.propTypes={onShareButtonClick:_propTypes2.default.func.isRequired,snippet:_propTypes2.default.object};

/***/ }),

/***/ "V6CS":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _compileModule=__webpack_require__("K5Vt"),_compileModule2=_interopRequireDefault(_compileModule),_babel5Package=__webpack_require__("rRZ9"),_babel5Package2=_interopRequireDefault(_babel5Package),ID="babel";exports.default={id:ID,displayName:ID,version:_babel5Package2.default.version,homepage:_babel5Package2.default.homepage,defaultParserID:"babylon",loadTransformer:function(e){__webpack_require__.e/* require */(6).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("gg2H")]; (e.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe)},transform:function(e,a,l){var r=(0,_compileModule2.default)(a);return e.transform(l,{whitelist:[],plugins:[r.default||r],sourceMaps:!0})}};

/***/ }),

/***/ "VLQX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function stringify(e){switch(void 0===e?"undefined":(0,_typeof3.default)(e)){case"function":return e.toString().match(/function[^(]*\([^)]*\)/)[0];case"object":return e?JSON.stringify(e,stringify):"null";case"undefined":return"undefined";case"number":return global.isNaN(e)?"NaN":e;default:return JSON.stringify(e)}}Object.defineProperty(exports,"__esModule",{value:!0});var _typeof2=__webpack_require__("pFYg"),_typeof3=_interopRequireDefault(_typeof2);exports.default=stringify;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("DuR2")))

/***/ }),

/***/ "VuIw":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _classCallCheck2=__webpack_require__("Zrlr"),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__("wxAW"),_createClass3=_interopRequireDefault(_createClass2),StorageHandler=function(){function e(r){(0,_classCallCheck3.default)(this,e),this._backends=r}return(0,_createClass3.default)(e,[{key:"_first",value:function(){return this._backends[0]}},{key:"_owns",value:function(e){var r=!0,t=!1,a=void 0;try{for(var l,n=this._backends[Symbol.iterator]();!(r=(l=n.next()).done);r=!0){var u=l.value;if(u.owns(e))return u}}catch(e){t=!0,a=e}finally{try{!r&&n.return&&n.return()}finally{if(t)throw a}}return null}},{key:"updateHash",value:function(e){global.location.hash=e.getPath()}},{key:"fetchFromURL",value:function(){if(/^#?\/?$/.test(global.location.hash))return Promise.resolve(null);var e=!0,r=!1,t=void 0;try{for(var a,l=this._backends[Symbol.iterator]();!(e=(a=l.next()).done);e=!0){var n=a.value;if(n.matchesURL())return n.fetchFromURL()}}catch(e){r=!0,t=e}finally{try{!e&&l.return&&l.return()}finally{if(r)throw t}}return Promise.reject(new Error("Unknown URL format."))}},{key:"create",value:function(e){return this._first().create(e)}},{key:"update",value:function(e,r){return this._first().update(e,r)}},{key:"fork",value:function(e,r){return this._first().fork(e,r)}}]),e}();exports.default=StorageHandler;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("DuR2")))

/***/ }),

/***/ "WjbE":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function loadTern(){__webpack_require__.e/* require */(38).then(function() { /* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("jQeI"),__webpack_require__("/qQ3"),__webpack_require__("7N8s")]; (function(e,r,t){global.acorn=t,__webpack_require__.e/* require */(55).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("YUdF"),__webpack_require__("Z6ZF"),__webpack_require__("c9Kp"),__webpack_require__("zaYM"),__webpack_require__("rUux")]; (function(e,r,t,o,i){global.tern=e,e.registerPlugin("transformer",function(e){e.on("afterLoad",function(e){var r=e.scope.props.transformer;if(r){var o=r.getFunctionType(),i=t.cx();o.propagate(new t.IsCallee(t.cx().topScope,[i.definitions.jscodeshift.file,i.definitions.jscodeshift.apiObject],null,t.ANull))}})}),server=new _codemirror2.default.TernServer({defs:[o,i],plugins:{transformer:{strong:!0}}})}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}).catch(__webpack_require__.oe)}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("DuR2")))}).catch(__webpack_require__.oe)}Object.defineProperty(exports,"__esModule",{value:!0});var _classCallCheck2=__webpack_require__("Zrlr"),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__("wxAW"),_createClass3=_interopRequireDefault(_createClass2),_possibleConstructorReturn2=__webpack_require__("zwoO"),_possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2),_get2=__webpack_require__("yEsh"),_get3=_interopRequireDefault(_get2),_inherits2=__webpack_require__("Pf15"),_inherits3=_interopRequireDefault(_inherits2),_codemirror=__webpack_require__("8U58"),_codemirror2=_interopRequireDefault(_codemirror),_propTypes=__webpack_require__("KSGD"),_propTypes2=_interopRequireDefault(_propTypes),_Editor2=__webpack_require__("sMBK"),_Editor3=_interopRequireDefault(_Editor2);__webpack_require__("PsxY"),__webpack_require__("CXGR");var server=void 0,JSCodeshiftEditor=function(e){function r(e){(0,_classCallCheck3.default)(this,r);var t=(0,_possibleConstructorReturn3.default)(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e));return loadTern(),t}return(0,_inherits3.default)(r,e),(0,_createClass3.default)(r,[{key:"componentDidMount",value:function(){(0,_get3.default)(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"componentDidMount",this).call(this),this.codeMirror.setOption("extraKeys",{"Ctrl-Space":function(e){return server&&server.complete(e)},"Ctrl-I":function(e){return server&&server.showType(e)},"Ctrl-O":function(e){return server&&server.showDocs(e)}}),this._bindCMHandler("cursorActivity",function(e){server&&server.updateArgHints(e)})}}]),r}(_Editor3.default);exports.default=JSCodeshiftEditor,JSCodeshiftEditor.propTypes={value:_propTypes2.default.string,highlight:_propTypes2.default.bool,lineNumbers:_propTypes2.default.bool,readOnly:_propTypes2.default.bool,onContentChange:_propTypes2.default.func,onActivity:_propTypes2.default.func,posFromIndex:_propTypes2.default.func,error:_propTypes2.default.object,mode:_propTypes2.default.string,keyMap:_propTypes2.default.string},JSCodeshiftEditor.defaultProps=Object.assign({},_Editor3.default.defaultProps,{highlight:!1});

/***/ }),

/***/ "Y1yI":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function mapStateToProps(e){return{visible:(0,_selectors.showSettingsDialog)(e),parser:(0,_selectors.getParser)(e),parserSettings:(0,_selectors.getParserSettings)(e)}}function mapDispatchToProps(e){return{onSave:function(t,r){return e((0,_actions.setParserSettings)(r))},onWantToClose:function(){return e((0,_actions.closeSettingsDialog)())}}}Object.defineProperty(exports,"__esModule",{value:!0});var _reactRedux=__webpack_require__("RH2O"),_actions=__webpack_require__("mUbh"),_selectors=__webpack_require__("cAC5"),_SettingsDialog=__webpack_require__("AA7S"),_SettingsDialog2=_interopRequireDefault(_SettingsDialog);exports.default=(0,_reactRedux.connect)(mapStateToProps,mapDispatchToProps)(_SettingsDialog2.default);

/***/ }),

/***/ "Y3Ek":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _compileModule=__webpack_require__("K5Vt"),_compileModule2=_interopRequireDefault(_compileModule),_package=__webpack_require__("LsC8"),_package2=_interopRequireDefault(_package),ID="glimmer-compiler";exports.default={id:ID,displayName:ID,version:_package2.default.version,homepage:_package2.default.homepage||"https://github.com/glimmerjs/glimmer-vm",defaultParserID:"glimmer",loadTransformer:function(e){__webpack_require__.e/* require */(16).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("V34u")]; (e.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe)},transform:function(e,r,l){var o=(0,_compileModule2.default)(r),a=o.__esModule?o.default:o,i=e.precompile(l,{plugins:{ast:[a]}});return{code:JSON.parse(JSON.parse(i).block)}}};

/***/ }),

/***/ "YW1o":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.parserSettingsConfiguration=exports.defaultOptions=void 0;var _extends2=__webpack_require__("Dd8w"),_extends3=_interopRequireDefault(_extends2),_react=__webpack_require__("U7vG"),_react2=_interopRequireDefault(_react),_defaultESTreeParserInterface=__webpack_require__("2Wat"),_defaultESTreeParserInterface2=_interopRequireDefault(_defaultESTreeParserInterface),_package=__webpack_require__("fnVq"),_package2=_interopRequireDefault(_package),_SettingsRenderer=__webpack_require__("nhMB"),_SettingsRenderer2=_interopRequireDefault(_SettingsRenderer),ID="flow",defaultOptions=exports.defaultOptions={esproposal_class_instance_fields:!0,esproposal_class_static_fields:!0,esproposal_decorators:!0,esproposal_export_star_as:!0,types:!0},parserSettingsConfiguration=exports.parserSettingsConfiguration={fields:["esproposal_class_instance_fields","esproposal_class_static_fields","esproposal_decorators","esproposal_export_star_as","types"]};exports.default=(0,_extends3.default)({},_defaultESTreeParserInterface2.default,{id:ID,displayName:ID,version:_package2.default.version,homepage:_package2.default.homepage||"https://flowtype.org/",locationProps:new Set(["range","loc"]),loadParser:function(e){__webpack_require__.e/* require */(51).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("59HM")]; (e.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe)},parse:function(e,r,t){return e.parse(r,(0,_extends3.default)({},defaultOptions,t))},renderSettings:function(e,r){return _react2.default.createElement(_SettingsRenderer2.default,{settingsConfiguration:parserSettingsConfiguration,parserSettings:(0,_extends3.default)({},defaultOptions,e),onChange:r})}});

/***/ }),

/***/ "YyuK":
/***/ (function(module, exports) {

module.exports = "// Press ctrl+space for code completion\nexport default function transformer(file, api) {\n  const j = api.jscodeshift;\n\n  return j(file.source)\n    .find(j.Identifier)\n    .forEach(path => {\n      j(path).replaceWith(\n        j.identifier(path.node.name.split('').reverse().join(''))\n      );\n    })\n    .toSource();\n}\n"

/***/ }),

/***/ "ZPAl":
/***/ (function(module, exports, __webpack_require__) {

module.exports=__webpack_require__("Yy47");

/***/ }),

/***/ "Zm4G":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0}),exports.fileExtension=exports.mimeTypes=exports.displayName=exports.id=void 0,__webpack_require__("SN96");var id=exports.id="lua",displayName=exports.displayName="Lua",mimeTypes=exports.mimeTypes=[],fileExtension=exports.fileExtension="lua";

/***/ }),

/***/ "aArb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _classCallCheck2=__webpack_require__("Zrlr"),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__("wxAW"),_createClass3=_interopRequireDefault(_createClass2),_possibleConstructorReturn2=__webpack_require__("zwoO"),_possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2),_inherits2=__webpack_require__("Pf15"),_inherits3=_interopRequireDefault(_inherits2),_propTypes=__webpack_require__("KSGD"),_propTypes2=_interopRequireDefault(_propTypes),_react=__webpack_require__("U7vG"),_react2=_interopRequireDefault(_react),_reactRedux=__webpack_require__("RH2O"),_selectors=__webpack_require__("cAC5"),buttonStyle={backgroundColor:"transparent",border:"none",cursor:"pointer",float:"left",fontSize:14,margin:0,padding:0,paddingRight:10},GistBanner=function(e){function t(e){(0,_classCallCheck3.default)(this,t);var r=(0,_possibleConstructorReturn3.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={visible:!0},r._hide=r._hide.bind(r),r}return(0,_inherits3.default)(t,e),(0,_createClass3.default)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.revision,r=this.props.revision;!t||r&&t.getSnippetID()===r.getSnippetID()||this.setState({visible:!0})}},{key:"_hide",value:function(){this.setState({visible:!1})}},{key:"render",value:function(){return this.state.visible?!this.props.revision||this.props.revision.canSave()?null:_react2.default.createElement("div",{className:"banner"},"This snippet is ",_react2.default.createElement("strong",null,"read-only"),". You can still save changes by forking it.",_react2.default.createElement("button",{style:buttonStyle,onClick:this._hide},_react2.default.createElement("i",{className:"fa fa-times","aria-hidden":"true"}))):null}}]),t}(_react2.default.Component);GistBanner.propTypes={revision:_propTypes2.default.object},exports.default=(0,_reactRedux.connect)(function(e){return{revision:(0,_selectors.getRevision)(e)}})(GistBanner);

/***/ }),

/***/ "aCxF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _extends2=__webpack_require__("Dd8w"),_extends3=_interopRequireDefault(_extends2),_classCallCheck2=__webpack_require__("Zrlr"),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__("wxAW"),_createClass3=_interopRequireDefault(_createClass2),_possibleConstructorReturn2=__webpack_require__("zwoO"),_possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2),_inherits2=__webpack_require__("Pf15"),_inherits3=_interopRequireDefault(_inherits2),_propTypes=__webpack_require__("KSGD"),_propTypes2=_interopRequireDefault(_propTypes),_react=__webpack_require__("U7vG"),_react2=_interopRequireDefault(_react),baseStyleHorizontal={position:"absolute",top:0,bottom:0,boxSizing:"border-box"},baseStyleVertical={position:"absolute",left:0,right:0,boxSizing:"border-box"},SplitPane=function(e){function t(e,r){(0,_classCallCheck3.default)(this,t);var s=(0,_possibleConstructorReturn3.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r));return s._onMouseDown=s._onMouseDown.bind(s),s.state={dividerPosition:50},s}return(0,_inherits3.default)(t,e),(0,_createClass3.default)(t,[{key:"_onMouseDown",value:function(){var e=this,t=this.props.vertical,r=t?global.innerHeight:global.innerWidth;global.document.body.style.cursor=t?"row-resize":"col-resize";var s=function(s){s.preventDefault(),e.setState({dividerPosition:(t?s.pageY:s.pageX)/r*100})},i=function t(){document.removeEventListener("mousemove",s),document.removeEventListener("mouseup",t),global.document.body.style.cursor="",e.props.onResize&&e.props.onResize()};document.addEventListener("mousemove",s),document.addEventListener("mouseup",i)}},{key:"render",value:function(){var e=this.props.children,t=this.state.dividerPosition,r=void 0,s=void 0,i=void 0;return Array.isArray(e)&&2===e.filter(function(e){return e}).length?(this.props.vertical?(r=(0,_extends3.default)({},baseStyleVertical,{top:0,height:t+"%",paddingBottom:3}),s=(0,_extends3.default)({},baseStyleVertical,{bottom:0,height:100-t+"%",paddingTop:3}),i=(0,_extends3.default)({},baseStyleVertical,{top:t+"%",height:5,marginTop:-2.5,zIndex:100})):(r=(0,_extends3.default)({},baseStyleHorizontal,{left:0,width:t+"%",paddingRight:3}),s=(0,_extends3.default)({},baseStyleHorizontal,{right:0,width:100-t+"%",paddingLeft:3}),i=(0,_extends3.default)({},baseStyleHorizontal,{left:t+"%",width:5,marginLeft:-2.5,zIndex:100})),_react2.default.createElement("div",{className:this.props.className},_react2.default.createElement("div",{style:r},this.props.children[0]),_react2.default.createElement("div",{className:"splitpane-divider"+(this.props.vertical?" vertical":""),onMouseDown:this._onMouseDown,style:i}),_react2.default.createElement("div",{style:s},this.props.children[1]))):_react2.default.createElement("div",{className:this.props.className},_react2.default.createElement("div",{style:{position:"absolute",top:0,bottom:0,left:0,right:0}},this.props.children))}}]),t}(_react2.default.Component);exports.default=SplitPane,SplitPane.propTypes={vertical:_propTypes2.default.bool,className:_propTypes2.default.string,children:_propTypes2.default.node,onResize:_propTypes2.default.func};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("DuR2")))

/***/ }),

/***/ "aOeh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function getIDAndRevisionFromHash(){var e=global.location.hash.match(/^#\/(?!gist\/)([^\/]+)(?:\/(latest|\d*))?/);return e?{id:e[1],rev:e[2]||0}:null}function fetchSnippet(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"latest";return(0,_api2.default)("/parse/"+e+"/"+t).then(function(r){if(r.ok)return r.json();switch(r.status){case 404:throw new Error("Snippet with ID "+e+"/"+t+" doesn't exist.");default:throw new Error("Unknown error.")}}).then(function(e){return new Revision(e)})}function owns(e){return e instanceof Revision}function matchesURL(){return null!==getIDAndRevisionFromHash()}function updateHash(e){var t=e.getRevisionID(),r="/"+e.getSnippetID()+(t&&0!==t?"/"+t:"");global.location.hash=r}function fetchFromURL(){var e=getIDAndRevisionFromHash();return e?fetchSnippet(e.id,e.rev):Promise.resolve(null)}function create(){return Promise.reject(new Error("Saving Parse snippets is not supported anymore."))}function update(){return Promise.reject(new Error("Saving Parse snippets is not supported anymore."))}function fork(){return Promise.reject(new Error("Saving Parse snippets is not supported anymore."))}Object.defineProperty(exports,"__esModule",{value:!0});var _classCallCheck2=__webpack_require__("Zrlr"),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__("wxAW"),_createClass3=_interopRequireDefault(_createClass2);exports.owns=owns,exports.matchesURL=matchesURL,exports.updateHash=updateHash,exports.fetchFromURL=fetchFromURL,exports.create=create,exports.update=update,exports.fork=fork;var _react=__webpack_require__("U7vG"),_react2=_interopRequireDefault(_react),_api=__webpack_require__("7bGL"),_api2=_interopRequireDefault(_api),_parsers=__webpack_require__("Re4o"),Revision=function(){function e(t){(0,_classCallCheck3.default)(this,e),this._data=t}return(0,_createClass3.default)(e,[{key:"canSave",value:function(){return!1}},{key:"getPath",value:function(){var e=this.getRevisionID();return"/"+this.getSnippetID()+(e&&0!==e?"/"+e:"")}},{key:"getSnippetID",value:function(){return this._data.snippetID}},{key:"getRevisionID",value:function(){return this._data.revisionID}},{key:"getTransformerID",value:function(){var e=this._data.toolID;return!e&&this.getTransformCode()?"jscodeshift":e}},{key:"getTransformCode",value:function(){var e=this._data.transform;return e||(this._data.toolID?(0,_parsers.getTransformerByID)(this._data.toolID).defaultTransform:"")}},{key:"getParserID",value:function(){var e=this.getTransformerID();return e?(0,_parsers.getTransformerByID)(e).defaultParserID:this._data.parserID}},{key:"getCode",value:function(){var e=this.getParserID();return this._data.code||(0,_parsers.getParserByID)(e).category.codeExample}},{key:"getParserSettings",value:function(){var e=this._data.settings;if(!e)return null;var t=e[this.getParserID()];return!!t&&JSON.parse(t)}},{key:"getShareInfo",value:function(){var e=this.getSnippetID(),t=this.getRevisionID();return _react2.default.createElement("div",{className:"shareInfo"},_react2.default.createElement("dl",null,_react2.default.createElement("dt",null,"Current Revision"),_react2.default.createElement("dd",null,_react2.default.createElement("input",{readOnly:!0,onFocus:function(e){return e.target.select()},value:"https://astexplorer.net/#/gist/"+e+"/"+t})),_react2.default.createElement("dt",null,"Latest Revision"),_react2.default.createElement("dd",null,_react2.default.createElement("input",{readOnly:!0,onFocus:function(e){return e.target.select()},value:"https://astexplorer.net/#/gist/"+e+"/latest"}))))}}]),e}();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("DuR2")))

/***/ }),

/***/ "aiYT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function isInRange(e,t){return t>=e[0]&&t<=e[1]}function nodeToRange(e,t){var n=e.nodeToRange(t);if(n)return n;if(t.length>0){var r=t[0]&&e.nodeToRange(t[0]),o=t[t.length-1]&&e.nodeToRange(t[t.length-1]);if(r&&o)return[r[0],o[1]]}}function getFocusPath(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new Set;r.add(e);var o=[],a=nodeToRange(n,e);if(a){if(!isInRange(a,t))return[];o.push(e)}var u=!0,i=!1,f=void 0;try{for(var l,d=n.forEachProperty(e)[Symbol.iterator]();!(u=(l=d.next()).done);u=!0){var g=l.value,c=g.value;if(c&&"object"===(void 0===c?"undefined":(0,_typeof3.default)(c))&&!r.has(c)){var s=getFocusPath(c,t,n,r);if(s.length>0){o=o.concat(s);break}}}}catch(e){i=!0,f=e}finally{try{!u&&d.return&&d.return()}finally{if(i)throw f}}return o}Object.defineProperty(exports,"__esModule",{value:!0});var _typeof2=__webpack_require__("pFYg"),_typeof3=_interopRequireDefault(_typeof2);exports.nodeToRange=nodeToRange,exports.default=getFocusPath;

/***/ }),

/***/ "aphx":
/***/ (function(module, exports) {

module.exports = "---\n# Collection Types #############################################################\n################################################################################\n\n# http://yaml.org/type/map.html -----------------------------------------------#\n\nmap:\n  # Unordered set of key: value pairs.\n  Block style: !!map\n    Clark : Evans\n    Ingy  : döt Net\n    Oren  : Ben-Kiki\n  Flow style: !!map { Clark: Evans, Ingy: döt Net, Oren: Ben-Kiki }\n\n# http://yaml.org/type/omap.html ----------------------------------------------#\n\nomap:\n  # Explicitly typed ordered map (dictionary).\n  Bestiary: !!omap\n    - aardvark: African pig-like ant eater. Ugly.\n    - anteater: South-American ant eater. Two species.\n    - anaconda: South-American constrictor snake. Scaly.\n    # Etc.\n  # Flow style\n  Numbers: !!omap [ one: 1, two: 2, three : 3 ]\n\n# http://yaml.org/type/pairs.html ---------------------------------------------#\n\npairs:\n  # Explicitly typed pairs.\n  Block tasks: !!pairs\n    - meeting: with team.\n    - meeting: with boss.\n    - break: lunch.\n    - meeting: with client.\n  Flow tasks: !!pairs [ meeting: with team, meeting: with boss ]\n\n# http://yaml.org/type/set.html -----------------------------------------------#\n\nset:\n  # Explicitly typed set.\n  baseball players: !!set\n    ? Mark McGwire\n    ? Sammy Sosa\n    ? Ken Griffey\n  # Flow style\n  baseball teams: !!set { Boston Red Sox, Detroit Tigers, New York Yankees }\n\n# http://yaml.org/type/seq.html -----------------------------------------------#\n\nseq:\n  # Ordered sequence of nodes\n  Block style: !!seq\n  - Mercury   # Rotates - no light/dark sides.\n  - Venus     # Deadliest. Aptly named.\n  - Earth     # Mostly dirt.\n  - Mars      # Seems empty.\n  - Jupiter   # The king.\n  - Saturn    # Pretty.\n  - Uranus    # Where the sun hardly shines.\n  - Neptune   # Boring. No rings.\n  - Pluto     # You call this a planet?\n  Flow style: !!seq [ Mercury, Venus, Earth, Mars,      # Rocks\n                      Jupiter, Saturn, Uranus, Neptune, # Gas\n                      Pluto ]                           # Overrated\n\n\n# Scalar Types #################################################################\n################################################################################\n\n# http://yaml.org/type/bool.html ----------------------------------------------#\n\nbool:\n  - true\n  - True\n  - TRUE\n  - false\n  - False\n  - FALSE\n\n# http://yaml.org/type/float.html ---------------------------------------------#\n\nfloat:\n  canonical: 6.8523015e+5\n  exponentioal: 685.230_15e+03\n  fixed: 685_230.15\n  sexagesimal: 190:20:30.15\n  negative infinity: -.inf\n  not a number: .NaN\n\n# http://yaml.org/type/int.html -----------------------------------------------#\n\nint:\n  canonical: 685230\n  decimal: +685_230\n  octal: 02472256\n  hexadecimal: 0x_0A_74_AE\n  binary: 0b1010_0111_0100_1010_1110\n  sexagesimal: 190:20:30\n\n# http://yaml.org/type/merge.html ---------------------------------------------#\n\nmerge:\n  - &CENTER { x: 1, y: 2 }\n  - &LEFT { x: 0, y: 2 }\n  - &BIG { r: 10 }\n  - &SMALL { r: 1 }\n\n  # All the following maps are equal:\n\n  - # Explicit keys\n    x: 1\n    y: 2\n    r: 10\n    label: nothing\n\n  - # Merge one map\n    << : *CENTER\n    r: 10\n    label: center\n\n  - # Merge multiple maps\n    << : [ *CENTER, *BIG ]\n    label: center/big\n\n  - # Override\n    << : [ *BIG, *LEFT, *SMALL ]\n    x: 1\n    label: big/left/small\n\n# http://yaml.org/type/null.html ----------------------------------------------#\n\nnull:\n  # This mapping has four keys,\n  # one has a value.\n  empty:\n  canonical: ~\n  english: null\n  ~: null key\n  # This sequence has five\n  # entries, two have values.\n  sparse:\n    - ~\n    - 2nd entry\n    -\n    - 4th entry\n    - Null\n\n# http://yaml.org/type/str.html -----------------------------------------------#\n\nstring: abcd\n\n# http://yaml.org/type/timestamp.html -----------------------------------------#\n\ntimestamp:\n  canonical:        2001-12-15T02:59:43.1Z\n  valid iso8601:    2001-12-14t21:59:43.10-05:00\n  space separated:  2001-12-14 21:59:43.10 -5\n  no time zone (Z): 2001-12-15 2:59:43.10\n  date (00:00:00Z): 2002-12-14\n\n\n# JavaScript Specific Types ####################################################\n################################################################################\n\n# https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/RegExp\n\nregexp:\n  simple: !!js/regexp      foobar\n  modifiers: !!js/regexp   /foobar/mi\n\n# https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/undefined\n\nundefined: !!js/undefined ~\n\n# https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function\n\nfunction: !!js/function >\n  function foobar() {\n    return 'Wow! JS-YAML Rocks!';\n  }\n\n\n# Custom types #################################################################\n################################################################################\n\n\n# JS-YAML allows you to specify a custom YAML types for your structures.\n# This is a simple example of custom constructor defined in `js/demo.js` for\n# custom `!sexy` type:\n#\n# var SexyYamlType = new jsyaml.Type('!sexy', {\n#   kind: 'sequence',\n#   construct: function (data) {\n#     return data.map(function (string) { return 'sexy ' + string; });\n#   }\n# });\n#\n# var SEXY_SCHEMA = jsyaml.Schema.create([ SexyYamlType ]);\n#\n# result = jsyaml.load(yourData, { schema: SEXY_SCHEMA });\n\nfoobar: !sexy\n  - bunny\n  - chocolate\n"

/***/ }),

/***/ "boxU":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0});var id=exports.id="regexp",displayName=exports.displayName="RegExp",mimeTypes=exports.mimeTypes=["text/regexp"],fileExtension=exports.fileExtension="regexp";

/***/ }),

/***/ "bruV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function formatResults(e){return 0===e.length?"Lint rule not fired.":e.map(formatResult).join("").trim()}function formatResult(e){var t=e.startPosition.lineAndCharacter,r=t.line,n=t.character,a=e.rawLines.split("\n")[r],i="-".repeat(n)+"^";return"\n// "+e.failure+" (at "+(r+1)+":"+(n+1)+")\n   "+a+"\n// "+i+"\n"}Object.defineProperty(exports,"__esModule",{value:!0});var _compileModule=__webpack_require__("K5Vt"),_compileModule2=_interopRequireDefault(_compileModule),_package=__webpack_require__("I+c3"),_package2=_interopRequireDefault(_package),ID="tslint";exports.default={id:ID,displayName:ID,version:_package2.default.version,homepage:_package2.default.homepage,defaultParserID:"typescript",loadTransformer:function(e){__webpack_require__.e/* require */(21).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("Z4VC")]; (function(t){return e({tslint:t})}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}).catch(__webpack_require__.oe)},transform:function(e,t,r){var n=e.tslint,a=(0,_compileModule2.default)(t,{Lint:n}),i=new n.Linter({}),l=new a.Rule({}),u=i.getSourceFile("astExplorer.ts",r);return formatResults(i.applyRule(l,u))}};

/***/ }),

/***/ "c500":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _classCallCheck2=__webpack_require__("Zrlr"),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__("wxAW"),_createClass3=_interopRequireDefault(_createClass2),_possibleConstructorReturn2=__webpack_require__("zwoO"),_possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2),_inherits2=__webpack_require__("Pf15"),_inherits3=_interopRequireDefault(_inherits2),_propTypes=__webpack_require__("KSGD"),_propTypes2=_interopRequireDefault(_propTypes),_react=__webpack_require__("U7vG"),_react2=_interopRequireDefault(_react),_classnames=__webpack_require__("HW6M"),_classnames2=_interopRequireDefault(_classnames),_parsers=__webpack_require__("Re4o"),categoryIcon={javascript:"fa-jsfiddle",css:"fa-css3",graphql:"icon-GraphQL_Logo",handlebars:"icon-handlebars",htmlmixed:"fa-html5",icu:"icon-icu",sql:"fa-database","text/x-scala":"icon-scala",webidl:"fa-th-list",yaml:"fa-yc"},CategoryButton=function(e){function t(e){(0,_classCallCheck3.default)(this,t);var a=(0,_possibleConstructorReturn3.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a._onClick=a._onClick.bind(a),a}return(0,_inherits3.default)(t,e),(0,_createClass3.default)(t,[{key:"_onClick",value:function(e){var t=e.currentTarget,a=t.getAttribute("data-id");this.props.onCategoryChange((0,_parsers.getCategoryByID)(a))}},{key:"render",value:function(){var e=this;return _react2.default.createElement("div",{className:"button menuButton categoryButton"},_react2.default.createElement("span",null,_react2.default.createElement("i",{className:(0,_classnames2.default)(categoryIcon[this.props.category.id]||"fa-file-o",{fa:!0,"fa-lg":!0,"fa-fw":!0})})," ",this.props.category.displayName),_react2.default.createElement("ul",null,_parsers.categories.map(function(t){return _react2.default.createElement("li",{key:t.id,onClick:e._onClick,"data-id":t.id},_react2.default.createElement("button",{type:"button"},_react2.default.createElement("i",{className:(0,_classnames2.default)(categoryIcon[t.id]||"fa-file-o",{fa:!0,"fa-fw":!0})})," ",t.displayName))})))}}]),t}(_react2.default.Component);exports.default=CategoryButton,CategoryButton.propTypes={onCategoryChange:_propTypes2.default.func.isRequired,category:_propTypes2.default.object.isRequired};

/***/ }),

/***/ "cAC5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function getFormattingState(e){return e.enableFormatting}function getCursor(e){return e.cursor}function getError(e){return e.error}function isLoadingSnippet(e){return e.loadingSnippet}function showSettingsDialog(e){return e.showSettingsDialog}function showShareDialog(e){return e.showShareDialog}function isForking(e){return e.forking}function isSaving(e){return e.saving}function getParser(e){return(0,_parsers.getParserByID)(e.workbench.parser)}function getParserSettings(e){return e.workbench.parserSettings}function getParseError(e){return e.workbench.parseError}function getRevision(e){return e.activeRevision}function getCode(e){return e.workbench.code}function getInitialCode(e){return e.workbench.initialCode}function getKeyMap(e){return e.workbench.keyMap}function getTransformCode(e){return e.workbench.transform.code}function getInitialTransformCode(e){return e.workbench.transform.initialCode}function getTransformer(e){return(0,_parsers.getTransformerByID)(e.workbench.transform.transformer)}function showTransformer(e){return e.showTransformPanel}Object.defineProperty(exports,"__esModule",{value:!0}),exports.canSave=exports.canSaveTransform=exports.canFork=void 0,exports.getFormattingState=getFormattingState,exports.getCursor=getCursor,exports.getError=getError,exports.isLoadingSnippet=isLoadingSnippet,exports.showSettingsDialog=showSettingsDialog,exports.showShareDialog=showShareDialog,exports.isForking=isForking,exports.isSaving=isSaving,exports.getParser=getParser,exports.getParserSettings=getParserSettings,exports.getParseError=getParseError,exports.getRevision=getRevision,exports.getCode=getCode,exports.getInitialCode=getInitialCode,exports.getKeyMap=getKeyMap,exports.getTransformCode=getTransformCode,exports.getInitialTransformCode=getInitialTransformCode,exports.getTransformer=getTransformer,exports.showTransformer=showTransformer;var _reselect=__webpack_require__("bndy"),_lodash=__webpack_require__("2iM5"),_lodash2=_interopRequireDefault(_lodash),_parsers=__webpack_require__("Re4o"),isCodeDirty=(0,_reselect.createSelector)([getCode,getInitialCode],function(e,r){return e!==r}),isTransformDirty=(0,_reselect.createSelector)([getTransformCode,getInitialTransformCode],function(e,r){return e!==r}),canFork=exports.canFork=(0,_reselect.createSelector)([getRevision],function(e){return!!e}),canSaveCode=(0,_reselect.createSelector)([getRevision,isCodeDirty],function(e,r){return!e||r}),canSaveTransform=exports.canSaveTransform=(0,_reselect.createSelector)([showTransformer,isTransformDirty],function(e,r){return e&&r}),didParserSettingsChange=(0,_reselect.createSelector)([getParserSettings,getRevision,getParser],function(e,r,t){var n=r&&r.getParserSettings();return!!r&&(t.id!==r.getParserID()||!!n&&!(0,_lodash2.default)(e,n))}),canSave=exports.canSave=(0,_reselect.createSelector)([getRevision,canSaveCode,canSaveTransform,didParserSettingsChange],function(e,r,t,n){return(r||t||n)&&(!e||e.canSave())});

/***/ }),

/***/ "cEuW":
/***/ (function(module, exports) {

module.exports = "export default function (babel) {\n  const { types: t } = babel;\n  \n  return {\n    name: \"ast-transform\", // not required\n    visitor: {\n      Identifier(path) {\n        path.node.name = path.node.name.split('').reverse().join('');\n      }\n    }\n  };\n}\n"

/***/ }),

/***/ "d3R6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _regenerator=__webpack_require__("Xxa5"),_regenerator2=_interopRequireDefault(_regenerator),_extends2=__webpack_require__("Dd8w"),_extends3=_interopRequireDefault(_extends2),_classCallCheck2=__webpack_require__("Zrlr"),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_toConsumableArray2=__webpack_require__("Gu7T"),_toConsumableArray3=_interopRequireDefault(_toConsumableArray2),_react=__webpack_require__("U7vG"),_react2=_interopRequireDefault(_react),_defaultParserInterface=__webpack_require__("zoXw"),_defaultParserInterface2=_interopRequireDefault(_defaultParserInterface),_package=__webpack_require__("1Jvn"),_package2=_interopRequireDefault(_package),_SettingsRenderer=__webpack_require__("nhMB"),_SettingsRenderer2=_interopRequireDefault(_SettingsRenderer),ID="traceur",FILENAME="astExplorer.js",defaultOptions={SourceType:"Module",TolerateErrors:!1,commentCallback:!0,annotations:!1,arrayComprehension:!1,arrowFunctions:!0,asyncFunctions:!1,asyncGenerators:!1,blockBinding:!0,classes:!0,computedPropertyNames:!0,destructuring:!0,exponentiation:!1,exportFromExtended:!1,forOf:!0,forOn:!1,generatorComprehension:!1,generators:!0,jsx:!0,memberVariables:!1,numericLiterals:!0,propertyMethods:!0,propertyNameShorthand:!0,restParameters:!0,spread:!0,templateLiterals:!0,types:!1,unicodeEscapeSequences:!0},parserSettingsConfiguration={fields:[["SourceType",["Script","Module"]]].concat((0,_toConsumableArray3.default)(Object.keys(defaultOptions).filter(function(e){return"SourceType"!==e})))},Comment=function e(r){(0,_classCallCheck3.default)(this,e),this.type="COMMENT",Object.defineProperty(this,"location",{value:r}),this.value=r.toString()};exports.default=(0,_extends3.default)({},_defaultParserInterface2.default,{id:ID,displayName:ID,version:_package2.default.version,homepage:_package2.default.homepage,locationProps:new Set(["location"]),loadParser:function(e){__webpack_require__.e/* require */(48).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("z7Nx")]; (e.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe)},parse:function(e,r,t){t=(0,_extends3.default)({},defaultOptions,t);var a=new e.syntax.SourceFile(FILENAME,r),n=new e.util.ErrorReporter;n.reportMessageInternal=function(e,r){if(!t.TolerateErrors){var a=e.start,n=e.end;a.offset<n.offset&&(r+=": "+e);var o=new SyntaxError(r);throw o.lineNumber=a.line+1,o.columnNumber=a.column,o}};var o=new e.syntax.Parser(a,n,new e.util.Options(t)),s=[];o.handleComment=function(e){s.push(new Comment(e))};var i="Script"===t.SourceType?o.parseScript():o.parseModule();return i.comments=s,i},getNodeName:function(e){return e.constructor.name},forEachProperty:_regenerator2.default.mark(function e(r){var t;return _regenerator2.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!("type"in r)){e.next=3;break}return e.next=3,{value:r.type,key:"type"};case 3:e.t0=_regenerator2.default.keys(r);case 4:if((e.t1=e.t0()).done){e.next=13;break}if(t=e.t1.value,"line_"!==t&&"column_"!==t||(t=t.slice(0,-1)),"type"!==t&&"lineNumberTable"!==t){e.next=9;break}return e.abrupt("continue",4);case 9:return e.next=11,{value:r[t],key:t};case 11:e.next=4;break;case 13:case"end":return e.stop()}},e,this)}),nodeToRange:function(e){var r=e.location;if(r)return[r.start.offset,r.end.offset]},opensByDefault:function(e,r){return"scriptItemList"===r||"declarations"===r||"statements"===r||"parameters"===r||Array.isArray(e)&&"args"===r||"binding"===r||"expression"===r||"expressions"===r||"literalToken"===r||"identifierToken"===r},renderSettings:function(e,r){return _react2.default.createElement(_SettingsRenderer2.default,{settingsConfiguration:parserSettingsConfiguration,parserSettings:(0,_extends3.default)({},defaultOptions,e),onChange:r})}});

/***/ }),

/***/ "dJzZ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _extends2=__webpack_require__("Dd8w"),_extends3=_interopRequireDefault(_extends2),_defaultParserInterface=__webpack_require__("zoXw"),_defaultParserInterface2=_interopRequireDefault(_defaultParserInterface),_package=__webpack_require__("Kx03"),_package2=_interopRequireDefault(_package),ID="cssom";exports.default=(0,_extends3.default)({},_defaultParserInterface2.default,{id:ID,displayName:ID,version:_package2.default.version,homepage:_package2.default.homepage||"https://github.com/NV/CSSOM",locationProps:new Set(["__starts","__ends"]),loadParser:function(e){__webpack_require__.e/* require */(30).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("qAxj")]; (e.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe)},parse:function(e,t){return e.parse(t)},getNodeName:function(e){return e.constructor.name},nodeToRange:function(e){var t=e.__starts,r=e.__ends;if(void 0===r&&e.parentRule&&(r=e.parentRule.__ends),void 0!==r)return[t,r]},opensByDefault:function(e,t){return"cssRules"===t||"style"===t},_ignoredProperties:new Set(["parentRule","parentStyleSheet","_importants"])});

/***/ }),

/***/ "dLYH":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _compileModule=__webpack_require__("K5Vt"),_compileModule2=_interopRequireDefault(_compileModule),_package=__webpack_require__("jGK2"),_package2=_interopRequireDefault(_package),ID="prettier",name="prettier";exports.default={id:ID,displayName:name,version:_package2.default.version,homepage:_package2.default.homepage,defaultParserID:"babylon7",loadTransformer:function(e){__webpack_require__.e/* require */(0/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("kHhb")]; (e.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe)},transform:function(e,r,a){var t=(0,_compileModule2.default)(r);return e.format(a,t.default||t)}};

/***/ }),

/***/ "dZ3p":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _regenerator=__webpack_require__("Xxa5"),_regenerator2=_interopRequireDefault(_regenerator),_extends2=__webpack_require__("Dd8w"),_extends3=_interopRequireDefault(_extends2),_react=__webpack_require__("U7vG"),_react2=_interopRequireDefault(_react),_defaultParserInterface=__webpack_require__("zoXw"),_defaultParserInterface2=_interopRequireDefault(_defaultParserInterface),_package=__webpack_require__("aQG8"),_package2=_interopRequireDefault(_package),_SettingsRenderer=__webpack_require__("nhMB"),_SettingsRenderer2=_interopRequireDefault(_SettingsRenderer),ID="typescript",FILENAME="astExplorer.ts",defaultOptions={experimentalDecorators:!0,experimentalAsyncFunctions:!0,jsx:!0},parserSettingsConfiguration={fields:["experimentalDecorators","experimentalAsyncFunctions","jsx"]},ts=void 0,getComments=void 0,syntaxKind={};exports.default=(0,_extends3.default)({},_defaultParserInterface2.default,{id:ID,displayName:ID,version:_package2.default.version,homepage:_package2.default.homepage,locationProps:new Set(["pos","end"]),loadParser:function(e){__webpack_require__.e/* require */(43).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("wK0m")]; (function(t){var r=!0,n=!1,a=void 0;try{for(var i,o=Object.keys(t.SyntaxKind).filter(function(e){return isNaN(parseInt(e))})[Symbol.iterator]();!(r=(i=o.next()).done);r=!0){var s=i.value,u=t.SyntaxKind[s];syntaxKind[u]||(syntaxKind[u]=s)}}catch(e){n=!0,a=e}finally{try{!r&&o.return&&o.return()}finally{if(n)throw a}}e(ts=t)}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}).catch(__webpack_require__.oe)},parse:function(e,t,r){r=(0,_extends3.default)({},defaultOptions,r);var n={fileExists:function(){return!0},getCanonicalFileName:function(e){return e},getCurrentDirectory:function(){return""},getDefaultLibFileName:function(){return"lib.d.ts"},getNewLine:function(){return"\n"},getSourceFile:function(r){return e.createSourceFile(r,t,e.ScriptTarget.Latest,!0)},readFile:function(){return null},useCaseSensitiveFileNames:function(){return!0},writeFile:function(){return null}},a=FILENAME+(r.jsx?"x":""),i=e.createProgram([a],{noResolve:!0,target:e.ScriptTarget.Latest,experimentalDecorators:r.experimentalDecorators,experimentalAsyncFunctions:r.experimentalAsyncFunctions,jsx:r.jsx?"preserve":void 0},n),o=i.getSourceFile(a);return getComments=function(t,r){if(t.parent){var n=r?t.end:t.pos,a=r?t.parent.end:t.parent.pos;if(t.parent.kind===e.SyntaxKind.SourceFile||n!==a){var i=r?e.getTrailingCommentRanges(o.text,n):e.getLeadingCommentRanges(o.text,n);if(Array.isArray(i))return i.forEach(function(e){e.type=syntaxKind[e.kind],e.text=o.text.substring(e.pos,e.end)}),i}}},o},getNodeName:function(e){if(e.kind)return syntaxKind[e.kind]},_ignoredProperties:new Set(["constructor","parent"]),forEachProperty:_regenerator2.default.mark(function e(t){var r;return _regenerator2.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=_regenerator2.default.keys(t);case 1:if((e.t1=e.t0()).done){e.next=9;break}if(r=e.t1.value,!this._ignoredProperties.has(r)&&"_"!==r.charAt(0)){e.next=5;break}return e.abrupt("continue",1);case 5:return e.next=7,{value:t[r],key:r};case 7:e.next=1;break;case 9:if(!t.parent){e.next=14;break}return e.next=12,{value:getComments(t),key:"leadingComments",computed:!0};case 12:return e.next=14,{value:getComments(t,!0),key:"trailingCommments",computed:!0};case 14:case"end":return e.stop()}},e,this)}),nodeToRange:function(e){return"function"==typeof e.getStart&&"function"==typeof e.getEnd?[e.getStart(),e.getEnd()]:void 0!==e.pos&&void 0!==e.end?[e.pos,e.end]:void 0},opensByDefault:function(e,t){return"statements"===t||"declarationList"===t||"declarations"===t},renderSettings:function(e,t){return _react2.default.createElement(_SettingsRenderer2.default,{settingsConfiguration:parserSettingsConfiguration,parserSettings:(0,_extends3.default)({},defaultOptions,e),onChange:t})}});

/***/ }),

/***/ "dy7d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0}),exports.fileExtension=exports.mimeTypes=exports.displayName=exports.id=void 0,__webpack_require__("wnVi");var id=exports.id="glsl",displayName=exports.displayName="GLSL",mimeTypes=exports.mimeTypes=["x-shader/x-vertex","x-shader/x-fragment"],fileExtension=exports.fileExtension="glsl";

/***/ }),

/***/ "eRru":
/***/ (function(module, exports) {

module.exports = "object Main {\n  def main(args: Array[String]): Unit = {\n    println(\"Hello, World!\")\n  }\n}\n"

/***/ }),

/***/ "eiPt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _extends2=__webpack_require__("Dd8w"),_extends3=_interopRequireDefault(_extends2),_defaultHandlebarsParserInterface=__webpack_require__("orwP"),_defaultHandlebarsParserInterface2=_interopRequireDefault(_defaultHandlebarsParserInterface),_package=__webpack_require__("fCsT"),_package2=_interopRequireDefault(_package),ID="glimmer";exports.default=(0,_extends3.default)({},_defaultHandlebarsParserInterface2.default,{id:ID,displayName:ID,version:_package2.default.version,homepage:_package2.default.homepage||"https://github.com/glimmerjs/glimmer-vm",loadParser:function(e){__webpack_require__.e/* require */(2/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("I13T")]; (function(r){return e(r.preprocess)}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}).catch(__webpack_require__.oe)},opensByDefault:function(e,r){return"body"===r}});

/***/ }),

/***/ "eslX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}function resize(){_pubsubJs2.default.publish("PANEL_RESIZE")}function App(e){return _react2.default.createElement("div",null,_react2.default.createElement(_ErrorMessageContainer2.default,null),_react2.default.createElement("div",{className:"dropTarget"+(e.hasError?" hasError":"")},_react2.default.createElement(_PasteDropTargetContainer2.default,null,_react2.default.createElement(_LoadingIndicatorContainer2.default,null),_react2.default.createElement(_SettingsDialogContainer2.default,null),_react2.default.createElement(_ShareDialogContainer2.default,null),_react2.default.createElement("div",{id:"root"},_react2.default.createElement(_ToolbarContainer2.default,null),_react2.default.createElement(_GistBanner2.default,null),_react2.default.createElement(_SplitPane2.default,{className:"splitpane-content",vertical:!0,onResize:resize},_react2.default.createElement(_SplitPane2.default,{className:"splitpane",onResize:resize},_react2.default.createElement(_CodeEditorContainer2.default,null),_react2.default.createElement(_ASTOutputContainer2.default,null)),e.showTransformer?_react2.default.createElement(_TransformerContainer2.default,null):null)))))}var _LocalStorage=__webpack_require__("BGII"),LocalStorage=_interopRequireWildcard(_LocalStorage),_ASTOutputContainer=__webpack_require__("tG/1"),_ASTOutputContainer2=_interopRequireDefault(_ASTOutputContainer),_CodeEditorContainer=__webpack_require__("JP8E"),_CodeEditorContainer2=_interopRequireDefault(_CodeEditorContainer),_ErrorMessageContainer=__webpack_require__("jIvk"),_ErrorMessageContainer2=_interopRequireDefault(_ErrorMessageContainer),_GistBanner=__webpack_require__("aArb"),_GistBanner2=_interopRequireDefault(_GistBanner),_LoadingIndicatorContainer=__webpack_require__("3jO0"),_LoadingIndicatorContainer2=_interopRequireDefault(_LoadingIndicatorContainer),_PasteDropTargetContainer=__webpack_require__("wQLr"),_PasteDropTargetContainer2=_interopRequireDefault(_PasteDropTargetContainer),_propTypes=__webpack_require__("KSGD"),_propTypes2=_interopRequireDefault(_propTypes),_pubsubJs=__webpack_require__("x9pK"),_pubsubJs2=_interopRequireDefault(_pubsubJs),_react=__webpack_require__("U7vG"),_react2=_interopRequireDefault(_react),_SettingsDialogContainer=__webpack_require__("Y1yI"),_SettingsDialogContainer2=_interopRequireDefault(_SettingsDialogContainer),_ShareDialogContainer=__webpack_require__("IIQh"),_ShareDialogContainer2=_interopRequireDefault(_ShareDialogContainer),_SplitPane=__webpack_require__("aCxF"),_SplitPane2=_interopRequireDefault(_SplitPane),_ToolbarContainer=__webpack_require__("y9lz"),_ToolbarContainer2=_interopRequireDefault(_ToolbarContainer),_TransformerContainer=__webpack_require__("n3ng"),_TransformerContainer2=_interopRequireDefault(_TransformerContainer),_reduxSaga=__webpack_require__("igqX"),_reduxSaga2=_interopRequireDefault(_reduxSaga),_debounce=__webpack_require__("NFrT"),_debounce2=_interopRequireDefault(_debounce),_sagas=__webpack_require__("THJH"),_sagas2=_interopRequireDefault(_sagas),_reactRedux=__webpack_require__("RH2O"),_reducers=__webpack_require__("N0Gc"),_redux=__webpack_require__("2KeS"),_selectors=__webpack_require__("cAC5"),_reduxBatchedActions=__webpack_require__("pBCT"),_actions=__webpack_require__("mUbh"),_reactDom=__webpack_require__("O27J"),_gist=__webpack_require__("M2YX"),gist=_interopRequireWildcard(_gist),_parse=__webpack_require__("aOeh"),parse=_interopRequireWildcard(_parse),_storage=__webpack_require__("VuIw"),_storage2=_interopRequireDefault(_storage);App.propTypes={hasError:_propTypes2.default.bool,showTransformer:_propTypes2.default.bool};var AppContainer=(0,_reactRedux.connect)(function(e){return{showTransformer:e.showTransformPanel,hasError:!!e.error}})(App),composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||_redux.compose,sagaMiddleware=(0,_reduxSaga2.default)(),store=(0,_redux.createStore)((0,_reduxBatchedActions.enableBatching)(_reducers.astexplorer),(0,_reducers.revive)(LocalStorage.readState()),composeEnhancers((0,_redux.applyMiddleware)(sagaMiddleware)));store.subscribe((0,_debounce2.default)(function(){var e=store.getState();(0,_selectors.getRevision)(e)||LocalStorage.writeState((0,_reducers.persist)(e))})),sagaMiddleware.run(_sagas2.default,new _storage2.default([gist,parse])),(0,_reactDom.render)(_react2.default.createElement(_reactRedux.Provider,{store:store},_react2.default.createElement(AppContainer,null)),document.getElementById("container")),global.onhashchange=function(){store.dispatch((0,_actions.loadSnippet)())},location.hash.length>1&&store.dispatch((0,_actions.loadSnippet)()),global.onbeforeunload=function(){var e=store.getState();if((0,_selectors.canSaveTransform)(e))return"You have unsaved transform code. Do you really want to leave?"};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("DuR2")))

/***/ }),

/***/ "fz81":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {function logEvent(e,o,r){global.ga("send","event",e,o,r)}function logError(e,o){global.ga("send","exception",{exDescription:e,exFatal:o})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.logEvent=logEvent,exports.logError=logError;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("DuR2")))

/***/ }),

/***/ "g4ij":
/***/ (function(module, exports) {

module.exports = "<div class=\"entry\">\n  <h1>{{title}}</h1>\n  <div class=\"body\">\n    {{body}}\n  </div>\n</div>\n"

/***/ }),

/***/ "gZy7":
/***/ (function(module, exports) {

module.exports = "export default function(context) {\n  return {\n    TemplateLiteral(node) {\n      context.report(node, 'Do not use template literals');\n    }\n  };\n};\n"

/***/ }),

/***/ "gbpD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _extends2=__webpack_require__("Dd8w"),_extends3=_interopRequireDefault(_extends2),_react=__webpack_require__("U7vG"),_react2=_interopRequireDefault(_react),_defaultParserInterface=__webpack_require__("zoXw"),_defaultParserInterface2=_interopRequireDefault(_defaultParserInterface),_package=__webpack_require__("SAdm"),_package2=_interopRequireDefault(_package),_SettingsRenderer=__webpack_require__("nhMB"),_SettingsRenderer2=_interopRequireDefault(_SettingsRenderer),ID="luaparse",defaultOptions={ranges:!0,locations:!1,comments:!0,scope:!1,luaVersion:"5.1"},settingsConfiguration={fields:["ranges","locations","comments","scope",["luaVersion",["5.1","5.2","5.3"]]],required:new Set(["ranges"])};exports.default=(0,_extends3.default)({},_defaultParserInterface2.default,{id:ID,displayName:ID,version:""+_package2.default.version,homepage:_package2.default.homepage,locationProps:new Set(["range","loc"]),loadParser:function(e){__webpack_require__.e/* require */(46).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("Xuzc")]; (e.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe)},parse:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return e.parse(t,(0,_extends3.default)({},defaultOptions,r))},renderSettings:function(e,t){return _react2.default.createElement("div",null,_react2.default.createElement("p",null,_react2.default.createElement("a",{href:"https://oxyc.github.io/luaparse/#parser-interface",target:"_blank",rel:"noopener noreferrer"},"Option descriptions")),_react2.default.createElement(_SettingsRenderer2.default,{settingsConfiguration:settingsConfiguration,parserSettings:(0,_extends3.default)({},defaultOptions,e),onChange:t}))}});

/***/ }),

/***/ "giVu":
/***/ (function(module, exports) {

module.exports = "/[a-z]/i"

/***/ }),

/***/ "hPTY":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _compileModule=__webpack_require__("K5Vt"),_compileModule2=_interopRequireDefault(_compileModule),_package=__webpack_require__("fCsT"),_package2=_interopRequireDefault(_package),ID="glimmer";exports.default={id:ID,displayName:ID,version:_package2.default.version,homepage:_package2.default.homepage||"https://github.com/glimmerjs/glimmer-vm",defaultParserID:"glimmer",loadTransformer:function(e){__webpack_require__.e/* require */(2/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("I13T")]; (e.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe)},transform:function(e,r,a){var l=(0,_compileModule2.default)(r),u=l.__esModule?l.default:l,i=e.preprocess(a,{plugins:{ast:[u]}});return e.print(i)}};

/***/ }),

/***/ "i7Ef":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _classCallCheck2=__webpack_require__("Zrlr"),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__("wxAW"),_createClass3=_interopRequireDefault(_createClass2),_possibleConstructorReturn2=__webpack_require__("zwoO"),_possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2),_inherits2=__webpack_require__("Pf15"),_inherits3=_interopRequireDefault(_inherits2),_propTypes=__webpack_require__("KSGD"),_propTypes2=_interopRequireDefault(_propTypes),_react=__webpack_require__("U7vG"),_react2=_interopRequireDefault(_react),ErrorMessage=function(e){function r(){return(0,_classCallCheck3.default)(this,r),(0,_possibleConstructorReturn3.default)(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return(0,_inherits3.default)(r,e),(0,_createClass3.default)(r,[{key:"render",value:function(){return this.props.error?_react2.default.createElement("div",{className:"cover"},_react2.default.createElement("div",{className:"errorMessage"},_react2.default.createElement("h3",null,_react2.default.createElement("i",{className:"fa fa-exclamation-triangle"})," ","Error"),_react2.default.createElement("div",null,this.props.error.message),_react2.default.createElement("div",{style:{marginTop:15}},_react2.default.createElement("button",{type:"button",onClick:this.props.onWantToClose},"OK")))):null}}]),r}(_react2.default.Component);exports.default=ErrorMessage,ErrorMessage.propTypes={error:_propTypes2.default.object,onWantToClose:_propTypes2.default.func};

/***/ }),

/***/ "idRZ":
/***/ (function(module, exports) {

module.exports = "// Game Of Life ( https://gl-react-cookbook.surge.sh/gol )\nprecision highp float;\nvarying vec2 uv;\nuniform float size;\nuniform sampler2D t; // the previous world state\nvoid main() {\n  float prev = step(0.5, texture2D(t, uv).r);\n  float c = 1.0 / size;\n  float sum =\n  step(0.5, texture2D(t, uv + vec2(-1.0, -1.0)*c).r) +\n  step(0.5, texture2D(t, uv + vec2(-1.0,  0.0)*c).r) +\n  step(0.5, texture2D(t, uv + vec2(-1.0,  1.0)*c).r) +\n  step(0.5, texture2D(t, uv + vec2( 0.0,  1.0)*c).r) +\n  step(0.5, texture2D(t, uv + vec2( 1.0,  1.0)*c).r) +\n  step(0.5, texture2D(t, uv + vec2( 1.0,  0.0)*c).r) +\n  step(0.5, texture2D(t, uv + vec2( 1.0, -1.0)*c).r) +\n  step(0.5, texture2D(t, uv + vec2( 0.0, -1.0)*c).r);\n  float next = prev==1.0 && sum >= 2.0 && sum <= 3.0 || sum == 3.0 ? 1.0 : 0.0;\n  gl_FragColor = vec4(vec3(next), 1.0);\n}\n"

/***/ }),

/***/ "j5K2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _extends2=__webpack_require__("Dd8w"),_extends3=_interopRequireDefault(_extends2),_react=__webpack_require__("U7vG"),_react2=_interopRequireDefault(_react),_defaultParserInterface=__webpack_require__("zoXw"),_defaultParserInterface2=_interopRequireDefault(_defaultParserInterface),_package=__webpack_require__("2jvD"),_package2=_interopRequireDefault(_package),_SettingsRenderer=__webpack_require__("nhMB"),_SettingsRenderer2=_interopRequireDefault(_SettingsRenderer),ID="remark",defaultOptions={gfm:!0,commonmark:!1,footnotes:!1},parserSettingsConfiguration={fields:Object.keys(defaultOptions)};exports.default=(0,_extends3.default)({},_defaultParserInterface2.default,{id:ID,displayName:ID,version:_package2.default.version,homepage:_package2.default.homepage,locationProps:new Set(["position"]),loadParser:function(e){__webpack_require__.e/* require */(17).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("Al96")]; (e.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe)},parse:function(e,t,r){return e().data("settings",(0,_extends3.default)({},defaultOptions,r)).parse(t)},nodeToRange:function(e){var t=e.position;if(t)return[t.start.offset,t.end.offset]},getNodeName:function(e){return e.type},opensByDefault:function(e,t){return"children"===t},renderSettings:function(e,t){return _react2.default.createElement("div",null,_react2.default.createElement("p",null,_react2.default.createElement("a",{href:"https://github.com/remarkjs/remark/tree/master/packages/remark-parse#options",target:"_blank",rel:"noopener noreferrer"},"Option descriptions")),_react2.default.createElement(_SettingsRenderer2.default,{settingsConfiguration:parserSettingsConfiguration,parserSettings:(0,_extends3.default)({},defaultOptions,e),onChange:t}))}});

/***/ }),

/***/ "jIvk":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function mapStateToProps(e){return{error:(0,_selectors.getError)(e)}}function mapDispatchToProps(e){return{onWantToClose:function(){return e((0,_actions.clearError)())}}}Object.defineProperty(exports,"__esModule",{value:!0});var _reactRedux=__webpack_require__("RH2O"),_ErrorMessage=__webpack_require__("i7Ef"),_ErrorMessage2=_interopRequireDefault(_ErrorMessage),_actions=__webpack_require__("mUbh"),_selectors=__webpack_require__("cAC5");exports.default=(0,_reactRedux.connect)(mapStateToProps,mapDispatchToProps)(_ErrorMessage2.default);

/***/ }),

/***/ "jlpK":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0}),exports.fileExtension=exports.mimeTypes=exports.displayName=exports.id=void 0,__webpack_require__("8Nur");var id=exports.id="htmlmixed",displayName=exports.displayName="HTML",mimeTypes=exports.mimeTypes=["text/html"],fileExtension=exports.fileExtension="html";

/***/ }),

/***/ "kMaA":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function importEscodegen(){return new Promise(function(e){return __webpack_require__.e/* require */(29).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("lIiO")]; (e.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe)})}Object.defineProperty(exports,"__esModule",{value:!0});var _extends2=__webpack_require__("Dd8w"),_extends3=_interopRequireDefault(_extends2),_objectWithoutProperties2=__webpack_require__("+6Bu"),_objectWithoutProperties3=_interopRequireDefault(_objectWithoutProperties2),_slicedToArray2=__webpack_require__("d7EF"),_slicedToArray3=_interopRequireDefault(_slicedToArray2),_classCallCheck2=__webpack_require__("Zrlr"),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__("wxAW"),_createClass3=_interopRequireDefault(_createClass2),_possibleConstructorReturn2=__webpack_require__("zwoO"),_possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2),_inherits2=__webpack_require__("Pf15"),_inherits3=_interopRequireDefault(_inherits2),_propTypes=__webpack_require__("KSGD"),_propTypes2=_interopRequireDefault(_propTypes),_react=__webpack_require__("U7vG"),_react2=_interopRequireDefault(_react),_parsers=__webpack_require__("Re4o"),acceptedFileTypes=new Map([["application/json","JSON"],["text/plain","TEXT"]]);_parsers.categories.forEach(function(e){var t=e.id;e.mimeTypes.forEach(function(e){acceptedFileTypes.set(e,t)})});var PasteDropTarget=function(e){function t(e){(0,_classCallCheck3.default)(this,t);var r=(0,_possibleConstructorReturn3.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={dragging:!1},r}return(0,_inherits3.default)(t,e),(0,_createClass3.default)(t,[{key:"_onASTError",value:function(e,t,r){throw this.props.onError(e,t,"Cannot process pasted AST: "+r.message),r}},{key:"componentDidMount",value:function(){var e=this;this._listeners=[];var t=this.container;this._bindListener(document,"paste",function(t){if(t.clipboardData){var r=t.clipboardData;!r.types.indexOf||!r.types.indexOf("text/plain")>-1||(t.stopPropagation(),t.preventDefault(),e._jsonToCode(r.getData("text/plain")).then(function(r){return e.props.onText("paste",t,r)},function(r){"TEXTAREA"!==t.target.nodeName&&e._onASTError("paste",t,r)}))}},!0);var r=void 0;this._bindListener(t,"dragenter",function(t){clearTimeout(r),t.preventDefault(),e.setState({dragging:!0})},!0),this._bindListener(t,"dragover",function(e){clearTimeout(r),e.preventDefault(),e.dataTransfer.dropEffect="copy"},!0),this._bindListener(t,"drop",function(t){e.setState({dragging:!1});var r=t.dataTransfer.files[0],n=acceptedFileTypes.get(r.type);if(n&&e.props.onText){t.preventDefault(),t.stopPropagation();var i=new FileReader;i.onload=function(t){var r=t.target.result;"JSON"!==n&&"TEXT"!==n||(r=e._jsonToCode(r).then(function(e){return n="javascript",e},function(i){if("JSON"!==n)return n=void 0,r;e._onASTError("drop",t,i)})),Promise.resolve(r).then(function(r){e.props.onText("drop",t,r,n)})},i.readAsText(r)}},!0),this._bindListener(t,"dragleave",function(){clearTimeout(r),r=setTimeout(function(){return e.setState({dragging:!1})},50)},!0)}},{key:"componentWillUnmount",value:function(){for(var e=0;e<this._listeners.length;e+=4){var t=(0,_slicedToArray3.default)(this._listeners[e],4),r=t[0],n=t[1],i=t[2],o=t[3];r.removeEventListener(n,i,o)}this._listeners=null}},{key:"_jsonToCode",value:function(e){var t=void 0;try{t=JSON.parse(e)}catch(t){return Promise.resolve(e)}return importEscodegen().then(function(e){return e.generate(t,{format:{indent:{style:"  "}}})})}},{key:"_bindListener",value:function(e,t,r,n){var i=this;t.split(/\s+/).forEach(function(t){e.addEventListener(t,r,n),i._listeners.push(e,r,n)})}},{key:"render",value:function(){var e=this,t=this.props,r=t.children,n=(t.onText,(0,_objectWithoutProperties3.default)(t,["children","onText"])),i=this.state.dragging?_react2.default.createElement("div",{className:"dropIndicator"},_react2.default.createElement("div",null,"Drop the code or (JSON-encoded) AST file here")):null;return _react2.default.createElement("div",(0,_extends3.default)({ref:function(t){return e.container=t}},n),i,r)}}]),t}(_react2.default.Component);exports.default=PasteDropTarget,PasteDropTarget.propTypes={onText:_propTypes2.default.func,onError:_propTypes2.default.func,children:_propTypes2.default.node};

/***/ }),

/***/ "kjiV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
module.exports=__webpack_require__("L3Zs");

/***/ }),

/***/ "ksNG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0});var id=exports.id="icu",displayName=exports.displayName="ICU",mimeTypes=exports.mimeTypes=["text/plain"],fileExtension=exports.fileExtension="txt";

/***/ }),

/***/ "lRWh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _extends2=__webpack_require__("Dd8w"),_extends3=_interopRequireDefault(_extends2),_react=__webpack_require__("U7vG"),_react2=_interopRequireDefault(_react),_defaultParserInterface=__webpack_require__("zoXw"),_defaultParserInterface2=_interopRequireDefault(_defaultParserInterface),_package=__webpack_require__("OneE"),_package2=_interopRequireDefault(_package),_SettingsRenderer=__webpack_require__("nhMB"),_SettingsRenderer2=_interopRequireDefault(_SettingsRenderer),ID="parse5",defaultOptions={treeAdapter:"default"},parserSettingsConfiguration={fields:[["treeAdapter",["default","htmlparser2"]]]};exports.default=(0,_extends3.default)({},_defaultParserInterface2.default,{id:ID,displayName:ID,version:_package2.default.version,homepage:_package2.default.homepage,locationProps:new Set(["__location"]),loadParser:function(e){__webpack_require__.e/* require */(27).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("vnL/"),__webpack_require__("YrCx"),__webpack_require__("XwZZ")]; (function(t,r,a){e({Parser:t,TreeAdapters:{default:r,htmlparser2:a}})}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}).catch(__webpack_require__.oe)},parse:function(e,t,r){var a=e.Parser,n=e.TreeAdapters;return this.options=(0,_extends3.default)({},defaultOptions,r),new a({treeAdapter:n[this.options.treeAdapter],locationInfo:!0}).parse(t)},getNodeName:function(e){return"htmlparser2"===this.options.treeAdapter?e.type+(e.name&&"root"!==e.type?"("+e.name+")":""):e.nodeName},nodeToRange:function(e){var t=e.__location;if(t)return[t.startOffset,t.endOffset]},opensByDefault:function(e,t){return"children"===t||"childNodes"===t},renderSettings:function(e,t){return _react2.default.createElement(_SettingsRenderer2.default,{settingsConfiguration:parserSettingsConfiguration,parserSettings:(0,_extends3.default)({},defaultOptions,e),onChange:t})},_ignoredProperties:new Set(["parentNode","prev","next","parent","firstChild","lastChild"])});

/***/ }),

/***/ "lve6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function CompactObjectView(e){var t=e.keys,a=e.onClick;return 0===t.length?_react2.default.createElement("span",{className:"p"},"{ }"):(t.length>5&&(t=t.slice(0,5).concat(["... +"+(t.length-5)])),_react2.default.createElement("span",null,_react2.default.createElement("span",{className:"p"}," {"),_react2.default.createElement("span",{className:"compact placeholder ge",onClick:a},t.join(", ")),_react2.default.createElement("span",{className:"p"},"}")))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=CompactObjectView;var _propTypes=__webpack_require__("KSGD"),_propTypes2=_interopRequireDefault(_propTypes),_react=__webpack_require__("U7vG"),_react2=_interopRequireDefault(_react);CompactObjectView.propTypes={keys:_propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,onClick:_propTypes2.default.func};

/***/ }),

/***/ "lyIa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _extends2=__webpack_require__("Dd8w"),_extends3=_interopRequireDefault(_extends2),_defaultESTreeParserInterface=__webpack_require__("2Wat"),_defaultESTreeParserInterface2=_interopRequireDefault(_defaultESTreeParserInterface),_package=__webpack_require__("xreR"),_package2=_interopRequireDefault(_package),ID="acorn-to-esprima";exports.default=(0,_extends3.default)({},_defaultESTreeParserInterface2.default,{id:ID,displayName:ID,version:_package2.default.version,homepage:_package2.default.homepage,locationProps:new Set(["loc","start","end","range"]),showInMenu:!1,loadParser:function(e){__webpack_require__.e/* require */(5).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("mX6m"),__webpack_require__("gg2H")]; (function(r,t){var a=t.acorn.tokTypes,n=t.traverse,o=t.parse;e((0,_extends3.default)({},r,{tokTypes:a,traverse:n,parse:o}))}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}).catch(__webpack_require__.oe)},parse:function(e,r){var t={locations:!0,ranges:!0},a=t.onComment=[],n=t.onToken=[],o=e.parse(r,t);return o.tokens=e.toTokens(n,e.tokTypes),e.convertComments(a),o.comments=a,e.attachComments(o,a,o.tokens),e.toAST(o,e.traverse),o},nodeToRange:function(e){if(void 0!==e.start)return[e.start,e.end]},_ignoredProperties:new Set(["_paths","_babelType","__clone"])});

/***/ }),

/***/ "mUbh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function setParser(e){return{type:SET_PARSER,parser:e}}function setParserSettings(e){return{type:SET_PARSER_SETTINGS,settings:e}}function save(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return{type:SAVE,fork:e}}function startSave(e){return{type:START_SAVE,fork:e}}function endSave(e){return{type:END_SAVE,fork:e}}function setSnippet(e){return{type:SET_SNIPPET,revision:e}}function setParseError(e){return{type:SET_PARSE_ERROR,error:e}}function selectCategory(e){return{type:SELECT_CATEGORY,category:e}}function clearSnippet(){return{type:CLEAR_SNIPPET}}function startLoadingSnippet(){return{type:START_LOADING_SNIPPET}}function doneLoadingSnippet(){return{type:DONE_LOADING_SNIPPET}}function loadSnippet(){return{type:LOAD_SNIPPET}}function openSettingsDialog(){return{type:OPEN_SETTINGS_DIALOG}}function closeSettingsDialog(){return{type:CLOSE_SETTINGS_DIALOG}}function openShareDialog(){return{type:OPEN_SHARE_DIALOG}}function closeShareDialog(){return{type:CLOSE_SHARE_DIALOG}}function setError(e){return{type:SET_ERROR,error:e}}function clearError(){return{type:CLEAR_ERROR}}function selectTransformer(e){return{type:SELECT_TRANSFORMER,transformer:e}}function hideTransformer(){return{type:HIDE_TRANSFORMER}}function setTransformState(e){return(0,_extends3.default)({type:SET_TRANSFORM},e)}function setCode(e){return(0,_extends3.default)({type:SET_CODE},e)}function setCursor(e){return{type:SET_CURSOR,cursor:e}}function dropText(e,t){return{type:DROP_TEXT,text:e,categoryId:t}}function reset(){return{type:RESET}}function toggleFormatting(){return{type:TOGGLE_FORMATTING}}function setKeyMap(e){return{type:SET_KEY_MAP,keyMap:e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.SET_KEY_MAP=exports.TOGGLE_FORMATTING=exports.RESET=exports.END_SAVE=exports.START_SAVE=exports.SAVE=exports.DROP_TEXT=exports.SET_CURSOR=exports.SET_CODE=exports.CLOSE_SHARE_DIALOG=exports.OPEN_SHARE_DIALOG=exports.CLOSE_SETTINGS_DIALOG=exports.OPEN_SETTINGS_DIALOG=exports.SET_SNIPPET=exports.SET_PARSE_ERROR=exports.SET_PARSER_SETTINGS=exports.SET_PARSER=exports.SET_TRANSFORM=exports.HIDE_TRANSFORMER=exports.SELECT_TRANSFORMER=exports.SELECT_CATEGORY=exports.CLEAR_SNIPPET=exports.DONE_LOADING_SNIPPET=exports.START_LOADING_SNIPPET=exports.LOAD_SNIPPET=exports.CLEAR_ERROR=exports.SET_ERROR=void 0;var _extends2=__webpack_require__("Dd8w"),_extends3=_interopRequireDefault(_extends2);exports.setParser=setParser,exports.setParserSettings=setParserSettings,exports.save=save,exports.startSave=startSave,exports.endSave=endSave,exports.setSnippet=setSnippet,exports.setParseError=setParseError,exports.selectCategory=selectCategory,exports.clearSnippet=clearSnippet,exports.startLoadingSnippet=startLoadingSnippet,exports.doneLoadingSnippet=doneLoadingSnippet,exports.loadSnippet=loadSnippet,exports.openSettingsDialog=openSettingsDialog,exports.closeSettingsDialog=closeSettingsDialog,exports.openShareDialog=openShareDialog,exports.closeShareDialog=closeShareDialog,exports.setError=setError,exports.clearError=clearError,exports.selectTransformer=selectTransformer,exports.hideTransformer=hideTransformer,exports.setTransformState=setTransformState,exports.setCode=setCode,exports.setCursor=setCursor,exports.dropText=dropText,exports.reset=reset,exports.toggleFormatting=toggleFormatting,exports.setKeyMap=setKeyMap;var SET_ERROR=exports.SET_ERROR="SET_ERROR",CLEAR_ERROR=exports.CLEAR_ERROR="CLEAR_ERROR",LOAD_SNIPPET=exports.LOAD_SNIPPET="LOAD_SNIPPET",START_LOADING_SNIPPET=exports.START_LOADING_SNIPPET="START_LOADING_SNIPPET",DONE_LOADING_SNIPPET=exports.DONE_LOADING_SNIPPET="DONE_LOADING_SNIPPET",CLEAR_SNIPPET=exports.CLEAR_SNIPPET="CLEAR_SNIPPET",SELECT_CATEGORY=exports.SELECT_CATEGORY="CHANGE_CATEGORY",SELECT_TRANSFORMER=exports.SELECT_TRANSFORMER="SELECT_TRANSFORMER",HIDE_TRANSFORMER=exports.HIDE_TRANSFORMER="HIDE_TRANSFORMER",SET_TRANSFORM=exports.SET_TRANSFORM="SET_TRANSFORM",SET_PARSER=exports.SET_PARSER="SET_PARSER",SET_PARSER_SETTINGS=exports.SET_PARSER_SETTINGS="SET_PARSER_SETTINGS",SET_PARSE_ERROR=exports.SET_PARSE_ERROR="SET_PARSE_ERROR",SET_SNIPPET=exports.SET_SNIPPET="SET_SNIPPET",OPEN_SETTINGS_DIALOG=exports.OPEN_SETTINGS_DIALOG="OPEN_SETTINGS_DIALOG",CLOSE_SETTINGS_DIALOG=exports.CLOSE_SETTINGS_DIALOG="CLOSE_SETTINGS_DIALOG",OPEN_SHARE_DIALOG=exports.OPEN_SHARE_DIALOG="OPEN_SHARE_DIALOG",CLOSE_SHARE_DIALOG=exports.CLOSE_SHARE_DIALOG="CLOSE_SHARE_DIALOG",SET_CODE=exports.SET_CODE="SET_CODE",SET_CURSOR=exports.SET_CURSOR="SET_CURSOR",DROP_TEXT=exports.DROP_TEXT="DROP_TEXT",SAVE=exports.SAVE="SAVE",START_SAVE=exports.START_SAVE="START_SAVE",END_SAVE=exports.END_SAVE="END_SAVE",RESET=exports.RESET="RESET",TOGGLE_FORMATTING=exports.TOGGLE_FORMATTING="TOGGLE_FORMATTING",SET_KEY_MAP=exports.SET_KEY_MAP="SET_KEY_MAP";

/***/ }),

/***/ "mk70":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0}),exports.fileExtension=exports.mimeTypes=exports.displayName=exports.id=void 0,__webpack_require__("JGZi");var id=exports.id="sql",displayName=exports.displayName="SQL",mimeTypes=exports.mimeTypes=["text/x-sql"],fileExtension=exports.fileExtension="sql";

/***/ }),

/***/ "n3ng":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function mapStateToProps(e){return{transformer:selectors.getTransformer(e),defaultTransformCode:selectors.getInitialTransformCode(e),transformCode:selectors.getTransformCode(e),mode:selectors.getParser(e).category.id,code:selectors.getCode(e),enableFormatting:selectors.getFormattingState(e),keyMap:selectors.getKeyMap(e)}}function mapDispatchToProps(e){return{onContentChange:function(r){var t=r.value,o=r.cursor;e((0,_actions.setTransformState)({code:t,cursor:o}))},toggleFormatting:function(){e((0,_actions.toggleFormatting)())}}}Object.defineProperty(exports,"__esModule",{value:!0});var _reactRedux=__webpack_require__("RH2O"),_Transformer=__webpack_require__("K2dk"),_Transformer2=_interopRequireDefault(_Transformer),_actions=__webpack_require__("mUbh"),_selectors=__webpack_require__("cAC5"),selectors=_interopRequireWildcard(_selectors);exports.default=(0,_reactRedux.connect)(mapStateToProps,mapDispatchToProps)(_Transformer2.default);

/***/ }),

/***/ "nKzu":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function parse(e,t,r){return e._promise||(e._promise=new Promise(e.loadParser)),e._promise.then(function(s){return e.parse(s,t,r)})}function formatTime(e){return e?e<1e3?e+"ms":(e/1e3).toFixed(2)+"s":null}Object.defineProperty(exports,"__esModule",{value:!0});var _classCallCheck2=__webpack_require__("Zrlr"),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__("wxAW"),_createClass3=_interopRequireDefault(_createClass2),_possibleConstructorReturn2=__webpack_require__("zwoO"),_possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2),_inherits2=__webpack_require__("Pf15"),_inherits3=_interopRequireDefault(_inherits2),_propTypes=__webpack_require__("KSGD"),_propTypes2=_interopRequireDefault(_propTypes),_react=__webpack_require__("U7vG"),_react2=_interopRequireDefault(_react),_classnames=__webpack_require__("HW6M"),_classnames2=_interopRequireDefault(_classnames),_visualization=__webpack_require__("H4bS"),_visualization2=_interopRequireDefault(_visualization),_getFocusPath=__webpack_require__("aiYT"),_getFocusPath2=_interopRequireDefault(_getFocusPath),ASTOutput=function(e){function t(e,r){(0,_classCallCheck3.default)(this,t);var s=(0,_possibleConstructorReturn3.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r));return s._changeOutput=s._changeOutput.bind(s),s.state={output:0,parseError:null,ast:null,parseTime:null},s}return(0,_inherits3.default)(t,e),(0,_createClass3.default)(t,[{key:"componentDidMount",value:function(){this._parse(this.props.parser,this.props.code,this.props.parserSettings)}},{key:"componentWillReceiveProps",value:function(e){e.parser!==this.props.parser||e.code!==this.props.code||e.parserSettings!==this.props.parserSettings?this._parse(e.parser,e.code,e.parserSettings):e.cursor!==this.props.cursor&&this.setState({focusPath:null!=e.cursor?(0,_getFocusPath2.default)(this.state.ast,e.cursor,e.parser):[]})}},{key:"shouldComponentUpdate",value:function(e,t){return t.ast!==this.state.ast||t.parseError!==this.state.parseError||t.focusPath!==this.state.focusPath||t.output!==this.state.output}},{key:"_parse",value:function(e,t,r){var s=this;if(e&&null!=t){var a=Date.now();parse(e,t,r).then(function(r){e!==s.props.parser&&t!==s.props.code||(s.setState({parseTime:Date.now()-a,ast:r,focusPath:null!=s.props.cursor?(0,_getFocusPath2.default)(r,s.props.cursor,e):[],parseError:null}),s.props.onParseError(null))},function(e){console.error(e),s.setState({parseError:e,parseTime:null}),s.props.onParseError(e)})}}},{key:"_changeOutput",value:function(e){this.setState({output:e.target.value})}},{key:"render",value:function(){var e=this,t=void 0;this.state.parseError?t=_react2.default.createElement("div",{style:{padding:20}},this.state.parseError.message):this.state.ast&&(t=_react2.default.createElement(_visualization2.default[this.state.output],{ast:this.state.ast,focusPath:this.state.focusPath,parser:this.props.parser}));var r=_visualization2.default.map(function(t,r){return _react2.default.createElement("button",{key:r,value:r,onClick:e._changeOutput,className:(0,_classnames2.default)({active:e.state.output==r})},t.name)});return _react2.default.createElement("div",{className:"output highlight"},_react2.default.createElement("div",{className:"toolbar"},r,_react2.default.createElement("span",{className:"time"},formatTime(this.state.parseTime))),t)}}]),t}(_react2.default.Component);exports.default=ASTOutput,ASTOutput.propTypes={code:_propTypes2.default.string,parser:_propTypes2.default.object.isRequired,parserSettings:_propTypes2.default.object,cursor:_propTypes2.default.any,onParseError:_propTypes2.default.func.isRequired};

/***/ }),

/***/ "nhG3":
/***/ (function(module, exports) {

module.exports = "module.exports = function() {\n  return {\n    name: 'ast-transform',\n\n    visitor: {\n      ElementNode(node) {\n        node.tag = node.tag.split('').reverse().join('');\n      }\n    }\n  };\n};\n"

/***/ }),

/***/ "nhMB":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function valuesFromArray(e){return e.reduce(function(t,r){return t[r]=e.indexOf(r)>-1,t},{})}function getValuesFromSettings(e){return Array.isArray(e)?valuesFromArray(e):e}function defaultUpdater(e,t,r){return(0,_extends5.default)({},e,(0,_defineProperty3.default)({},t,r))}function arrayUpdater(e,t,r){return e=new Set(e),r?e.add(t):e.delete(t),Array.from(e)}function getUpdateStrategy(e){return Array.isArray(e)?arrayUpdater:defaultUpdater}function SettingsRenderer(e){var t=e.settingsConfiguration,r=e.parserSettings,a=e.onChange,n=t.title,u=t.fields,i=t.required,l=void 0===i?new Set:i,d=t.update,o=void 0===d?getUpdateStrategy(r):d,p=(t.values||getValuesFromSettings)(r);return _react2.default.createElement("div",null,n?_react2.default.createElement("h4",null,n):null,_react2.default.createElement("ul",{className:"settings"},u.map(function(e){if("string"==typeof e)return _react2.default.createElement("li",{key:e},_react2.default.createElement("label",null,_react2.default.createElement("input",{type:"checkbox",readOnly:l.has(e),disabled:l.has(e),checked:p[e],onChange:function(t){var n=t.target;return a(o(r,e,n.checked))}})," ",e));if(Array.isArray(e)){var t=(0,_slicedToArray3.default)(e,3),n=t[0],u=t[1],i=t[2],d=void 0===i?identity:i;return _react2.default.createElement("li",{key:n},_react2.default.createElement("label",null,n,": ",_react2.default.createElement("select",{onChange:function(e){var t=e.target;return a(o(r,n,d(t.value)))},value:p[n]},u.map(function(e){return _react2.default.createElement("option",{key:e,value:e},e)}))))}return e&&"object"===(void 0===e?"undefined":(0,_typeof3.default)(e))?_react2.default.createElement(SettingsRenderer,{key:e.key,settingsConfiguration:e,parserSettings:e.settings(r),onChange:function(t){return a((0,_extends5.default)({},r,(0,_defineProperty3.default)({},e.key,t)))}}):void 0})))}Object.defineProperty(exports,"__esModule",{value:!0});var _typeof2=__webpack_require__("pFYg"),_typeof3=_interopRequireDefault(_typeof2),_slicedToArray2=__webpack_require__("d7EF"),_slicedToArray3=_interopRequireDefault(_slicedToArray2),_defineProperty2=__webpack_require__("bOdI"),_defineProperty3=_interopRequireDefault(_defineProperty2),_extends4=__webpack_require__("Dd8w"),_extends5=_interopRequireDefault(_extends4);exports.default=SettingsRenderer;var _propTypes=__webpack_require__("KSGD"),_propTypes2=_interopRequireDefault(_propTypes),_react=__webpack_require__("U7vG"),_react2=_interopRequireDefault(_react),identity=function(e){return e};SettingsRenderer.propTypes={settingsConfiguration:_propTypes2.default.object.isRequired,parserSettings:_propTypes2.default.oneOfType([_propTypes2.default.object,_propTypes2.default.array]).isRequired,onChange:_propTypes2.default.func.isRequired};

/***/ }),

/***/ "nhuG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _extends2=__webpack_require__("Dd8w"),_extends3=_interopRequireDefault(_extends2),_defaultParserInterface=__webpack_require__("zoXw"),_defaultParserInterface2=_interopRequireDefault(_defaultParserInterface),_package=__webpack_require__("tTZe"),_package2=_interopRequireDefault(_package),ID="csstree";exports.default=(0,_extends3.default)({},_defaultParserInterface2.default,{id:ID,displayName:ID,version:_package2.default.version,homepage:_package2.default.homepage||"https://github.com/csstree/csstree",locationProps:new Set(["loc"]),loadParser:function(e){__webpack_require__.e/* require */(19).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("FrX2")]; (e.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe)},parse:function(e,t){return e.toPlainObject(e.parse(t,{positions:!0}))},getNodeName:function(e){return e.type},nodeToRange:function(e){var t=e.loc;if(t&&t.start&&t.end)return[t.start.offset,t.end.offset]},opensByDefault:function(e,t){return"children"===t}});

/***/ }),

/***/ "nwpp":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n\n<body>\n    <h1>My First Heading</h1>\n    <p>My first paragraph.</p>\n</body>\n\n</html>\n"

/***/ }),

/***/ "orwP":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _extends2=__webpack_require__("Dd8w"),_extends3=_interopRequireDefault(_extends2),_defaultParserInterface=__webpack_require__("zoXw"),_defaultParserInterface2=_interopRequireDefault(_defaultParserInterface);exports.default=(0,_extends3.default)({},_defaultParserInterface2.default,{locationProps:new Set(["loc"]),parse:function(e,t){this.lineOffsets=[];var r=0;do{this.lineOffsets.push(r)}while(r=t.indexOf("\n",r)+1);return e(t)},getOffset:function(e){var t=e.line,r=e.column;return this.lineOffsets[t-1]+r},nodeToRange:function(e){var t=this,r=e.loc;if(r)return[r.start,r.end].map(function(e){return t.getOffset(e)})}});

/***/ }),

/***/ "pCVc":
/***/ (function(module, exports) {

module.exports = "/**\n * Paste or drop some JavaScript here and explore\n * the syntax tree created by chosen parser.\n * You can use all the cool new features from ES6\n * and even more. Enjoy!\n */\n\nlet tips = [\n  \"Click on any AST node with a '+' to expand it\",\n\n  \"Hovering over a node highlights the \\\n   corresponding part in the source code\",\n\n  \"Shift click on an AST node expands the whole substree\"\n];\n\nfunction printTips() {\n  tips.forEach((tip, i) => console.log(`Tip ${i}:` + tip));\n}\n"

/***/ }),

/***/ "pT+C":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function PrettierButton(e){return _react2.default.createElement("button",{type:"button",className:"toggleBtn",onClick:e.toggleFormatting},_react2.default.createElement("i",{className:(0,_classnames2.default)({fa:!0,"fa-lg":!0,"fa-toggle-off":!e.enableFormatting,"fa-toggle-on":e.enableFormatting,"fa-fw":!0})}),_react2.default.createElement("span",{className:"btnText"},"Prettier"))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=PrettierButton;var _propTypes=__webpack_require__("KSGD"),_propTypes2=_interopRequireDefault(_propTypes),_react=__webpack_require__("U7vG"),_react2=_interopRequireDefault(_react),_classnames=__webpack_require__("HW6M"),_classnames2=_interopRequireDefault(_classnames);PrettierButton.propTypes={toggleFormatting:_propTypes2.default.func,enableFormatting:_propTypes2.default.bool};

/***/ }),

/***/ "qKIG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _classCallCheck2=__webpack_require__("Zrlr"),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__("wxAW"),_createClass3=_interopRequireDefault(_createClass2),_possibleConstructorReturn2=__webpack_require__("zwoO"),_possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2),_inherits2=__webpack_require__("Pf15"),_inherits3=_interopRequireDefault(_inherits2),_propTypes=__webpack_require__("KSGD"),_propTypes2=_interopRequireDefault(_propTypes),_react=__webpack_require__("U7vG"),_react2=_interopRequireDefault(_react),_classnames=__webpack_require__("HW6M"),_classnames2=_interopRequireDefault(_classnames),keyMappings=["default","vim","emacs","sublime"],KeyMapButton=function(e){function t(){return(0,_classCallCheck3.default)(this,t),(0,_possibleConstructorReturn3.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,_inherits3.default)(t,e),(0,_createClass3.default)(t,[{key:"render",value:function(){var e=this;return _react2.default.createElement("div",{className:(0,_classnames2.default)({button:!0,menuButton:!0})},_react2.default.createElement("button",{type:"button"},_react2.default.createElement("i",{className:(0,_classnames2.default)({fa:!0,"fa-lg":!0,"fa-keyboard-o":!0})})," ",this.props.keyMap),_react2.default.createElement("ul",null,keyMappings.map(function(t){return _react2.default.createElement("li",{key:t,disabled:e.props.keyMap===t,onClick:function(){return e.props.onKeyMapChange(t)}},_react2.default.createElement("button",{type:"button"},t))})))}}]),t}(_react2.default.Component);KeyMapButton.propTypes={onKeyMapChange:_propTypes2.default.func,keyMap:_propTypes2.default.string},exports.default=KeyMapButton;

/***/ }),

/***/ "qdAQ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _classCallCheck2=__webpack_require__("Zrlr"),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__("wxAW"),_createClass3=_interopRequireDefault(_createClass2),_possibleConstructorReturn2=__webpack_require__("zwoO"),_possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2),_inherits2=__webpack_require__("Pf15"),_inherits3=_interopRequireDefault(_inherits2),_propTypes=__webpack_require__("KSGD"),_propTypes2=_interopRequireDefault(_propTypes),_react=__webpack_require__("U7vG"),_react2=_interopRequireDefault(_react),ShareDialog=function(e){function t(e){(0,_classCallCheck3.default)(this,t);var r=(0,_possibleConstructorReturn3.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r._outerClick=r._outerClick.bind(r),r}return(0,_inherits3.default)(t,e),(0,_createClass3.default)(t,[{key:"_outerClick",value:function(e){e.target===document.getElementById("ShareDialog")&&this.props.onWantToClose()}},{key:"render",value:function(){return this.props.visible?_react2.default.createElement("div",{id:"ShareDialog",className:"dialog",onClick:this._outerClick},_react2.default.createElement("div",{className:"inner",style:{maxWidth:"80%",width:600}},_react2.default.createElement("div",{className:"body"},this.props.snippet.getShareInfo()),_react2.default.createElement("div",{className:"footer"},_react2.default.createElement("button",{onClick:this.props.onWantToClose},"Close")))):null}}]),t}(_react2.default.Component);exports.default=ShareDialog,ShareDialog.propTypes={onWantToClose:_propTypes2.default.func.isRequired,visible:_propTypes2.default.bool.isRequired,snippet:_propTypes2.default.object};

/***/ }),

/***/ "qk5u":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _classCallCheck2=__webpack_require__("Zrlr"),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__("wxAW"),_createClass3=_interopRequireDefault(_createClass2),_possibleConstructorReturn2=__webpack_require__("zwoO"),_possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2),_inherits2=__webpack_require__("Pf15"),_inherits3=_interopRequireDefault(_inherits2),_propTypes=__webpack_require__("KSGD"),_propTypes2=_interopRequireDefault(_propTypes),_react=__webpack_require__("U7vG"),_react2=_interopRequireDefault(_react),CompactArrayView=function(e){function r(){return(0,_classCallCheck3.default)(this,r),(0,_possibleConstructorReturn3.default)(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return(0,_inherits3.default)(r,e),(0,_createClass3.default)(r,[{key:"shouldComponentUpdate",value:function(e){return e.array.length!==this.props.array.length}},{key:"render",value:function(){var e=this.props.array,r=e.length;return 0===r?_react2.default.createElement("span",{className:"p"},"[ ]"):_react2.default.createElement("span",null,_react2.default.createElement("span",{className:"p"},"["),_react2.default.createElement("span",{className:"compact placeholder ge",onClick:this.props.onClick},r+" element"+(r>1?"s":"")),_react2.default.createElement("span",{className:"p"},"]"))}}]),r}(_react2.default.Component);exports.default=CompactArrayView,CompactArrayView.propTypes={array:_propTypes2.default.oneOfType([_propTypes2.default.array,_propTypes2.default.shape({length:_propTypes2.default.number})]).isRequired,onClick:_propTypes2.default.func};

/***/ }),

/***/ "qzBz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _extends2=__webpack_require__("Dd8w"),_extends3=_interopRequireDefault(_extends2),_package=__webpack_require__("Sim1"),_package2=_interopRequireDefault(_package),ID="eslint-v2",name="ESLint v2";exports.default={id:ID,displayName:name,version:_package2.default.version,homepage:_package2.default.homepage,defaultParserID:"babel-eslint",loadTransformer:function(e){__webpack_require__.e/* require */(12).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("ZhLI"),__webpack_require__("fh/x")]; (function(t,n){return e((0,_extends3.default)({},t,{utils:n}))}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}).catch(__webpack_require__.oe)},transform:function(e,t,n){var r=e.eslint,a=e.rules,u=e.sourceCode,i=e.utils;return i.defineRule(a,t),i.runRule(n,r,u)}};

/***/ }),

/***/ "rRZ9":
/***/ (function(module, exports, __webpack_require__) {

module.exports=__webpack_require__("KxVw");

/***/ }),

/***/ "rWcW":
/***/ (function(module, exports) {

module.exports = "exports.Rule = class Rule extends Lint.Rules.AbstractRule {\n  apply(sourceFile) {\n    return this.applyWithWalker(new NoTemplateExpressionWalker(sourceFile, this.getOptions()));\n  }\n};\n\n// The walker takes care of all the work.\nclass NoTemplateExpressionWalker extends Lint.RuleWalker {\n  visitTemplateExpression(node) {\n    // create a failure at the current position\n    this.addFailure(this.createFailure(node.getStart(), node.getWidth(), \"Do not use template literals\"));\n\n    // call the base version of this visitor to actually parse this node\n    super.visitTemplateExpression(node);\n  }\n}\n"

/***/ }),

/***/ "s9iO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _compileModule=__webpack_require__("K5Vt"),_compileModule2=_interopRequireDefault(_compileModule),_package=__webpack_require__("dlma"),_package2=_interopRequireDefault(_package),ID="postcss";exports.default={id:ID,displayName:ID,version:_package2.default.version,homepage:_package2.default.homepage,defaultParserID:"postcss",loadTransformer:function(e){__webpack_require__.e/* require */(24).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("Y7In")]; (function(o){e({postcss:o})}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}).catch(__webpack_require__.oe)},transform:function(e,o,r){var s=e.postcss,t=(0,_compileModule2.default)(o,{require:function(e){switch(e){case"postcss":return s;default:throw new Error("Cannot find module '"+e+"'")}}});return s([(t.default||t)()]).process(r).css}};

/***/ }),

/***/ "sMBK":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _slicedToArray2=__webpack_require__("d7EF"),_slicedToArray3=_interopRequireDefault(_slicedToArray2),_classCallCheck2=__webpack_require__("Zrlr"),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__("wxAW"),_createClass3=_interopRequireDefault(_createClass2),_possibleConstructorReturn2=__webpack_require__("zwoO"),_possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2),_inherits2=__webpack_require__("Pf15"),_inherits3=_interopRequireDefault(_inherits2),_codemirror=__webpack_require__("8U58"),_codemirror2=_interopRequireDefault(_codemirror);__webpack_require__("Hyg2"),__webpack_require__("tjx/"),__webpack_require__("7Xsf");var _propTypes=__webpack_require__("KSGD"),_propTypes2=_interopRequireDefault(_propTypes),_pubsubJs=__webpack_require__("x9pK"),_pubsubJs2=_interopRequireDefault(_pubsubJs),_react=__webpack_require__("U7vG"),_react2=_interopRequireDefault(_react),defaultPrettierOptions={printWidth:80,tabWidth:2,singleQuote:!1,trailingComma:"none",bracketSpacing:!0,jsxBracketSameLine:!1,parser:"babylon"},Editor=function(e){function r(e){(0,_classCallCheck3.default)(this,r);var t=(0,_possibleConstructorReturn3.default)(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e));return t.state={value:e.value},t}return(0,_inherits3.default)(r,e),(0,_createClass3.default)(r,[{key:"componentWillReceiveProps",value:function(e){var r=this;e.value!==this.state.value&&this.setState({value:e.value},function(){return r.codeMirror.setValue(e.value)}),e.mode!==this.props.mode&&this.codeMirror.setOption("mode",e.mode),e.keyMap!==this.props.keyMap&&this.codeMirror.setOption("keyMap",e.keyMap),this._setError(e.error)}},{key:"shouldComponentUpdate",value:function(){return!1}},{key:"getValue",value:function(){return this.codeMirror&&this.codeMirror.getValue()}},{key:"_getErrorLine",value:function(e){return e.loc?e.loc.line:e.lineNumber||e.line}},{key:"_setError",value:function(e){if(this.codeMirror){var r=this.props.error;if(r){var t=this._getErrorLine(r);t&&this.codeMirror.removeLineClass(t-1,"text","errorMarker")}if(e){var i=this._getErrorLine(e);i&&this.codeMirror.addLineClass(i-1,"text","errorMarker")}}}},{key:"_posFromIndex",value:function(e,r){return(this.props.posFromIndex?this.props:e).posFromIndex(r)}},{key:"componentDidMount",value:function(){var e=this;this._CMHandlers=[],this._subscriptions=[],this.codeMirror=(0,_codemirror2.default)(this.container,{keyMap:this.props.keyMap,value:this.state.value,mode:this.props.mode,lineNumbers:this.props.lineNumbers,readOnly:this.props.readOnly}),this._bindCMHandler("blur",function(r){e.props.enableFormatting&&__webpack_require__.e/* require */(0/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("kHhb")]; (function(e){var t=r.doc.getValue(),i=Object.assign({},defaultPrettierOptions,{printWidth:r.display.maxLineLength});r.doc.setValue(e.format(t,i))}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}).catch(__webpack_require__.oe)}),this._bindCMHandler("changes",function(){clearTimeout(e._updateTimer),e._updateTimer=setTimeout(e._onContentChange.bind(e),200)}),this._bindCMHandler("cursorActivity",function(){clearTimeout(e._updateTimer),e._updateTimer=setTimeout(e._onActivity.bind(e,!0),100)}),this._subscriptions.push(_pubsubJs2.default.subscribe("PANEL_RESIZE",function(){e.codeMirror&&e.codeMirror.refresh()})),this.props.highlight&&(this._markerRange=null,this._mark=null,this._subscriptions.push(_pubsubJs2.default.subscribe("HIGHLIGHT",function(r,t){var i=t.range;if(i){var o=e.codeMirror.getDoc();e._markerRange=i,e._mark&&e._mark.clear();var s=i.map(function(r){return e._posFromIndex(o,r)}),n=(0,_slicedToArray3.default)(s,2),a=n[0],u=n[1];if(!a||!u)return void(e._markerRange=e._mark=null);e._mark=e.codeMirror.markText(a,u,{className:"marked"})}}),_pubsubJs2.default.subscribe("CLEAR_HIGHLIGHT",function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.range;(!i||e._markerRange&&i[0]===e._markerRange[0]&&i[1]===e._markerRange[1])&&(e._markerRange=null,e._mark&&(e._mark.clear(),e._mark=null))}))),this.props.error&&this._setError(this.props.error)}},{key:"componentWillUnmount",value:function(){clearTimeout(this._updateTimer),this._unbindHandlers(),this._markerRange=null,this._mark=null;var e=this.container;e.removeChild(e.children[0]),this.codeMirror=null}},{key:"_bindCMHandler",value:function(e,r){this._CMHandlers.push(e,r),this.codeMirror.on(e,r)}},{key:"_unbindHandlers",value:function(){for(var e=this._CMHandlers,r=0;r<e.length;r+=2)this.codeMirror.off(e[r],e[r+1]);this._subscriptions.forEach(_pubsubJs2.default.unsubscribe)}},{key:"_onContentChange",value:function(){var e=this,r=this.codeMirror.getDoc(),t={value:r.getValue(),cursor:r.indexFromPos(r.getCursor())};this.setState({value:t.value},function(){return e.props.onContentChange(t)})}},{key:"_onActivity",value:function(){this.props.onActivity(this.codeMirror.getDoc().indexFromPos(this.codeMirror.getCursor()))}},{key:"render",value:function(){var e=this;return _react2.default.createElement("div",{className:"editor",ref:function(r){return e.container=r}})}}]),r}(_react2.default.Component);exports.default=Editor,Editor.propTypes={value:_propTypes2.default.string,highlight:_propTypes2.default.bool,lineNumbers:_propTypes2.default.bool,readOnly:_propTypes2.default.bool,onContentChange:_propTypes2.default.func,onActivity:_propTypes2.default.func,posFromIndex:_propTypes2.default.func,error:_propTypes2.default.object,mode:_propTypes2.default.string,enableFormatting:_propTypes2.default.bool,keyMap:_propTypes2.default.string},Editor.defaultProps={value:"",highlight:!0,lineNumbers:!0,readOnly:!1,mode:"javascript",keyMap:"default",onContentChange:function(){},onActivity:function(){}};

/***/ }),

/***/ "spke":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _extends2=__webpack_require__("Dd8w"),_extends3=_interopRequireDefault(_extends2),_react=__webpack_require__("U7vG"),_react2=_interopRequireDefault(_react),_defaultParserInterface=__webpack_require__("zoXw"),_defaultParserInterface2=_interopRequireDefault(_defaultParserInterface),_package=__webpack_require__("yAbH"),_package2=_interopRequireDefault(_package),_SettingsRenderer=__webpack_require__("nhMB"),_SettingsRenderer2=_interopRequireDefault(_SettingsRenderer),ID="graphql-js",defaultOptions={noLocation:!1,noSource:!1},parserSettingsConfiguration={fields:Object.keys(defaultOptions)};exports.default=(0,_extends3.default)({},_defaultParserInterface2.default,{id:ID,displayName:ID,version:_package2.default.version,homepage:_package2.default.homepage,locationProps:new Set(["loc"]),loadParser:function(e){__webpack_require__.e/* require */(31).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("Hamp")]; (function(t){var r=t.parse;e({parse:r})}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}).catch(__webpack_require__.oe)},parse:function(e,t,r){return(0,e.parse)(t,(0,_extends3.default)({},defaultOptions,r))},nodeToRange:function(e){if(e.loc)return[e.loc.start,e.loc.end]},getNodeName:function(e){return e.kind},opensByDefault:function(e,t){return"definitions"===t},renderSettings:function(e,t){return _react2.default.createElement(_SettingsRenderer2.default,{settingsConfiguration:parserSettingsConfiguration,parserSettings:(0,_extends3.default)({},defaultOptions,e),onChange:t})}});

/***/ }),

/***/ "tG/1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function mapStateToProps(e){return{code:selectors.getCode(e),parser:selectors.getParser(e),parserSettings:selectors.getParserSettings(e),cursor:selectors.getCursor(e)}}function mapDispatchToProps(e){return{onParseError:function(r){return e((0,_actions.setParseError)(r))}}}Object.defineProperty(exports,"__esModule",{value:!0});var _reactRedux=__webpack_require__("RH2O"),_ASTOutput=__webpack_require__("nKzu"),_ASTOutput2=_interopRequireDefault(_ASTOutput),_actions=__webpack_require__("mUbh"),_selectors=__webpack_require__("cAC5"),selectors=_interopRequireWildcard(_selectors);exports.default=(0,_reactRedux.connect)(mapStateToProps,mapDispatchToProps)(_ASTOutput2.default);

/***/ }),

/***/ "tLzh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function SaveButton(e){var a=e.canSave,t=e.saving,r=e.forking,p=e.onSave;return _react2.default.createElement("button",{type:"button",disabled:!a||t||r,onClick:p},_react2.default.createElement("i",{className:(0,_classnames2.default)({fa:!0,"fa-spinner":t,"fa-pulse":t,"fa-floppy-o":!t,"fa-fw":!0})})," Save")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=SaveButton;var _propTypes=__webpack_require__("KSGD"),_propTypes2=_interopRequireDefault(_propTypes),_react=__webpack_require__("U7vG"),_react2=_interopRequireDefault(_react),_classnames=__webpack_require__("HW6M"),_classnames2=_interopRequireDefault(_classnames);SaveButton.propTypes={canSave:_propTypes2.default.bool,saving:_propTypes2.default.bool,forking:_propTypes2.default.bool,onSave:_propTypes2.default.func};

/***/ }),

/***/ "uIi8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _compileModule=__webpack_require__("K5Vt"),_compileModule2=_interopRequireDefault(_compileModule),_babel6Package=__webpack_require__("3ne4"),_babel6Package2=_interopRequireDefault(_babel6Package),ID="babelv6";exports.default={id:ID,displayName:ID,version:_babel6Package2.default.version,homepage:_babel6Package2.default.homepage,defaultParserID:"babylon6",loadTransformer:function(e){__webpack_require__.e/* require */(7).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("LKZ7"),__webpack_require__("pJo7")]; (function(a,r){return e({babel:a,recast:r})}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}).catch(__webpack_require__.oe)},transform:function(e,a,r){var t=e.babel,o=e.recast,l=(0,_compileModule2.default)(a);return t.transform(r,{parserOpts:{parser:o.parse,plugins:["asyncGenerators","classConstructorCall","classProperties","decorators","doExpressions","exportExtensions","flow","functionSent","functionBind","jsx","objectRestSpread","dynamicImport"]},generatorOpts:{generator:o.print},plugins:[(l.default||l)(t)],sourceMaps:!0})}};

/***/ }),

/***/ "uQOR":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0}),exports.fileExtension=exports.mimeTypes=exports.displayName=exports.id=void 0,__webpack_require__("puAj");var id=exports.id="css",displayName=exports.displayName="CSS",mimeTypes=exports.mimeTypes=["text/css"],fileExtension=exports.fileExtension="css";

/***/ }),

/***/ "uUNL":
/***/ (function(module, exports) {

module.exports = "[\n  Constructor(ArrayBuffer buffer,\n              optional unsigned long byteOffset,\n              optional unsigned long byteLength)\n]\ninterface DataView {\n    // Gets the value of the given type at the specified byte offset\n    // from the start of the view. There is no alignment constraint;\n    // multi-byte values may be fetched from any offset.\n    //\n    // For multi-byte values, the optional littleEndian argument\n    // indicates whether a big-endian or little-endian value should be\n    // read. If false or undefined, a big-endian value is read.\n    //\n    // These methods raise an exception if they would read\n    // beyond the end of the view.\n    byte getInt8(unsigned long byteOffset);\n    octet getUint8(unsigned long byteOffset);\n    short getInt16(unsigned long byteOffset,\n                   optional boolean littleEndian);\n    unsigned short getUint16(unsigned long byteOffset,\n                             optional boolean littleEndian);\n    long getInt32(unsigned long byteOffset,\n                  optional boolean littleEndian);\n    unsigned long getUint32(unsigned long byteOffset,\n                            optional boolean littleEndian);\n    float getFloat32(unsigned long byteOffset,\n                     optional boolean littleEndian);\n    double getFloat64(unsigned long byteOffset,\n                      optional boolean littleEndian);\n\n    // Stores a value of the given type at the specified byte offset\n    // from the start of the view. There is no alignment constraint;\n    // multi-byte values may be stored at any offset.\n    //\n    // For multi-byte values, the optional littleEndian argument\n    // indicates whether the value should be stored in big-endian or\n    // little-endian byte order. If false or undefined, the value is\n    // stored in big-endian byte order.\n    //\n    // These methods raise an exception if they would write\n    // beyond the end of the view.\n    void setInt8(unsigned long byteOffset,\n                 byte value);\n    void setUint8(unsigned long byteOffset,\n                  octet value);\n    void setInt16(unsigned long byteOffset,\n                  short value,\n                  optional boolean littleEndian);\n    void setUint16(unsigned long byteOffset,\n                   unsigned short value,\n                   optional boolean littleEndian);\n    void setInt32(unsigned long byteOffset,\n                  long value,\n                  optional boolean littleEndian);\n    void setUint32(unsigned long byteOffset,\n                   unsigned long value,\n                   optional boolean littleEndian);\n    void setFloat32(unsigned long byteOffset,\n                    float value,\n                    optional boolean littleEndian);\n    void setFloat64(unsigned long byteOffset,\n                    double value,\n                    optional boolean littleEndian);\n};\nDataView implements ArrayBufferView;\n"

/***/ }),

/***/ "uocx":
/***/ (function(module, exports) {

module.exports = "--[[\n    Paste or drop some Lua here and explore\n    the syntax tree created by chosen parser.\n    Enjoy!\n--]]\n\nfunction allwords ()\n    local line = io.read()    -- current line\n    local pos = 1             -- current position in the line\n    return function ()        -- iterator function\n    while line do           -- repeat while there are lines\n        local s, e = string.find(line, \"%w+\", pos)\n        if s then      -- found a word?\n        pos = e + 1  -- update next position\n        return string.sub(line, s, e)   -- return the word\n        else\n        line = io.read()    -- word not found; try next line\n        pos = 1             -- restart from first position\n        end\n    end\n    return nil            -- no more lines: end of traversal\n    end\nend"

/***/ }),

/***/ "wQLr":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function mapDispatchToProps(e){return{onText:function(r,t,o,a){e((0,_actions.dropText)(o,a))},onError:function(r){return e((0,_actions.setError)(r))}}}Object.defineProperty(exports,"__esModule",{value:!0});var _reactRedux=__webpack_require__("RH2O"),_PasteDropTarget=__webpack_require__("kMaA"),_PasteDropTarget2=_interopRequireDefault(_PasteDropTarget),_actions=__webpack_require__("mUbh");exports.default=(0,_reactRedux.connect)(null,mapDispatchToProps)(_PasteDropTarget2.default);

/***/ }),

/***/ "wRaN":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _extends2=__webpack_require__("Dd8w"),_extends3=_interopRequireDefault(_extends2),_defaultParserInterface=__webpack_require__("zoXw"),_defaultParserInterface2=_interopRequireDefault(_defaultParserInterface),_package=__webpack_require__("1mPm"),_package2=_interopRequireDefault(_package),ID="glsl-parser";exports.default=(0,_extends3.default)({},_defaultParserInterface2.default,{id:ID,displayName:ID,version:_package2.default.version,homepage:_package2.default.homepage,locationProps:new Set(["loc"]),_ignoredProperties:new Set(["loc","parent","stage"]),loadParser:function(e){__webpack_require__.e/* require */(33).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("t+gq"),__webpack_require__("v+EZ")]; (function(r,t){e({tokenize:r,parse:t})}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}).catch(__webpack_require__.oe)},parse:function(e,r){function t(e,r){e.loc={start:e.token.position||0,end:r},e.children.forEach(function(n,a){var o=e.children[a+1];t(n,o&&o.token&&"position"in o.token?o.token.position-(o.token.preceding||[]).reduce(function(e,r){return e+(r.data||"").length},0):r)})}var n=e.tokenize,a=e.parse,o=n(r),i=a(o);return t(i,r.length),i},nodeToRange:function(e){var r=e.loc;if(r)return[r.start,r.end]},getNodeName:function(e){return e.type},opensByDefault:function(e,r){return"children"===r&&"(program)"===e.type}});

/***/ }),

/***/ "wnVi":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function words(e){for(var t={},n=e.split(" "),r=0;r<n.length;++r)t[n[r]]=!0;return t}function cppHook(e,t){if(!t.startOfLine)return!1;for(;;){if(!e.skipTo("\\")){e.skipToEnd(),t.tokenize=null;break}if(e.next(),e.eol()){t.tokenize=cppHook;break}}return"meta"}function def(e,t){function n(e){if(e)for(var t in e)e.hasOwnProperty(t)&&r.push(t)}"string"==typeof e&&(e=[e]);var r=[];n(t.keywords),n(t.builtin),n(t.atoms),r.length&&(t.helperType=e[0],_codemirror2.default.registerHelper("hintWords",e[0],r));for(var o=0;o<e.length;++o)_codemirror2.default.defineMIME(e[o],t)}var _codemirror=__webpack_require__("8U58"),_codemirror2=_interopRequireDefault(_codemirror);_codemirror2.default.defineMode("clike",function(e,t){function n(e,t){var n=e.next();if(x[n]){var i=x[n](e,t);if(!1!==i)return i}if('"'==n||"'"==n)return t.tokenize=r(n),t.tokenize(e,t);if(/[\[\]{}\(\),;\:\.]/.test(n))return s=n,null;if(/\d/.test(n))return e.eatWhile(/[\w\.]/),"number";if("/"==n){if(e.eat("*"))return t.tokenize=o,o(e,t);if(e.eat("/"))return e.skipToEnd(),"comment"}if(y.test(n))return e.eatWhile(y),"operator";e.eatWhile(/[\w\$_\xa1-\uffff]/);var a=e.current();return d.propertyIsEnumerable(a)?(p.propertyIsEnumerable(a)&&(s="newstatement"),"keyword"):m.propertyIsEnumerable(a)?(p.propertyIsEnumerable(a)&&(s="newstatement"),"builtin"):g.propertyIsEnumerable(a)?"atom":"variable"}function r(e){return function(t,n){for(var r,o=!1,i=!1;null!=(r=t.next());){if(r==e&&!o){i=!0;break}o=!o&&"\\"==r}return(i||!o&&!k)&&(n.tokenize=null),"string"}}function o(e,t){for(var n,r=!1;n=e.next();){if("/"==n&&r){t.tokenize=null;break}r="*"==n}return"comment"}function i(e,t,n,r,o){this.indented=e,this.column=t,this.type=n,this.align=r,this.prev=o}function a(e,t,n){var r=e.indented;return e.context&&"statement"==e.context.type&&(r=e.context.indented),e.context=new i(r,t,n,null,e.context)}function l(e){var t=e.context.type;return")"!=t&&"]"!=t&&"}"!=t||(e.indented=e.context.indented),e.context=e.context.prev}var s,u=e.indentUnit,c=t.statementIndentUnit||u,f=t.dontAlignCalls,d=t.keywords||{},m=t.builtin||{},p=t.blockKeywords||{},g=t.atoms||{},x=t.hooks||{},k=t.multiLineStrings,v=!1!==t.indentStatements,y=/[+\-*&%=<>!?|\/]/;return{startState:function(e){return{tokenize:null,context:new i((e||0)-u,0,"top",!1),indented:0,startOfLine:!0}},token:function(e,t){var r=t.context;if(e.sol()&&(null==r.align&&(r.align=!1),t.indented=e.indentation(),t.startOfLine=!0),e.eatSpace())return null;s=null;var o=(t.tokenize||n)(e,t);if("comment"==o||"meta"==o)return o;if(null==r.align&&(r.align=!0),";"!=s&&":"!=s&&","!=s||"statement"!=r.type)if("{"==s)a(t,e.column(),"}");else if("["==s)a(t,e.column(),"]");else if("("==s)a(t,e.column(),")");else if("}"==s){for(;"statement"==r.type;)r=l(t);for("}"==r.type&&(r=l(t));"statement"==r.type;)r=l(t)}else s==r.type?l(t):v&&(("}"==r.type||"top"==r.type)&&";"!=s||"statement"==r.type&&"newstatement"==s)&&a(t,e.column(),"statement");else l(t);return t.startOfLine=!1,o},indent:function(e,t){if(e.tokenize!=n&&null!=e.tokenize)return _codemirror2.default.Pass;var r=e.context,o=t&&t.charAt(0);"statement"==r.type&&"}"==o&&(r=r.prev);var i=o==r.type;return"statement"==r.type?r.indented+("{"==o?0:c):!r.align||f&&")"==r.type?")"!=r.type||i?r.indented+(i?0:u):r.indented+c:r.column+(i?0:1)},electricChars:"{}",blockCommentStart:"/*",blockCommentEnd:"*/",lineComment:"//",fold:"brace"}}),def(["x-shader/x-vertex","x-shader/x-fragment"],{name:"clike",keywords:words("float int bool void vec2 vec3 vec4 ivec2 ivec3 ivec4 bvec2 bvec3 bvec4 mat2 mat3 mat4 sampler2D sampler3D samplerCube const attribute uniform varying break continue discard return for while do if else struct in out inout"),blockKeywords:words("for while do if else struct"),builtin:words("radians degrees sin cos tan asin acos atan pow exp log exp2 sqrt inversesqrt abs sign floor ceil fract mod min max clamp mix step smoothstep length distance dot cross normalize faceforward reflect refract matrixCompMult lessThan lessThanEqual greaterThan greaterThanEqual equal notEqual any all not texture2D texture2DLod texture2DProjLod textureCube textureCubeLod "),atoms:words("true false gl_FragColor gl_PointCoord gl_Position gl_PointSize gl_FragCoord gl_FrontFacing gl_FragData gl_DepthRangeParameters gl_MaxVertexAttribs gl_MaxVaryingVectors gl_MaxVertexUniformVectorsgl_MaxVertexTextureImageUnits gl_MaxTextureImageUnits gl_MaxFragmentUniformVectors gl_MaxDrawBuffers"),hooks:{"#":cppHook},modeProps:{fold:["brace","include"]}});

/***/ }),

/***/ "xf3G":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _extends2=__webpack_require__("Dd8w"),_extends3=_interopRequireDefault(_extends2),_defaultParserInterface=__webpack_require__("zoXw"),_defaultParserInterface2=_interopRequireDefault(_defaultParserInterface);exports.default=(0,_extends3.default)({},_defaultParserInterface2.default,{getOffset:function(e){var t=e.line,r=e.column;return this.lineOffsets[t-1]+r-1},parse:function(e,t){this.lineOffsets=[];var r=0;do{this.lineOffsets.push(r)}while(r=t.indexOf("\n",r)+1);return e(t)}});

/***/ }),

/***/ "y/zs":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _regenerator=__webpack_require__("Xxa5"),_regenerator2=_interopRequireDefault(_regenerator),_extends2=__webpack_require__("Dd8w"),_extends3=_interopRequireDefault(_extends2),_defaultESTreeParserInterface=__webpack_require__("2Wat"),_defaultESTreeParserInterface2=_interopRequireDefault(_defaultESTreeParserInterface),_package=__webpack_require__("495F"),_package2=_interopRequireDefault(_package),ID="esformatter-parser",name="esformatter";exports.default=(0,_extends3.default)({},_defaultESTreeParserInterface2.default,{id:ID,displayName:name,version:_package2.default.version,homepage:_package2.default.homepage,locationProps:new Set(["loc","start","end","range"]),loadParser:function(e){__webpack_require__.e/* require */(15).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("6eIf")]; (function(r){e(r)}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}).catch(__webpack_require__.oe)},parse:function(e,r){return e.parse(r)},forEachProperty:_regenerator2.default.mark(function e(r){var t,a;return _regenerator2.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=_regenerator2.default.keys(r);case 1:if((e.t1=e.t0()).done){e.next=11;break}if(t=e.t1.value,!this._ignoredProperties.has(t)){e.next=5;break}return e.abrupt("continue",1);case 5:return a=r[t],"Program"!==r.type&&"parent"===t&&(a="[Circular]"),e.next=9,{value:a,key:t,computed:!1};case 9:e.next=1;break;case 11:case"end":return e.stop()}},e,this)}),_ignoredProperties:new Set(["_paths","_babelType","__clone","comments","directives","extra","leadingComments","root","sourceType","tokens","trailingComments"])});

/***/ }),

/***/ "y9lz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var o={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(o[r]=e[r]);return o.default=e,o}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function mapStateToProps(e){var o=selectors.getParser(e);return{forking:selectors.isForking(e),saving:selectors.isSaving(e),canSave:selectors.canSave(e),canFork:selectors.canFork(e),category:o.category,parser:o,transformer:selectors.getTransformer(e),keyMap:selectors.getKeyMap(e),showTransformer:selectors.showTransformer(e),snippet:selectors.getRevision(e)}}function mapDispatchToProps(e){return{onParserChange:function(o){e((0,_actions.setParser)(o)),(0,_logger.logEvent)("parser","select",o.id)},onCategoryChange:function(o){e((0,_actions.selectCategory)(o)),(0,_logger.logEvent)("category","select",o.id)},onParserSettingsButtonClick:function(){e((0,_actions.openSettingsDialog)()),(0,_logger.logEvent)("parser","open_settings")},onShareButtonClick:function(){e((0,_actions.openShareDialog)()),(0,_logger.logEvent)("ui","open_share")},onTransformChange:function(o){e(o?(0,_actions.selectTransformer)(o):(0,_actions.hideTransformer)()),o&&(0,_logger.logEvent)("tool","select",o.id)},onKeyMapChange:function(o){e((0,_actions.setKeyMap)(o)),o&&(0,_logger.logEvent)("keyMap",o)},onSave:function(){return e((0,_actions.save)(!1))},onFork:function(){return e((0,_actions.save)(!0))},onNew:function(){global.location.hash?global.location.hash="":e((0,_actions.reset)())}}}Object.defineProperty(exports,"__esModule",{value:!0});var _reactRedux=__webpack_require__("RH2O"),_actions=__webpack_require__("mUbh"),_Toolbar=__webpack_require__("7O3v"),_Toolbar2=_interopRequireDefault(_Toolbar),_selectors=__webpack_require__("cAC5"),selectors=_interopRequireWildcard(_selectors),_logger=__webpack_require__("fz81");exports.default=(0,_reactRedux.connect)(mapStateToProps,mapDispatchToProps)(_Toolbar2.default);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("DuR2")))

/***/ }),

/***/ "yf8N":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0}),exports.fileExtension=exports.mimeTypes=exports.displayName=exports.id=void 0,__webpack_require__("Qei9");var id=exports.id="handlebars",displayName=exports.displayName="Handlebars",mimeTypes=exports.mimeTypes=["text/x-handlebars-template"],fileExtension=exports.fileExtension="handlebars";

/***/ }),

/***/ "zYNp":
/***/ (function(module, exports) {

module.exports = "module.exports = {\n  Char({node}) {\n    // Replace 'a' chars with 'b'.\n    if (node.kind === 'simple' && node.value === 'a') {\n      node.value = 'b';\n    }\n  }\n};"

/***/ }),

/***/ "zoXw":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _regenerator=__webpack_require__("Xxa5"),_regenerator2=_interopRequireDefault(_regenerator);exports.default={showInMenu:!0,_ignoredProperties:new Set,locationProps:new Set,opensByDefault:function(){return!1},nodeToRange:function(e){return e.range},getNodeName:function(e){return e.type},forEachProperty:_regenerator2.default.mark(function e(r){var t;return _regenerator2.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=_regenerator2.default.keys(r);case 1:if((e.t1=e.t0()).done){e.next=9;break}if(t=e.t1.value,!this._ignoredProperties.has(t)){e.next=5;break}return e.abrupt("continue",1);case 5:return e.next=7,{value:r[t],key:t,computed:!1};case 7:e.next=1;break;case 9:case"end":return e.stop()}},e,this)})};

/***/ }),

/***/ "zvp3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _defineProperty2=__webpack_require__("bOdI"),_defineProperty3=_interopRequireDefault(_defineProperty2),_classCallCheck2=__webpack_require__("Zrlr"),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__("wxAW"),_createClass3=_interopRequireDefault(_createClass2),_possibleConstructorReturn2=__webpack_require__("zwoO"),_possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2),_inherits2=__webpack_require__("Pf15"),_inherits3=_interopRequireDefault(_inherits2),_Element=__webpack_require__("C1Fw"),_Element2=_interopRequireDefault(_Element),_propTypes=__webpack_require__("KSGD"),_propTypes2=_interopRequireDefault(_propTypes),_react=__webpack_require__("U7vG"),_react2=_interopRequireDefault(_react),_pubsubJs=__webpack_require__("x9pK"),_pubsubJs2=_interopRequireDefault(_pubsubJs),_logger=__webpack_require__("fz81");__webpack_require__("PbNL");var Tree=function(e){function Tree(e){(0,_classCallCheck3.default)(this,Tree);var t=(0,_possibleConstructorReturn3.default)(this,(Tree.__proto__||Object.getPrototypeOf(Tree)).call(this,e));return t.state={autofocus:!0,hideFunctions:!0},t}return(0,_inherits3.default)(Tree,e),(0,_createClass3.default)(Tree,[{key:"_setOption",value:function(e,t){this.setState((0,_defineProperty3.default)({},e,t.target.checked)),(0,_logger.logEvent)("tree_view_settings",t.target.checked?"enabled":"disabled",e)}},{key:"render",value:function(){return _react2.default.createElement("div",{className:"tree-visualization container"},_react2.default.createElement("div",{className:"toolbar"},_react2.default.createElement("label",{title:"Auto open the node at the cursor in the source code"},_react2.default.createElement("input",{type:"checkbox",checked:this.state.autofocus,onChange:this._setOption.bind(this,"autofocus")}),"Autofocus"),_react2.default.createElement("label",null,_react2.default.createElement("input",{type:"checkbox",checked:this.state.hideFunctions,onChange:this._setOption.bind(this,"hideFunctions")}),"Hide methods"),_react2.default.createElement("label",null,_react2.default.createElement("input",{type:"checkbox",checked:this.state.hideEmptyKeys,onChange:this._setOption.bind(this,"hideEmptyKeys")}),"Hide empty keys"),_react2.default.createElement("label",null,_react2.default.createElement("input",{type:"checkbox",checked:this.state.hideLocationData,onChange:this._setOption.bind(this,"hideLocationData")}),"Hide location data"),_react2.default.createElement("label",null,_react2.default.createElement("input",{type:"checkbox",checked:this.state.hideTypeKeys,onChange:this._setOption.bind(this,"hideTypeKeys")}),"Hide type keys")),_react2.default.createElement("ul",{onMouseLeave:function(){_pubsubJs2.default.publish("CLEAR_HIGHLIGHT")}},_react2.default.createElement(_Element2.default,{focusPath:this.props.focusPath,value:this.props.ast,level:0,parser:this.props.parser,settings:this.state})))}}]),Tree}(_react2.default.Component);exports.default=Tree,Tree.propTypes={focusPath:_propTypes2.default.array,ast:_propTypes2.default.oneOfType([_propTypes2.default.array,_propTypes2.default.object]),parser:_propTypes2.default.object};

/***/ }),

/***/ "zyXp":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _classCallCheck2=__webpack_require__("Zrlr"),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__("wxAW"),_createClass3=_interopRequireDefault(_createClass2),_possibleConstructorReturn2=__webpack_require__("zwoO"),_possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2),_get2=__webpack_require__("yEsh"),_get3=_interopRequireDefault(_get2),_inherits2=__webpack_require__("Pf15"),_inherits3=_interopRequireDefault(_inherits2),_extends2=__webpack_require__("Dd8w"),_extends3=_interopRequireDefault(_extends2),_react=__webpack_require__("U7vG"),_react2=_interopRequireDefault(_react),_defaultParserInterface=__webpack_require__("zoXw"),_defaultParserInterface2=_interopRequireDefault(_defaultParserInterface),_package=__webpack_require__("kR3d"),_package2=_interopRequireDefault(_package),_SettingsRenderer=__webpack_require__("nhMB"),_SettingsRenderer2=_interopRequireDefault(_SettingsRenderer),ID="htmlparser2",defaultOptions={xmlMode:!1,lowerCaseAttributeNames:!0,lowerCaseTags:!0},parserSettingsConfiguration={fields:Object.keys(defaultOptions)};exports.default=(0,_extends3.default)({},_defaultParserInterface2.default,{id:ID,displayName:ID,version:_package2.default.version,homepage:_package2.default.homepage||"https://github.com/fb55/htmlparser2",locationProps:new Set(["startIndex"]),loadParser:function(e){__webpack_require__.e/* require */(32).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("50mV"),__webpack_require__("Pj+S")]; (function(t,r){var n=function(e){function t(){return(0,_classCallCheck3.default)(this,t),(0,_possibleConstructorReturn3.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{withStartIndices:!0}))}return(0,_inherits3.default)(t,e),(0,_createClass3.default)(t,[{key:"_setEnd",value:function(e){e.endIndex=this._parser.endIndex+1}},{key:"onprocessinginstruction",value:function(e,r){this._parser.endIndex=this._parser._tokenizer._index,(0,_get3.default)(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"onprocessinginstruction",this).call(this,e,r)}},{key:"_addDomElement",value:function(e){(0,_get3.default)(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"_addDomElement",this).call(this,e),this._setEnd(e)}}]),t}(r);n.prototype.onclosetag=n.prototype.oncommentend=n.prototype.oncdataend=function(){this._setEnd(this._tagStack.pop())},e({Parser:t,Handler:n})}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}).catch(__webpack_require__.oe)},parse:function(e,t,r){var n=e.Parser,a=e.Handler,s=new a;return new n(s,(0,_extends3.default)({},defaultOptions,r)).end(t),s.dom},nodeToRange:function(e){if(e.type)return[e.startIndex,e.endIndex]},opensByDefault:function(e,t){return"children"===t},getNodeName:function(e){var t=e.type;return t&&e.name&&(t+="("+e.name+")"),t},renderSettings:function(e,t){return _react2.default.createElement(_SettingsRenderer2.default,{settingsConfiguration:parserSettingsConfiguration,parserSettings:(0,_extends3.default)({},defaultOptions,e),onChange:t})},_ignoredProperties:new Set(["prev","next","parent","endIndex"])});

/***/ })

},["eslX"]);