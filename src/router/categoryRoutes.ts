import express from 'express';
import { getAllGoods, getOneGood } from '../controllers/categoryController.js';

export const router = express.Router();

router.get('/:category', getAllGoods);

router.get('/:category/:productId', getOneGood);
