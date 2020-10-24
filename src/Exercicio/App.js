import React from "react";
import ArrayObjetos from "./Array-objetos";

const persons = [
  {
    id: 1,
    cliente: "Luana",
    idade: 27,
    compras: ["R$ 2500", "R$ 3000", "R$ 1500"],
    ativa: true,
  },
  {
    id: 2,
    cliente: "Mario",
    idade: 31,
    compras: ["R$ 2500", "R$ 3000", "R$ 1500", "R$ 3500"],
    ativa: false,
  },
];

const App = () => {
  const dados = persons;
  
  dados.map(({ compras }, index) => {
    dados[index].total = compras.reduce((acc, price) => {
      const priceClear = Number(price.replace(/\D/g, ""));
      return priceClear + acc;
    }, 0);

    dados[index].totalCurrency = dados[index].total.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    return dados;
  });

  return (
    <div>
      {dados.map(
        ({ id, cliente, idade, total, totalCurrency, ativa }) => (
          <div key={id}>
            <p>Nome: {cliente}</p>
            <p>Idade: {idade}</p>
            <p>
              Situação:{" "}
              <span style={{ color: ativa ? "green" : "red" }}>
                {ativa ? "Ativo" : "Inativo"}
              </span>
            </p>
            <p>Total gasto: {totalCurrency}</p>
            <p>{total > 10000 && `Gastou ${total}. o Máximo é 10.000`}</p>
          </div>
        ),
      )}

      <ArrayObjetos />
    </div>
  );
};

export default App;
