import React, { useState } from "react";
import useTodoStore from "../../stores/useTodoStore";
import TextInput from "../TextInput/TextInput";
import MainButton from "../MainButton/MainButton";
import { CloseIcon } from "../../assets";
import "./updateTask.css";

function UpdateTask({ task }) {
  const { updateTask, toggle, setToggle } = useTodoStore();
  const [newValue, setNewValue] = useState("");

  const handleUpdateTask = () => {
    updateTask({ ...task, text: newValue });
    setNewValue("");
  };

  const handleUpdateTaskKeyDown = (e) => {
    if (e.key === "Enter") {
      handleUpdateTask();
    }
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {toggle[task.id] && (
        <div className="flex w-full">
          <MainButton
            text={
              <CloseIcon
                className={`icon-transition ${
                  isHovered ? "icon-hovered" : "icon-default"
                }`}
                onMouseOver={() => setIsHovered(true)}
                onMouseOut={() => setIsHovered(false)}
              />
            }
            className="bg-transparent px-0 pe-4 hover:bg-transparent"
            onClick={() => setToggle({ taskId: task.id, toggleStatus: false })}
          />
          <TextInput
            value={newValue}
            placeholder="Update Task ..."
            onChange={(e) => setNewValue(e.target.value)}
            onKeyDown={(e) => handleUpdateTaskKeyDown(e)}
            className="flex-1"
          />

          <MainButton onClick={handleUpdateTask} text="Update" />
        </div>
      )}
    </>
  );
}

export default UpdateTask;
