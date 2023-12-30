import { getDB } from "../db.js";
import { TaskModel } from "../Model/TaskModel.js";
import { UserModel } from "../Model/UserModel.js";
export const createTask = async (req, res) => {
  try {
    const { task, deadline, status, description, userOwner } = req.body;
    const findUserOwner = await UserModel.findById(userOwner);
    if (!findUserOwner){
      return res.status(404).json({ error: "user not found" });
    }

    const createTask = await TaskModel.create({
      task,
      deadline,
      status,
       description,
       userOwner,
    });
    return res.status(201).json({message: "New Task Created", createTask});
  } catch (error) {
    res.status(500).json({ error: "request not sent" });
  }
};
export const getData = async (req, res) => {
  res.json({ message: "hello world!" });
};
