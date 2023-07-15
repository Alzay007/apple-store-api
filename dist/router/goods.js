import express from "express";
import * as goodsController from "../controller/goods.js";
export var router = express.Router();
router.get("/", goodsController.getAll);
router.get("/:productId", goodsController.getOne);
