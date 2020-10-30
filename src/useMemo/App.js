import React from "react";

const App = () => {
  const [contar, setContar] = React.useState(0);
  
  const valor = React.useMemo(() => {
    const localStorageItem = localStorage.getItem("produto");
    return localStorageItem;
  }, []);

  return (
    <button onClick={() => setContar(contar + 1)}>
      Adicionar Conta {valor}
    </button>
  );
};

export default App;
