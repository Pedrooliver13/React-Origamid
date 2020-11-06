import React from "react";

const Radio = () => {
  const [radio, setRadio] = React.useState('');

  return (
    <div>
      <label htmlFor="yes">
        <input
          type="radio"
          name="product"
          id="yes"
          value="yes"
          onChange={({ target }) => setRadio(target.value)}
        />
        SIM
      </label>
      <label htmlFor="no">
        <input
          type="radio"
          name="product"
          id="no"
          value="não"
          onChange={({ target }) => setRadio(target.value)}
        />
        NÃO
      </label>

      {radio && <p>{radio}</p>}
    </div>
  );
};

export default Radio;
