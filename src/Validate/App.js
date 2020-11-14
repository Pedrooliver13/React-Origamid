import React from "react";
import Input from "./Form/Input";
import useForm from '../Hooks/useForm';

const App = () => {
  const cep = useForm('cep');

  function handleSubmit(event) {
    event.preventDefault();
    cep.validate() ? console.log("Enviar") : console.log("Não enviar");
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input type="text" id="cep" name="cep" placeholder="0000-0000" {...cep}/>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default App;
