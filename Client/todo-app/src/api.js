import axios from 'axios';

const API_URL = 'http://localhost:5001/api/todos';

// Get all todos
export const getTodos = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (err) {
        console.error('Error fetching todos:', err.message);
        return []; 
    }
};

// Create a new todo
export const createTodo = async (todo) => {
    try {
        const response = await axios.post(API_URL, todo);
        return response.data;
    } catch (err) {
        console.error('Error creating todo:', err.message);
    }
};

// Update a todo
export const updateTodo = async (todo) => {
    try {
        const response = await axios.put(`${API_URL}/${todo._id}`, todo);
        return response.data;
    } catch (err) {
        console.error('Error updating todo:', err.message);
    }
};

// Delete a todo
export const deleteTodo = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (err) {
        console.error('Error deleting todo:', err.message);
    }
};