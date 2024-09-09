import React from "react";
import classnames from "classnames";

function DisplayList({ children, className = "" }) {
  return (
    <div className="flex">
      {children.length && (
        <ul
          className={classnames(
            "max-h-96 min-w-96 max-w-96 overflow-auto flex scrollbar-hide p-2 gap-5 flex-col",
            className
          )}
        >
          {children}
        </ul>
      )}
    </div>
  );
}

export default DisplayList;
