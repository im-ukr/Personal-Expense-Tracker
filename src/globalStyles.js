// FileName: src/globalStyles.js

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    background-image: url('content/img.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  button {
    background-color: #4BAAC8;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export default GlobalStyles;
