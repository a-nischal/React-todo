import React, { useState } from "react";

  const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");
  const [setTodoCategory] = useState("Personal");

  const addTodo = () => {
    if (todoInput.trim() !== "") {
      setTodos([...todos, todoInput.trim()]);
      setTodoInput("");
      setTodoCategory("Personal");
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        placeholder="Enter a new todo"
      />
      <select
        onChange={(e) => setTodoCategory(e.target.value)}>
        <option value="Personal">Personal</option>
        <option value="Work">Work</option>
        <option value="Others">Others</option>
      </select>
      {/* <select>
        <option value="test">test</option>
      </select> */}
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
