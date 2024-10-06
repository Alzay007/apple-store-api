import { Request, Response } from 'express';
import { getModelByCategory } from '../service/categoryService.js';

export const getAllGoods = async (req: Request, res: Response): Promise<void> => {
  const { category } = req.params;

  try {
    const Model = getModelByCategory(category);
    const goods = await Model.find();

    res.json(goods);
  } catch (error: unknown) {
    console.error(`Ошибка при получении товаров: ${(error as Error).message}`);
    res.status(500).json({ message: (error as Error).message });
  }
};

export const getOneGood = async (req: Request, res: Response): Promise<void> => {
  const { category, productId } = req.params;

  try {
    const Model = getModelByCategory(category);
    const foundProduct = await Model.findOne({ id: productId });

    if (!foundProduct) {
      res.status(404).json({ message: 'Product not found' });
      return;
    }

    console.log(`Найден товар: ${JSON.stringify(foundProduct)}`);
    res.json(foundProduct);
  } catch (error: unknown) {
    console.error(`Ошибка при получении товара: ${(error as Error).message}`);
    res.status(500).json({ message: (error as Error).message });
  }
};
