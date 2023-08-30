"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WrapThatApp = void 0;
var react_1 = __importDefault(require("react"));
var WrapThatApp = function (_a) {
    var children = _a.children, queryClient = _a.queryClient, QueryClientProvider = _a.QueryClientProvider;
    return (react_1.default.createElement(QueryClientProvider, { client: queryClient }, children));
};
exports.WrapThatApp = WrapThatApp;
//# sourceMappingURL=WrapThatApp.js.map