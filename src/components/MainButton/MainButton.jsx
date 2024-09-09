import React from "react";

function MainButton({ text, ...rest }) {
  return (
    <button {...rest} className="text-white bg-slate-600 px-6 py-1 rounded-md ">
      {text}
    </button>
  );
}

export default MainButton;
