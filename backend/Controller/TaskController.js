import { TaskModel } from "../Model/TaskModel.js";
import { UserModel } from "../Model/UserModel.js";

// Create Task

export const createTask = async (req, res) => {
  try {
    const { task, deadline, status, description } = req.body;
    const { userID } = req;
    const findUserOwner = await UserModel.findById(userID);
    if (!findUserOwner) {
      return res.status(404).json({ error: "user not found" });
    }

    //create a task
    const createTask = await TaskModel.create({
      task,
      deadline,
      status,
      description,
      userOwner: userID,
    });
    return res.status(201).json({ message: "New Task Created", createTask });
  } catch (error) {
    res.status(500).json({ error: "request not sent" });
  }
};

// GET ALL TASKS

export const getData = async (req, res) => {
  const { userID } = req;
  try {
    const findUser = await UserModel.findById(userID);
    if (!findUser) {
      return res.status(404).json({ error: "user not found" });
    }

    const findTask = await TaskModel.find({ userOwner: userID });

    res.status(200).json(findTask);
  } catch (err) {
    res.status(500).json({ error: "request not sent" });
  }
};

// DELETE ONE TASK
export const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    await TaskModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Task deleted", id });
  } catch (err) {
    res.status(500).json({ error: "request not sent" });
  }
};
// UPDATE ONE TASK

export const updateTask = async (req, res) => {
  const { id } = req.params;
  const { task, deadline, status, description } = req.body;

  try {
    await TaskModel.findOneAndUpdate(
      {
        _id: id,
      },
      {
        task,
        deadline,
        status,
        description,
      }
    );
    res.status(200).json({ message: "Task updated", id });
  } catch (err) {
    res.status(500).json({ error: "request not sent" });
  }
};
