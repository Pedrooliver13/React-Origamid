import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [product, setProduct] = React.useState(null);
  
  React.useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto/")
    .then(results => results.json())
    .then(json => setProduct(json));
  }, []);

  function clearProducts() {
    setProduct([]);
  }
  
  if(product)
    return (
      <GlobalContext.Provider value={{ product, setProduct, clearProducts }}>
        {children}
      </GlobalContext.Provider>
    );
  else return null;
};
