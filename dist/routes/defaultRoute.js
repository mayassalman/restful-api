"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultRoute = void 0;
const express_1 = require("express");
exports.defaultRoute = (0, express_1.Router)();
exports.defaultRoute.get('/', (_req, res) => {
    res.send("Default route response!");
});
//# sourceMappingURL=defaultRoute.js.map