const mongoose = require("mongoose");
const Product = new mongoose.Schema({
    creator: String,
    title: String,
    category: String,
    price: String,
    selectedFile: String,
},{collection: 'product'});
const model =mongoose.model('product',Product);
module.exports = model