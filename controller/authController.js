import user from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "name, email and password are required",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await user.create({
      ...req.body,
      password: hashedPassword,
    });
    // console.log(newUser);
    res.status(200).json({ success: true, message: "signup successful" });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "internal server error",
      error: error.message,
    });
  }
};
export const handleLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "email and password are required",
      });
    }

    const existingUser = await user.findOne({ email });

    if (!existingUser) {
      return res.status(404).json({
        message: "user not found",
      });
    }

    const isMatch = await bcrypt.compare(password, existingUser.password);

    if (!isMatch) {
      return res.status(401).json({ message: "invalid username or password" });
    }
    const token =jwt.sign({id:existingUser._id, email:existingUser.email},
      process.env.strongone);
      
      res.status(200).json({ success: true, message: "login successful", token });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "internal server error",
      error: error.message,
    });
  }
};
