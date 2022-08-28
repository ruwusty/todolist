import './App.css';
import React, { useState } from 'react'

export default function App() {
  // declare list and input arrays for storing info i think? still not sure what useState actually does atm and why it needs ([]);
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  // function takes in parameter todo & creates newTodo with Math.random id (tried importing & calling uuid.v4() but did not work bcs error not a function?)
  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    }

    // remove whitespace using my massive brain and ye good ol internet to prevent nothing from being added to the array
    if (todo.trim()) {
      // append new todo to list array
      setList([...list, newTodo]);
      // clear input
      setInput("");
    }
  };

  const deleteTodo = (id) => {
    // filter out the todo with the matching id of the one given in the parameter and adds all other todos to the newList
    const newList = list.filter((todo) => todo.id !== id);

    setList(newList);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => addTodo(input)}>Add</button>
      <ul>
        {list.map((todo) => (
          <li key={todo.id}>
            {todo.todo}
            <button onClick={() => deleteTodo(todo.id)}>&times;</button>
          </li>
        ))}
      </ul>
      <button onClick={() => setList([])}>Clear All</button> {/* lmfaooo i cant believe this actually works */}
    </div>
  );
}