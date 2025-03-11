import type { ITransactionsRowData } from "./types";
import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

import { Table } from "components";
import { TransactionsHeader } from "./constant";
import { ITransaction } from "store";
import { DatePicker } from "components";
import { TransactionsSelector } from "store";
import { ISummaryType } from "view/summary/summary-card";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 496px);
  border-radius: 12px;
  background-color: #1d1d41;
  color: #ffffff;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 900px) {
    height: 100%;
    overflow: visible;
  }
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 450px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
`;

const HeaderAction = styled.div`
  position: relative;

  @media (max-width: 450px) {
    position: unset;
  }
`;
const Span = styled.div`
  font-size: 24px;
  font-weight: 600;
`;

const PillWrapper = styled.div<{ $type?: ISummaryType }>`
  display: flex;
  width: 80px;
  padding: 4px 8px;
  background: hsla(150, 98%, 35%, 0.15);
  color: #02b15a;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  font-size: 12px;
  text-transform: capitalize;
  ${({ $type }) =>
    $type === "expense" &&
    `
       color: #f55d5d;
       background: hsl(353.10638297872345, 100%, 46.07843137254902%, 0.15);
       
    `}
  @media (max-width: 450px) {
    padding: 4px;
    width: fit-content;
  }
`;

const TransactionIdWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4;
  max-width: 100px;
`;
export const Transactions = () => {
  const { filteredTransactions: transactions } =
    useRecoilValue(TransactionsSelector);

  const renderRows = useMemo(() => {
    const rows: ITransactionsRowData[] = [];
    transactions.forEach((transaction: ITransaction) => {
      if (transaction) {
        let row = {} as ITransactionsRowData;
        TransactionsHeader.forEach(({ format, key }) => {
          if (format === "jsx" && key === "category") {
            return (row[key] = () => (
              <PillWrapper $type={transaction[key]}>
                {transaction[key]}
              </PillWrapper>
            ));
          }
          if (format === "jsx" && key === "id") {
            return (row[key] = () => (
              <TransactionIdWrapper>{transaction[key]}</TransactionIdWrapper>
            ));
          }
          return (row = {
            ...row,
            [key]: (transaction as any)[key],
          });
        });
        rows.push(row);
      }
    });
    return rows;
  }, [transactions]);

  return (
    <Container>
      <Header>
        <Span>Transactions</Span>
        <HeaderAction>
          <DatePicker />
        </HeaderAction>
      </Header>
      <Table header={TransactionsHeader} rows={renderRows} />
    </Container>
  );
};
