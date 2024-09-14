import React, { useState, useEffect } from 'react';
import { getTodos, createTodo } from '../api';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    const loadTodos = async () => {
      const todosFromServer = await getTodos();
      setTodos(todosFromServer);
    };

    loadTodos();
  }, []);

  const handleAddTodo = async (e) => {
    e.preventDefault();
    const newTodoItem = { title: newTodo };
    const addedTodo = await createTodo(newTodoItem);
    setTodos([...todos, addedTodo]);
    setNewTodo('');
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.length > 0 ? (
          todos.map((todo) => <li key={todo._id}>{todo.title}</li>)
        ) : (
          <li>No todos available</li>
        )}
      </ul>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default TodoList;