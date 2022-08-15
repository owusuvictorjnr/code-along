import React, { useState } from "react";
// import TaskItems from "./TaskItems";
// import { TrashIcon } from "@heroicons/react/outline"
import TaskItem from "./TaskItems";

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === "") return;
    setTasks([input, ...tasks]);
    setInput("");
  };
  const handleDelete = (idx) => {
    const newTasks = tasks.filter((task) => task !== idx);
    setTasks(newTasks);
  };

  return (
    <div className="bg-blue-600 h-screen flex justify-center items-center">
      <div className="max-w-xl max-h-96 bg-white rounded-xl px-5 py-10">
        <form
          onSubmit={handleSubmit}
          className="space-x-6 flex w-[30rem] mb-10"
        >
          <input
            type="text"
            className="border-2 border-gray-400 p-2 rounded-md outline-none w-10/12
                        "
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white text-lg py-2 px-5 rounded-md" >
            Add
          </button>
        </form>
        <div className="space-y-2 overflow-y-auto h-56">
          {tasks.map((task) =>{
            return <TaskItem task={task} handleDelete={handleDelete} />
          })
          }
          {/* <TaskItems/>
                    <TaskItems/>
                    <TaskItems/>
                    <TaskItems/>
                    <TaskItems/> */}
        </div>
      </div>
    </div>
  );
}

export default TaskManager;
