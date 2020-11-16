import React from 'react';
// styledComponents;
import styled from 'styled-components';
import Container from '../Theme/Container';

const SlideWrapper = styled.section`
  ${Container}
  width: 80%;
  overflow: hidden;
`;

const Slide = styled.ul`
  display: flex;
  list-style: none;
  margin: 8px;
  transition: transform 0.5s ease;

  li {
    flex-shrink: 0;
    width: 80%;
    margin: 0 10%;
    border-radius: 4px;
    background-color: #eee;
    text-align: center;
    padding: 10rem 0;
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  margin: 8px auto;
`;
const Button = styled.button`
  display: flex;
  background: ${({ background }) => background};
  color: ${({ color }) => color};

  cursor: pointer;
  pointer-events: all;
  padding: 8px 16px;
`;

const App = () => {
  const slideItem = [1, 2, 3, 4];
  const [position, setPosition] = React.useState(0);
  const [active, setActive] = React.useState(0);
  const contentRef = React.useRef();

  React.useEffect(() => {
    const { width } = contentRef.current.getBoundingClientRect();
    setPosition(-(width * active));
  }, [active]);

  function nextSlide() {
    if (active < slideItem.length - 1) setActive(active + 1);
  }

  function prevSlide() {
    if (active > 0) setActive(active - 1);
  }

  return (
    <SlideWrapper>
      <Slide
        ref={contentRef}
        style={{ transform: `translateX(${position}px)` }}
      >
        {slideItem.map((item) => (
          <li key={item}>Slide {item}</li>
        ))}
      </Slide>

      <ButtonWrapper>
        <Button background="red" color="white" onClick={prevSlide}>
          Prev
        </Button>
        <Button background="red" color="white" onClick={nextSlide}>
          Next
        </Button>
      </ButtonWrapper>
    </SlideWrapper>
  );
};

export default App;
