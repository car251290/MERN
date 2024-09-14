const express = require('express');
const router = express.Router();
const todoController = require('../contoller/todoController');

// GET all todos
router.get('/', todoController.getTodos);

// POST a new todo
router.post('/', todoController.createTodo);

// PUT (update) an existing todo
router.put('/:id', todoController.updateTodo);

// DELETE a todo
router.delete('/:id', todoController.deleteTodo);

module.exports = router;