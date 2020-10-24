import React from "react";

import Produto from "./Produto";
import Title from './Title';

const produtos = [
  { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
  { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
];

const Produtos = () => {
  return (
    <div>
      <Title style={{color: '#7159c1'}} texto="Produto"/>

      {produtos.map((produto) => (
        <Produto key={produto.nome} {...produto} />
      ))}
    </div>
  );
};

export default Produtos;
