import React, { useState } from "react";
//import logo from './logo.svg';
import "./Todo.css";

const Todo = ({ todo, index, completeTodo, removeTodo }) => {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)} className="complete">
          Complete
        </button>
        <button onClick={() => removeTodo(index)} className="delete">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
