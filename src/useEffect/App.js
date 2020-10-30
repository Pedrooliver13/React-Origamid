import React from "react";
import Product from "./Product/Product";

const App = () => {
  const [product, setProduct] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (product) localStorage["produto"] = product;
  }, [product]);

  React.useEffect(() => setProduct(localStorage["produto"]), []);

  function handleClick({ target }) {
    setLoading(true);
    setProduct(target.innerText);
    setLoading(false);
  }

  return (
    <div>
      <h1>Preferência: {product}</h1>
      
      <div>
        <button onClick={handleClick}>notebook</button>
        <button style={{ marginLeft: "8px" }} onClick={handleClick}>
          smartphone
        </button>
      </div>

      {loading && <p>Carregando...</p>}
      {product && !loading && <Product product={product} />}
    </div>
  );
};

export default App;
