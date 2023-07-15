import * as fs from "fs";
import path from "path";
function getProductsByCategory(category) {
    var filePath = path.resolve("src", "api", "".concat(category, ".json"));
    var products = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    return products;
}
export function getAllProducts(category) {
    return getProductsByCategory(category);
}
export function getProductById(category, productId) {
    var products = getProductsByCategory(category);
    var foundProduct = products.find(function(product) {
        return product.id === productId;
    });
    return foundProduct || null;
}
