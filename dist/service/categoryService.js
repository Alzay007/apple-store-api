import { Phone, Tablet, Watch, Laptop } from "../models/Categories.js";
export var getModelByCategory = function(category) {
    switch(category.toLowerCase()){
        case "laptops":
            return Laptop;
        case "phones":
            return Phone;
        case "tablets":
            return Tablet;
        case "watches":
            return Watch;
        default:
            throw new Error("Category not supported");
    }
};
