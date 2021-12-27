const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors');
const dotenv = require('dotenv');
const useRoutes = require('./routes/routes.js')
dotenv.config();
const app=express();
app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
  }) 
//Local mongo Db 
connection_url=process.env.CONNECTION_URL
// connection_url=mongodb://localhost:27017/olx-clone
mongoose.connect(connection_url ,{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> {console.log("Connected to mongodb")})
.catch((err)=> console.log(err.message+"=err"));
app.use('/',useRoutes);
const PORT =process.env.PORT || 5000;

app.listen(PORT ,()=> console.log(`Server running on port : ${PORT}`));