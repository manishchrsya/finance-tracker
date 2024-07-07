import styled from "styled-components";
import { SummaryCard } from "./summary-card";
import { useRecoilValue } from "recoil";
import { TransactionsSelector } from "store/transactions/selector";
import savings from "assets/illustrations/savings.svg";
import expense from "assets/illustrations/expense.svg";
import income from "assets/illustrations/income.svg";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 360px;
  justify-content: space-between;
  gap: 20px;
`;

export const Summary = () => {
  const TransactionSummary = useRecoilValue(TransactionsSelector);

  return (
    <Container>
      <SummaryCard
        label="Total Income"
        amount={TransactionSummary.income}
        illustration={income}
        type="income"
      />
      <SummaryCard
        label="Total Expense"
        amount={TransactionSummary.expense}
        illustration={expense}
        type="expense"
      />
      <SummaryCard
        label="Total Savings"
        amount={TransactionSummary.savings}
        illustration={savings}
        type="savings"
      />
    </Container>
  );
};
