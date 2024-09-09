import React from "react";

function DisplayList({ children }) {
  return (
    <div className="flex">
      {children.length && (
        <ul className="  max-h-96 overflow-auto flex scrollbar-hide p-2 border-2   gap-10 flex-col ">
          {children}
        </ul>
      )}
    </div>
  );
}

export default DisplayList;
