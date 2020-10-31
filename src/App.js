import React from "react";
import useLocalStorage from './CustomHooks/useLocalStorage';


const App = () => {
  const [product, setProduct] = useLocalStorage('product', '');  
  
  function handleClick({ target }) {
    setProduct(target.innerText);
  }
  
  return (
    <div>
      <h1>{product}</h1>
      <button onClick={handleClick}>Notebook</button>
      <button onClick={handleClick}>SmartPhone</button>
    </div>
  );
};

export default App;
