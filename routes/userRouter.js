

const router = require('express').Router();
const User = require("../models/userModel")
const bcrypt = require("bcryptjs");
const config = require('config');
const dotenv = require("dotenv");


//TO GET A REFERRAL CODE

router.post("/", async(req,res)=>{
    try{
    const {email} = req.body;
    //validation
    if(!email)
    return res
    .status(401)
    .json({data:{message:"Please enter an email address"}})
    

    const existingUser = await User.findOne({email});
    if (existingUser)
    return res
    .status(401)
    .json({data:{message:"A Referral key has been generated for this email address"}});

    function randomString(length, chars) {
        var result = '';
        for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
        return result;
    }
    const generatedKey =  randomString(6, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
    const ref_code = generatedKey;
    const newUser = new User({
        email,
        ref_code
    });
    
    const savedUser = await newUser.save();
   
    res.json({data:{message:
       { email:savedUser.email,
        ref_key:savedUser.ref_code
    }}})
   
    }catch(err){
        console.error(err);
        res.status(500).send();
    }
}) 

module.exports = router;