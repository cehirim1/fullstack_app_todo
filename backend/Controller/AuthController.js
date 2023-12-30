import bcrypt from "bcrypt";
import { UserModel } from "../Model/UserModel.js";

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
    