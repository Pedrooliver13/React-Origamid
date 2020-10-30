import React from "react";
import { GlobalContext } from "./GlobalContext";

const Product = () => {
  const { product } = React.useContext(GlobalContext);

  return (
    <section className="products" style={{display: "flex"}}>
      {product.map(({ id, nome, fotos }) => (
        <div key={id} className="products__item">
          <h1 className="products__title">{nome}</h1>

          <div className="products__image">
            <img src={fotos[0].src} alt={fotos[0].nome} />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Product;
