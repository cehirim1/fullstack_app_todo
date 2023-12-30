import mongoose from "mongoose";

// email, password

const xxxxxx = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: false,
    length: 20,
  }
});

export const UserModel = mongoose.model("User Collection", xxxxxx);