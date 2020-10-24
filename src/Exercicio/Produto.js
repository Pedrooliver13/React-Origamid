import React from "react";

const Produto = ({ nome, propriedades }) => {
  return (
    <div
      style={{
        border: "1px solid #000",
        margin: "8px auto",
        padding: "10px",
        fontWeight: "bold",
      }}
    >
      <p>{nome}</p>
      <ul>
        {propriedades.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
};

export default Produto;
