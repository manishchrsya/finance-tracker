import { Table } from "components";
import styled from "styled-components";
import { TransactionsHeader } from "./constant";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 596px);
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

const PillWrapper = styled.div`
  display: flex;
  width: 80px;
  padding: 4px 8px;
  background: hsla(150, 98%, 35%, 0.15);
  color: #02b15a;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  font-size: 12px;
`;

const data: any = [
  {
    title: "Momo cabin",
    date: "12/07/2024",
    transactionId: "asd287tegdugqhdiuqye872y3",
    category: () => <PillWrapper>Income</PillWrapper>,
    amount: 200,
  },
  {
    title: "Momo cabin",
    date: "12/07/2024",
    transactionId: "asd287tegdugqhdiuqye872y3",
    category: () => <PillWrapper>Expense</PillWrapper>,
    amount: 200,
  },
  {
    title: "Momo cabin",
    date: "12/07/2024",
    transactionId: "asd287tegdugqhdiuqye872y3",
    category: () => <PillWrapper>Income</PillWrapper>,
    amount: 200,
  },
  {
    title: "Momo cabin",
    date: "12/07/2024",
    transactionId: "asd287tegdugqhdiuqye872y3",
    category: () => <PillWrapper>Income</PillWrapper>,
    amount: 200,
  },

  {
    title: "Momo cabin",
    date: "12/07/2024",
    transactionId: "asd287tegdugqhdiuqye872y3",
    category: () => <PillWrapper>Income</PillWrapper>,
    amount: 200,
  },
  {
    title: "Momo cabin",
    date: "12/07/2024",
    transactionId: "asd287tegdugqhdiuqye872y3",
    category: () => <PillWrapper>Income</PillWrapper>,
    amount: 200,
  },
  {
    title: "Momo cabin",
    date: "12/07/2024",
    transactionId: "asd287tegdugqhdiuqye872y3",
    category: () => <PillWrapper>Income</PillWrapper>,
    amount: 200,
  },
  {
    title: "Momo cabin",
    date: "12/07/2024",
    transactionId: "asd287tegdugqhdiuqye872y3",
    category: () => <PillWrapper>Income</PillWrapper>,
    amount: 200,
  },
];

export const Transactions = () => {
  return (
    <Container>
      <Header>
        <Span>Transactions</Span>
        <HeaderAction />
      </Header>
      <Table header={TransactionsHeader} rows={data} />
    </Container>
  );
};
