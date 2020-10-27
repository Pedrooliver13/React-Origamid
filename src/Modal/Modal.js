import React from "react";

const Modal = ({ modal, setModal }) => {
  if (modal)
    return (
      <div
        style={{
          padding: "20px",
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#7159C1",
        }}
      >
        <p>Modal está aberto</p>
        <button onClick={() => setModal(!modal)}>Fechar Modal</button>
      </div>
    );
  else return null;
};

export default Modal;
