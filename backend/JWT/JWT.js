import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const generateToken = (id) => {
  return jwt.sign(
    {
      userID: id,
    },
    "1111aaassssdddd",
    {
      expiresIn: "1h",
    }
  );
};

export const authenticateToken = (req, res, next) => {
  //verify token in header authorization
  const token = req.headers["authorization"];
  if (!token) {
    res.status(403).json({
      message: "Unauthorized",
    });
  }
  jwt.verify(token, "1111aaassssdddd", (err, decodedToken) => {
    if (err) {
      return res
        .status(401)
        .json({ message: "invalid token or token expired" });
    }
    req.userID = decodedToken.userID;
    next();
  });
};
