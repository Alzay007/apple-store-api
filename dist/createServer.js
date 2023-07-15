import express from "express";
import cors from "cors";
import { router as goodsRouter } from "./router/goods.js";
import { router as categoryRouter } from "./router/category.js";
export function createServer() {
    var app = express();
    app.use(express.static("./src"));
    app.use(cors());
    app.use("/", categoryRouter);
    app.use("/goods", goodsRouter);
    app.get("/", function(req, res) {
        res.send("Hi");
    });
    return app;
}
