const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  task: String,
});

module.exports = mongoose.model("todo", todoSchema);
