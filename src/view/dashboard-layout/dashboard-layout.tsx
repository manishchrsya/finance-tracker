import styled from "styled-components";
import {
  CategoryBreakdown,
  Navbar,
  Sidebar,
  Summary,
  Transactions,
} from "view";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 1440px;
  display: flex;
  align-items: center;
  gap: 20px;
  margin: auto;
`;

const SideBarWrapper = styled.div`
  width: 320px;
  height: 100%;
  background-color: #1d1d41;

  @media (max-width: 780px) {
    display: none;
  }
`;

const BodyWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #141332;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const BodyContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 20px;

  @media (max-width: 780px) {
    padding: 0 20px 20px;
  }
`;

const BodyGrid = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;

  @media (max-width: 780px) {
    flex-direction: column;
  }
`;

export const Dashboard = () => {
  return (
    <Container>
      <SideBarWrapper>
        <Sidebar />
      </SideBarWrapper>
      <BodyWrapper>
        <Navbar />
        <BodyContainer>
          <BodyGrid>
            <Summary />
            <CategoryBreakdown />
          </BodyGrid>
          <BodyGrid>
            <Transactions />
          </BodyGrid>
        </BodyContainer>
      </BodyWrapper>
    </Container>
  );
};
