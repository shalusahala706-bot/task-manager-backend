const newUser = [];

export const signup = (req, res) => {
  try {
    newUser.push(req.body);
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

export const handleLogin = (req, res) => {
  try {
    const { email, password } = req.body;

    const user = newUser.find(
      (user) => user.email === email
    );

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

    res.status(200).json({ success: true,
       message: "login successful" });
  }
   catch (error) {
    res.status(500).json({
      success: false,
      message: "internal server error",
      error: error.message,
    });
  }
};
