import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #7159c1;
  }
`;

export default Global;