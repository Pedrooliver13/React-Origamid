import React from "react";

const Button = ({ children, color, backgroundColor, ...props }) => {
  return <button style={{color, backgroundColor}} type="submit" {...props}>{children}</button>;
};

export default Button;
