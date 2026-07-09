import user from "../models/userModel.js";

// const newUser = [];

export const signup = async (req, res) => {
  try {
    const newUser = await user.create(req.body);
    console.log(newUser);
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

    // if(!email){
    //   return res.status(400).json({
    //     success:false,
    //     message:"email is required"

    //   })
    // }

    const user = await user.findOne({ email });

    // console.log(user);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "user not found",
      });
    }
    if (user.password !== password) {
      return res.status(404).json({
        success: false,
        message: "invalid password or email",
      });
    }

    return res.status(200).json({ success: true, message: "login successful" });
  } catch (error) {

    
    res.status(500).json({
      success: false,
      message: "internal server error",
      error: error.message,
    });
  }
};
