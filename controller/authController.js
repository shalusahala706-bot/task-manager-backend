const newUser =[];

export const signup = (req, res) => {
  try {
    newUser.push(req.body);
    console.log(newUser);
    res.status(200).json({ success: true, message: "signup successful" });
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        message: "internal server error",
        error: error.message,
      });
  }
};



