import React from "react";
import Home from './Exercicio/Home';
import Produtos from './Exercicio/Produtos';

const App = () => {
  const { pathname } = window.location;
  let Components;

  if (pathname === '/') {
    Components = Home;
  } else {
    Components = Produtos;
  }

  return (
    <div>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/produtos">Produtos</a></li>
      </ul>

      <Components />
    </div>
  );
};

export default App;
