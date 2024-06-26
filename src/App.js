// FileName: App.js

import React from 'react';
import styled from "styled-components";
import Tracker from "./components/Tracker";
import GlobalStyles from "./globalStyles";

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
`;

const App = () => {
  return (
    <Main>
      <GlobalStyles />
      <Tracker />
    </Main>
  );
};

export default App;
