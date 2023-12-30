import mongoose from "mongoose";

// email, password

const TaskSchema = new mongoose.Schema({
  userOwner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User Collection",
    required: true,
  },
  task: {
    type: String,
    required: false,
  },
  deadline: {
    type: Date,
    required: false,
    default: Date.now()
  },
  description: {
    type: String,
  },
 // incomplete, complete, archive, delete, not started
  status: {
    type: Boolean,
    required: false,
    enum: ['incomplete', 'complete', 'archive', 'delete', 'not started'],
    default: 'not started'
  },
});

export const TaskModel = mongoose.model("task", TaskSchema);