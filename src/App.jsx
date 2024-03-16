// import TodoList from "./TodoList";

import { useState } from "react";

const App = () => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };

    // add the todo to the list
    setList([...list, newTodo]);

    // clear input
    setInput("");
  };

  // delete the todo

  const deleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  };
  return (
    <div className="p-4 text-left flex flex-col space-y-5 container mx-auto">
      <h1 className="text-center text-blue-500 uppercase text-2xl">
        Todo List
      </h1>
      <div className="flex  items-center space-x-7 justify-center">
        <input
          className="border-2  w-96 p-3 rounded-md focus:outline-none"
          placeholder="enter a todo...."
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={() => addTodo(input)}
          className="bg-blue-700 p-3 text-white rounded-md"
        >
          Add
        </button>
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-10 container mx-auto">
        {list.map((todo) => (
          <li key={todo.id} className="">
            <div className="flex items-center justify-between capitalize shadow-lg p-4">
              {todo.todo}
              <button
                className=" text-xl bg-blue-800 rounded-lg text-white p-2 px-4"
                onClick={() => deleteTodo(todo.id)}
              >
                &times;
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
