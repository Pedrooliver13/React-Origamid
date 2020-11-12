import React from 'react';
import Radio from './Form/Radio';

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

const Questions = ({ perguntas, setValue }) => {
  const { id, pergunta, options } = perguntas;

  return (
    <>
      {perguntas && (
        <fieldset
          key={id}
          style={{ margin: '1rem auto', padding: "1.5rem", border: '1px solid #999' }}
        >
          <legend style={{fontWeight: "bold"}}>{pergunta}</legend>
          <Radio style={{fontSize: ".8rem", }} name={id} options={options} setValue={setValue} />
        </fieldset>
      )}
    </>
  );
};

const App = () => {
  const [results, setResults] = React.useState(0);
  const [slide, setSlide] = React.useState(0);
  const [radio, setRadio] = React.useState('');

  const respostasCertas = perguntas.reduce((acc, { resposta }) => {
    return [...acc, resposta];
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    if (respostasCertas.includes(radio)) setResults(results + 1);

    if (slide <= perguntas.length - 1 && radio.length) {
      setRadio('');
      setSlide(slide + 1);
    }
  }

  function restartExame() {
    setRadio('');
    setSlide(0);
    setResults(0);
  }

  return (
    <form onSubmit={handleSubmit}>
      {slide <= perguntas.length - 1 ? (
        <Questions
          perguntas={perguntas[slide]}
          setValue={setRadio}
          active={slide}
        />
      ) : (
        <p>
          Acertou {results} de {perguntas.length}
        </p>
      )}

      {slide > perguntas.length - 1 ? (
        <button onClick={restartExame}>Reiniciar</button>
      ) : (
        <button type="submit">Proxima</button>
      )}
    </form>
  );
};

export default App;
