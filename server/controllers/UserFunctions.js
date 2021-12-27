const mongoose = require("mongoose");
const User = require("../models/user_model.js");
const Product = require("../models/product_model.js")
const jwt= require('jsonwebtoken');
const addProduct = async (req,res)=>{
    try {
        // console.log("AddProduct" ,req.body);
        const product =await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.json({status: "error",error: error});
    }
}
const checkRegister = async (req,res)=>{
    try {
        await User.findOne({
            email: req.body.email,
            
        },(err,data)=>{
            if(data){
                res.json({message: 'em',err: 'duplicate mail found'});
            }
            if(err) console.log(err);
        });
        await User.findOne({
            name: req.body.name,
            
        },(err,data)=>{
            if(data){
                res.json({message: 'na',err: 'duplicate name found'});
            }
            if(err) console.log(err);
        });
    } catch (error) {
        res.json({status: 'error',error: error});
    }
   
}
const registerUser = async (req,res)=>{
    
    try {
        
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        });
        res.json({status: 'ok'})
    } catch (err) {
        res.json({status: 'error', error: err});
    }
}
const loginUser = async (req,res)=>{
 
        const user = await User.findOne({
            email: req.body.email,
            password: req.body.password,
        });
        if(user){
            const token = jwt.sign(
                {
                   name: user.name,
                   email: user.email,
                } ,
                'thisismysecertkey123'
            )
            return res.json({status: 'ok', token: token ,userName: user.name})
        }
        else{
            return res.json({status: 'error', message: "User not registered"})
        }
        res.json({status: 'ok'})
}
module.exports= {addProduct,registerUser,loginUser,checkRegister};