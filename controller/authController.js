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


const login = [];

export const setLogin = (req, res) => {
  try {
    login.push(req.body);
    console.log(login);
    res.status(200).json({ success: true, message: "login successful" });
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

