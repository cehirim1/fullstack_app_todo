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

export const authenticateToken = (req, res, next) => {};
