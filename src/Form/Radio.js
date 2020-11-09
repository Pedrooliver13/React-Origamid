import React from "react";

const Radio = ({ options, value, setValue, ...props }) => {
  return (
    <>
      {options.map((optionItem) => (
        <label key={optionItem}>
          <input
            type="radio"
            value={optionItem}
            checked={value === optionItem}
            onChange={({ target }) => setValue(target.value)}
            {...props}
          />
          {optionItem}
        </label>
      ))}
    </>
  );
};

export default Radio;
