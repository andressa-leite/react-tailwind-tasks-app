import { ChevronRightIcon, Trash } from "lucide-react";
import React from "react";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-400 w-full text-left text-blue-950 p-2 rounded-md ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.title}
          </button>
          <button className="bg-slate-400">
            <ChevronRightIcon />
          </button>
          <button onClick={() => onDeleteTaskClick(task.id)}>
            <Trash />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
