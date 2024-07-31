const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  status: {
    type: String,
    enum: ["To do", "In progress", "Under review", "Finished"],
    default: "To do",
  },
  priority: { type: String, enum: ["Low", "Medium", "Urgent"], default: "Low" },
  deadline: { type: Date, required: true },
  description: { type: String },
});

module.exports = mongoose.model("Task", TaskSchema);
