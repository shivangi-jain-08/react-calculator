import React from "react";

const Display = ({ operation }) => {
  return (
    <div id="screen" className="calc-screen">
      {operation === "" ? 0 : operation}
    </div>
  );
};

export default Display;
