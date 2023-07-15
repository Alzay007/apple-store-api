import * as goodsService from '../service/goods.js';
import { Request, Response } from 'express';

export const getAll = (req: Request, res: Response) => {
  const goods = goodsService.getAll();

  res.send(goods);
};

export const getOne = (req: Request, res: Response) => {
  const { productId } = req.params;

  const foundProduct = goodsService.getById(productId);

  if (!foundProduct) {
    res.sendStatus(404);
    return;
  }

  res.send(foundProduct);
};
