"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greetingRoute = void 0;
const express_1 = require("express");
exports.greetingRoute = (0, express_1.Router)();
exports.greetingRoute.post('/greeting', (req, res) => {
    const { name } = req.body;
    if (name) {
        res.send(`Greeting ${name}`);
    }
});
//# sourceMappingURL=greeting.js.map