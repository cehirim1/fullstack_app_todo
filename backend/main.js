import express from "express";
import { createUser, loginUser } from "./Controller/AuthController.js";
import {
  createTask,
  deleteTask,
  updateTask,
} from "./Controller/TaskController.js";
import { getData } from "./Controller/TaskController.js";
import { getDB } from "./db.js";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());

const connect = getDB();

//  CRUD -> POST, GET, PUT, DELETE
// JSON

app.get("/:userId", getData);

app.post("/create-task", createTask);
app.delete("/delete-task/:id", deleteTask);
app.put("/update-task/:id", updateTask);

app.post("/auth/signup", createUser);
app.post("/auth/login", loginUser);

app.listen(5001, () => {
  console.log("port is running on 5001");
});
// username : lynnlearns
// password: 9hRUbvBLSylFuWFq
