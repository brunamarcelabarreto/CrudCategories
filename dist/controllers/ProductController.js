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
        const product = await prisma.Product.findUnique({
            where: {
                id: Number(id),
            },
        });
        return res.json(product);
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
        const { name } = req.body;
        const product = await prisma.Product.create({
            data: {
                name,
            },
        });
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
        const { name } = req.body;
        const product = await prisma.Product.update({
            where: {
                id: Number(id),
            },
            data: {
                name,
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