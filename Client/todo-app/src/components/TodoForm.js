import React,{useState} from "react";
import {createTodo} from '../api';

const TodoForm = () => {
    const [title,setTitle] = useState('');
    const [todos, setTodos] = useState([]);
    const [completed,setCompleted] = useState(false);

    const handlerSubmit = async(e) => {
        e.preventDefault();
  
  const newTodo = { title, completed };
  const response = await createTodo(newTodo); // Make API call to add new todo
  setTodos([...todos, response]); // Update local state with new todo
    }
    return (
        <form onSubmit={handlerSubmit}>
            <input 
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter todo title"
            />
            <label>
                completed:
                <input
                type="checkbox"
                checked={completed}
                onChange={(e)=> setCompleted(e.target.checked)}
                />
            </label>
            <button type="submit">Add Todo</button>
        </form>
    )
}
export default TodoForm;