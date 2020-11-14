import React from "react";

const Radio = ({ options, value, setValue, style, ...props }) => {
  return (
    <>
      {options.map((item) => (
        <label key={item} style={style}>
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


  