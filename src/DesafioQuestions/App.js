import React from 'react';
import Questions from './Questions/Questions';
import styled from 'styled-components';

const Button = styled.button`
  color: ${(props) => props.cor};
  background-color: ${({ background }) => background};
`;

const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
];

const App = () => {
  const [results, setResults] = React.useState(0); // total right
  const [slide, setSlide] = React.useState(0); // position
  const [radio, setRadio] = React.useState(''); // response now

  const respostasCertas = perguntas.reduce((acc, { resposta }) => {
    return [...acc, resposta];
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    if (respostasCertas.includes(radio)) {
      setResults(results + 1);
    }

    if (slide <= perguntas.length - 1 && radio.length) {
      setRadio('');
      setSlide(slide + 1);
    }

    return;
  }

  function handleClick() {
    setRadio('');
    setSlide(0);
    setResults(0);
  }

  return (
    <form onSubmit={handleSubmit}>
      {slide <= perguntas.length - 1 ? (
        <>
          <Questions perguntas={perguntas[slide]} setValue={setRadio} />
          <Button cor="white" background="#7159c1" type="submit">
            Proxima
          </Button>
        </>
      ) : (
        <>
          <p>
            Acertou {results} de {perguntas.length}
          </p>
          <button onClick={handleClick}>Reiniciar</button>
        </>
      )}
    </form>
  );
};

export default App;
