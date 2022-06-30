"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategory = exports.updateCategory = exports.createCategory = exports.getCategory = exports.showCategory = exports.countCategory = void 0;
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const countCategory = async (req, res) => {
    try {
        const categories = await prisma.category.count();
        return res.json(categories);
    }
    catch (e) {
        console.error(e);
        throw new Error(`Error: ${e}`);
    }
};
exports.countCategory = countCategory;
const showCategory = async (req, res) => {
    try {
        const categories = await prisma.category.findMany();
        console.log(categories);
        return res.json(categories);
    }
    catch (e) {
        console.error(e);
        throw new Error(`Error: ${e}`);
    }
};
exports.showCategory = showCategory;
const getCategory = async (req, res) => {
    try {
        const { id } = req.params;
        console.log('req.params', req.params);
        const category = await prisma.Category.findUnique({
            where: {
                id: Number(id),
            },
        });
        return res.json(category);
    }
    catch (e) {
        console.error(e);
        throw new Error(`Error: ${e}`);
    }
    ;
};
exports.getCategory = getCategory;
const createCategory = async (req, res) => {
    try {
        let name = undefined;
        if (req.body && req.body.name) {
            name = req.body.name;
        }
        else
            throw new Error('property name is not defined in payload');
        const category = await prisma.Category.create({
            data: {
                name,
            },
        });
        return res.json(category);
    }
    catch (e) {
        console.error(e);
        throw new Error(`Error: ${e}`);
    }
    ;
};
exports.createCategory = createCategory;
const updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const category = await prisma.Category.update({
            where: {
                id: Number(id),
            },
            data: {
                name,
            }
        });
        return res.json(category);
    }
    catch (e) {
        console.error(e);
        throw new Error(`Error: ${e}`);
    }
    ;
};
exports.updateCategory = updateCategory;
const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.Category.delete({
            where: {
                id: Number(id),
            },
        });
        return res.json('Deleted category successfully!');
    }
    catch (e) {
        console.error(e);
        throw new Error(`Error: ${e}`);
    }
    ;
};
exports.deleteCategory = deleteCategory;
//# sourceMappingURL=CategoryController.js.map