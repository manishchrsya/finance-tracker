import { ITableHeaderCell } from "components";

export const TransactionsHeader: ITableHeaderCell[] = [
  {
    label: "Transaction Title",
    key: "title",
    format: "string",
  },
  {
    label: "Transaction Id",
    key: "transactionId",
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
