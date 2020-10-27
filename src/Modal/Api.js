import React from "react";
import Modal from "./Modal/Modal";

const Api = () => {
  const [modal, setModal] = React.useState(false);

  return (
    <div>
      <Modal modal={modal} setModal={setModal} />
      <button onClick={() => setModal(!modal)}>
        {!modal ? "Abrir modal" : "Fechar Modal"}
      </button>
    </div>
  );
};

export default Api;
