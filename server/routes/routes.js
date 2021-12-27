const express= require("express");
 const router = express.Router();
const {registerUser,loginUser, checkRegister,addProduct} = require("../controllers/UserFunctions.js");
const {fetchPosts ,deletepost ,addToCart ,fetchcarts} = require("../controllers/postFunctions.js")
 //localhost:5000/posts
 router.get('/', (req,res)=>{
     res.send("hello there")
 })
 router.post("/login" , loginUser);
 router.post("/register",registerUser);
 router.post("/checkregister",checkRegister);
 router.post("/addtocart",addToCart);
 router.post("/addProduct",addProduct);
 router.get("/fetchcart",fetchcarts);
 router.get("/fetchposts",fetchPosts);
 router.delete("/deleteproduct/:id",deletepost);
module.exports= router;