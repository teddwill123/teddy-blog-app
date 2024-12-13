/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/post/get/route";
exports.ids = ["app/api/post/get/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fpost%2Fget%2Froute&page=%2Fapi%2Fpost%2Fget%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fpost%2Fget%2Froute.js&appDir=%2FUsers%2Fteddy%2FDeveloper%2Fteddy-blog%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fteddy%2FDeveloper%2Fteddy-blog&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fpost%2Fget%2Froute&page=%2Fapi%2Fpost%2Fget%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fpost%2Fget%2Froute.js&appDir=%2FUsers%2Fteddy%2FDeveloper%2Fteddy-blog%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fteddy%2FDeveloper%2Fteddy-blog&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_teddy_Developer_teddy_blog_src_app_api_post_get_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/post/get/route.js */ \"(rsc)/./src/app/api/post/get/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/post/get/route\",\n        pathname: \"/api/post/get\",\n        filename: \"route\",\n        bundlePath: \"app/api/post/get/route\"\n    },\n    resolvedPagePath: \"/Users/teddy/Developer/teddy-blog/src/app/api/post/get/route.js\",\n    nextConfigOutput,\n    userland: _Users_teddy_Developer_teddy_blog_src_app_api_post_get_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZwb3N0JTJGZ2V0JTJGcm91dGUmcGFnZT0lMkZhcGklMkZwb3N0JTJGZ2V0JTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGcG9zdCUyRmdldCUyRnJvdXRlLmpzJmFwcERpcj0lMkZVc2VycyUyRnRlZGR5JTJGRGV2ZWxvcGVyJTJGdGVkZHktYmxvZyUyRnNyYyUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZ0ZWRkeSUyRkRldmVsb3BlciUyRnRlZGR5LWJsb2cmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ2U7QUFDNUY7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy90ZWRkeS9EZXZlbG9wZXIvdGVkZHktYmxvZy9zcmMvYXBwL2FwaS9wb3N0L2dldC9yb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvcG9zdC9nZXQvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9wb3N0L2dldFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvcG9zdC9nZXQvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvdGVkZHkvRGV2ZWxvcGVyL3RlZGR5LWJsb2cvc3JjL2FwcC9hcGkvcG9zdC9nZXQvcm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fpost%2Fget%2Froute&page=%2Fapi%2Fpost%2Fget%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fpost%2Fget%2Froute.js&appDir=%2FUsers%2Fteddy%2FDeveloper%2Fteddy-blog%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fteddy%2FDeveloper%2Fteddy-blog&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/post/get/route.js":
/*!***************************************!*\
  !*** ./src/app/api/post/get/route.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _lib_models_post_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/models/post.model.js */ \"(rsc)/./src/lib/models/post.model.js\");\n/* harmony import */ var _lib_mongodb_mongoose_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../lib/mongodb/mongoose.js */ \"(rsc)/./src/lib/mongodb/mongoose.js\");\n\n\nconst POST = async (req)=>{\n    await (0,_lib_mongodb_mongoose_js__WEBPACK_IMPORTED_MODULE_1__.connect)();\n    const data = await req.json();\n    try {\n        const startIndex = parseInt(data.startIndex) || 0;\n        const limit = parseInt(data.limit) || 9;\n        const sortDirection = data.order === 'asc' ? 1 : -1;\n        const posts = await _lib_models_post_model_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find({\n            ...data.userId && {\n                userId: data.userId\n            },\n            ...data.category && data.category !== 'null' && data.category !== 'undefined' && {\n                category: data.category\n            },\n            ...data.slug && {\n                slug: data.slug\n            },\n            ...data.postId && {\n                _id: data.postId\n            },\n            ...data.searchTerm && {\n                $or: [\n                    {\n                        title: {\n                            $regex: data.searchTerm,\n                            $options: 'i'\n                        }\n                    },\n                    {\n                        content: {\n                            $regex: data.searchTerm,\n                            $options: 'i'\n                        }\n                    }\n                ]\n            }\n        }).sort({\n            updatedAt: sortDirection\n        }).skip(startIndex).limit(limit);\n        const totalPosts = await _lib_models_post_model_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].countDocuments();\n        const now = new Date();\n        const oneMonthAgo = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());\n        const lastMonthPosts = await _lib_models_post_model_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].countDocuments({\n            createdAt: {\n                $gte: oneMonthAgo\n            }\n        });\n        return new Response(JSON.stringify({\n            posts,\n            totalPosts,\n            lastMonthPosts\n        }), {\n            status: 200\n        });\n    } catch (error) {\n        console.log('Error getting posts:', error);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9wb3N0L2dldC9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBd0Q7QUFDTTtBQUV2RCxNQUFNRSxPQUFPLE9BQU9DO0lBQ3pCLE1BQU1GLGlFQUFPQTtJQUNiLE1BQU1HLE9BQU8sTUFBTUQsSUFBSUUsSUFBSTtJQUMzQixJQUFJO1FBQ0YsTUFBTUMsYUFBYUMsU0FBU0gsS0FBS0UsVUFBVSxLQUFLO1FBQ2hELE1BQU1FLFFBQVFELFNBQVNILEtBQUtJLEtBQUssS0FBSztRQUN0QyxNQUFNQyxnQkFBZ0JMLEtBQUtNLEtBQUssS0FBSyxRQUFRLElBQUksQ0FBQztRQUNsRCxNQUFNQyxRQUFRLE1BQU1YLGlFQUFJQSxDQUFDWSxJQUFJLENBQUM7WUFDNUIsR0FBSVIsS0FBS1MsTUFBTSxJQUFJO2dCQUFFQSxRQUFRVCxLQUFLUyxNQUFNO1lBQUMsQ0FBQztZQUMxQyxHQUFJVCxLQUFLVSxRQUFRLElBQ2ZWLEtBQUtVLFFBQVEsS0FBSyxVQUNsQlYsS0FBS1UsUUFBUSxLQUFLLGVBQWU7Z0JBQUVBLFVBQVVWLEtBQUtVLFFBQVE7WUFBQyxDQUFDO1lBQzlELEdBQUlWLEtBQUtXLElBQUksSUFBSTtnQkFBRUEsTUFBTVgsS0FBS1csSUFBSTtZQUFDLENBQUM7WUFDcEMsR0FBSVgsS0FBS1ksTUFBTSxJQUFJO2dCQUFFQyxLQUFLYixLQUFLWSxNQUFNO1lBQUMsQ0FBQztZQUN2QyxHQUFJWixLQUFLYyxVQUFVLElBQUk7Z0JBQ3JCQyxLQUFLO29CQUNIO3dCQUFFQyxPQUFPOzRCQUFFQyxRQUFRakIsS0FBS2MsVUFBVTs0QkFBRUksVUFBVTt3QkFBSTtvQkFBRTtvQkFDcEQ7d0JBQUVDLFNBQVM7NEJBQUVGLFFBQVFqQixLQUFLYyxVQUFVOzRCQUFFSSxVQUFVO3dCQUFJO29CQUFFO2lCQUN2RDtZQUNILENBQUM7UUFDSCxHQUNHRSxJQUFJLENBQUM7WUFBRUMsV0FBV2hCO1FBQWMsR0FDaENpQixJQUFJLENBQUNwQixZQUNMRSxLQUFLLENBQUNBO1FBRVQsTUFBTW1CLGFBQWEsTUFBTTNCLGlFQUFJQSxDQUFDNEIsY0FBYztRQUU1QyxNQUFNQyxNQUFNLElBQUlDO1FBRWhCLE1BQU1DLGNBQWMsSUFBSUQsS0FDdEJELElBQUlHLFdBQVcsSUFDZkgsSUFBSUksUUFBUSxLQUFLLEdBQ2pCSixJQUFJSyxPQUFPO1FBR2IsTUFBTUMsaUJBQWlCLE1BQU1uQyxpRUFBSUEsQ0FBQzRCLGNBQWMsQ0FBQztZQUMvQ1EsV0FBVztnQkFBRUMsTUFBTU47WUFBWTtRQUNqQztRQUVBLE9BQU8sSUFBSU8sU0FBU0MsS0FBS0MsU0FBUyxDQUFDO1lBQUU3QjtZQUFPZ0I7WUFBWVE7UUFBZSxJQUFJO1lBQ3pFTSxRQUFRO1FBQ1Y7SUFDRixFQUFFLE9BQU9DLE9BQU87UUFDZEMsUUFBUUMsR0FBRyxDQUFDLHdCQUF3QkY7SUFDdEM7QUFDRixFQUFFIiwic291cmNlcyI6WyIvVXNlcnMvdGVkZHkvRGV2ZWxvcGVyL3RlZGR5LWJsb2cvc3JjL2FwcC9hcGkvcG9zdC9nZXQvcm91dGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBvc3QgZnJvbSAnLi4vLi4vLi4vLi4vbGliL21vZGVscy9wb3N0Lm1vZGVsLmpzJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvbW9uZ29kYi9tb25nb29zZS5qcyc7XG5cbmV4cG9ydCBjb25zdCBQT1NUID0gYXN5bmMgKHJlcSkgPT4ge1xuICBhd2FpdCBjb25uZWN0KCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXEuanNvbigpO1xuICB0cnkge1xuICAgIGNvbnN0IHN0YXJ0SW5kZXggPSBwYXJzZUludChkYXRhLnN0YXJ0SW5kZXgpIHx8IDA7XG4gICAgY29uc3QgbGltaXQgPSBwYXJzZUludChkYXRhLmxpbWl0KSB8fCA5O1xuICAgIGNvbnN0IHNvcnREaXJlY3Rpb24gPSBkYXRhLm9yZGVyID09PSAnYXNjJyA/IDEgOiAtMTtcbiAgICBjb25zdCBwb3N0cyA9IGF3YWl0IFBvc3QuZmluZCh7XG4gICAgICAuLi4oZGF0YS51c2VySWQgJiYgeyB1c2VySWQ6IGRhdGEudXNlcklkIH0pLFxuICAgICAgLi4uKGRhdGEuY2F0ZWdvcnkgJiZcbiAgICAgICAgZGF0YS5jYXRlZ29yeSAhPT0gJ251bGwnICYmXG4gICAgICAgIGRhdGEuY2F0ZWdvcnkgIT09ICd1bmRlZmluZWQnICYmIHsgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnkgfSksXG4gICAgICAuLi4oZGF0YS5zbHVnICYmIHsgc2x1ZzogZGF0YS5zbHVnIH0pLFxuICAgICAgLi4uKGRhdGEucG9zdElkICYmIHsgX2lkOiBkYXRhLnBvc3RJZCB9KSxcbiAgICAgIC4uLihkYXRhLnNlYXJjaFRlcm0gJiYge1xuICAgICAgICAkb3I6IFtcbiAgICAgICAgICB7IHRpdGxlOiB7ICRyZWdleDogZGF0YS5zZWFyY2hUZXJtLCAkb3B0aW9uczogJ2knIH0gfSxcbiAgICAgICAgICB7IGNvbnRlbnQ6IHsgJHJlZ2V4OiBkYXRhLnNlYXJjaFRlcm0sICRvcHRpb25zOiAnaScgfSB9LFxuICAgICAgICBdLFxuICAgICAgfSksXG4gICAgfSlcbiAgICAgIC5zb3J0KHsgdXBkYXRlZEF0OiBzb3J0RGlyZWN0aW9uIH0pXG4gICAgICAuc2tpcChzdGFydEluZGV4KVxuICAgICAgLmxpbWl0KGxpbWl0KTtcblxuICAgIGNvbnN0IHRvdGFsUG9zdHMgPSBhd2FpdCBQb3N0LmNvdW50RG9jdW1lbnRzKCk7XG5cbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuXG4gICAgY29uc3Qgb25lTW9udGhBZ28gPSBuZXcgRGF0ZShcbiAgICAgIG5vdy5nZXRGdWxsWWVhcigpLFxuICAgICAgbm93LmdldE1vbnRoKCkgLSAxLFxuICAgICAgbm93LmdldERhdGUoKVxuICAgICk7XG5cbiAgICBjb25zdCBsYXN0TW9udGhQb3N0cyA9IGF3YWl0IFBvc3QuY291bnREb2N1bWVudHMoe1xuICAgICAgY3JlYXRlZEF0OiB7ICRndGU6IG9uZU1vbnRoQWdvIH0sXG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHsgcG9zdHMsIHRvdGFsUG9zdHMsIGxhc3RNb250aFBvc3RzIH0pLCB7XG4gICAgICBzdGF0dXM6IDIwMCxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZygnRXJyb3IgZ2V0dGluZyBwb3N0czonLCBlcnJvcik7XG4gIH1cbn07Il0sIm5hbWVzIjpbIlBvc3QiLCJjb25uZWN0IiwiUE9TVCIsInJlcSIsImRhdGEiLCJqc29uIiwic3RhcnRJbmRleCIsInBhcnNlSW50IiwibGltaXQiLCJzb3J0RGlyZWN0aW9uIiwib3JkZXIiLCJwb3N0cyIsImZpbmQiLCJ1c2VySWQiLCJjYXRlZ29yeSIsInNsdWciLCJwb3N0SWQiLCJfaWQiLCJzZWFyY2hUZXJtIiwiJG9yIiwidGl0bGUiLCIkcmVnZXgiLCIkb3B0aW9ucyIsImNvbnRlbnQiLCJzb3J0IiwidXBkYXRlZEF0Iiwic2tpcCIsInRvdGFsUG9zdHMiLCJjb3VudERvY3VtZW50cyIsIm5vdyIsIkRhdGUiLCJvbmVNb250aEFnbyIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwibGFzdE1vbnRoUG9zdHMiLCJjcmVhdGVkQXQiLCIkZ3RlIiwiUmVzcG9uc2UiLCJKU09OIiwic3RyaW5naWZ5Iiwic3RhdHVzIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/post/get/route.js\n");

/***/ }),

/***/ "(rsc)/./src/lib/models/post.model.js":
/*!**************************************!*\
  !*** ./src/lib/models/post.model.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst postSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    userId: {\n        type: String,\n        required: true\n    },\n    content: {\n        type: String,\n        required: true\n    },\n    title: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    image: {\n        type: String,\n        default: 'https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/09/how-to-write-a-blog-post.png'\n    },\n    category: {\n        type: String,\n        default: 'uncategorized'\n    },\n    slug: {\n        type: String,\n        required: true,\n        unique: true\n    }\n}, {\n    timestamps: true\n});\nconst Post = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Post || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('Post', postSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL21vZGVscy9wb3N0Lm1vZGVsLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUNoQyxNQUFNQyxhQUFhLElBQUlELHdEQUFlLENBQ3BDO0lBQ0VHLFFBQVE7UUFDTkMsTUFBTUM7UUFDTkMsVUFBVTtJQUNaO0lBQ0FDLFNBQVM7UUFDUEgsTUFBTUM7UUFDTkMsVUFBVTtJQUNaO0lBQ0FFLE9BQU87UUFDTEosTUFBTUM7UUFDTkMsVUFBVTtRQUNWRyxRQUFRO0lBQ1Y7SUFDQUMsT0FBTztRQUNMTixNQUFNQztRQUNOTSxTQUNFO0lBQ0o7SUFDQUMsVUFBVTtRQUNSUixNQUFNQztRQUNOTSxTQUFTO0lBQ1g7SUFDQUUsTUFBTTtRQUNKVCxNQUFNQztRQUNOQyxVQUFVO1FBQ1ZHLFFBQVE7SUFDVjtBQUNGLEdBQ0E7SUFBRUssWUFBWTtBQUFLO0FBRXJCLE1BQU1DLE9BQU9mLHdEQUFlLENBQUNlLElBQUksSUFBSWYscURBQWMsQ0FBQyxRQUFRQztBQUM1RCxpRUFBZWMsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL3RlZGR5L0RldmVsb3Blci90ZWRkeS1ibG9nL3NyYy9saWIvbW9kZWxzL3Bvc3QubW9kZWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcbmNvbnN0IHBvc3RTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKFxuICB7XG4gICAgdXNlcklkOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIGNvbnRlbnQ6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgdW5pcXVlOiB0cnVlLFxuICAgIH0sXG4gICAgaW1hZ2U6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgICdodHRwczovL3d3dy5ob3N0aW5nZXIuY29tL3R1dG9yaWFscy93cC1jb250ZW50L3VwbG9hZHMvc2l0ZXMvMi8yMDIxLzA5L2hvdy10by13cml0ZS1hLWJsb2ctcG9zdC5wbmcnLFxuICAgIH0sXG4gICAgY2F0ZWdvcnk6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICd1bmNhdGVnb3JpemVkJyxcbiAgICB9LFxuICAgIHNsdWc6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgdW5pcXVlOiB0cnVlLFxuICAgIH0sXG4gIH0sXG4gIHsgdGltZXN0YW1wczogdHJ1ZSB9XG4pO1xuY29uc3QgUG9zdCA9IG1vbmdvb3NlLm1vZGVscy5Qb3N0IHx8IG1vbmdvb3NlLm1vZGVsKCdQb3N0JywgcG9zdFNjaGVtYSk7XG5leHBvcnQgZGVmYXVsdCBQb3N0OyJdLCJuYW1lcyI6WyJtb25nb29zZSIsInBvc3RTY2hlbWEiLCJTY2hlbWEiLCJ1c2VySWQiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJjb250ZW50IiwidGl0bGUiLCJ1bmlxdWUiLCJpbWFnZSIsImRlZmF1bHQiLCJjYXRlZ29yeSIsInNsdWciLCJ0aW1lc3RhbXBzIiwiUG9zdCIsIm1vZGVscyIsIm1vZGVsIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/models/post.model.js\n");

/***/ }),

/***/ "(rsc)/./src/lib/mongodb/mongoose.js":
/*!*************************************!*\
  !*** ./src/lib/mongodb/mongoose.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connect: () => (/* binding */ connect)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nlet initialized = false;\nconst connect = async ()=>{\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default().set('strictQuery', true);\n    if (initialized) {\n        console.log('Already connected to MongoDB');\n        return;\n    }\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI, {\n            dbName: 'next-blog',\n            useNewUrlParser: true,\n            useUnifiedTopology: true\n        });\n        console.log('Connected to MongoDB');\n        initialized = true;\n    } catch (error) {\n        console.log('Error connecting to MongoDB:', error);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL21vbmdvZGIvbW9uZ29vc2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLElBQUlDLGNBQWM7QUFFWCxNQUFNQyxVQUFVO0lBQ3JCRixtREFBWSxDQUFDLGVBQWU7SUFDNUIsSUFBSUMsYUFBYTtRQUNmRyxRQUFRQyxHQUFHLENBQUM7UUFDWjtJQUNGO0lBQ0EsSUFBSTtRQUNGLE1BQU1MLHVEQUFnQixDQUFDTSxRQUFRQyxHQUFHLENBQUNDLFdBQVcsRUFBRTtZQUM5Q0MsUUFBUTtZQUNSQyxpQkFBaUI7WUFDakJDLG9CQUFvQjtRQUN0QjtRQUNBUCxRQUFRQyxHQUFHLENBQUM7UUFDWkosY0FBYztJQUNoQixFQUFFLE9BQU9XLE9BQU87UUFDZFIsUUFBUUMsR0FBRyxDQUFDLGdDQUFnQ087SUFDOUM7QUFDRixFQUFFIiwic291cmNlcyI6WyIvVXNlcnMvdGVkZHkvRGV2ZWxvcGVyL3RlZGR5LWJsb2cvc3JjL2xpYi9tb25nb2RiL21vbmdvb3NlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5cbmxldCBpbml0aWFsaXplZCA9IGZhbHNlO1xuXG5leHBvcnQgY29uc3QgY29ubmVjdCA9IGFzeW5jICgpID0+IHtcbiAgbW9uZ29vc2Uuc2V0KCdzdHJpY3RRdWVyeScsIHRydWUpO1xuICBpZiAoaW5pdGlhbGl6ZWQpIHtcbiAgICBjb25zb2xlLmxvZygnQWxyZWFkeSBjb25uZWN0ZWQgdG8gTW9uZ29EQicpO1xuICAgIHJldHVybjtcbiAgfVxuICB0cnkge1xuICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09EQl9VUkksIHtcbiAgICAgIGRiTmFtZTogJ25leHQtYmxvZycsXG4gICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG4gICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coJ0Nvbm5lY3RlZCB0byBNb25nb0RCJyk7XG4gICAgaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKCdFcnJvciBjb25uZWN0aW5nIHRvIE1vbmdvREI6JywgZXJyb3IpO1xuICB9XG59O1xuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiaW5pdGlhbGl6ZWQiLCJjb25uZWN0Iiwic2V0IiwiY29uc29sZSIsImxvZyIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsImRiTmFtZSIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsImVycm9yIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/mongodb/mongoose.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fpost%2Fget%2Froute&page=%2Fapi%2Fpost%2Fget%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fpost%2Fget%2Froute.js&appDir=%2FUsers%2Fteddy%2FDeveloper%2Fteddy-blog%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fteddy%2FDeveloper%2Fteddy-blog&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();