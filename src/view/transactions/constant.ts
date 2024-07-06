import { ITableHeaderCell } from "components";

export const TransactionsHeader: ITableHeaderCell[] = [
  {
    label: "Description",
    key: "description",
    format: "string",
  },
  {
    label: "Transaction Id",
    key: "id",
    format: "string",
  },
  {
    label: "Date",
    key: "date",
    format: "date",
  },
  {
    label: "Category",
    key: "category",
    format: "jsx",
  },
  {
    label: "Amount",
    key: "amount",
    format: "price",
  },
];
