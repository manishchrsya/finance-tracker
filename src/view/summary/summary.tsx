import styled from "styled-components";
import { SummaryCard } from "./summary-card";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 460px;
  justify-content: space-between;
  gap: 24px;
`;

export const Summary = () => {
  return (
    <Container>
      <SummaryCard />
      <SummaryCard />
      <SummaryCard />
    </Container>
  );
};
