"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//const test = require('express');
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(require('./routes/index'));
app.get("/category", (req, res) => {
    console.log("aqui");
    return res.json();
});
app.listen(4000, () => console.log("Up!"));
// import express from 'express';
// const app = express();
// app.use(express.json());
// app.get("/health", (req, res) => {
//   return res.json("up");
// })
// app.listen(4000);
// console.log('Server listening on port', 4000);
