import React from "react";

function TextInput({ onChange, onKeyDown, value, placeholder }) {
  return (
    <input
      className=" text-black "
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
}

export default TextInput;
