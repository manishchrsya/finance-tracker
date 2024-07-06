import type { ITransactionsRowData } from "./types";
import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

import { Table } from "components";
import { TransactionsHeader } from "./constant";
import { ITransaction, TransactionsState } from "store/transactions/state";
import { DatePicker } from "components/date-range/date-range";

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

export const Transactions = () => {
  const transactions = useRecoilValue(TransactionsState);

  const renderRows = useMemo(() => {
    const rows: ITransactionsRowData[] = [];
    transactions.forEach((transaction: ITransaction, index: number) => {
      if (transaction) {
        let row = {} as ITransactionsRowData;
        TransactionsHeader.forEach(({ format, key }) => {
          if (format === "jsx" && key === "category") {
            return (row[key] = () => (
              <PillWrapper>{transaction[key]}</PillWrapper>
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
          {/* <DateRangePicker
            handleChangeRange={() => {}}
            handleSubmit={() => {}}
            range={}
            rangeColor={[""]}
          /> */}
          {/* <DateRange
            endDate={new Date()}
            focusedInput={null}
            onDateChange={() => {}}
            onFocusChange={() => {}}
            startDate={new Date()}
          /> */}
        </HeaderAction>
      </Header>
      <Table header={TransactionsHeader} rows={renderRows} />
    </Container>
  );
};
