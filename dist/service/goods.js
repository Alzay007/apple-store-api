import fs from "fs";
import path from "path";
var filePath = path.resolve("src", "api", "goods.json");
var goods = JSON.parse(fs.readFileSync(filePath, "utf-8"));
export function getAll() {
    return goods;
}
export function getById(productId) {
    return goods.find(function(product) {
        return product.id === productId;
    }) || null;
}
