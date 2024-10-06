import express from "express";
import * as goodsController from "../controllers/goods.js";
export var router = express.Router();
router.get("/", goodsController.getAll);
router.get("/:productId", goodsController.getOne);
