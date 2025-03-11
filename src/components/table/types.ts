export type ITableCellFormat = "string" | "number" | "jsx" | "date" | "price";

export interface ITableHeaderCell {
  label: string;
  key: string;
  format: ITableCellFormat;
}

export type ITableRow = any;

export interface ITable {
  header: ITableHeaderCell[];
  rows: ITableRow[];
}
