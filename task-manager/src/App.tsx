import { useEffect, useState } from "react";
import AddTasks from "./components/AddTasks.component";
import Tasks from "./components/Tasks.component";
import { ITask } from "./interfaces/task.interface";

import { v4 } from "uuid";
// import { ITaskJsonPlaceholder } from "./interfaces/task.jsonplaceholder.interface";
import Title from "./components/Title.component";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks") || "[]") as ITask[]
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    // async function fetchTasks() {
    //   const response = await fetch(
    //     "https://jsonplaceholder.typicode.com/todos"
    //   );
    //   const data = await response.json();
    //   const tasks = data.map((task: ITaskJsonPlaceholder) => ({
    //     id: task.id,
    //     title: task.title,
    //     description: task.title,
    //     isCompleted: task.completed,
    //   }));
    //   setTasks(tasks);
    // }
    // // If you want to fetch tasks from an API
    // fetchTasks();
  }, []);

  function onTaskClick(taskId: ITask["id"]) {
    const newTasks = tasks.map((task): ITask => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });

    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId: ITask["id"]) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(
    title: ITask["title"],
    description: ITask["description"]
  ) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };

    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen min-h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <Title>Task Manager</Title>
        <AddTasks onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
