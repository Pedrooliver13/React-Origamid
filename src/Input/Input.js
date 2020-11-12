import React from "react";

const Input = ({ id, label, value, setValue }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        value={value}
        onChange={({ target }) => setValue(target.value)}
      />
    </div>
  );
};

export default Input;
