import React, { useEffect, useState } from "react";
import useTodoStore from "../../stores/useTodoStore";
import MainButton from "../MainButton/MainButton";
import TextInput from "../TextInput/TextInput";
import DisplayList from "../DisplayList/DisplayList";
import UpdateTask from "../UpdateTask/UpdateTask";
import { nanoid } from "nanoid";
import { AddIcon, DeleteIcon, EditIcon } from "../../assets";

const ToDoList = () => {
  const { tasks, addTask, deleteTask, toggle, setToggle } = useTodoStore();
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
    <div className="  bg-slate-950 flex-1 items-center justify-center  flex flex-col gap-9    ">
      <div className="flex flex-col gap-1">
        <div className="flex">
          <TextInput
            value={newTask.text}
            placeholder="Add Task ..."
            onChange={(e) => setNewTask({ text: e.target.value, id: nanoid() })}
            onKeyDown={handleAddTaskKeyDown}
          />

          <MainButton
            onClick={handleAddTask}
            text={<AddIcon width={24} height={24} fill="#e2e8f0" />}
          />
        </div>
        {!isValid && (
          <div className=" text-red-500 text-sm ">
            Please write a task to add
          </div>
        )}
      </div>

      <DisplayList>
        {tasks.map((task) => {
          return (
            <li
              className="text-white flex justify-center items-center flex-col gap-5 bg-slate-400 p-4 rounded-md"
              key={task.id}
            >
              <div className="task-delete flex justify-between items-center w-full gap-5   ">
                <h2 className=" text-2xl break-all ">{task.text}</h2>
                <div className="flex gap-3">
                  <MainButton
                    onClick={() => handleDeleteTask(task)}
                    text={<DeleteIcon width={24} height={24} fill="red" />}
                    className="px-1 py-1 rounded-full rounded-br-full rounded-tr-full  bg-slate-200"
                  />

                  {!toggle[task.id] && (
                    <MainButton
                      onClick={() =>
                        setToggle({
                          taskId: task.id,
                          toggleStatus: !toggle[task.id],
                        })
                      }
                      text={<EditIcon width={24} height={24} fill="blue" />}
                      className="py-1 px-1 rounded-full rounded-br-full rounded-tr-full bg-slate-200"
                    />
                  )}
                </div>
              </div>
              {toggle[task.id] && <UpdateTask task={task} />}
            </li>
          );
        })}
      </DisplayList>
    </div>
  );
};

export default ToDoList;
