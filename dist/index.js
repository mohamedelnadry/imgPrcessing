"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
const routes_1 = __importDefault(require("./routes/routes"));
app.use(express_1.default.static(process.cwd() + "/images/"));
app.use(express_1.default.static(process.cwd() + "/images/imgeAfteEdit"));
app.get("/", (req, res) => {
    res.send("bad request try /api");
});
app.get("/api", routes_1.default);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
exports.default = app;
