import * as goodsService from "../service/category.js";
export var getAllGoods = function(req, res) {
    var category = req.params.category;
    var goods = goodsService.getAllProducts(category);
    res.send(goods);
};
export var getOneGood = function(req, res) {
    var _req_params = req.params, category = _req_params.category, productId = _req_params.productId;
    var foundProduct = goodsService.getProductById(category, productId);
    if (!foundProduct) {
        res.sendStatus(404);
        return;
    }
    res.send(foundProduct);
};
