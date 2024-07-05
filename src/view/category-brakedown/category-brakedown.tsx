import styled from "styled-components";

const Container = styled.div`
  width: 460px;
  height: 460px;
  min-height: 460px;
  min-width: 460px;
  border-radius: 12px;
  background-color: #1d1d41;

  @media (max-width: 780px) {
    width: 100%;
    height: 100%;
    min-width: unset;
    min-height: unset;
  }
`;

export const CategoryBreakdown = () => {
  return <Container>categroy</Container>;
};
