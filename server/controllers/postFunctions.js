const mongoose = require("mongoose");
const User = require("../models/user_model.js");
const Product = require("../models/product_model.js");
const Cart = require("../models/cart_model.js")
const fetchPosts=async (req,res)=>{
    try {
        const data=await Product.find({});
        res.json(data);
    } catch (error) {
        res.json({status: 'error',error: error});
    }
}
const deletepost = async (req,res)=>{
    try {
        Product.findByIdAndRemove(req.params.id,(err,data)=>{
            if(err) {
                console.log("error occured while deleting")
                res.json({status: "Not deleted",error: error})
            }
            else {res.json(data);}
        })
    } catch (error) {
        res.json({status: 'error',error: error})
    }
    }
   
const addToCart= async (req,res)=>{
    try {
        const post= req.body;
        const cartproduct =await Cart.create({
            creator: post.creator,
            title: post.title,
            category: post.category,
            price: post.price,
            selectedFile: post.image,
        });
        res.json(cartproduct);
    } catch (error) {
        res.json({status: 'error',error: error})
    }

}
const fetchcarts=async (req,res)=>{
    try {
        const data=await Cart.find({});
        res.json(data);
    } catch (error) {
        res.json({status: 'error',error: error});
    }
}
module.exports= {fetchPosts,deletepost,addToCart,fetchcarts};
