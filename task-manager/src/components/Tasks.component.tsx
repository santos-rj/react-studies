import { CheckIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import { ITasksProps } from "../interfaces/task.props.interface";
import { useNavigate } from "react-router-dom";
import { ITask } from "../interfaces/task.interface";
import Button from "./Button";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }: ITasksProps) {
  const navigate = useNavigate();

  function onSeeTaskDetailsClick(task: ITask) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-400 text-left flex w-full items-center gap-2 text-white p-2 rounded-md ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.isCompleted && <CheckIcon />}
            {task.title}
          </button>
          <Button onClick={() => onSeeTaskDetailsClick(task)}>
            <ChevronRightIcon />
          </Button>
          <Button onClick={() => onDeleteTaskClick(task.id)}>
            <TrashIcon />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
