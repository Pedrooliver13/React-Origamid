import React from 'react';
import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  to {
    opacity: 1;
    background: red;  
    transform: initial;   
  }
`;

const ContainerModal = styled.div`
  background: #7159c1;
  opacity: 0;
  transform: translateY(-20px);

  animation: ${animation} 0.6s ease forwards;
`;

const Modal = ({ active, setActive }) => {
  return (
    <ContainerModal>
      <h1>hello WORLD</h1>
      <button onClick={() => setActive(!active)}>Fechar</button>
    </ContainerModal>
  );
};

function App() {
  const [active, setActive] = React.useState(false);

  return (
    <div>
      <button onClick={() => setActive(!active)}>Abrir Modal</button>
      {active && <Modal active={active} setActive={setActive} />}
    </div>
  );
}

export default App;
