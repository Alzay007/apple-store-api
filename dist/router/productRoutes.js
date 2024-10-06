import { Router } from "express";
import { ProductController } from "../controllers/productContoller.js";
var router = Router();
router.get("/", ProductController.getAllProducts);
router.get("/:id", ProductController.getProductById);
router.post("/", ProductController.createProduct);
router.put("/:id", ProductController.updateProduct);
router.delete("/:id", ProductController.deleteProduct);
export { router };
