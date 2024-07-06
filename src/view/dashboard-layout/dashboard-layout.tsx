import { LOADING_STATUS } from "constant";
import { useTransaction } from "hooks";
import { Fragment, useEffect, useMemo } from "react";
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

const LoaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Dashboard = () => {
  const { getTransactions, loadingStatus } = useTransaction();

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderLayout = useMemo(() => {
    if (loadingStatus === LOADING_STATUS.LOADING) {
      return <LoaderWrapper>Loading...</LoaderWrapper>;
    }
    return (
      <BodyContainer>
        <BodyGrid>
          <Summary />
          <CategoryBreakdown />
        </BodyGrid>
        <BodyGrid>
          <Transactions />
        </BodyGrid>
      </BodyContainer>
    );
  }, [loadingStatus]);

  return (
    <Container>
      <SideBarWrapper>
        <Sidebar />
      </SideBarWrapper>
      <BodyWrapper>
        <Navbar />
        <Fragment>{renderLayout}</Fragment>
      </BodyWrapper>
    </Container>
  );
};
