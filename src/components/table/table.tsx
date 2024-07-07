import { ImageComponent } from "components/Image";
import type { ITable, ITableCellFormat } from "./types";

import { FC, useMemo } from "react";
import styled from "styled-components";
import { formatDate, formatPrice } from "utils";
import emptyTable from "assets/illustrations/no-transaction.svg";

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
  height: calc(100vh - 730px);
  overflow: auto;

  @media (max-width: 900px) {
    height: 100%;
    overflow: visible;
  }
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
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
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
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  &:first-child {
    justify-content: flex-start;
  }
  &:last-child {
    justify-content: flex-end;
  }
`;

const TableDateCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 450px) {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: unset;
  }
`;

const IllustrationWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
`;

export const Table: FC<ITable> = ({ header, rows = [] }) => {
  const renderColumn = useMemo(
    () =>
      header.map(({ label, key }) => (
        <TableHeading key={key}>
          <TableDateCell>{label}</TableDateCell>
        </TableHeading>
      )),
    [header]
  );

  const renderRows = useMemo(() => {
    if (!rows.length) {
      return (
        <IllustrationWrapper>
          <ImageComponent src={emptyTable} width={150} height={150} />
        </IllustrationWrapper>
      );
    }
    return rows.map((row: any) => (
      <TableRow key={row.id}>
        {header.map(({ key, format }) => {
          let value = row[key];
          if (value) {
            switch (format as ITableCellFormat) {
              case "number":
                break;
              case "string":
                break;
              case "jsx":
                value = value();
                break;
              case "date":
                value = formatDate(value, "MMM-dd-yyyy");
                break;
              case "price":
                value = formatPrice(Number(value));
                break;
              default:
                break;
            }
          }
          return (
            <TableData key={`${row.id}-${key}`}>
              <TableDateCell>{value}</TableDateCell>
            </TableData>
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
