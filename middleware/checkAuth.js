import jwt from "jsonwebtoken";

const checkAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "unauthorized access, token not found",
      });
    }
    const tokenvalidate = await jwt.verify(token, process.env.strongone);
    console.log(tokenvalidate);

    if (!tokenvalidate) {
      return res.status(401).json({
        success: false,
        message: "token not valid",
      });
    }

    next();

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "internal server error",
      error: error.message,
    });
  }
};

export default checkAuth;
