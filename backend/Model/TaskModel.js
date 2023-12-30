import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  userOwner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user collection",
    required: true,
  },
  task: {
    type: String,
    required: true,
  },
  deadline: {
    type: Date,
    required: false,
    default: Date.now(),
  },
  description: {
    type: String,
    default: "",
  },
  // incomplete, complete, archive, delete, not started
  status: {
    type: String,
    required: false,
    enum: ["incomplete", "complete", "archive", "delete", "notStarted"],
    default: "notStarted",
  },
});

export const TaskModel = mongoose.model("task", TaskSchema);
