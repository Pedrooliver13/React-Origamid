import React from "react";

const Checkbox = ({ options, value, setValue, ...props }) => {
  function handleChange({ target }) {
    if(target.checked){
      setValue([...value, target.value]);
    } else {
      setValue(value.filter(item => item !== target.value));
    }
  }

  return (
    <>
      {options.map((item) => (
        <label key={item}>
          <input
            type="checkbox"
            value={item}
            checked={value.includes(item)}
            onChange={handleChange}
            {...props}
          />
          {item}
        </label>
      ))}
    </>
  );
};

export default Checkbox;
