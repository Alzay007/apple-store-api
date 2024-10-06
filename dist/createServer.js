import express from "express";
import cors from "cors";
import { router as categoryRouter } from "./router/categoryRoutes.js";
import { router as productsRouter } from "./router/productRoutes.js";
import { router as imageRouter } from "./router/imageRoutes.js";
export function createServer() {
    var app = express();
    app.use(express.static("./src"));
    app.use(cors());
    app.use("/products", productsRouter);
    app.use("/categories", categoryRouter);
    app.use("/images", imageRouter);
    app.get("/", function(req, res) {
        res.send("Hi");
    });
    return app;
}
