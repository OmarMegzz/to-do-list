import React from "react";
import classnames from "classnames";

function TextInput({
  onChange,
  onKeyDown,
  value,
  placeholder,
  className,
  errorMessage,
}) {
  return (
    <input
      className={classnames(
        " text-black p-1 outline-none rounded-tl-sm rounded-bl-sm ",
        className
      )}
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
}

export default TextInput;
