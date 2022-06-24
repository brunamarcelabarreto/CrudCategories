"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getProduct = exports.showProduct = void 0;
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const showProduct = async (req, res) => {
    try {
        const products = await prisma.product.findMany();
        return res.json(products);
    }
    catch (e) {
        console.error(e);
        throw new Error(`Error: ${e}`);
    }
};
exports.showProduct = showProduct;
const getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        console.log('req.params', req.params);
        const category = await prisma.Product.findUnique({
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
exports.getProduct = getProduct;
const createProduct = async (req, res) => {
    try {
        const { name, code, quantity, is_active, categoryId } = req.body;
        const product = await prisma.Product.create({
            data: {
                name: name,
                code: code,
                quantity: Number(quantity),
                is_active: Boolean(is_active),
                categoryId: Number(categoryId),
            },
        });
        console.log(product);
        return res.json(product);
    }
    catch (e) {
        console.error(e);
        throw new Error(`Error: ${e}`);
    }
    ;
};
exports.createProduct = createProduct;
const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, code, quantity, is_active, categoryId } = req.body;
        const product = await prisma.Product.update({
            where: {
                id: Number(id),
            },
            data: {
                name,
                code: Number(code),
                quantity: Number(quantity),
                is_active: Boolean(is_active),
                categoryId: Number(categoryId),
            }
        });
        return res.json(product);
    }
    catch (e) {
        console.error(e);
        throw new Error(`Error: ${e}`);
    }
    ;
};
exports.updateProduct = updateProduct;
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.Product.delete({
            where: {
                id: Number(id),
            },
        });
        return res.json('Deleted product successfully!');
    }
    catch (e) {
        console.error(e);
        throw new Error(`Error: ${e}`);
    }
    ;
};
exports.deleteProduct = deleteProduct;
//# sourceMappingURL=ProductController.js.map