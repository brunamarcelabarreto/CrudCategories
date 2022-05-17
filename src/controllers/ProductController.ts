import express, { Request, Response } from "express";

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

export const showProduct = async (req: Request, res: Response): Promise<Response> => {
  try {
    const products = await prisma.product.findMany();
    return res.json(products)
  } catch (e) {
    console.error(e)
    throw new Error(`Error: ${e}`)
  }
};

export const getProduct = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;
    const product = await prisma.Product.findUnique({
      where: {
        id: Number(id),
      },
    });
    return res.json(product);
  } catch (e) {
    console.error(e)

    throw new Error(`Error: ${e}`)
  };
};

export const createProduct = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { name } = req.body;
    const product = await prisma.Product.create({
      data: {
        name,
      },
    });
    return res.json(product);
  } catch (e) {
    console.error(e)
    throw new Error(`Error: ${e}`)
  };
};

export const updateProduct = async (req: Request, res: Response): Promise<Response> => {
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
  } catch (e) {
    console.error(e)
    throw new Error(`Error: ${e}`)
  };
};

export const deleteProduct = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;
    await prisma.Product.delete({
      where: {
        id: Number(id),
      },
    });
    return res.json('Deleted product successfully!');
  } catch (e) {
    console.error(e)
    throw new Error(`Error: ${e}`)
  };
};
