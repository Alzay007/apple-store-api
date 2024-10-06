import express from "express";
import { getBannerImages } from "../controllers/imageController.js";
var router = express.Router();
router.get("/banners", getBannerImages);
export { router };
