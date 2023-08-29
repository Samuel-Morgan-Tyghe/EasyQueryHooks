"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGlobalContext = exports.WrapThatApp = void 0;
var react_1 = __importStar(require("react"));
var react_query_1 = require("@tanstack/react-query");
var GlobalContext = (0, react_1.createContext)(null);
var WrapThatApp = function (_a) {
    var children = _a.children, queryClient = _a.queryClient;
    var _b = (0, react_1.useState)(null), globalOptions = _b[0], setGlobalOptions = _b[1];
    var _c = (0, react_1.useState)(null), httpClient = _c[0], setHttpClient = _c[1];
    return (react_1.default.createElement(react_query_1.QueryClientProvider, { client: queryClient },
        react_1.default.createElement(GlobalContext.Provider, { value: { queryClient: queryClient, globalOptions: globalOptions, httpClient: httpClient } }, children)));
};
exports.WrapThatApp = WrapThatApp;
// Custom hook to use this context
var useGlobalContext = function () {
    var context = (0, react_1.useContext)(GlobalContext);
    if (!context) {
        throw new Error("useGlobalContext must be used within a WrapThatApp component");
    }
    return context;
};
exports.useGlobalContext = useGlobalContext;
//# sourceMappingURL=WrapThatApp.js.map