import React from "react";

const coresArray = ["azul", "roxo", "laranja", "verde", "vermelho", "cinza"];

const Desafio = () => {
  const [check, setCheck] = React.useState([]);

  function handleChange({ target }) {
    if (target.checked) {
      setCheck([...check, target.value]);
    } 
    else {
      setCheck(check.filter((item) => item !== target.value));
    }
  }

  return (
    <div>
      {coresArray.map((cor, index) => (
        <label key={index} htmlFor={cor}>
          <input
            type="checkbox"
            id={cor}
            name="cor"
            value={cor}
            onChange={handleChange}
          />
          {cor}
        </label>
      ))}
    </div>
  );
};

export default Desafio;
