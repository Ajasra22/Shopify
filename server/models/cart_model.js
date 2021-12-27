const mongoose = require("mongoose");
const Cart = new mongoose.Schema({
    creator: String,
    title: String,
    category: String,
    price: String,
    selectedFile: String,
},{collection: 'cart'});
const model =mongoose.model('Cart',Cart);
module.exports = model