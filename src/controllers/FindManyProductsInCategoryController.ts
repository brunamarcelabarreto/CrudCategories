import { Request, Response } from "express";


const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

export const showProductInCategory = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;
    console.log(id);
    const products = await prisma.product.findMany({
      where: {
        categoryId: Number(id),
      }
    });
    return res.json(products)
  } catch (e) {
    console.error(e)
    throw new Error(`Error: ${e}`)
  }
};
