import React from 'react';

import TypeWriter from './TypeWriter';
import Slide from './Slide/App';
import GlobalStyle from './Theme/GlobalStyled';

const App = () => {
  const divElement = React.useRef();

  return (
    <>
      <GlobalStyle />
        <TypeWriter useRef={divElement}>Olá meu nome é Pedro</TypeWriter>
      <Slide />
    </>
  );
};

export default App;
