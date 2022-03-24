const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new mongoose.Schema({
    email:{type:String, required:true},
    ref_code: {type:String, required:true},
});
const User = mongoose.model("User", userSchema, "users");
module.exports = User;