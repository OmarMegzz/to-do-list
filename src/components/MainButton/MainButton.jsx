import classnames from "classnames";
import React from "react";

function MainButton({ text, className, ...rest }) {
  return (
    <button
      {...rest}
      className={classnames(
        "text-white transition-all duration-300 ease-in-out flex items-center justify-center  ",
        className
      )}
    >
      {text}
    </button>
  );
}

export default MainButton;
