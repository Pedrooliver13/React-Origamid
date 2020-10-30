import React from "react";

const App = () => {
  const [carrinho, setCarrinho] = React.useState(0);
  const [notification, setNotification] = React.useState(null);
  const targetReference = React.useRef();

  function handleClick() {
    setNotification('Produto Adicionado');
    setCarrinho(carrinho + 1);
    
    clearTimeout(targetReference.current);
    targetReference.current = setTimeout(() => setNotification(null), 1000);
  }

  function clearCarrinho() { 
    setNotification("Carrinho foi limpado");
    setCarrinho(0);

    clearTimeout(targetReference.current);
    targetReference.current = setTimeout(() => setNotification(null), 1000);
  }
  
  return (
    <div>
      {notification && <p>{notification}</p>}
      <button onClick={handleClick}>Comprar {carrinho}</button>
      <button onClick={clearCarrinho}>Limpar</button>
    </div>
  );
};

export default App;
