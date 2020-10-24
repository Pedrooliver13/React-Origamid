import React from "react";

// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)
const produtos = [
  { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
  { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
];

const Produtos = () => {
  return (
    <div>
      <h1 style={{ color: "#00e1ff" }}>Produtos</h1>

      {produtos.map(({ nome, propriedades }, index) => (
        <div key={index} style={{ border: "1px solid #000", margin: '8px auto', padding: '10px', fontWeight: 'bold' }}>
          <p>{nome}</p>
          <ul>
            {propriedades.map((item) => <li>{item}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Produtos;
