import { ITask } from "./task.interface";

export interface ITasksProps {
  tasks: ITask[];
  onTaskClick: (taskId: ITask["id"]) => void;
  onDeleteTaskClick: (taskId: ITask["id"]) => void;
}
