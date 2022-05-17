"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategory = exports.updateCategory = exports.storeCategory = exports.showCategory = exports.getCategory = void 0;
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const getCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const categories = yield prisma.category.findMany();
    return res.json(categories);
});
exports.getCategory = getCategory;
const showCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const category = yield prisma.Category.findUnique({
        where: {
            id: Number(id),
        },
    });
    return res.json(category);
});
exports.showCategory = showCategory;
const storeCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.body;
    const category = yield prisma.Category.create({
        data: {
            name,
        },
    });
    return res.json(category);
});
exports.storeCategory = storeCategory;
const updateCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { name } = req.body;
    const category = yield prisma.Category.update({
        where: {
            id: Number(id),
        },
        data: {
            name,
        }
    });
    return res.json(category);
});
exports.updateCategory = updateCategory;
const deleteCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield prisma.Category.delete({
        where: {
            id: Number(id),
        },
    });
    return res.json('Deleted category successfully!');
});
exports.deleteCategory = deleteCategory;
