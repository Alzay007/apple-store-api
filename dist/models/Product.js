import mongoose, { Schema } from "mongoose";
var productSchema = new Schema({
    category: {
        type: String,
        required: true
    },
    itemId: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    fullPrice: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    screen: {
        type: String,
        required: true
    },
    capacity: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    ram: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});
var Product = mongoose.model("Product", productSchema);
export default Product;
