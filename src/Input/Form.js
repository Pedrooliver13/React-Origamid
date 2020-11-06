import React from "react";

const Form = () => {
  const [input, setInput] = React.useState([]);
  const [dados, setDados] = React.useState([]);
  const inputElement = React.useRef();

  function handleSubmit(event) {
    event.preventDefault();

    setDados(dados => [...dados, input]);
    setInput('');
    inputElement.current.focus();
  }

  function clearComments() {
    setDados('');
    inputElement.current.focus();
  }

  return (
    <>
      <ul>{dados && dados.map((item, index) => <li key={index}>{item}</li>)}</ul>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={inputElement}
          value={input}
          onChange={({ target }) => setInput(target.value)}
        />

        <button type="submit">Enviar</button>
        <button type="button" onClick={clearComments}>Apagar tudo</button>
      </form>
    </>
  );
};

export default Form;
