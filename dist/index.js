"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors = require('cors');
app.use(cors());
app.get('/products/:id', function (req, res, next) {
    res.json({ msg: 'This is CORS-enabled for all origins!' });
});
app.listen(4000, function () {
    console.log('CORS-enabled web server listening on port 4000');
});
app.use(express_1.default.json());
app.use(require('./routes/index'));
app.get("/category", (req, res) => {
    console.log("aqui");
    return res.json();
});
//# sourceMappingURL=index.js.map