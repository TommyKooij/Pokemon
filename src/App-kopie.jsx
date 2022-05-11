import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import Todo from "./Todo/Todo";
import TodoForm from "./TodoForm/TodoForm";
import axios from "axios";
//import Heading from "./Heading";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      isCompleted: false,
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false,
    },
    {
      text: "Build really cool todo app",
      isCompleted: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  /*useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/ditto")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setPokemondata(data.data);
      })
      .catch(
        (error) => {
          console.log(error);
        },
        [value]
      );
  });*/

  return (
    <div className="app">
      <h1 className="title">React - A JS Library</h1>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
        {/*<Heading beginNaam={1} />*/}
      </div>
    </div>
  );
};

export default App;
