"use strict";
// import http from "http";
// import { server } from "typescript";
// const port:number=3000
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// http.createServer(
// (req,res)=> {
// res.statusCode=200
// res.setHeader('content-type','text/json'
// )
// res.end("Hello world\n")
// }
// ).listen(port,()=>console.log(`server is running on port ${port}`))
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = require("./routes");
const app = (0, express_1.default)();
dotenv_1.default.config();
// routes
app.use('/', routes_1.routes);
// start the server
app.listen(process.env.BACK_PORT, () => {
    console.log(`server running : http://${process.env.BACK_HOST}:${process.env.BACK_PORT}`);
});
//# sourceMappingURL=index.js.map