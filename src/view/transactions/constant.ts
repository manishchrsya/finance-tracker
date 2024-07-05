import { ITableHeaderCell } from "components";

export const TransactionsHeader: ITableHeaderCell[] = [
  {
    label: "Transaction Title",
    key: "title",
    format: "string",
    width: "10%",
  },
  {
    label: "Date",
    key: "date",
    format: "date",
    width: "10%",
  },
  {
    label: "Category",
    key: "transactionType",
    format: "jsx",
    width: "10%",
  },
  {
    label: "Amount",
    key: "amount",
    format: "jsx",
    width: "10%",
  },
];
