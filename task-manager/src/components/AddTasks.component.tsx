import { useState } from "react";
import { IAddTasksProps } from "../interfaces/add-task.props.interface";
import Input from "./Input";

function AddTasks({ onAddTaskSubmit }: IAddTasksProps) {
  const [title, setTitle] = useState("123");
  const [description, setDescription] = useState("123");

  console.log(title, description);

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Type the task title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <Input
        type="text"
        placeholder="Type the task description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Please fill in all fields");
          }
          onAddTaskSubmit(title, description);
          setDescription("");
          setTitle("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
      >
        Add Task
      </button>
    </div>
  );
}

export default AddTasks;
