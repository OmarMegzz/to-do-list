import { create } from "zustand";

const useTodoStore = create((set) => ({
  tasks: [],
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
  deleteTask: (task) =>
    set((state) => ({ tasks: state.tasks.filter((t) => t.id !== task.id) })),
  updateTask: (newTask) =>
    set((state) => ({
      tasks: state.tasks.map((task) => {
        if (task.id === newTask.id) {
          return newTask;
        }
        return task;
      }),
    })),
}));

export default useTodoStore;
