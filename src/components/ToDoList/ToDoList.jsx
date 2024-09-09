import React, { useState } from "react";
import useTodoStore from "../../stores/useTodoStore";
import MainButton from "../MainButton/MainButton";
import TextInput from "../TextInput/TextInput";
import DisplayList from "../DisplayList/DisplayList";
import UpdateTask from "../UpdateTask/UpdateTask";
import { nanoid } from "nanoid";

const ToDoList = () => {
  const { tasks, addTask, deleteTask } = useTodoStore();
  const [newTask, setNewTask] = useState({ text: "", id: "" });
  const [isValid, setIsValid] = useState(true);

  const handleAddTask = () => {
    if (newTask.text.trim() !== "") {
      addTask(newTask);
      setNewTask({ text: "", id: "" });
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };
  const handleAddTaskKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  const handleDeleteTask = (task) => {
    deleteTask(task);
  };

  return (
    <>
      <div className="  bg-slate-950 h-full w-screen flex items-center justify-evenly  ">
        <div className="flex">
          <TextInput
            value={newTask.text}
            placeholder="Add Task ..."
            onChange={(e) => setNewTask({ text: e.target.value, id: nanoid() })}
            onKeyDown={handleAddTaskKeyDown}
            errorMessage={isValid ? "" : "please write a task to add"}
          />

          <MainButton onClick={handleAddTask} text="Add" />
        </div>

        <DisplayList>
          {tasks.map((task) => {
            return (
              <li
                className=" text-white flex justify-center items-center flex-col gap-8 "
                key={task.id}
              >
                <div className="task-delete flex justify-between  items-center w-full   ">
                  <h2 className=" text-2xl ">{task.text}</h2>
                  <MainButton
                    onClick={() => handleDeleteTask(task)}
                    text="Delete"
                  />
                </div>
                <UpdateTask task={task} />
              </li>
            );
          })}
        </DisplayList>
      </div>
    </>
  );
};

export default ToDoList;
