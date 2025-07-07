import React from "react";

const Toggle = ({ value, handler }) => {
  return (
    <input
      type="checkbox"
      checked={value}
      onChange={handler}
      className="toggle  toggle-xl text-red-200  border-red-500 bg-red-400 checked:border-green-500 checked:bg-green-400 checked:text-green-200"
    />
  );
};

export default Toggle;
