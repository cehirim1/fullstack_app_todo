import mongoose from "mongoose";
export const getDB = async (req, res) => {
  const db = await mongoose
    .connect(
      "mongodb+srv://lynnlearns:9hRUbvBLSylFuWFq@todo-project.nqqs1gx.mongodb.net/"
    )
    .then(()=> console.log("connected to db"))
    .catch(() => {
      console.error("error");
    });
};
