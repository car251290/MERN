// model/todoModel.js
const mongoose = require('mongoose');
// the schema for the todo model
const todoSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  });
  
  module.exports = mongoose.model('Todo', todoSchema);