const express = require('express');
const router = express.Router();
const todoController = require('../contoller/todoController');

// GET all todos from the database
router.get('/', todoController.getTodos);

// POST a new todo to the database
router.post('/', todoController.createTodo);

// PUT (update) an existing todo in the database
router.put('/:id', todoController.updateTodo);

// DELETE a todo from the database
router.delete('/:id', todoController.deleteTodo);
// export the modules to be used on the server
module.exports = router;