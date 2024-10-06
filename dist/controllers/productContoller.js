function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
var __generator = this && this.__generator || function(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
import Product from "../models/Product.js";
export var ProductController = /*#__PURE__*/ function() {
    "use strict";
    function ProductController() {
        _classCallCheck(this, ProductController);
    }
    ProductController.getAllProducts = function getAllProducts(req, res) {
        return _asyncToGenerator(function() {
            var products, error;
            return __generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _state.trys.push([
                            0,
                            2,
                            ,
                            3
                        ]);
                        return [
                            4,
                            Product.find()
                        ];
                    case 1:
                        products = _state.sent();
                        res.json(products);
                        return [
                            3,
                            3
                        ];
                    case 2:
                        error = _state.sent();
                        res.status(500).json({
                            message: error.message
                        });
                        return [
                            3,
                            3
                        ];
                    case 3:
                        return [
                            2
                        ];
                }
            });
        })();
    };
    ProductController.getProductById = function getProductById(req, res) {
        return _asyncToGenerator(function() {
            var product, error;
            return __generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _state.trys.push([
                            0,
                            2,
                            ,
                            3
                        ]);
                        return [
                            4,
                            Product.findById(req.params.id)
                        ];
                    case 1:
                        product = _state.sent();
                        if (!product) {
                            res.status(404).json({
                                message: "Product not found"
                            });
                            return [
                                2
                            ];
                        }
                        res.json(product);
                        return [
                            3,
                            3
                        ];
                    case 2:
                        error = _state.sent();
                        res.status(500).json({
                            message: error.message
                        });
                        return [
                            3,
                            3
                        ];
                    case 3:
                        return [
                            2
                        ];
                }
            });
        })();
    };
    ProductController.createProduct = function createProduct(req, res) {
        return _asyncToGenerator(function() {
            var newProduct, savedProduct, error;
            return __generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        newProduct = new Product(req.body);
                        _state.label = 1;
                    case 1:
                        _state.trys.push([
                            1,
                            3,
                            ,
                            4
                        ]);
                        return [
                            4,
                            newProduct.save()
                        ];
                    case 2:
                        savedProduct = _state.sent();
                        res.status(201).json(savedProduct);
                        return [
                            3,
                            4
                        ];
                    case 3:
                        error = _state.sent();
                        res.status(400).json({
                            message: error.message
                        });
                        return [
                            3,
                            4
                        ];
                    case 4:
                        return [
                            2
                        ];
                }
            });
        })();
    };
    ProductController.updateProduct = function updateProduct(req, res) {
        return _asyncToGenerator(function() {
            var updatedProduct, error;
            return __generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _state.trys.push([
                            0,
                            2,
                            ,
                            3
                        ]);
                        return [
                            4,
                            Product.findByIdAndUpdate(req.params.id, req.body, {
                                new: true
                            })
                        ];
                    case 1:
                        updatedProduct = _state.sent();
                        if (!updatedProduct) {
                            res.status(404).json({
                                message: "Product not found"
                            });
                            return [
                                2
                            ];
                        }
                        res.json(updatedProduct);
                        return [
                            3,
                            3
                        ];
                    case 2:
                        error = _state.sent();
                        res.status(400).json({
                            message: error.message
                        });
                        return [
                            3,
                            3
                        ];
                    case 3:
                        return [
                            2
                        ];
                }
            });
        })();
    };
    ProductController.deleteProduct = function deleteProduct(req, res) {
        return _asyncToGenerator(function() {
            var deletedProduct, error;
            return __generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _state.trys.push([
                            0,
                            2,
                            ,
                            3
                        ]);
                        return [
                            4,
                            Product.findByIdAndDelete(req.params.id)
                        ];
                    case 1:
                        deletedProduct = _state.sent();
                        if (!deletedProduct) {
                            res.status(404).json({
                                message: "Product not found"
                            });
                            return [
                                2
                            ];
                        }
                        res.status(204).send();
                        return [
                            3,
                            3
                        ];
                    case 2:
                        error = _state.sent();
                        res.status(500).json({
                            message: error.message
                        });
                        return [
                            3,
                            3
                        ];
                    case 3:
                        return [
                            2
                        ];
                }
            });
        })();
    };
    return ProductController;
}();
