import express, { Request, Response } from "express";

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


export const showCategory = async (req: Request, res: Response): Promise<Response> => {
  const categories = await prisma.category.findMany();
  return res.json(categories);
};

export const getCategory = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  const category = await prisma.Category.findUnique({
    where: { 
      id: Number(id),
    },
  });
  return res.json(category);
};

export const storeCategory = async (req: Request, res: Response): Promise<Response> => {
  const { name } = req.body;
  const category = await prisma.Category.create({
    data: {
      name,
    },
  });
  return res.json(category);
};

export const updateCategory = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  const { name } = req.body;
  const category = await prisma.Category.update({
    where: { 
      id: Number(id),
    },
    data : {
      name,
    }
  });
  return res.json(category);
};

export const deleteCategory = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  await prisma.Category.delete({
    where: { 
      id: Number(id),
    },
  });
  return res.json('Deleted category successfully!');
};
