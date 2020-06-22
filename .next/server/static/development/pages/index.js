module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static/development/pages/index.js": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/dist/next-server/lib/utils.js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCI/MzI2ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../next-server/lib/utils\n");

/***/ }),

/***/ "./apolloClient.ts":
/*!*************************!*\
  !*** ./apolloClient.ts ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createApolloClient; });\n/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-client */ \"apollo-client\");\n/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-cache-inmemory */ \"apollo-cache-inmemory\");\n/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-link-http */ \"apollo-link-http\");\n/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_link_http__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ \"isomorphic-unfetch\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction createApolloClient(initialState, ctx) {\n  // The `ctx` (NextPageContext) will only be present on the server.\n  // use it to extract auth headers (ctx.req) or similar.\n  return new apollo_client__WEBPACK_IMPORTED_MODULE_0__[\"ApolloClient\"]({\n    ssrMode: Boolean(ctx),\n    link: new apollo_link_http__WEBPACK_IMPORTED_MODULE_2__[\"HttpLink\"]({\n      uri: 'https://rickandmortyapi.com/graphql',\n      // Server URL (must be absolute)\n      credentials: 'same-origin',\n      // Additional fetch() options like `credentials` or `headers`\n      fetch: (isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default())\n    }),\n    cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_1__[\"InMemoryCache\"]().restore(initialState)\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcG9sbG9DbGllbnQudHM/MTk3NCJdLCJuYW1lcyI6WyJjcmVhdGVBcG9sbG9DbGllbnQiLCJpbml0aWFsU3RhdGUiLCJjdHgiLCJBcG9sbG9DbGllbnQiLCJzc3JNb2RlIiwiQm9vbGVhbiIsImxpbmsiLCJIdHRwTGluayIsInVyaSIsImNyZWRlbnRpYWxzIiwiZmV0Y2giLCJjYWNoZSIsIkluTWVtb3J5Q2FjaGUiLCJyZXN0b3JlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0Esa0JBQVQsQ0FBNEJDLFlBQTVCLEVBQTBDQyxHQUExQyxFQUErQztBQUMxRDtBQUNBO0FBQ0EsU0FBTyxJQUFJQywwREFBSixDQUFpQjtBQUNwQkMsV0FBTyxFQUFFQyxPQUFPLENBQUNILEdBQUQsQ0FESTtBQUVwQkksUUFBSSxFQUFFLElBQUlDLHlEQUFKLENBQWE7QUFDZkMsU0FBRyxFQUFFLHFDQURVO0FBQzZCO0FBQzVDQyxpQkFBVyxFQUFFLGFBRkU7QUFFYTtBQUM1QkMsd0VBQUtBO0FBSFUsS0FBYixDQUZjO0FBT3BCQyxTQUFLLEVBQUUsSUFBSUMsbUVBQUosR0FBb0JDLE9BQXBCLENBQTRCWixZQUE1QjtBQVBhLEdBQWpCLENBQVA7QUFTSCIsImZpbGUiOiIuL2Fwb2xsb0NsaWVudC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwb2xsb0NsaWVudCB9IGZyb20gJ2Fwb2xsby1jbGllbnQnO1xuaW1wb3J0IHsgSW5NZW1vcnlDYWNoZSB9IGZyb20gJ2Fwb2xsby1jYWNoZS1pbm1lbW9yeSc7XG5pbXBvcnQgeyBIdHRwTGluayB9IGZyb20gJ2Fwb2xsby1saW5rLWh0dHAnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUFwb2xsb0NsaWVudChpbml0aWFsU3RhdGUsIGN0eCkge1xuICAgIC8vIFRoZSBgY3R4YCAoTmV4dFBhZ2VDb250ZXh0KSB3aWxsIG9ubHkgYmUgcHJlc2VudCBvbiB0aGUgc2VydmVyLlxuICAgIC8vIHVzZSBpdCB0byBleHRyYWN0IGF1dGggaGVhZGVycyAoY3R4LnJlcSkgb3Igc2ltaWxhci5cbiAgICByZXR1cm4gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgICAgIHNzck1vZGU6IEJvb2xlYW4oY3R4KSxcbiAgICAgICAgbGluazogbmV3IEh0dHBMaW5rKHtcbiAgICAgICAgICAgIHVyaTogJ2h0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9ncmFwaHFsJywgLy8gU2VydmVyIFVSTCAobXVzdCBiZSBhYnNvbHV0ZSlcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLCAvLyBBZGRpdGlvbmFsIGZldGNoKCkgb3B0aW9ucyBsaWtlIGBjcmVkZW50aWFsc2Agb3IgYGhlYWRlcnNgXG4gICAgICAgICAgICBmZXRjaCxcbiAgICAgICAgfSksXG4gICAgICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpLnJlc3RvcmUoaW5pdGlhbFN0YXRlKSxcbiAgICB9KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./apolloClient.ts\n");

/***/ }),

/***/ "./gql/allCharacters.ts":
/*!******************************!*\
  !*** ./gql/allCharacters.ts ***!
  \******************************/
/*! exports provided: ALL_CHARACTERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ALL_CHARACTERS\", function() { return ALL_CHARACTERS; });\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ALL_CHARACTERS = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`\n    query allCharacters {\n        characters {\n            results {\n                id\n                name\n            }\n        }\n    }\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ncWwvYWxsQ2hhcmFjdGVycy50cz81YTVhIl0sIm5hbWVzIjpbIkFMTF9DSEFSQUNURVJTIiwiZ3FsIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTUEsY0FBYyxHQUFHQyxrREFBSTs7Ozs7Ozs7O0NBQTNCIiwiZmlsZSI6Ii4vZ3FsL2FsbENoYXJhY3RlcnMudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcblxuZXhwb3J0IGNvbnN0IEFMTF9DSEFSQUNURVJTID0gZ3FsYFxuICAgIHF1ZXJ5IGFsbENoYXJhY3RlcnMge1xuICAgICAgICBjaGFyYWN0ZXJzIHtcbiAgICAgICAgICAgIHJlc3VsdHMge1xuICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuYDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./gql/allCharacters.ts\n");

/***/ }),

/***/ "./layout/Header.tsx":
/*!***************************!*\
  !*** ./layout/Header.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction Header() {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, \"HEADER\");\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9sYXlvdXQvSGVhZGVyLnRzeD8yNTI4Il0sIm5hbWVzIjpbIkhlYWRlciJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUVBLFNBQVNBLE1BQVQsR0FBa0I7QUFDZCxTQUNJLDRFQURKO0FBR0g7O0FBRWNBLHFFQUFmIiwiZmlsZSI6Ii4vbGF5b3V0L0hlYWRlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBIZWFkZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5IRUFERVI8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./layout/Header.tsx\n");

/***/ }),

/***/ "./libs/apollo.tsx":
/*!*************************!*\
  !*** ./libs/apollo.tsx ***!
  \*************************/
/*! exports provided: initOnContext, withApollo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initOnContext\", function() { return initOnContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"withApollo\", function() { return withApollo; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ \"./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/react-hooks */ \"@apollo/react-hooks\");\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _apolloClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../apolloClient */ \"./apolloClient.ts\");\nvar _jsxFileName = \"/Users/woohyun/Documents/posting/gudok_and_joayo/libs/apollo.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\n\n\nlet globalApolloClient = null;\nconst initOnContext = ctx => {\n  const inAppContext = Boolean(ctx.ctx); // We consider installing `withApollo({ ssr: true })` on global App level\n  // as antipattern since it disables project wide Automatic Static Optimization.\n\n  if (true) {\n    if (inAppContext) {\n      console.warn('Warning: You have opted-out of Automatic Static Optimization due to `withApollo` in `pages/_app`.\\n' + 'Read more: https://err.sh/next.js/opt-out-auto-static-optimization\\n');\n    }\n  } // Initialize ApolloClient if not already done\n\n\n  const apolloClient = ctx.apolloClient || initApolloClient(ctx.apolloState || {}, inAppContext ? ctx.ctx : ctx); // We send the Apollo Client as a prop to the component to avoid calling initApollo() twice in the server.\n  // Otherwise, the component would have to call initApollo() again but this\n  // time without the context. Once that happens, the following code will make sure we send\n  // the prop as `null` to the browser.\n\n  apolloClient.toJSON = () => null; // Add apolloClient to NextPageContext & NextAppContext.\n  // This allows us to consume the apolloClient inside our\n  // custom `getInitialProps({ apolloClient })`.\n\n\n  ctx.apolloClient = apolloClient;\n\n  if (inAppContext) {\n    ctx.ctx.apolloClient = apolloClient;\n  }\n\n  return ctx;\n};\n/**\n * Always creates a new apollo client on the server\n * Creates or reuses apollo client in the browser.\n * @param  {NormalizedCacheObject} initialState\n * @param  {NextPageContext} ctx\n */\n\nconst initApolloClient = (initialState, ctx) => {\n  // Make sure to create a new client for every server-side request so that data\n  // isn't shared between connections (which would be bad)\n  if (true) {\n    return Object(_apolloClient__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(initialState, ctx);\n  } // Reuse client on the client-side\n\n\n  if (!globalApolloClient) {\n    globalApolloClient = Object(_apolloClient__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(initialState, ctx);\n  }\n\n  return globalApolloClient;\n};\n/**\n * Creates a withApollo HOC\n * that provides the apolloContext\n * to a next.js Page or AppTree.\n * @param  {Object} withApolloOptions\n * @param  {Boolean} [withApolloOptions.ssr=false]\n * @returns {(PageComponent: ReactNode) => ReactNode}\n */\n\n\nconst withApollo = ({\n  ssr = false\n} = {}) => PageComponent => {\n  const WithApollo = (_ref) => {\n    let {\n      apolloClient,\n      apolloState\n    } = _ref,\n        pageProps = _objectWithoutProperties(_ref, [\"apolloClient\", \"apolloState\"]);\n\n    let client;\n\n    if (apolloClient) {\n      // Happens on: getDataFromTree & next.js ssr\n      client = apolloClient;\n    } else {\n      // Happens on: next.js csr\n      client = initApolloClient(apolloState, undefined);\n    }\n\n    return __jsx(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__[\"ApolloProvider\"], {\n      client: client,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 13\n      }\n    }, __jsx(PageComponent, _extends({}, pageProps, {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 17\n      }\n    })));\n  }; // Set the correct displayName in development\n\n\n  if (true) {\n    const displayName = PageComponent.displayName || PageComponent.name || 'Component';\n    WithApollo.displayName = `withApollo(${displayName})`;\n  }\n\n  if (ssr || PageComponent.getInitialProps) {\n    WithApollo.getInitialProps = async ctx => {\n      const inAppContext = Boolean(ctx.ctx);\n      const {\n        apolloClient\n      } = initOnContext(ctx); // Run wrapped getInitialProps methods\n\n      let pageProps = {};\n\n      if (PageComponent.getInitialProps) {\n        pageProps = await PageComponent.getInitialProps(ctx);\n      } else if (inAppContext) {\n        pageProps = await next_app__WEBPACK_IMPORTED_MODULE_1___default.a.getInitialProps(ctx);\n      } // Only on the server:\n\n\n      if (true) {\n        const {\n          AppTree\n        } = ctx; // When redirecting, the response is finished.\n        // No point in continuing to render\n\n        if (ctx.res && ctx.res.finished) {\n          return pageProps;\n        } // Only if dataFromTree is enabled\n\n\n        if (ssr && AppTree) {\n          try {\n            // Import `@apollo/react-ssr` dynamically.\n            // We don't want to have this in our client bundle.\n            const {\n              getDataFromTree\n            } = await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! @apollo/react-ssr */ \"@apollo/react-ssr\", 7)); // Since AppComponents and PageComponents have different context types\n            // we need to modify their props a little.\n\n            let props;\n\n            if (inAppContext) {\n              props = _objectSpread(_objectSpread({}, pageProps), {}, {\n                apolloClient\n              });\n            } else {\n              props = {\n                pageProps: _objectSpread(_objectSpread({}, pageProps), {}, {\n                  apolloClient\n                })\n              };\n            } // Take the Next.js AppTree, determine which queries are needed to render,\n            // and fetch them. This method can be pretty slow since it renders\n            // your entire AppTree once for every query. Check out apollo fragments\n            // if you want to reduce the number of rerenders.\n            // https://www.apollographql.com/docs/react/data/fragments/\n\n\n            await getDataFromTree(__jsx(AppTree, _extends({}, props, {\n              __self: undefined,\n              __source: {\n                fileName: _jsxFileName,\n                lineNumber: 146,\n                columnNumber: 47\n              }\n            })));\n          } catch (error) {\n            // Prevent Apollo Client GraphQL errors from crashing SSR.\n            // Handle them in components via the data.error prop:\n            // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error\n            console.error('Error while running `getDataFromTree`', error);\n          } // getDataFromTree does not call componentWillUnmount\n          // head side effect therefore need to be cleared manually\n\n\n          next_head__WEBPACK_IMPORTED_MODULE_2___default.a.rewind();\n        }\n      }\n\n      return _objectSpread(_objectSpread({}, pageProps), {}, {\n        // Extract query data from the Apollo store\n        apolloState: apolloClient.cache.extract(),\n        // Provide the client for ssr. As soon as this payload\n        // gets JSON.stringified it will remove itself.\n        apolloClient: ctx.apolloClient\n      });\n    };\n  }\n\n  return WithApollo;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWJzL2Fwb2xsby50c3g/ZDg1OCJdLCJuYW1lcyI6WyJnbG9iYWxBcG9sbG9DbGllbnQiLCJpbml0T25Db250ZXh0IiwiY3R4IiwiaW5BcHBDb250ZXh0IiwiQm9vbGVhbiIsImNvbnNvbGUiLCJ3YXJuIiwiYXBvbGxvQ2xpZW50IiwiaW5pdEFwb2xsb0NsaWVudCIsImFwb2xsb1N0YXRlIiwidG9KU09OIiwiaW5pdGlhbFN0YXRlIiwiY3JlYXRlQXBvbGxvQ2xpZW50Iiwid2l0aEFwb2xsbyIsInNzciIsIlBhZ2VDb21wb25lbnQiLCJXaXRoQXBvbGxvIiwicGFnZVByb3BzIiwiY2xpZW50IiwidW5kZWZpbmVkIiwiZGlzcGxheU5hbWUiLCJuYW1lIiwiZ2V0SW5pdGlhbFByb3BzIiwiQXBwIiwiQXBwVHJlZSIsInJlcyIsImZpbmlzaGVkIiwiZ2V0RGF0YUZyb21UcmVlIiwicHJvcHMiLCJlcnJvciIsIkhlYWQiLCJyZXdpbmQiLCJjYWNoZSIsImV4dHJhY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxrQkFBa0IsR0FBRyxJQUF6QjtBQUVPLE1BQU1DLGFBQWEsR0FBSUMsR0FBRCxJQUFTO0FBQ2xDLFFBQU1DLFlBQVksR0FBR0MsT0FBTyxDQUFDRixHQUFHLENBQUNBLEdBQUwsQ0FBNUIsQ0FEa0MsQ0FHbEM7QUFDQTs7QUFDQSxZQUE0QztBQUN4QyxRQUFJQyxZQUFKLEVBQWtCO0FBQ2RFLGFBQU8sQ0FBQ0MsSUFBUixDQUNJLHdHQUNJLHNFQUZSO0FBSUg7QUFDSixHQVppQyxDQWNsQzs7O0FBQ0EsUUFBTUMsWUFBWSxHQUNkTCxHQUFHLENBQUNLLFlBQUosSUFDQUMsZ0JBQWdCLENBQUNOLEdBQUcsQ0FBQ08sV0FBSixJQUFtQixFQUFwQixFQUF3Qk4sWUFBWSxHQUFHRCxHQUFHLENBQUNBLEdBQVAsR0FBYUEsR0FBakQsQ0FGcEIsQ0Fma0MsQ0FtQmxDO0FBQ0E7QUFDQTtBQUNBOztBQUNBSyxjQUFZLENBQUNHLE1BQWIsR0FBc0IsTUFBTSxJQUE1QixDQXZCa0MsQ0F5QmxDO0FBQ0E7QUFDQTs7O0FBQ0FSLEtBQUcsQ0FBQ0ssWUFBSixHQUFtQkEsWUFBbkI7O0FBQ0EsTUFBSUosWUFBSixFQUFrQjtBQUNkRCxPQUFHLENBQUNBLEdBQUosQ0FBUUssWUFBUixHQUF1QkEsWUFBdkI7QUFDSDs7QUFFRCxTQUFPTCxHQUFQO0FBQ0gsQ0FsQ007QUFvQ1A7Ozs7Ozs7QUFNQSxNQUFNTSxnQkFBZ0IsR0FBRyxDQUFDRyxZQUFELEVBQWVULEdBQWYsS0FBdUI7QUFDNUM7QUFDQTtBQUNBLFlBQW1DO0FBQy9CLFdBQU9VLDZEQUFrQixDQUFDRCxZQUFELEVBQWVULEdBQWYsQ0FBekI7QUFDSCxHQUwyQyxDQU81Qzs7O0FBQ0EsTUFBSSxDQUFDRixrQkFBTCxFQUF5QjtBQUNyQkEsc0JBQWtCLEdBQUdZLDZEQUFrQixDQUFDRCxZQUFELEVBQWVULEdBQWYsQ0FBdkM7QUFDSDs7QUFFRCxTQUFPRixrQkFBUDtBQUNILENBYkQ7QUFlQTs7Ozs7Ozs7OztBQVFPLE1BQU1hLFVBQVUsR0FBRyxDQUFDO0FBQUVDLEtBQUcsR0FBRztBQUFSLElBQWtCLEVBQW5CLEtBQTJCQyxhQUFELElBQW1CO0FBQ25FLFFBQU1DLFVBQVUsR0FBRyxVQUFpRDtBQUFBLFFBQWhEO0FBQUVULGtCQUFGO0FBQWdCRTtBQUFoQixLQUFnRDtBQUFBLFFBQWhCUSxTQUFnQjs7QUFDaEUsUUFBSUMsTUFBSjs7QUFDQSxRQUFJWCxZQUFKLEVBQWtCO0FBQ2Q7QUFDQVcsWUFBTSxHQUFHWCxZQUFUO0FBQ0gsS0FIRCxNQUdPO0FBQ0g7QUFDQVcsWUFBTSxHQUFHVixnQkFBZ0IsQ0FBQ0MsV0FBRCxFQUFjVSxTQUFkLENBQXpCO0FBQ0g7O0FBRUQsV0FDSSxNQUFDLGtFQUFEO0FBQWdCLFlBQU0sRUFBRUQsTUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsYUFBRCxlQUFtQkQsU0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURKLENBREo7QUFLSCxHQWZELENBRG1FLENBa0JuRTs7O0FBQ0EsWUFBMkM7QUFDdkMsVUFBTUcsV0FBVyxHQUNiTCxhQUFhLENBQUNLLFdBQWQsSUFBNkJMLGFBQWEsQ0FBQ00sSUFBM0MsSUFBbUQsV0FEdkQ7QUFFQUwsY0FBVSxDQUFDSSxXQUFYLEdBQTBCLGNBQWFBLFdBQVksR0FBbkQ7QUFDSDs7QUFFRCxNQUFJTixHQUFHLElBQUlDLGFBQWEsQ0FBQ08sZUFBekIsRUFBMEM7QUFDdENOLGNBQVUsQ0FBQ00sZUFBWCxHQUE2QixNQUFPcEIsR0FBUCxJQUFlO0FBQ3hDLFlBQU1DLFlBQVksR0FBR0MsT0FBTyxDQUFDRixHQUFHLENBQUNBLEdBQUwsQ0FBNUI7QUFDQSxZQUFNO0FBQUVLO0FBQUYsVUFBbUJOLGFBQWEsQ0FBQ0MsR0FBRCxDQUF0QyxDQUZ3QyxDQUl4Qzs7QUFDQSxVQUFJZSxTQUFTLEdBQUcsRUFBaEI7O0FBQ0EsVUFBSUYsYUFBYSxDQUFDTyxlQUFsQixFQUFtQztBQUMvQkwsaUJBQVMsR0FBRyxNQUFNRixhQUFhLENBQUNPLGVBQWQsQ0FBOEJwQixHQUE5QixDQUFsQjtBQUNILE9BRkQsTUFFTyxJQUFJQyxZQUFKLEVBQWtCO0FBQ3JCYyxpQkFBUyxHQUFHLE1BQU1NLCtDQUFHLENBQUNELGVBQUosQ0FBb0JwQixHQUFwQixDQUFsQjtBQUNILE9BVnVDLENBWXhDOzs7QUFDQSxnQkFBbUM7QUFDL0IsY0FBTTtBQUFFc0I7QUFBRixZQUFjdEIsR0FBcEIsQ0FEK0IsQ0FFL0I7QUFDQTs7QUFDQSxZQUFJQSxHQUFHLENBQUN1QixHQUFKLElBQVd2QixHQUFHLENBQUN1QixHQUFKLENBQVFDLFFBQXZCLEVBQWlDO0FBQzdCLGlCQUFPVCxTQUFQO0FBQ0gsU0FOOEIsQ0FRL0I7OztBQUNBLFlBQUlILEdBQUcsSUFBSVUsT0FBWCxFQUFvQjtBQUNoQixjQUFJO0FBQ0E7QUFDQTtBQUNBLGtCQUFNO0FBQUVHO0FBQUYsZ0JBQXNCLE1BQU0sd0hBQWxDLENBSEEsQ0FPQTtBQUNBOztBQUNBLGdCQUFJQyxLQUFKOztBQUNBLGdCQUFJekIsWUFBSixFQUFrQjtBQUNkeUIsbUJBQUssbUNBQVFYLFNBQVI7QUFBbUJWO0FBQW5CLGdCQUFMO0FBQ0gsYUFGRCxNQUVPO0FBQ0hxQixtQkFBSyxHQUFHO0FBQ0pYLHlCQUFTLGtDQUFPQSxTQUFQO0FBQWtCVjtBQUFsQjtBQURMLGVBQVI7QUFHSCxhQWhCRCxDQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxrQkFBTW9CLGVBQWUsQ0FBQyxNQUFDLE9BQUQsZUFBYUMsS0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQUQsQ0FBckI7QUFDSCxXQXhCRCxDQXdCRSxPQUFPQyxLQUFQLEVBQWM7QUFDWjtBQUNBO0FBQ0E7QUFDQXhCLG1CQUFPLENBQUN3QixLQUFSLENBQ0ksdUNBREosRUFFSUEsS0FGSjtBQUlILFdBakNlLENBbUNoQjtBQUNBOzs7QUFDQUMsMERBQUksQ0FBQ0MsTUFBTDtBQUNIO0FBQ0o7O0FBRUQsNkNBQ09kLFNBRFA7QUFFSTtBQUNBUixtQkFBVyxFQUFFRixZQUFZLENBQUN5QixLQUFiLENBQW1CQyxPQUFuQixFQUhqQjtBQUlJO0FBQ0E7QUFDQTFCLG9CQUFZLEVBQUVMLEdBQUcsQ0FBQ0s7QUFOdEI7QUFRSCxLQXZFRDtBQXdFSDs7QUFFRCxTQUFPUyxVQUFQO0FBQ0gsQ0FyR00iLCJmaWxlIjoiLi9saWJzL2Fwb2xsby50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFwcCBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIgfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJztcbmltcG9ydCBjcmVhdGVBcG9sbG9DbGllbnQgZnJvbSAnLi4vYXBvbGxvQ2xpZW50JztcblxubGV0IGdsb2JhbEFwb2xsb0NsaWVudCA9IG51bGw7XG5cbmV4cG9ydCBjb25zdCBpbml0T25Db250ZXh0ID0gKGN0eCkgPT4ge1xuICAgIGNvbnN0IGluQXBwQ29udGV4dCA9IEJvb2xlYW4oY3R4LmN0eCk7XG5cbiAgICAvLyBXZSBjb25zaWRlciBpbnN0YWxsaW5nIGB3aXRoQXBvbGxvKHsgc3NyOiB0cnVlIH0pYCBvbiBnbG9iYWwgQXBwIGxldmVsXG4gICAgLy8gYXMgYW50aXBhdHRlcm4gc2luY2UgaXQgZGlzYWJsZXMgcHJvamVjdCB3aWRlIEF1dG9tYXRpYyBTdGF0aWMgT3B0aW1pemF0aW9uLlxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICBpZiAoaW5BcHBDb250ZXh0KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgJ1dhcm5pbmc6IFlvdSBoYXZlIG9wdGVkLW91dCBvZiBBdXRvbWF0aWMgU3RhdGljIE9wdGltaXphdGlvbiBkdWUgdG8gYHdpdGhBcG9sbG9gIGluIGBwYWdlcy9fYXBwYC5cXG4nICtcbiAgICAgICAgICAgICAgICAgICAgJ1JlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvbmV4dC5qcy9vcHQtb3V0LWF1dG8tc3RhdGljLW9wdGltaXphdGlvblxcbicsXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gSW5pdGlhbGl6ZSBBcG9sbG9DbGllbnQgaWYgbm90IGFscmVhZHkgZG9uZVxuICAgIGNvbnN0IGFwb2xsb0NsaWVudCA9XG4gICAgICAgIGN0eC5hcG9sbG9DbGllbnQgfHxcbiAgICAgICAgaW5pdEFwb2xsb0NsaWVudChjdHguYXBvbGxvU3RhdGUgfHwge30sIGluQXBwQ29udGV4dCA/IGN0eC5jdHggOiBjdHgpO1xuXG4gICAgLy8gV2Ugc2VuZCB0aGUgQXBvbGxvIENsaWVudCBhcyBhIHByb3AgdG8gdGhlIGNvbXBvbmVudCB0byBhdm9pZCBjYWxsaW5nIGluaXRBcG9sbG8oKSB0d2ljZSBpbiB0aGUgc2VydmVyLlxuICAgIC8vIE90aGVyd2lzZSwgdGhlIGNvbXBvbmVudCB3b3VsZCBoYXZlIHRvIGNhbGwgaW5pdEFwb2xsbygpIGFnYWluIGJ1dCB0aGlzXG4gICAgLy8gdGltZSB3aXRob3V0IHRoZSBjb250ZXh0LiBPbmNlIHRoYXQgaGFwcGVucywgdGhlIGZvbGxvd2luZyBjb2RlIHdpbGwgbWFrZSBzdXJlIHdlIHNlbmRcbiAgICAvLyB0aGUgcHJvcCBhcyBgbnVsbGAgdG8gdGhlIGJyb3dzZXIuXG4gICAgYXBvbGxvQ2xpZW50LnRvSlNPTiA9ICgpID0+IG51bGw7XG5cbiAgICAvLyBBZGQgYXBvbGxvQ2xpZW50IHRvIE5leHRQYWdlQ29udGV4dCAmIE5leHRBcHBDb250ZXh0LlxuICAgIC8vIFRoaXMgYWxsb3dzIHVzIHRvIGNvbnN1bWUgdGhlIGFwb2xsb0NsaWVudCBpbnNpZGUgb3VyXG4gICAgLy8gY3VzdG9tIGBnZXRJbml0aWFsUHJvcHMoeyBhcG9sbG9DbGllbnQgfSlgLlxuICAgIGN0eC5hcG9sbG9DbGllbnQgPSBhcG9sbG9DbGllbnQ7XG4gICAgaWYgKGluQXBwQ29udGV4dCkge1xuICAgICAgICBjdHguY3R4LmFwb2xsb0NsaWVudCA9IGFwb2xsb0NsaWVudDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3R4O1xufTtcblxuLyoqXG4gKiBBbHdheXMgY3JlYXRlcyBhIG5ldyBhcG9sbG8gY2xpZW50IG9uIHRoZSBzZXJ2ZXJcbiAqIENyZWF0ZXMgb3IgcmV1c2VzIGFwb2xsbyBjbGllbnQgaW4gdGhlIGJyb3dzZXIuXG4gKiBAcGFyYW0gIHtOb3JtYWxpemVkQ2FjaGVPYmplY3R9IGluaXRpYWxTdGF0ZVxuICogQHBhcmFtICB7TmV4dFBhZ2VDb250ZXh0fSBjdHhcbiAqL1xuY29uc3QgaW5pdEFwb2xsb0NsaWVudCA9IChpbml0aWFsU3RhdGUsIGN0eCkgPT4ge1xuICAgIC8vIE1ha2Ugc3VyZSB0byBjcmVhdGUgYSBuZXcgY2xpZW50IGZvciBldmVyeSBzZXJ2ZXItc2lkZSByZXF1ZXN0IHNvIHRoYXQgZGF0YVxuICAgIC8vIGlzbid0IHNoYXJlZCBiZXR3ZWVuIGNvbm5lY3Rpb25zICh3aGljaCB3b3VsZCBiZSBiYWQpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVBcG9sbG9DbGllbnQoaW5pdGlhbFN0YXRlLCBjdHgpO1xuICAgIH1cblxuICAgIC8vIFJldXNlIGNsaWVudCBvbiB0aGUgY2xpZW50LXNpZGVcbiAgICBpZiAoIWdsb2JhbEFwb2xsb0NsaWVudCkge1xuICAgICAgICBnbG9iYWxBcG9sbG9DbGllbnQgPSBjcmVhdGVBcG9sbG9DbGllbnQoaW5pdGlhbFN0YXRlLCBjdHgpO1xuICAgIH1cblxuICAgIHJldHVybiBnbG9iYWxBcG9sbG9DbGllbnQ7XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSB3aXRoQXBvbGxvIEhPQ1xuICogdGhhdCBwcm92aWRlcyB0aGUgYXBvbGxvQ29udGV4dFxuICogdG8gYSBuZXh0LmpzIFBhZ2Ugb3IgQXBwVHJlZS5cbiAqIEBwYXJhbSAge09iamVjdH0gd2l0aEFwb2xsb09wdGlvbnNcbiAqIEBwYXJhbSAge0Jvb2xlYW59IFt3aXRoQXBvbGxvT3B0aW9ucy5zc3I9ZmFsc2VdXG4gKiBAcmV0dXJucyB7KFBhZ2VDb21wb25lbnQ6IFJlYWN0Tm9kZSkgPT4gUmVhY3ROb2RlfVxuICovXG5leHBvcnQgY29uc3Qgd2l0aEFwb2xsbyA9ICh7IHNzciA9IGZhbHNlIH0gPSB7fSkgPT4gKFBhZ2VDb21wb25lbnQpID0+IHtcbiAgICBjb25zdCBXaXRoQXBvbGxvID0gKHsgYXBvbGxvQ2xpZW50LCBhcG9sbG9TdGF0ZSwgLi4ucGFnZVByb3BzIH0pID0+IHtcbiAgICAgICAgbGV0IGNsaWVudDtcbiAgICAgICAgaWYgKGFwb2xsb0NsaWVudCkge1xuICAgICAgICAgICAgLy8gSGFwcGVucyBvbjogZ2V0RGF0YUZyb21UcmVlICYgbmV4dC5qcyBzc3JcbiAgICAgICAgICAgIGNsaWVudCA9IGFwb2xsb0NsaWVudDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEhhcHBlbnMgb246IG5leHQuanMgY3NyXG4gICAgICAgICAgICBjbGllbnQgPSBpbml0QXBvbGxvQ2xpZW50KGFwb2xsb1N0YXRlLCB1bmRlZmluZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2NsaWVudH0+XG4gICAgICAgICAgICAgICAgPFBhZ2VDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICAgIDwvQXBvbGxvUHJvdmlkZXI+XG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIC8vIFNldCB0aGUgY29ycmVjdCBkaXNwbGF5TmFtZSBpbiBkZXZlbG9wbWVudFxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGRpc3BsYXlOYW1lID1cbiAgICAgICAgICAgIFBhZ2VDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgUGFnZUNvbXBvbmVudC5uYW1lIHx8ICdDb21wb25lbnQnO1xuICAgICAgICBXaXRoQXBvbGxvLmRpc3BsYXlOYW1lID0gYHdpdGhBcG9sbG8oJHtkaXNwbGF5TmFtZX0pYDtcbiAgICB9XG5cbiAgICBpZiAoc3NyIHx8IFBhZ2VDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICAgIFdpdGhBcG9sbG8uZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5BcHBDb250ZXh0ID0gQm9vbGVhbihjdHguY3R4KTtcbiAgICAgICAgICAgIGNvbnN0IHsgYXBvbGxvQ2xpZW50IH0gPSBpbml0T25Db250ZXh0KGN0eCk7XG5cbiAgICAgICAgICAgIC8vIFJ1biB3cmFwcGVkIGdldEluaXRpYWxQcm9wcyBtZXRob2RzXG4gICAgICAgICAgICBsZXQgcGFnZVByb3BzID0ge307XG4gICAgICAgICAgICBpZiAoUGFnZUNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgICAgICAgICAgICBwYWdlUHJvcHMgPSBhd2FpdCBQYWdlQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpbkFwcENvbnRleHQpIHtcbiAgICAgICAgICAgICAgICBwYWdlUHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIE9ubHkgb24gdGhlIHNlcnZlcjpcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgQXBwVHJlZSB9ID0gY3R4O1xuICAgICAgICAgICAgICAgIC8vIFdoZW4gcmVkaXJlY3RpbmcsIHRoZSByZXNwb25zZSBpcyBmaW5pc2hlZC5cbiAgICAgICAgICAgICAgICAvLyBObyBwb2ludCBpbiBjb250aW51aW5nIHRvIHJlbmRlclxuICAgICAgICAgICAgICAgIGlmIChjdHgucmVzICYmIGN0eC5yZXMuZmluaXNoZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhZ2VQcm9wcztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBPbmx5IGlmIGRhdGFGcm9tVHJlZSBpcyBlbmFibGVkXG4gICAgICAgICAgICAgICAgaWYgKHNzciAmJiBBcHBUcmVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJbXBvcnQgYEBhcG9sbG8vcmVhY3Qtc3NyYCBkeW5hbWljYWxseS5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdlIGRvbid0IHdhbnQgdG8gaGF2ZSB0aGlzIGluIG91ciBjbGllbnQgYnVuZGxlLlxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBnZXREYXRhRnJvbVRyZWUgfSA9IGF3YWl0IGltcG9ydChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQGFwb2xsby9yZWFjdC1zc3InXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTaW5jZSBBcHBDb21wb25lbnRzIGFuZCBQYWdlQ29tcG9uZW50cyBoYXZlIGRpZmZlcmVudCBjb250ZXh0IHR5cGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIG1vZGlmeSB0aGVpciBwcm9wcyBhIGxpdHRsZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcm9wcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbkFwcENvbnRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcyA9IHsgLi4ucGFnZVByb3BzLCBhcG9sbG9DbGllbnQgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VQcm9wczogeyAuLi5wYWdlUHJvcHMsIGFwb2xsb0NsaWVudCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRha2UgdGhlIE5leHQuanMgQXBwVHJlZSwgZGV0ZXJtaW5lIHdoaWNoIHF1ZXJpZXMgYXJlIG5lZWRlZCB0byByZW5kZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhbmQgZmV0Y2ggdGhlbS4gVGhpcyBtZXRob2QgY2FuIGJlIHByZXR0eSBzbG93IHNpbmNlIGl0IHJlbmRlcnNcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHlvdXIgZW50aXJlIEFwcFRyZWUgb25jZSBmb3IgZXZlcnkgcXVlcnkuIENoZWNrIG91dCBhcG9sbG8gZnJhZ21lbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiB5b3Ugd2FudCB0byByZWR1Y2UgdGhlIG51bWJlciBvZiByZXJlbmRlcnMuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL3JlYWN0L2RhdGEvZnJhZ21lbnRzL1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgZ2V0RGF0YUZyb21UcmVlKDxBcHBUcmVlIHsuLi5wcm9wc30gLz4pO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUHJldmVudCBBcG9sbG8gQ2xpZW50IEdyYXBoUUwgZXJyb3JzIGZyb20gY3Jhc2hpbmcgU1NSLlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSGFuZGxlIHRoZW0gaW4gY29tcG9uZW50cyB2aWEgdGhlIGRhdGEuZXJyb3IgcHJvcDpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWFwb2xsby5odG1sI2dyYXBocWwtcXVlcnktZGF0YS1lcnJvclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnRXJyb3Igd2hpbGUgcnVubmluZyBgZ2V0RGF0YUZyb21UcmVlYCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gZ2V0RGF0YUZyb21UcmVlIGRvZXMgbm90IGNhbGwgY29tcG9uZW50V2lsbFVubW91bnRcbiAgICAgICAgICAgICAgICAgICAgLy8gaGVhZCBzaWRlIGVmZmVjdCB0aGVyZWZvcmUgbmVlZCB0byBiZSBjbGVhcmVkIG1hbnVhbGx5XG4gICAgICAgICAgICAgICAgICAgIEhlYWQucmV3aW5kKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnBhZ2VQcm9wcyxcbiAgICAgICAgICAgICAgICAvLyBFeHRyYWN0IHF1ZXJ5IGRhdGEgZnJvbSB0aGUgQXBvbGxvIHN0b3JlXG4gICAgICAgICAgICAgICAgYXBvbGxvU3RhdGU6IGFwb2xsb0NsaWVudC5jYWNoZS5leHRyYWN0KCksXG4gICAgICAgICAgICAgICAgLy8gUHJvdmlkZSB0aGUgY2xpZW50IGZvciBzc3IuIEFzIHNvb24gYXMgdGhpcyBwYXlsb2FkXG4gICAgICAgICAgICAgICAgLy8gZ2V0cyBKU09OLnN0cmluZ2lmaWVkIGl0IHdpbGwgcmVtb3ZlIGl0c2VsZi5cbiAgICAgICAgICAgICAgICBhcG9sbG9DbGllbnQ6IGN0eC5hcG9sbG9DbGllbnQsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBXaXRoQXBvbGxvO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./libs/apollo.tsx\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    \"default\": obj\n  };\n}\n\nmodule.exports = _interopRequireDefault;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanM/NGVhNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/interopRequireDefault.js\n");

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./dist/pages/_app */ \"./node_modules/next/dist/pages/_app.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanM/ZjAxNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUIsbUJBQU8sQ0FBQyxpRUFBbUIiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/app.js\n");

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nexports.__esModule = true;\nexports.Container = Container;\nexports.createUrl = createUrl;\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _utils = __webpack_require__(/*! ../next-server/lib/utils */ \"../next-server/lib/utils\");\n\nexports.AppInitialProps = _utils.AppInitialProps;\n/**\n* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.\n* This allows for keeping state between navigation, custom error handling, injecting additional data.\n*/\n\nasync function appGetInitialProps({\n  Component,\n  ctx\n}) {\n  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);\n  return {\n    pageProps\n  };\n}\n\nclass App extends _react.default.Component {\n  // Kept here for backwards compatibility.\n  // When someone ended App they could call `super.componentDidCatch`.\n  // @deprecated This method is no longer needed. Errors are caught at the top level\n  componentDidCatch(error, _errorInfo) {\n    throw error;\n  }\n\n  render() {\n    const {\n      router,\n      Component,\n      pageProps,\n      __N_SSG,\n      __N_SSP\n    } = this.props;\n    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy\n    // methods like getStaticProps and getServerSideProps\n    !(__N_SSG || __N_SSP) ? {\n      url: createUrl(router)\n    } : {}));\n  }\n\n}\n\nexports.default = App;\nApp.origGetInitialProps = appGetInitialProps;\nApp.getInitialProps = appGetInitialProps;\nlet warnContainer;\nlet warnUrl;\n\nif (true) {\n  warnContainer = (0, _utils.execOnce)(() => {\n    console.warn(`Warning: the \\`Container\\` in \\`_app\\` has been deprecated and should be removed. https://err.sh/vercel/next.js/app-container-deprecated`);\n  });\n  warnUrl = (0, _utils.execOnce)(() => {\n    console.error(`Warning: the 'url' property is deprecated. https://err.sh/vercel/next.js/url-deprecated`);\n  });\n} // @deprecated noop for now until removal\n\n\nfunction Container(p) {\n  if (true) warnContainer();\n  return p.children;\n}\n\nfunction createUrl(router) {\n  // This is to make sure we don't references the router object at call time\n  const {\n    pathname,\n    asPath,\n    query\n  } = router;\n  return {\n    get query() {\n      if (true) warnUrl();\n      return query;\n    },\n\n    get pathname() {\n      if (true) warnUrl();\n      return pathname;\n    },\n\n    get asPath() {\n      if (true) warnUrl();\n      return asPath;\n    },\n\n    back: () => {\n      if (true) warnUrl();\n      router.back();\n    },\n    push: (url, as) => {\n      if (true) warnUrl();\n      return router.push(url, as);\n    },\n    pushTo: (href, as) => {\n      if (true) warnUrl();\n      const pushRoute = as ? href : '';\n      const pushUrl = as || href;\n      return router.push(pushRoute, pushUrl);\n    },\n    replace: (url, as) => {\n      if (true) warnUrl();\n      return router.replace(url, as);\n    },\n    replaceTo: (href, as) => {\n      if (true) warnUrl();\n      const replaceRoute = as ? href : '';\n      const replaceUrl = as || href;\n      return router.replace(replaceRoute, replaceUrl);\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vLi4vcGFnZXMvX2FwcC50c3g/MmMzNSJdLCJuYW1lcyI6WyJwYWdlUHJvcHMiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbXBvbmVudERpZENhdGNoIiwicmVuZGVyIiwiX19OX1NTRyIsInVybCIsImNyZWF0ZVVybCIsIkFwcCIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiLCJ3YXJuQ29udGFpbmVyIiwiY29uc29sZSIsIndhcm5VcmwiLCJwIiwiYmFjayIsInJvdXRlciIsInB1c2giLCJwdXNoVG8iLCJwdXNoUm91dGUiLCJhcyIsInB1c2hVcmwiLCJyZXBsYWNlIiwicmVwbGFjZVRvIiwicmVwbGFjZVJvdXRlIiwicmVwbGFjZVVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7OztBQWVBOzs7OztBQUlBLGtDQUFrQztBQUFBO0FBQWxDO0FBQWtDLENBQWxDLEVBR3lDO0FBQ3ZDLFFBQU1BLFNBQVMsR0FBRyxNQUFNLDJDQUF4QixHQUF3QixDQUF4QjtBQUNBLFNBQU87QUFBUDtBQUFPLEdBQVA7QUFHYTs7QUFBQSxrQkFBMkNDLGVBQU1DLFNBQWpELENBR2I7QUFJQTtBQUNBO0FBQ0E7QUFDQUMsbUJBQWlCLG9CQUE0QztBQUMzRDtBQUdGQzs7QUFBQUEsUUFBTSxHQUFHO0FBQ1AsVUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUFxRCxLQUEzRDtBQUdBLHdCQUNFLHFFQUdJO0FBQ0E7QUFDSSxNQUFFQyxPQUFPLElBQVQsV0FBd0I7QUFBRUMsU0FBRyxFQUFFQyxTQUFTLENBQXhDLE1BQXdDO0FBQWhCLEtBQXhCLEdBTlYsRUFDRSxFQURGO0FBZkY7O0FBQUE7OztBQUhtQkMsRyxDQUlaQyxtQkFKWUQsR0FJVUUsa0JBSlZGO0FBQUFBLEcsQ0FLWkcsZUFMWUgsR0FLTUUsa0JBTE5GO0FBK0JyQjtBQUNBOztBQUVBLFVBQTJDO0FBQ3pDSSxlQUFhLEdBQUcscUJBQVMsTUFBTTtBQUM3QkMsV0FBTyxDQUFQQTtBQURGRCxHQUFnQixDQUFoQkE7QUFNQUUsU0FBTyxHQUFHLHFCQUFTLE1BQU07QUFDdkJELFdBQU8sQ0FBUEE7QUFERkMsR0FBVSxDQUFWQTtBQU9GLEMsQ0FBQTs7O0FBQ08sc0JBQTJCO0FBQ2hDLFlBQTJDRixhQUFhO0FBQ3hELFNBQU9HLENBQUMsQ0FBUjtBQUdLOztBQUFBLDJCQUFtQztBQUN4QztBQUNBLFFBQU07QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFOO0FBQ0EsU0FBTztBQUNMLGdCQUFZO0FBQ1YsZ0JBQTJDRCxPQUFPO0FBQ2xEO0FBSEc7O0FBS0wsbUJBQWU7QUFDYixnQkFBMkNBLE9BQU87QUFDbEQ7QUFQRzs7QUFTTCxpQkFBYTtBQUNYLGdCQUEyQ0EsT0FBTztBQUNsRDtBQVhHOztBQWFMRSxRQUFJLEVBQUUsTUFBTTtBQUNWLGdCQUEyQ0YsT0FBTztBQUNsREcsWUFBTSxDQUFOQTtBQWZHO0FBaUJMQyxRQUFJLEVBQUUsYUFBOEI7QUFDbEMsZ0JBQTJDSixPQUFPO0FBQ2xELGFBQU9HLE1BQU0sQ0FBTkEsVUFBUCxFQUFPQSxDQUFQO0FBbkJHO0FBcUJMRSxVQUFNLEVBQUUsY0FBK0I7QUFDckMsZ0JBQTJDTCxPQUFPO0FBQ2xELFlBQU1NLFNBQVMsR0FBR0MsRUFBRSxVQUFwQjtBQUNBLFlBQU1DLE9BQU8sR0FBR0QsRUFBRSxJQUFsQjtBQUVBLGFBQU9KLE1BQU0sQ0FBTkEsZ0JBQVAsT0FBT0EsQ0FBUDtBQTFCRztBQTRCTE0sV0FBTyxFQUFFLGFBQThCO0FBQ3JDLGdCQUEyQ1QsT0FBTztBQUNsRCxhQUFPRyxNQUFNLENBQU5BLGFBQVAsRUFBT0EsQ0FBUDtBQTlCRztBQWdDTE8sYUFBUyxFQUFFLGNBQStCO0FBQ3hDLGdCQUEyQ1YsT0FBTztBQUNsRCxZQUFNVyxZQUFZLEdBQUdKLEVBQUUsVUFBdkI7QUFDQSxZQUFNSyxVQUFVLEdBQUdMLEVBQUUsSUFBckI7QUFFQSxhQUFPSixNQUFNLENBQU5BLHNCQUFQLFVBQU9BLENBQVA7QUFyQ0o7QUFBTyxHQUFQO0FBd0NEIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEVycm9ySW5mbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgZXhlY09uY2UsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZSxcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnLi4vY2xpZW50L3JvdXRlcidcblxuZXhwb3J0IHsgQXBwSW5pdGlhbFByb3BzIH1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dCA9IEFwcENvbnRleHRUeXBlPFJvdXRlcj5cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHM8UCA9IHt9PiA9IEFwcFByb3BzVHlwZTxSb3V0ZXIsIFA+XG5cbi8qKlxuICogYEFwcGAgY29tcG9uZW50IGlzIHVzZWQgZm9yIGluaXRpYWxpemUgb2YgcGFnZXMuIEl0IGFsbG93cyBmb3Igb3ZlcndyaXRpbmcgYW5kIGZ1bGwgY29udHJvbCBvZiB0aGUgYHBhZ2VgIGluaXRpYWxpemF0aW9uLlxuICogVGhpcyBhbGxvd3MgZm9yIGtlZXBpbmcgc3RhdGUgYmV0d2VlbiBuYXZpZ2F0aW9uLCBjdXN0b20gZXJyb3IgaGFuZGxpbmcsIGluamVjdGluZyBhZGRpdGlvbmFsIGRhdGEuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGFwcEdldEluaXRpYWxQcm9wcyh7XG4gIENvbXBvbmVudCxcbiAgY3R4LFxufTogQXBwQ29udGV4dCk6IFByb21pc2U8QXBwSW5pdGlhbFByb3BzPiB7XG4gIGNvbnN0IHBhZ2VQcm9wcyA9IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpXG4gIHJldHVybiB7IHBhZ2VQcm9wcyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcDxQID0ge30sIENQID0ge30sIFMgPSB7fT4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XG4gIFAgJiBBcHBQcm9wczxDUD4sXG4gIFNcbj4ge1xuICBzdGF0aWMgb3JpZ0dldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wc1xuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzXG5cbiAgLy8gS2VwdCBoZXJlIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbiAgLy8gV2hlbiBzb21lb25lIGVuZGVkIEFwcCB0aGV5IGNvdWxkIGNhbGwgYHN1cGVyLmNvbXBvbmVudERpZENhdGNoYC5cbiAgLy8gQGRlcHJlY2F0ZWQgVGhpcyBtZXRob2QgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gRXJyb3JzIGFyZSBjYXVnaHQgYXQgdGhlIHRvcCBsZXZlbFxuICBjb21wb25lbnREaWRDYXRjaChlcnJvcjogRXJyb3IsIF9lcnJvckluZm86IEVycm9ySW5mbyk6IHZvaWQge1xuICAgIHRocm93IGVycm9yXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyByb3V0ZXIsIENvbXBvbmVudCwgcGFnZVByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSB0aGlzXG4gICAgICAucHJvcHMgYXMgQXBwUHJvcHM8Q1A+XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBvbmVudFxuICAgICAgICB7Li4ucGFnZVByb3BzfVxuICAgICAgICB7XG4gICAgICAgICAgLy8gd2UgZG9uJ3QgYWRkIHRoZSBsZWdhY3kgVVJMIHByb3AgaWYgaXQncyB1c2luZyBub24tbGVnYWN5XG4gICAgICAgICAgLy8gbWV0aG9kcyBsaWtlIGdldFN0YXRpY1Byb3BzIGFuZCBnZXRTZXJ2ZXJTaWRlUHJvcHNcbiAgICAgICAgICAuLi4oIShfX05fU1NHIHx8IF9fTl9TU1ApID8geyB1cmw6IGNyZWF0ZVVybChyb3V0ZXIpIH0gOiB7fSlcbiAgICAgICAgfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxubGV0IHdhcm5Db250YWluZXI6ICgpID0+IHZvaWRcbmxldCB3YXJuVXJsOiAoKSA9PiB2b2lkXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHdhcm5Db250YWluZXIgPSBleGVjT25jZSgoKSA9PiB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgYFdhcm5pbmc6IHRoZSBcXGBDb250YWluZXJcXGAgaW4gXFxgX2FwcFxcYCBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCBzaG91bGQgYmUgcmVtb3ZlZC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvYXBwLWNvbnRhaW5lci1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcblxuICB3YXJuVXJsID0gZXhlY09uY2UoKCkgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBgV2FybmluZzogdGhlICd1cmwnIHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3VybC1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcbn1cblxuLy8gQGRlcHJlY2F0ZWQgbm9vcCBmb3Igbm93IHVudGlsIHJlbW92YWxcbmV4cG9ydCBmdW5jdGlvbiBDb250YWluZXIocDogYW55KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuQ29udGFpbmVyKClcbiAgcmV0dXJuIHAuY2hpbGRyZW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVVybChyb3V0ZXI6IFJvdXRlcikge1xuICAvLyBUaGlzIGlzIHRvIG1ha2Ugc3VyZSB3ZSBkb24ndCByZWZlcmVuY2VzIHRoZSByb3V0ZXIgb2JqZWN0IGF0IGNhbGwgdGltZVxuICBjb25zdCB7IHBhdGhuYW1lLCBhc1BhdGgsIHF1ZXJ5IH0gPSByb3V0ZXJcbiAgcmV0dXJuIHtcbiAgICBnZXQgcXVlcnkoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcXVlcnlcbiAgICB9LFxuICAgIGdldCBwYXRobmFtZSgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBwYXRobmFtZVxuICAgIH0sXG4gICAgZ2V0IGFzUGF0aCgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBhc1BhdGhcbiAgICB9LFxuICAgIGJhY2s6ICgpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJvdXRlci5iYWNrKClcbiAgICB9LFxuICAgIHB1c2g6ICh1cmw6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiByb3V0ZXIucHVzaCh1cmwsIGFzKVxuICAgIH0sXG4gICAgcHVzaFRvOiAoaHJlZjogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgY29uc3QgcHVzaFJvdXRlID0gYXMgPyBocmVmIDogJydcbiAgICAgIGNvbnN0IHB1c2hVcmwgPSBhcyB8fCBocmVmXG5cbiAgICAgIHJldHVybiByb3V0ZXIucHVzaChwdXNoUm91dGUsIHB1c2hVcmwpXG4gICAgfSxcbiAgICByZXBsYWNlOiAodXJsOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UodXJsLCBhcylcbiAgICB9LFxuICAgIHJlcGxhY2VUbzogKGhyZWY6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIGNvbnN0IHJlcGxhY2VSb3V0ZSA9IGFzID8gaHJlZiA6ICcnXG4gICAgICBjb25zdCByZXBsYWNlVXJsID0gYXMgfHwgaHJlZlxuXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UocmVwbGFjZVJvdXRlLCByZXBsYWNlVXJsKVxuICAgIH0sXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/pages/_app.js\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _libs_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../libs/apollo */ \"./libs/apollo.tsx\");\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ \"@apollo/react-hooks\");\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _gql_allCharacters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../gql/allCharacters */ \"./gql/allCharacters.ts\");\n/* harmony import */ var _layout_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout/Header */ \"./layout/Header.tsx\");\nvar _jsxFileName = \"/Users/woohyun/Documents/posting/gudok_and_joayo/pages/index.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nconst IndexPage = () => {\n  const {\n    loading,\n    error,\n    data\n  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__[\"useQuery\"])(_gql_allCharacters__WEBPACK_IMPORTED_MODULE_3__[\"ALL_CHARACTERS\"]);\n  if (error) return __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 23\n    }\n  }, \"Error\");\n  if (loading) return __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 25\n    }\n  }, \"Loading...\");\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_layout_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 13\n    }\n  }), __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 13\n    }\n  }, __jsx(\"h3\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 17\n    }\n  }, \"Setting up Apollo GraphQL in Next.js with Server Side Rendering\")), __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }\n  }, data.characters.results.map(data => __jsx(\"ul\", {\n    key: data.id,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 21\n    }\n  }, __jsx(\"li\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 25\n    }\n  }, data.name)))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_libs_apollo__WEBPACK_IMPORTED_MODULE_1__[\"withApollo\"])({\n  ssr: true\n})(IndexPage));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJJbmRleFBhZ2UiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwidXNlUXVlcnkiLCJBTExfQ0hBUkFDVEVSUyIsImNoYXJhY3RlcnMiLCJyZXN1bHRzIiwibWFwIiwiaWQiLCJuYW1lIiwid2l0aEFwb2xsbyIsInNzciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsU0FBUyxHQUFHLE1BQU07QUFDcEIsUUFBTTtBQUFFQyxXQUFGO0FBQVdDLFNBQVg7QUFBa0JDO0FBQWxCLE1BQTJCQyxvRUFBUSxDQUFDQyxpRUFBRCxDQUF6QztBQUNBLE1BQUlILEtBQUosRUFBVyxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNYLE1BQUlELE9BQUosRUFBYSxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQVA7QUFFYixTQUNJLG1FQUNJLE1BQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUVBREosQ0FGSixFQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS0UsSUFBSSxDQUFDRyxVQUFMLENBQWdCQyxPQUFoQixDQUF3QkMsR0FBeEIsQ0FBNkJMLElBQUQsSUFDekI7QUFBSSxPQUFHLEVBQUVBLElBQUksQ0FBQ00sRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLTixJQUFJLENBQUNPLElBQVYsQ0FESixDQURILENBREwsQ0FMSixDQURKO0FBZUgsQ0FwQkQ7O0FBc0JlQyw4SEFBVSxDQUFDO0FBQUVDLEtBQUcsRUFBRTtBQUFQLENBQUQsQ0FBVixDQUEwQlosU0FBMUIsQ0FBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB3aXRoQXBvbGxvIH0gZnJvbSAnLi4vbGlicy9hcG9sbG8nO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJztcbmltcG9ydCB7IEFMTF9DSEFSQUNURVJTIH0gZnJvbSAnLi4vZ3FsL2FsbENoYXJhY3RlcnMnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9sYXlvdXQvSGVhZGVyJztcblxuY29uc3QgSW5kZXhQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KEFMTF9DSEFSQUNURVJTKTtcbiAgICBpZiAoZXJyb3IpIHJldHVybiA8aDE+RXJyb3I8L2gxPjtcbiAgICBpZiAobG9hZGluZykgcmV0dXJuIDxoMT5Mb2FkaW5nLi4uPC9oMT47XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgICAgPGgxPlxuICAgICAgICAgICAgICAgIDxoMz5TZXR0aW5nIHVwIEFwb2xsbyBHcmFwaFFMIGluIE5leHQuanMgd2l0aCBTZXJ2ZXIgU2lkZSBSZW5kZXJpbmc8L2gzPlxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge2RhdGEuY2hhcmFjdGVycy5yZXN1bHRzLm1hcCgoZGF0YSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8dWwga2V5PXtkYXRhLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57ZGF0YS5uYW1lfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhBcG9sbG8oeyBzc3I6IHRydWUgfSkoSW5kZXhQYWdlKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/woohyun/Documents/posting/gudok_and_joayo/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@apollo/react-hooks\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL3JlYWN0LWhvb2tzXCI/NWE5MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAYXBvbGxvL3JlYWN0LWhvb2tzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9yZWFjdC1ob29rc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@apollo/react-hooks\n");

/***/ }),

/***/ "@apollo/react-ssr":
/*!************************************!*\
  !*** external "@apollo/react-ssr" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@apollo/react-ssr\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL3JlYWN0LXNzclwiPzEyMzQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQGFwb2xsby9yZWFjdC1zc3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL3JlYWN0LXNzclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@apollo/react-ssr\n");

/***/ }),

/***/ "apollo-cache-inmemory":
/*!****************************************!*\
  !*** external "apollo-cache-inmemory" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-cache-inmemory\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tY2FjaGUtaW5tZW1vcnlcIj80YmQxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImFwb2xsby1jYWNoZS1pbm1lbW9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1jYWNoZS1pbm1lbW9yeVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///apollo-cache-inmemory\n");

/***/ }),

/***/ "apollo-client":
/*!********************************!*\
  !*** external "apollo-client" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tY2xpZW50XCI/NDI3NCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJhcG9sbG8tY2xpZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLWNsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///apollo-client\n");

/***/ }),

/***/ "apollo-link-http":
/*!***********************************!*\
  !*** external "apollo-link-http" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-link-http\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tbGluay1odHRwXCI/MTExMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJhcG9sbG8tbGluay1odHRwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLWxpbmstaHR0cFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///apollo-link-http\n");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-tag\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiP2Y4YjciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZ3JhcGhxbC10YWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///graphql-tag\n");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-unfetch\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLXVuZmV0Y2hcIj9lYmI2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Imlzb21vcnBoaWMtdW5mZXRjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtdW5mZXRjaFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///isomorphic-unfetch\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });