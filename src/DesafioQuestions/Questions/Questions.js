import React from 'react';
import Radio from '../../Form/Radio';

const Questions = ({ perguntas, setValue }) => {
  const { id, pergunta, options } = perguntas;

  return (
    <>
      {perguntas && (
        <fieldset
          key={id}
          style={{
            margin: '1rem auto',
            padding: '2rem',
            border: '1px solid #eee',
          }}
        >
          <legend style={{ fontWeight: 'bold' }}>{pergunta}</legend>
          <Radio
            name={id}
            options={options}
            setValue={setValue}
            style={{fontSize: "1.5rem", fontFamily: "monospace"}}
          />
        </fieldset>
      )}
    </>
  );
};

export default Questions