import React from "react";
import Product from "./Product";

const App = () => {
  const [dados, setdados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(false);

  async function handleFetch(event) {
    setCarregando(true);
    const url = `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`;
    const results = await fetch(url);
    const resultsJson = await results.json();

    setdados(resultsJson)
    setCarregando(false);
  }

  React.useEffect(() => {}, );

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <button onClick={handleFetch}>Tablet</button>
        <button onClick={handleFetch}>smartphone</button>
        <button onClick={handleFetch}>notebook</button>
      </div>

      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Product {...dados} />}
    </div>
  );
};

export default App;