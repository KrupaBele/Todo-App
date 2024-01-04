import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList() {
  const [todos, settodos] = useState([]);
  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodo = [todo, ...todos];
    settodos(newTodo);
  };
  const completetodo = (id) => {
    let updatedtodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.iscomplete = !todo.iscomplete;
      }
      return todo;
    });
    settodos(updatedtodos);
  };

  const removetodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    settodos(removeArr);
  };
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    settodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  return (
    <>
      <div className=" translate-x-24  space-y-2">
        <div className=" text-2xl">Todos App</div>
        <TodoForm onSubmit={addTodo} />
        <Todo
          todos={todos}
          completetodo={completetodo}
          removetodo={removetodo}
          updateTodo={updateTodo}
        />
      </div>
    </>
  );
}
export default TodoList;
