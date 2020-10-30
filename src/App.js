import React from "react";
import Product from "./Product";
import { GlobalStorage } from "./GlobalContext";

const App = () => {
  return (
    <GlobalStorage>
      <Product />
    </GlobalStorage>
  );
};

export default App;
