import * as goodsService from "../service/goods.js";
export var getAll = function(req, res) {
    var goods = goodsService.getAll();
    res.send(goods);
};
export var getOne = function(req, res) {
    var productId = req.params.productId;
    var foundProduct = goodsService.getById(productId);
    if (!foundProduct) {
        res.sendStatus(404);
        return;
    }
    res.send(foundProduct);
};
