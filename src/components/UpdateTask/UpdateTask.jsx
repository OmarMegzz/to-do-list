import React, { useState } from "react";
import useTodoStore from "../../stores/useTodoStore";
import TextInput from "../TextInput/TextInput";
import MainButton from "../MainButton/MainButton";

function UpdateTask({ task }) {
  const { updateTask } = useTodoStore();
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

  return (
    <div className="flex">
      <TextInput
        value={newValue}
        placeholder="Update Task ..."
        onChange={(e) => setNewValue(e.target.value)}
        onKeyDown={(e) => handleUpdateTaskKeyDown(e)}
      />

      <MainButton onClick={handleUpdateTask} text="Update" />
    </div>
  );
}

export default UpdateTask;
