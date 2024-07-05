import { Table } from "components";
import styled from "styled-components";
import { TransactionsHeader } from "./constant";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 596px);
  overflow: auto;
  border-radius: 12px;
  background-color: #1d1d41;
  color: #ffffff;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderAction = styled.div`
  background-color: gray;
  width: 200px;
  height: 40px;
`;
const Span = styled.div`
  font-size: 24px;
  font-weight: 600;
`;

export const Transactions = () => {
  return (
    <Container>
      <Header>
        <Span>Transactions</Span>
        <HeaderAction />
      </Header>
      <Table header={TransactionsHeader} rows={[]} />
    </Container>
  );
};
