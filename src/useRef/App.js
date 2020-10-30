import React from "react";

const App = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [comments, setComments] = React.useState([]);
  const inputElement = React.useRef();

  function handleClick() {
    if (inputValue) setComments((comments) => [...comments, inputValue]);
    setInputValue("");
    inputElement.current.focus();
  }

  function clearComments() {
    if (comments) setComments([]);
    setInputValue("");
    inputElement.current.focus();
  }

  return (
    <div style={{ maxWidth: '200px', width: "100%" }}>
      <ul>
        {comments &&
          comments.map((comment) => <li key={comment}>{comment}</li>)}
      </ul>

      <div>
        <input
          type="text"
          ref={inputElement}
          value={inputValue}
          onChange={({ target }) => setInputValue(target.value)}
        />
      </div>

      <div style={{margin: "8px", display: "flex", justifyContent: "space-around"}}>
        <button type="button" onClick={handleClick}>
          Adicionar Comentário
        </button>
        <button type="button" onClick={clearComments}>
          Limpar Comentários
        </button>
      </div>
    </div>
  );
};

export default App;
