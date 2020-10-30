import React from "react";

const Product = ({ product }) => {
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    if (product)
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${product}`)
        .then((results) => results.json())
        .then((resultsJson) => setDados(resultsJson));
  }, [product]);

  if (dados) {
    const currencyPrice = Number(dados.preco).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    return (
      <div>
        <h1>Produtos: {dados.nome}</h1>
        <p>{dados.nome}</p>
        <p>{currencyPrice}</p>
      </div>
    );
  } else return null;
};

export default Product;
