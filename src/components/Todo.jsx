import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { AiFillDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";

function Todo({ todos, completetodo, removetodo, updateTodo }) {
  const [edit, setedit] = useState({
    id: null,
    value: "",
  });
  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setedit({ id: null, value: "" });
  };
  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo) => (
    <div className=" bg-gray-200 h-12 p-2  w-64 rounded">
      <div className=" bg-white rounded pl-1">
        <ul className="flex     justify-between text-black  h-8 ">
          <li
            className="  w-44"
            key={todo.id}
            onClick={() => completetodo(todo.id)}
          >
            {todo.text}
          </li>

          <div className="flex  ">
            <FaRegEdit
              className="  bg-green-800 hover:bg-green-900  size-8 cursor-pointer "
              onClick={() => setedit({ id: todo.id, value: todo.text })}
            />
            <AiFillDelete
              className=" bg-red-600 size-8 hover:bg-red-800 cursor-pointer"
              onClick={() => removetodo(todo.id)}
            />
          </div>
        </ul>
      </div>
    </div>
  ));
}
export default Todo;
