import React from "react";

import Input from "./Form/Input";
import Select from "./Form/Select";
import Radio from "./Form/Radio";
import Checkbox from "./Form/Checkbox";

const App = () => {
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [select, setSelect] = React.useState("");
  const [eletronicos, setEletronicos] = React.useState("");
  const [frutas, setFrutas] = React.useState("");
  const [check, setCheck] = React.useState([]);

  const [inputValues, setInputValues] = React.useState(null);

  function handleClick() {
    setInputValues([name, password, select, eletronicos, frutas, check]);
  }

  return (
    <>
      <Input label="Nome" id="nome" value={name} setValue={setName} />
      <Input
        label="Senha"
        id="senha"
        type="password"
        value={password}
        setValue={setPassword}
      />
      <Select
        options={["Smartphone", "Notebook"]}
        value={select}
        setValue={setSelect}
      />
      <Radio
        options={["Smarthphone", "Notebook"]}
        value={eletronicos}
        setValue={setEletronicos}
      />
      <Radio
        options={["Maça", "Melancia"]}
        value={frutas}
        setValue={setFrutas}
      />
      <Checkbox options={["sim", "não"]} value={check} setValue={setCheck} />
      <button onClick={handleClick}>Enviar</button>

      {inputValues &&
        inputValues.map((item, index) => <p key={index}>{item}</p>)}
    </>
  );
};

export default App;
