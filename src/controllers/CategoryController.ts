import express, { Request, Response } from "express";

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

export const showCategory = async (req: Request, res: Response): Promise<Response> => {
  try {
    const categories = await prisma.category.findMany();
    console.log(categories);  
    return res.json(categories)
  } catch (e) {
    console.error(e)
    throw new Error(`Error: ${e}`)
  }
};

export const getCategory = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;
    const category = await prisma.Category.findUnique({
      where: {
        id: Number(id),
      },
    });
    return res.json(category);
  } catch (e) {
    console.error(e)

    throw new Error(`Error: ${e}`)
  };
};

export const createCategory = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { name } = req.body;
    const category = await prisma.Category.create({
      data: {
        name,
      },
    });
    return res.json(category);
  } catch (e) {
    console.error(e)
    throw new Error(`Error: ${e}`)
  };
};

export const updateCategory = async (req: Request, res: Response): Promise<Response> => {
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
  } catch (e) {
    console.error(e)
    throw new Error(`Error: ${e}`)
  };
};

export const deleteCategory = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;
    await prisma.Category.delete({
      where: {
        id: Number(id),
      },
    });
    return res.json('Deleted category successfully!');
  } catch (e) {
    console.error(e)
    throw new Error(`Error: ${e}`)
  };
};
