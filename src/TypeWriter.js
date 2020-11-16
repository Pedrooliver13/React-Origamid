import React from 'react';

import styled, { keyframes } from 'styled-components';
import Container from './Theme/Container';

const TitleWrapper = styled.section`
  ${Container};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const animaOpacity = keyframes`
  to {
    opacity: 1
  }
`;

const Title = styled.h1`
  font-family: 'Courier New', Courier, monospace;
  font-size: 2rem;
  color: #fff;

  &::after {
    content: '|';
    opacity: 0;
    animation: ${animaOpacity} 0.6s infinite linear;
  }
`;

const TypeWriter = ({ useRef, children }) => {
  React.useEffect(() => {
    const textArray = useRef.current.innerHTML.split('');
    useRef.current.innerHTML = '';

    textArray.forEach((element, index) => {
      const setTime = setTimeout(() => {
        useRef.current.innerHTML += element;
        if (index === textArray.length - 1) clearTimeout(setTime);
      }, 70 * index);
    });
  });

  return (
    <TitleWrapper>
      <Title ref={useRef}>{children}</Title>
    </TitleWrapper>
  );
};

export default TypeWriter;
