import React, { useState, useEffect } from 'react';
import './TodoListSection.css';

const TodoListSection = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAdd = () => {
    if (newTodo.trim()) {
      setTodos((prevTodos) => [...prevTodos, { text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const handleCheckboxChange = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;

    if (updatedTodos[index].completed) {
      updatedTodos.splice(index, 1);
    }
    
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-section">
      <h3>Your focus for today</h3>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className={todo.completed ? 'completed' : ''}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleCheckboxChange(index)}
            />
            {todo.text}
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default TodoListSection;
