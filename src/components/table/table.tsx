import type { ITable, ITableCellFormat } from "./types";

import { FC, useMemo } from "react";
import styled from "styled-components";
import { formatPrice } from "utils";

const TableWrapper = styled.table`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TableHeader = styled.thead`
  width: 100%;
  border-bottom: 1px solid #2f303d;
  padding-bottom: 12px;
`;

const TableBody = styled.tbody`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 100%;
  overflow: auto;
`;

const TableRow = styled.tr`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0px;
`;

const TableHeading = styled.th`
  font-size: 14px;
  font-weight: 400;
  color: #aeabd8;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  &:first-child {
    justify-content: flex-start;
  }
  &:last-child {
    justify-content: flex-end;
  }
`;

const TableData = styled.td`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  &:first-child {
    justify-content: flex-start;
  }
  &:last-child {
    justify-content: flex-end;
  }
`;

export const Table: FC<ITable> = ({ header, rows = [] }) => {
  const renderColumn = useMemo(
    () =>
      header.map(({ label, key }) => (
        <TableHeading key={key}>{label}</TableHeading>
      )),
    [header]
  );

  const renderRows = useMemo(() => {
    const renderingRows = rows;
    return renderingRows.map((rowData: any, index: number) => (
      <TableRow key={`renderRows__${index}`}>
        {header.map(({ key, format }: any, idx: number) => {
          let value = rowData[key as keyof any];
          if (value) {
            switch (format as ITableCellFormat) {
              case "number":
                break;
              case "string":
                break;
              case "jsx":
                value = value();
                break;
              case "price":
                value = formatPrice(value);
                break;
              default:
                break;
            }
          }
          return (
            <TableData key={`renderRows__${index}_${idx}`}>{value}</TableData>
          );
        })}
      </TableRow>
    ));
  }, [header, rows]);

  return (
    <TableWrapper>
      <TableHeader>
        <TableRow>{renderColumn}</TableRow>
      </TableHeader>
      <TableBody>{renderRows}</TableBody>
    </TableWrapper>
  );
};
