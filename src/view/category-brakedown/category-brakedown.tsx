import { DonutChart } from "components";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { TransactionsSelector } from "store";

const Container = styled.div`
  width: 460px;
  height: 460px;
  min-height: 460px;
  min-width: 460px;
  border-radius: 12px;
  background-color: #1d1d41;
  padding: 20px;

  @media (max-width: 780px) {
    width: 100%;
    height: 100%;
    min-width: unset;
    min-height: unset;
  }
`;

export const CategoryBreakdown = () => {
  const { expense, income, savings } = useRecoilValue(TransactionsSelector);
  const data = {
    labels: ["Income", "Expense", "Savings"],
    datasets: [
      {
        data: [income, expense, savings],
        backgroundColor: ["#02b15a", "#f55d5d", "#faf38e"],
        hoverOffset: 2,
      },
    ],
  };

  return (
    <Container>
      <DonutChart data={data} title="Category Breakdown" />
    </Container>
  );
};
