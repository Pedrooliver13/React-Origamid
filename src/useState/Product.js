import React from "react";

const Product = ({ id, nome, fotos, preco, descricao, usuario_id }) => {
  if (id) {
    const firstPhoto = fotos[0];
    const currecyPrice = Number(preco).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    return (
      <div>
        <h1>{nome}</h1>
        <p>{usuario_id}</p>
        <p>{currecyPrice}</p>
        <p>{descricao}</p>
        <img
          key={firstPhoto.titulo}
          src={firstPhoto.src}
          alt={firstPhoto.titulo}
        />
      </div>
    );
  } else return null;
};

export default Product;
