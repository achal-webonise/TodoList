import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from './actions/todoActions';

const TodoItem = ({ todo, toggleTodo }) => {
  const handleCheckboxChange = () => {
    toggleTodo(todo.id);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleCheckboxChange}
      />
      <label>{todo.label}</label>
    </div>
  );
};

export default connect(null, { toggleTodo })(TodoItem);
