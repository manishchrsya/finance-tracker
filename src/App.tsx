import React from "react";
import { Dashboard } from "./view";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  @media (max-width: 780px) {
    min-height: 100vh;
    height: 100%;
    overflow: auto;
  }
`;

function App() {
  return (
    <Container>
      <Dashboard />
    </Container>
  );
}

export default App;
