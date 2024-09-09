import classnames from "classnames";
import React from "react";

function MainButton({ text, className, ...rest }) {
  return (
    <button
      {...rest}
      className={classnames(
        "text-white bg-slate-600 px-6 rounded-tr-sm rounded-br-sm flex items-center justify-center hover:bg-slate-500 transition-all duration-300 ease-in-out  ",
        className
      )}
    >
      {text}
    </button>
  );
}

export default MainButton;
