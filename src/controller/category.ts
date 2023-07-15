import { Request, Response } from 'express';
import * as goodsService from '../service/category.js';

export const getAllGoods = (req: Request, res: Response) => {
  const { category } = req.params;
  const goods = goodsService.getAllProducts(category);
  res.send(goods);
};

export const getOneGood = (req: Request, res: Response) => {
  const { category, productId } = req.params;
  const foundProduct = goodsService.getProductById(category, productId);

  if (!foundProduct) {
    res.sendStatus(404);
    return;
  }

  res.send(foundProduct);
};
