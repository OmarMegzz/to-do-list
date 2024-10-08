import React from "react";

const AddIcon = ({ width = 32, height = 32, fill = "#000000" }) => {
  return (
    <svg width={width} height={height} fill={fill} viewBox="0 0 256 256">
      <path d="M128,24A104,104,0,1,0,232,128,104.13,104.13,0,0,0,128,24Zm40,112H136v32a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h32V88a8,8,0,0,1,16,0v32h32a8,8,0,0,1,0,16Z"></path>
    </svg>
  );
};

export default AddIcon;
