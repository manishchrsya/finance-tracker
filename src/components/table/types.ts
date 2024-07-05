export type ITableCellFormat = "string" | "number" | "jsx" | "date";

export interface ITableHeaderCell {
  label: string;
  key: string;
  format: ITableCellFormat;
  width: string;
}

export interface ITableRow {}

export interface ITable {
  header: ITableHeaderCell[];
  rows: ITableRow[];
}
