import classnames from "classnames";
import React from "react";

function MainButton({ text, className, ...rest }) {
  return (
    <button
      {...rest}
      className={classnames(
        "text-white bg-slate-600 px-6 rounded-tr-sm rounded-br-sm ",
        className
      )}
    >
      {text}
    </button>
  );
}

export default MainButton;
