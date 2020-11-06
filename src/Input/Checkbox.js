import React from "react";

const Checkbox = () => {
  const [checkbox, setCheckbox] = React.useState(["azul"]);

  function handleChange({ target }) {
    if (target.checked) {
      setCheckbox([...checkbox, target.value]);
    } else {
      setCheckbox(checkbox.filter((item) => item !== target.value));
    }
  }

  return (
    <div>
      <label htmlFor="azul">
        <input
          id="azul"
          type="checkbox"
          value="azul"
          checked={checkbox.includes("azul")}
          onChange={handleChange}
        />
        Azul
      </label>
      <label htmlFor="vermelho">
        <input
          id="vermelho"
          type="checkbox"
          value="vermelho"
          checked={checkbox.includes("vermelho")}
          onChange={handleChange}
        />
        Vermelho
      </label>
    </div>
  );
};

export default Checkbox;
