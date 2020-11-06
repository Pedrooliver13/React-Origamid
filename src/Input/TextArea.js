import React from "react";

const TextArea = () => {
  const [message, setMessage] = React.useState("");

  return (
    <>
      <textarea
        name="description"
        value={message}
        onChange={({ target }) => setMessage(target.value)}
      />
      {message}
    </>
  );
};

export default TextArea;
