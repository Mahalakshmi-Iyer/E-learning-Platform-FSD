import React, { useState } from 'react';
import './TodoListSection.css';

const TodoListSection = ({ todos, addTodo }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleAdd = () => {
    addTodo && addTodo(newTodo);
    setNewTodo('');
  };

  return (
    <div className="todo-section">
      <h3>Your focus for today</h3>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input type="checkbox" />
            {todo}
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
