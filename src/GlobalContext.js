import React from "react";

// Utilize o GlobalContext do exemplo anterior para puxar os dados da API abaixo:
// https://ranekapi.origamid.dev/json/api/produto/
// assim que o usuário acessar o app
// coloque os dados da API no contexto global, dando acesso aos dados da mesma
// defina uma função chamada limparDados que é responsável por zerar os dados de produto
// e exponha essa função no contexto global

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
