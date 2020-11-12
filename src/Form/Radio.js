import React from "react";

const Radio = ({ options, value, setValue, ...props }) => {
  return (
    <>
      {options.map((item) => (
        <label key={item}>
          <input
            type="radio"
            value={item}
            onChange={({ target }) => setValue(target.value)}
            {...props}
          />
          {item}
        </label>
      ))}
    </>
  );
};

export default Radio;


  