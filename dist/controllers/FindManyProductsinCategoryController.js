"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showProductInCategory = void 0;
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const showProductInCategory = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        const products = await prisma.product.findMany({
            where: {
                categoryId: Number(id),
            }
        });
        return res.json(products);
    }
    catch (e) {
        console.error(e);
        throw new Error(`Error: ${e}`);
    }
};
exports.showProductInCategory = showProductInCategory;
//# sourceMappingURL=FindManyProductsInCategoryController.js.map