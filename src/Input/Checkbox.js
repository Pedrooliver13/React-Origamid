import React from "react";

const Checkbox = () => {
  const [check, setCheck] = React.useState([]);

  function handleClick({ target }) {
    if (target.checked) setCheck([...check, target.value]);
    else setCheck(check.filter((item) => item !== target.value));
  }

  return (
    <div>
      <label htmlFor="vermelho">
        <input
          type="checkbox"
          name="cor"
          id="vermelho"
          value="vermelho"
          onChange={handleClick}
        />
        Vermelho
      </label>
      <label htmlFor="azul">
        <input
          type="checkbox"
          name="cor"
          id="azul"
          value="azul"
          onChange={handleClick}
        />
        Azul
      </label>

      {check && check.map((item, index) => <p key={index}>{item}</p>)}
    </div>
  );
};

export default Checkbox;
