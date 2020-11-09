import React from "react";

const Select = ({ options, value, setValue, ...props }) => {
  return (
    <div>
      <select
        value={value}
        onChange={({ target }) => setValue(target.value)}
        {...props}
      >
        <option value="" disabled>
          Selecione
        </option>
        {options &&
          options.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
      </select>
    </div>
  );
};

export default Select;
