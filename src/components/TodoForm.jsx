import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [input, setinput] = useState(props.edit ? props.edit.value : "");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });
  const handleChange = (e) => {
    setinput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setinput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            onChange={handleChange}
            className=" border  border-red-600 rounded w-32 mix-blend-color-dodge h-8"
            type="text"
            placeholder="Edit here.."
            value={input}
            name="text"
            ref={inputRef}
          />

          <button className="  text-red-700 bg-slate-300 p-1 rounded">
            Update
          </button>
        </>
      ) : (
        <>
          <input
            onChange={handleChange}
            className=" border border-slate-400 rounded w-32 mix-blend-color-dodge h-8"
            type="text"
            placeholder="Task"
            value={input}
            name="text"
            ref={inputRef}
          />

          <button className=" text-sky-600 bg-slate-300 p-2 rounded">
            Add
          </button>
        </>
      )}
    </form>
  );
}
export default TodoForm;
