import express from "express";
import { createUser } from "./Controller/AuthController.js";
import { createTask } from "./Controller/TaskController.js";
import { getData } from "./Controller/TaskController.js";
import { getDB } from "./db.js";
const app = express();
app.use(express.json());

const connect = getDB();

//  CRUD -> POST, GET, PUT, DELETE
// JSON

app.get("/", getData);

app.post("/create-task", createTask);

app.post("/auth/signup", createUser);

app.listen(5001, () => {
  console.log("port is running on 5001");
});
// username : lynnlearns
// password: 9hRUbvBLSylFuWFq
