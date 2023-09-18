import React, { useState } from "react";

function App() {
  // State to manage the input field for adding new tasks
  const [todo, setTodo] = useState("");

  // State to store the list of tasks with completion status
  const [todoList, setTodoList] = useState([]);

  // Function to handle form submission and add new tasks to the list
  const handleForm = (e) => {
    e.preventDefault();
    setTodoList([...todoList, { todoName: todo, completed: false }]);
    setTodo("");
  };

  // Function to delete a task from the list
  const deleteTodo = (deleteValue) => {
    const restTodoList = [
      ...todoList.filter((val) => {
        return val.todoName !== deleteValue;
      }),
    ];
    setTodoList(restTodoList);
  };

  // Function to toggle the completion status of a task
  const toggleComplete = (index) => {
    const updatedList = [...todoList];
    updatedList[index].completed = !updatedList[index].completed;
    setTodoList(updatedList);
  };

  return (
    <div className="bg-gray-200 w-full h-screen flex items-center">
      <div className="w-[500px] mx-auto text-center bg-white p-5">
        <h1 className="text-5xl font-bold mb-8">Todo List</h1>
        <form onSubmit={handleForm}>
          <div className="flex items-center space-x-4 mb-5">
            <input
              className="border-2 placeholder:text-gray-500 rounded-lg border-black w-full p-5 mb-5 text-black"
              type="text"
              placeholder="Add Todo"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
            <button
              type="submit"
              className="bg-green-600 text-white py-3 px-8 rounded-lg mb-8"
            >
              Add
            </button>
          </div>
        </form>
        <div className="todo-show-area">
          <ul>
            {todoList.map((singleTodo, index) => (
              <li
                key={index}
                className={`mb-5 flex justify-between py-5 rounded-lg px-5 ${
                  singleTodo.completed ? "bg-green-300" : "bg-black text-white"
                }`}
              >
                <span
                  onClick={() => toggleComplete(index)}
                  className={`cursor-pointer ${
                    singleTodo.completed ? "line-through" : ""
                  }`}
                >
                  {singleTodo.todoName}
                </span>{" "}
                <span
                  onClick={() => deleteTodo(singleTodo.todoName)}
                  className="text-red-600 cursor-pointer"
                >
                  Delete
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
