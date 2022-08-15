import React from "react";
import { TrashIcon } from "@heroicons/react/outline";

const TaskItems = ({ task, handleDelete }) => {
  return (
    <div className="flex items-center bg-teal-100 p-2 border-2 border-gray-300 rounded-md">
      <div className="flex-1">{task}</div>
      <button
        className="bg-blue-500 p-2 rounded-md"
        onClick={() => handleDelete(task)}
      >
        <TrashIcon height={24} color="white" />
      </button>
    </div>
  );
};

export default TaskItems;
