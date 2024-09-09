import { create } from "zustand";
import { getData, setData } from "../helpers/localstorage.helper";

const LOCALSTORAGE_TASKS_KEY = "tasks";

const useTodoStore = create((set) => ({
  tasks: getData(LOCALSTORAGE_TASKS_KEY) ?? [],
  addTask: (task) =>
    set((state) => {
      const newTasks = [...state.tasks, task];
      setData(LOCALSTORAGE_TASKS_KEY, newTasks);
      return { tasks: newTasks };
    }),
  deleteTask: (task) =>
    set((state) => {
      const newTasks = state.tasks.filter((t) => t.id !== task.id);
      setData(LOCALSTORAGE_TASKS_KEY, newTasks);
      return { tasks: newTasks };
    }),
  updateTask: (newTask) =>
    set((state) => {
      const updatedTasks = state.tasks.map((task) => {
        if (task.id === newTask.id) {
          return newTask;
        }
        return task;
      });

      setData(LOCALSTORAGE_TASKS_KEY, updatedTasks);
      return { tasks: updatedTasks };
    }),
}));

export default useTodoStore;
