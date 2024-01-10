import bcrypt from "bcrypt";
import { UserModel } from "../Model/UserModel.js";
import { generateToken } from "../JWT/JWT.js";

export const createUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    await UserModel.create({ email, password: hashedPassword });

    res.status(201).json({ email, hashedPassword });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const findUser = await UserModel.findOne({ email });

    if (!findUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, findUser.password);

    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = generateToken(findUser._id);

    res.cookie("token", token, { httpOnly: true, maxAge: 3600000 });

    res.status(200).json({ message: "Login successful" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
