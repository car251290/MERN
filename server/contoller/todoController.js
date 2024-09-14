// controller/todoController.js
const Todo = require('../model/todoModel');

// Get all todos from the database
exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    console.error('Error fetching todos:', error);
    res.status(500).send('Server Error');
  }
};

// Create a new todo item
exports.createTodo = async (req, res) => {
  try {
    const { title, completed } = req.body;
    const newTodo = new Todo({
      title,
      completed: completed || false,
    });
    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (error) {
    console.error('Error creating todo:', error);
    res.status(500).send('Server Error');
  }
};

// Update a todo by ID
exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, completed } = req.body;
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { title, completed },
      { new: true } // return the updated todo
    );
    if (!updatedTodo) {
      return res.status(404).send('Todo not found');
    }
    res.json(updatedTodo);
  } catch (error) {
    console.error('Error updating todo:', error);
    res.status(500).send('Server Error');
  }
};

// Delete a todo by ID
exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTodo = await Todo.findByIdAndDelete(id);
    if (!deletedTodo) {
      return res.status(404).send('Todo not found');
    }
    res.send('Todo deleted');
  } catch (error) {
    console.error('Error deleting todo:', error);
    res.status(500).send('Server Error');
  }
};