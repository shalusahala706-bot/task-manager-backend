import mongoose from "mongoose";

const userModel =new mongoose.Schema({
    name:{type:String, required:true, maxlength:10},
    password:{type:String, required:true, minlength:6},
    email:{type:String, required:true, unique:true},
    phone:{type:String, required:true, unique:true},
    bio:{type:String}
});

const User = mongoose.model("User", userModel);

export default User;
