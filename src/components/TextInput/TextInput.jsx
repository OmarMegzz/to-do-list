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
    <div className="flex flex-col relative ">
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
      {errorMessage && (
        <div className="absolute -bottom-5 left-0 text-red-500 text-sm ">
          {errorMessage}
        </div>
      )}
    </div>
  );
}

export default TextInput;
