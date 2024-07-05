import styled from "styled-components";
import { AddTransactionFooter } from "./components/footer";
import { AddTransactionHeader } from "./components/header";
import { AddTransactionBody } from "./components/add-transaction-body";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const AddTransaction = () => {
  return (
    <Container>
      <AddTransactionHeader />
      <AddTransactionBody />
      <AddTransactionFooter />
    </Container>
  );
};
