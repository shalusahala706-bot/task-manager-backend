import mongoose from "mongoose";

const userModel =new mongoose.Schema({
    name:{type:String, required:true, maxlength:10},
    password:{type:String, required:true, minlength:6},
    email:{type:String, required:true, unique:true}
});

const user = mongoose.model("user", userModel);

export default user;
