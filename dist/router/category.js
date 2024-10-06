import express from "express";
import * as goodsController from "../controllers/category.js";
export var router = express.Router();
router.get("/:category", goodsController.getAllGoods);
router.get("/:category/:productId", goodsController.getOneGood);
